var typerid = 0;

(function ($) {
    var methods = {
        init: function (args) {
            return this.each(function () {
                var defaults = {
                    quote: $(this).find('.quote').text(),
                    id: null,
                    supplement: false,
                    log: false,
                    crsf: '',
                    statUrl: '',
                    labels: {
                        restart: 'Restart',
                    }
                };

                var $this = $(this);
                var data = $this.data('typer');
                var typer = $(this);
                typer.options = $.extend(true, defaults, args);

                var index = 0;
                var _startTime = 0;
                var done = false;
                var entry = '';
                var resulthtml; // = initHtml();
                var statshtml;
                var morehtml;
                var errorstat;// = '<span class="details">(htt_errors_fixed fixed)</span>';
                var missed;
                var errors_fixed;
                var missed_str;
                var missed_words = [];
                var _cts;
                var keyTimes;
                var tab_len = 4;
                var keydata = [];
                var _extrakey = false;
                var _missingkey = false;
                var _scrollTop = 0;
                var _color = '#45a8cf';
                var _uid = typerid++;
                initVars();


                // If the plugin hasn't been initialized yet
                if (!data) {
                    $(this).data('typer', {quote: typer.options.quote});

                    var quotemarkup = '';
                    var lines = typer.options.quote.replace(/\n/g, '\n\b').split('\b');
                    for (var l = 0, i = 0; l < lines.length; l++) {
                        var leadingSpace = true;
                        for (var k = 0; k < lines[l].length; k++) {
                            var c = lines[l].charAt(k);
                            if (leadingSpace && c == ' ')
                                quotemarkup += '<span>' + c + '</span>';
                            else {
                                leadingSpace = false;
                                quotemarkup += '<span id=\"' + i++ + '\">' + c + '</span>';
                            }
                        }
                    }

                    $(this).find('.quote').remove();
                    $(this).append('<div class=\"quote\">' + quotemarkup + '</div>');
                    $(this).append('<form autocomplete="off"><input id=\"inputArea\"></input></form>');
                    var restartText = typer.options.labels.restart;
                    $(this).append('<div class="quote-links"><a class=\'startOver\' href=\"javascript:void(0)\">' + restartText + '</a></div>');
                    $(this).append('<div style=\"clear: both;\"></div>');

                    $(this).addClass('typeElement');
                    $(this).find('span#0').addClass('cursor');
                    _color = $('.lesson').css('color');
                    var inputArea = $(this).find('#inputArea');

                    inputArea.data('quote', typer.options.quote);
                    inputArea.data('fixed', 0);

                    $(this).focus(function (event) {
                        inputArea.focus();
                    });

                    $(this).click(function (event) {
                        if (!event.handled && !(event.originalEvent && event.originalEvent.defaultPrevented)) {
                            if (!done)
                                inputArea.focus();
                            event.handled = true;
                            // event.stopPropagation();
                        }
                        event.preventDefault();
                    });

                    $(this).find('.startOver').click(function (event) {
                        index = 0;
                        done = false;
                        entry = '';
                        typer.find('.result').remove();
                        $(typer).find('.show-exercise').remove();
                        $(typer).find('.more-stats').remove();
                        $(typer).find('span').removeClass('correct');
                        $(typer).find('span').removeClass('incorrect');
                        $(typer).find('span').removeClass('cursor');
                        $(typer).removeClass('done');
                        $(typer).find('.quote').removeClass('more')
                        inputArea.data('fixed', 0);
                        $(typer).find('.quote').scrollTop(0);
                        $(typer.nextAll('.supplement')[0]).remove();

                        initVars();

                        $(this).focus();

                    });

                    function getSpan(d) {
                        var i = (d || 0) + index
                        return $(typer).find('span#' + i);
                    }

                    function getTypedString(quote) {
                        var lines = quote.replace(/\n/g, '\n\b').split('\b');
                        var typed = "";
                        for (var l = 0; l < lines.length; l++) {
                            var leadingSpace = true;
                            for (var k = 0; k < lines[l].length; k++) {
                                var c = lines[l].charAt(k);
                                if (!(leadingSpace && c == ' ')) {
                                    leadingSpace = false;
                                    typed += c;
                                }
                            }
                        }
                        return typed;
                    }

                    function isFunctionKey(event) {
                        if (event.which < 112 || event.which > 123)
                            return false;
                        return true;
                    }


                    inputArea.bind('focusin', function (event) {
                        getSpan().addClass('cursor');
                    });

                    inputArea.bind('focusout', function (event) {
                        $(typer).find('span').removeClass('cursor');
                    });

                    inputArea.keydown(function (event) {
                        if (!done) {
                            if (!event) { // IE reports window.event instead of the argument
                                event = window.event;
                            }
                            if (event.which == '8') { //&& !browser.mozilla) {
                                doBackspace();
                                event.preventDefault();
                            } else if (event.which == '9') { // TAB
                                //doTab($(this).data('quote'));
                                event.preventDefault();
                            }
                        }
                        else {
                            if (!isFunctionKey(event) && event.which > 46) // prevent default for most chars, but
                            // allow most control and functionkeys
                                event.preventDefault();
                        }
                    });

                    inputArea.keypress(function (event) {
                        var $this = $(this);
                        var typed = getTypedString($this.data('quote'));

                        if (!done && index < typed.length) {
                            // console.log(event.key);

                            if (!(isFunctionKey(event))) // not a function key, i.e. f5
                            {
                                event.preventDefault();
                            }
                            // if (event.which == '13' || event.which == '9' || event.keyCode == 9) { // capture return and tab
                            //     event.preventDefault();
                            // }
                            if (index == 0) {
                                _startTime = new Date().getTime(); //event.timeStamp;
                                _cts = _startTime;
                            }
                            var span = getSpan();
                            span.removeClass('correct');
                            span.removeClass('incorrect');


                            var c = (event.key == 'Enter') ? '\n' : String.fromCharCode(event.which);
                            entry += c;
                            var qc = typed.charAt(index);
                            var ts = new Date().getTime();
                            var correct = false;
                            var error = "";
                            var swapped = false;

                            if (c == qc) {
                                correct = true;
                                span.addClass('correct');
                                _extrakey = false;
                                _missingkey = false;
                            } else {
                                if (index > 0 && c == typed.charAt(index - 1)) { // behind cursor, inserted extra key
                                    if (_extrakey) { // already in extra key mode
                                        _extrakey = false;
                                        if (index >= 3 && entry[entry.length - 3] != typed.charAt(index - 2)) {
                                            var sp = getSpan(-1);
                                            sp.addClass('correct');
                                            sp.removeClass('incorrect');
                                            sp.removeClass('wasIncorrect');
                                            getSpan(-2).addClass('extra-key');
                                            logError(-2, "x");
                                        }// initial key entered was incorrect
                                        else {
                                            //console.log('bar');
                                            span.prev('span').addClass('extra-key');
                                        }
                                        logError(-1, "x");

                                        index--; // second letter off by one, offset the index
                                        correct = true;
                                        qc = c; // edit expected correct character
                                        span.addClass('correct');

                                    } else if (_missingkey) {
                                        getSpan(-1).addClass('swapped-keys'); // mark previous letter with swap tag
                                        logError(-1, "s");
                                        error = "s2"
                                        _missingkey = false;
                                        swapped = true;
                                    } else {
                                        //span.addClass('extra-key'); // mark the first letter which is off by one
                                        _extrakey = true;
                                    }
                                } else {
                                    _extrakey = false; // index not off by -1, not in _extrakey mode
                                }
                                if (c == typed.charAt(index + 1)) { // ahead of cursor, missing key
                                    if (_missingkey) {
                                        _missingkey = false;
                                        var mkdelta = getSpan(-1).addClass('missed-key').data('timedelta');
                                        logError(-1, "m");
                                        index++; // second letter off by plus-one, advance the index
                                        removeCursor(span);
                                        span.addClass('correct'); // mark current span correct as it was typed previously
                                        span.data('timedelta', mkdelta); // reassign timedelta to correct key
                                        span = getSpan().addClass('correct'); // as well as next span as it has already been typed
                                        correct = true;

                                    } else if (!swapped) {
                                        _missingkey = true;
                                    }
                                } else {
                                    _missingkey = false; // index not off by +1, not in missingkey mode
                                }
                                if (!correct) {
                                    if (!_extrakey && !_missingkey && c.toUpperCase() == qc.toUpperCase()) {
                                        span.addClass('wrong-case');
                                        error = "k"
                                    }
                                    if (!error)
                                        error = "w";
                                    span.data('entry', c);
                                    span.addClass('incorrect');
                                    span.addClass('wasIncorrect'); // this class will stay
                                    if (missed[qc] != null)
                                        missed[qc]++;
                                    else
                                        missed[qc] = 1; // new key, set to 1
                                }
                            }

                            if (index > 0) {
                                span.data('timedelta', ts - _cts);
                            }

                            removeCursor(span);


                            // var retyped = keyData.length() + 1 > entry.length();
                            logkey(c, qc, ts - _cts, error);

                            _cts = ts; // update t0 for next keypress

                            if (index == typed.length - 1) {
                                var ts2 = new Date().getTime(); // event.timeStamp;
                                var time = (ts2 - _startTime) / 1000;
                                var kps = typed.length / time;
                                var wpm = kps * 12;
                                var unfixedErrors = 0;
                                var mk = Object.keys(missed);
                                var timedeltas = [];
                                var keycounts = {};


                                for (var i = 0; i < mk.length; i++) {
                                    missed_str += mk[i] + " ";
                                }
                                for (var i = 0; i < typed.length; i++) {
                                    //var ci = typed.charAt(i);
                                    var si = $(typer).find('span#' + i);
                                    var ci = si.text()[0];
                                    if (i > 0) {
                                        var delta = si.data('timedelta');
                                        //console.log(delta);
                                        timedeltas.push(si.data('timedelta'));
                                    }
                                    if (si.hasClass('incorrect')) {
                                        unfixedErrors++;
                                        logMissedWord(typed, i);
                                    }
                                    else {
                                        if (si.hasClass('wasIncorrect')) {
                                            errors_fixed++;
                                            logMissedWord(typed, i);
                                        }
                                        if (i > 0) {
                                            var td = si.data('timedelta');
                                            if (ci in keyTimes)
                                                keyTimes[ci].push(td);
                                            else
                                                keyTimes[ci] = [td];
                                        }
                                    }
                                    if (typed[i] in keycounts)
                                        keycounts[typed[i]] += 1;
                                    else
                                        keycounts[typed[i]] = 1;
                                }
                                var avgKeySpds = averageKeySpeeds(keyTimes);
                                var sortedKeys = SortKeysBySpeed(avgKeySpds);

                                var numKeys = Math.min(sortedKeys.length / 2, 4);
                                var fastestKeys = getFastestKeys(sortedKeys, numKeys);
                                var slowestKeys = getSlowestKeys(sortedKeys, numKeys);

                                var mostMissedKeys = getMostMissedKeys(SortKeysByErrors(missed), 4);
                                var mostMissedWords = getMostMissedWords(missed_words, 8);
                                // console.log(slowestKeys);

                                var accuracy = (typed.length - unfixedErrors) / typed.length * 100;
                                var aSpeed = (typed.length - unfixedErrors * 5) / time;
                                var awpm = aSpeed * 12;
                                awpm = (awpm > 0) ? awpm : 0;
                                var details = 'Done!  ' +
                                    '<div class=\"kps\">' + kps.toFixed(2) + ' keys per second. </div>' +
                                    '<div class=\"wpm\">' + wpm.toFixed(2) + ' raw words per minute. </div>' +
                                    '<div class=\"errors\">' + unfixedErrors + ' errors. </div>';

                                resulthtml = resulthtml.replace('htt_wpm', awpm.toFixed(1))
                                    .replace('htt_accuracy', accuracy.toFixed(1))
                                    .replace('htt_errors', unfixedErrors.toFixed(0))
                                    .replace('htt_kps', kps.toFixed(1))
                                    .replace(/-httid/g, '-' + _uid);
                                resulthtml = (errors_fixed > 0) ?
                                    resulthtml.replace('htt_errorstat',
                                        errorstat.replace('htt_errors_fixed', errors_fixed)) :
                                    resulthtml.replace('htt_errorstat', '');

                                morehtml = (mk.length > 0) ? morehtml.replace('htt_missed_keys', missed_str) :
                                    morehtml.replace('htt_missed_keys', '---')
                                        .replace('missed keys', 'no missed keys');

                                morehtml = morehtml
                                    .replace('htt_slowest', keyDictToString(slowestKeys))
                                    .replace('htt_fastest', keyDictToString(fastestKeys));


                                var quoteDiv = typer.find('.quote');
                                _scrollTop = $(window).scrollTop();
                                quoteDiv.append(resulthtml);
                                quoteDiv[0].scrollTop = 0;
                                quoteDiv[0].scrollLeft = 0;

                                quoteDiv.find('#result-' + _uid).append(morehtml);
                                // quoteDiv.find('.result').append(morehtml);
                                quoteDiv.addClass('more');

                                //quoteDiv.find('.result .typer').typer({quoteid: null});
                                var missed_vals = Object.keys(missed).map(function (d) {
                                    return missed[d];
                                })

                                var maxMiss = d3.max(missed_vals)
                                var maxScale = (maxMiss > 3) ? maxMiss : 3; // small miss counts will still be light
                                var missedColor = d3.scaleLinear().domain([0, maxScale])
                                    .range(["#ffffff", "#d2585e"]);
                                var step = 1 + Math.floor(maxMiss / 10);
                                var colors = d3.range(0, maxMiss + 1, step);
                                var missLegend = (maxMiss > 0) ? {
                                    mode: 'discrete',
                                    scale: missedColor,
                                    min: 0,
                                    max: maxMiss,
                                    width: colors.length
                                } : null;

                                var hasAltKey = false;

                                keyboard(typer.find(".keyboard.missed"), function (k) {
                                        var keys = k.char.split('');
                                        var count = 0;

                                        for (var i = 0; i < 1; i++) {
                                            var t = keys[i];
                                            if (t in missed) {
                                                count += missed[t];
                                            }
                                        }
                                        if (count > 0)
                                            return missedColor(count);
                                        return 'transparent';
                                    }, _color, function (k) {
                                        var keys = k.char.split('');
                                        if (keys.length == 2) {
                                            var altkey = keys[1];
                                            if (altkey in missed) {
                                                hasAltKey = true;
                                                return missedColor(missed[altkey]);
                                            }
                                        }
                                        return 'transparent';
                                    },
                                    missLegend);

                                var speedColor = d3.scaleLinear().domain([0, 1])
                                    .range(["#1d8f9b", "#dff0ff"]);

                                var speedLegend = {
                                    mode: 'continuous',
                                    scale: speedColor,
                                    min: 'slow',
                                    max: 'fast',
                                    width: 4,
                                    id: 1
                                };

                                if (sortedKeys.length > 0) { // must be at least one correct key
                                    var fast = sortedKeys[0];
                                    var slow = sortedKeys[sortedKeys.length - 1];
                                    var dt = slow.t - fast.t;


                                    // $(typer).find('.quote span').each(function (index) {
                                    //     var td = $(this).data('timedelta');
                                    //     if (td) {
                                    //         var g = ((td - fast.time)/ dt);
                                    //         $(this).addClass('speed');
                                    //         $(this).css('border-bottom-color', color(g));
                                    //     }
                                    // });

                                    keyboard(typer.find(".keyboard.speed"), function (k) {
                                            var keys = k.char.split('');
                                            if (keys.length > 0) {
                                                var t = keys[0];
                                                if (t in avgKeySpds && dt != 0) {
                                                    var s = avgKeySpds[t];
                                                    var g = ((s - fast.t) / dt);// * 200;
                                                    return speedColor(g);
                                                }
                                            }
                                            return 'transparent';
                                        }, _color, function (k) {
                                            var keys = k.char.split('');
                                            if (keys.length > 1) {
                                                var t = keys[1];
                                                if (t in avgKeySpds && dt != 0) {
                                                    hasAltKey = true;
                                                    var s = avgKeySpds[t];
                                                    var g = ((s - fast.t) / dt);// * 200;
                                                    return speedColor(g);
                                                }
                                            }
                                            return 'transparent';
                                        },
                                        speedLegend);
                                } else {
                                    typer.find(".keyboard.speed").parent().remove();
                                }

                                if (hasAltKey) {
                                    typer.find('.notes').append('<p style="text-align: right;"><span class="corner"></span> <span>upper case</span></p>')
                                    corner(typer.find('.notes .corner'), 18, 'transparent', '#1a8c93', '#45a8cf');
                                }

                                typer.addClass('done');
                                done = true;

                                if (typer.options.supplement) {

                                    var keys = [];
                                    var words = [];

                                    for (var i = 0; i < slowestKeys.length; i++) {
                                        keys.push(slowestKeys[i]['k']);
                                    }
                                    mostMissedKeys.forEach(function (kd) {
                                        keys.push(kd.key);
                                    });
                                    mostMissedWords.forEach(function (wd) {
                                        words.push(wd.word);
                                        if (wd.errorCnt > 1)
                                            words.push(wd.word); // extra
                                    });


                                    shuffle(keys);
                                    shuffle(words);
                                    var supp_html =
                                        '<div class="tab-pane supplement" id="exercise-' + _uid + '" role="tabpanel" aria-labelledby="exercise-tab">' +
                                        // '<h2>Supplemental Exercise</h2>' +
                                        '<p class="mt-2 mb-2">This optional exercise has been tailored to ' +
                                        'help you target your slow keys and mistakes.</p>' +
                                        '<div class="typer"><div class="quote">' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>';
                                    typer.find('#result-' + _uid).after(supp_html);
                                    typer.find('.supplement').find('.quote').text(supplemental(keys, words));
                                    typer.find('.supplement').find('.typer').typer({labels: { restart: "Restart Exercise" }});
                                    typer.find('a#exercise-tab[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                                        typer.find('.supplement').find('.typer').click();
                                    });
                                    $(typer).find('.result .notes').append(
                                        '<span>Improve problem keys with a ' +
                                        '<a href="javascript:void(0)">Supplemental Exercise</a></span>'
                                    );
                                    $(typer).find('.result .notes a').click(function (event) {
                                        typer.find('a#exercise-tab').click();
                                    });


                                } else {
                                    typer.find('#exercise-nav').remove();
                                }

                                if (!typer.options.log)
                                {
                                    typer.find('#stats-nav').remove();
                                }


                                errors = {
                                    unfixed: unfixedErrors,
                                    missingKeys: 0,
                                    extraKeys: 0,
                                    swappedKeys: 0,
                                    wrongKeys: 0,
                                    wrongCase: 0,
                                    keys: {},
                                };

                                histogram = {};

                                for (var i = 0; i < keydata.length; i++) {
                                    var k = keydata[i];

                                    if (k.er != 'b') {

                                        if (k.ck in histogram)
                                            histogram[k.ck]++;
                                        else
                                            histogram[k.ck] = 1;

                                        if (k.er != "") {
                                            if (k.ck in errors.keys)
                                                errors.keys[k.ck]++;
                                            else
                                                errors.keys[k.ck] = 1;
                                        }

                                        switch (keydata[i].er) {
                                            case "m":
                                                errors.missingKeys++;
                                                break;
                                            case "w":
                                                errors.wrongKeys++;
                                                break;
                                            case "x":
                                                errors.extraKeys++;
                                                break;
                                            case "s":
                                                errors.swappedKeys++;
                                                break;
                                            case "k":
                                                errors.wrongCase++;
                                                break;
                                        }
                                    }
                                }

                                var lowercase = (typer.options.quote.toLowerCase() == typer.options.quote);

                                var d = {
                                    time: time,
                                    typed: typed.split(''),
                                    quoteId: typer.options.quoteId,
                                    quote: typer.options.quote,
                                    // keydata: keydata,
                                    keyStats: {
                                        missed: missed,
                                        speed: avgKeySpds,
                                        counts: keycounts,
                                    },
                                    lowercase: lowercase,
                                    histogram: histogram,
                                    errors: errors,
                                };

                                if (typer.options.log && isValid(d)) {
                                    $.post(typer.options.statUrl, {
                                        result: JSON.stringify(d),
                                        csrfmiddlewaretoken: typer.options.csrf
                                    }, function (data, status) {
                                        showStatistics();
                                    });
                                }
                                $(window).scrollTop(_scrollTop); // done, reset scroll
                            }
                            index++;
                            var span = getSpan();
                            setCursor(span);

                        }
                    });

                    function isValid(result) {
                        if (result.time * 1000 / result.typed.length > 30) {
                            sk = Object.keys(result.keyStats.speed);
                            for (var i = 0; i < sk.length; i++)
                            {
                                if (result.keyStats.speed[sk[i]] < 0)
                                {
                                    return false;
                                }
                            }
                            return true;
                        }
                    }

                    function showStatistics() {
                        $.get(typer.options.statUrl, function (data) {

                            var _color = '#45a8cf';

                            var keyStats = JSON.parse(data); //JSON.parse('{{ original.get_key_stats_json | escapejs}}');
                            var keyStatsList = keyStats.logs;

                            if (keyStatsList.length > 0) { // at least one record

                                var avg_speeds = {};
                                var total_missed = {};
                                var avg_wpm = 0;
                                var avg_accuracy = 0;
                                var avg_errors = 0;
                                var avg_kps = 0;

                                var numStats = keyStatsList.length;


                                for (var i = 0; i < numStats; i++) {
                                    var stat = keyStatsList[i];
                                    avg_wpm += stat.wpm;
                                    avg_accuracy += stat.accuracy;
                                    avg_errors += stat.unfixed_errors;
                                    var speed = stat.key_stats.speed;
                                    var count = stat.key_stats.counts;
                                    var missed = stat.key_stats.missed;
                                    var speedKeys = Object.keys(speed);
                                    var missedKeys = Object.keys(missed);
                                    for (var j = 0; j < speedKeys.length; j++) {
                                        var key = speedKeys[j];
                                        var n = (count[key] || 0) - (missed[key] || 0);
                                        if (n > 0) {
                                            if (key in avg_speeds) {
                                                var s = avg_speeds[key];
                                                avg_speeds[key] = [(s[0] * s[1] + speed[key] * n) / (n + s[1]), n + s[1]];

                                            } else {
                                                avg_speeds[key] = [speed[key], n];
                                            }
                                        }
                                    }
                                    for (var j = 0; j < missedKeys.length; j++) {
                                        var key = missedKeys[j];

                                        if (key in total_missed) {
                                            total_missed[key] += missed[key];

                                        } else {
                                            total_missed[key] = missed[key];
                                        }
                                    }
                                }
                                avg_wpm = avg_wpm / numStats;
                                avg_accuracy = avg_accuracy / numStats;
                                avg_errors = avg_errors / numStats;

                                statshtml = statshtml.replace('htt_wpm', avg_wpm.toFixed(1))
                                    .replace('htt_accuracy', avg_accuracy.toFixed(1))
                                    .replace('htt_best_wpm', keyStats.best_wpm.speed.toFixed(1))
                                    .replace('htt_best_accuracy', keyStats.best_wpm.accuracy.toFixed(1))
                                    .replace('htt_date', keyStats.best_wpm.elapsed)
                                    .replace('htt_kps', avg_kps.toFixed(1))
                                    .replace(/-httid/g, '-' + _uid)
                                    .replace(/htt_count/g, numStats);

                                typer.find('#result-' + _uid).after(statshtml); //.keyboard()


                                function SortKeysBySpeed(avgKeyTimes) {
                                    var sorted = [];
                                    var keys = Object.keys(avgKeyTimes);
                                    for (var i = 0; i < keys.length; i++) {
                                        var akti = {
                                            k: keys[i],
                                            t: avgKeyTimes[keys[i]][0],
                                        };
                                        if (sorted.length == 0)
                                            sorted[0] = akti;
                                        else {
                                            for (var j = 0; j < sorted.length; j++) {
                                                if (sorted[j].t > akti.t) {
                                                    sorted.splice(j, 0, akti);
                                                    break;
                                                }
                                                else if (j == sorted.length - 1) { // last index and nothing greater
                                                    sorted.push(akti);
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                    return sorted;
                                }

                                var missed_vals = Object.keys(total_missed).map(function (d) {
                                    return total_missed[d];
                                })

                                var maxMiss = d3.max(missed_vals)
                                var maxScale = (maxMiss > 3) ? maxMiss : 3; // small miss counts will still be light
                                var missedColor = d3.scaleLinear().domain([0, maxScale])
                                    .range(["#ffffff", "#d2585e"]);
                                var step = 1 + Math.floor(maxMiss / 10);
                                var colors = d3.range(0, maxMiss + 1, step);
                                var missLegend = (maxMiss > 0) ? {
                                    mode: 'discrete',
                                    scale: missedColor,
                                    min: 0,
                                    max: maxMiss,
                                    width: colors.length
                                } : null;

                                var hasAltKey = false;

                                keyboard(typer.find("#stats-" + _uid + " .keyboard.total-missed"), function (k) {
                                        var keys = k.char.split('');
                                        var count = 0;

                                        for (var i = 0; i < 1; i++) {
                                            var t = keys[i];
                                            if (t in total_missed) {
                                                count += total_missed[t];
                                            }
                                        }
                                        if (count > 0)
                                            return missedColor(count);
                                        return 'transparent';
                                    }, _color, function (k) {
                                        var keys = k.char.split('');
                                        if (keys.length == 2) {
                                            var altkey = keys[1];
                                            if (altkey in total_missed) {
                                                hasAltKey = true;
                                                return missedColor(total_missed[altkey]);
                                            }
                                        }
                                        return 'transparent';
                                    },
                                    missLegend
                                );

                                var sortedSpeeds = SortKeysBySpeed(avg_speeds);

                                var speedColor = d3.scaleLinear().domain([0, 1])
                                    .range(["#1d8f9b", "#dff0ff"]);

                                var speedLegend = {
                                    mode: 'continuous',
                                    scale: speedColor,
                                    min: 'slow',
                                    max: 'fast',
                                    width: 4,
                                    id: 2,
                                };

                                var sortedKeys = sortedSpeeds;
                                if (sortedKeys.length > 0) { // must be at least one correct key
                                    var fast = sortedKeys[0];
                                    var slow = sortedKeys[sortedKeys.length - 1];
                                    var dt = slow.t - fast.t;

                                    keyboard(typer.find("#stats-" + _uid + " .keyboard.total-speed"), function (k) {
                                            var keys = k.char.split('');
                                            if (keys.length > 0) {
                                                var t = keys[0];
                                                if (t in avg_speeds && dt != 0) {
                                                    var s = avg_speeds[t][0];
                                                    var g = ((s - fast.t) / dt);// * 200;
                                                    return speedColor(g);
                                                }
                                            }
                                            return 'transparent';
                                        }, _color, function (k) {
                                            var keys = k.char.split('');
                                            if (keys.length > 1) {
                                                var t = keys[1];
                                                if (t in avg_speeds && dt != 0) {
                                                    hasAltKey = true;
                                                    var s = avg_speeds[t][0];
                                                    var g = ((s - fast.t) / dt);// * 200;
                                                    return speedColor(g);
                                                }
                                            }
                                            return 'transparent';
                                        }, speedLegend
                                    );
                                }
                            }
                        });
                    }

                    function logkey(typedKey, correctKey, timeDelay, error) {
                        keydata.push({
                            tk: typedKey,
                            ck: correctKey,
                            td: timeDelay,
                            er: error,
                        });
                    }

                    function logMissedWord(typed, index) {
                        var start = index, end = index;
                        var c = typed[index];

                        if (isAlpha(c) || isConjunction(typed, index)) {
                            for (var i = index; i < typed.length; i++) {
                                end = i;
                                if (!isAlpha(typed[i]) && !isConjunction(typed, i)) // ' for conjunctions... but single quotes?
                                    break;
                            }
                            for (var i = index; i >= 0; i--) {
                                if (!isAlpha(typed[i]) && !isConjunction(typed, i))
                                    break;
                                start = i;
                            }
                            var word = typed.slice(start, end);
                            // console.log(word + ': ' + start + ' - ' + end);
                            missed_words.push(word);
                        }
                    }

                    function isConjunction(typed, i) {
                        return (typed[i] == '\'' && i < typed.length - 1 && isAlpha(typed[i + 1]) &&
                            i > 0 && isAlpha(typed[i - 1]));
                    }

                    function isAlpha(character) {
                        var c = character.toUpperCase();
                        return (c >= 'A' && c <= 'Z');
                    }

                    function logError(entryOffset, error) {
                        keydata[entry.length - 1 + entryOffset].er = error;
                    }

                    function shuffle(a) {
                        var j, x, i;
                        for (i = a.length - 1; i > 0; i--) {
                            j = Math.floor(Math.random() * (i + 1));
                            x = a[i];
                            a[i] = a[j];
                            a[j] = x;
                        }
                        return a;
                    }

                    function doPearls(pearls) {
                        if (pearls > 0)
                            alert('new pearls: ' + pearls);
                    }

                    function doBackspace() {
                        entry = entry.substring(0, entry.length - 1);
                        var span = getSpan();

                        span.removeClass('correct');
                        span.removeClass('incorrect');
                        removeCursor(span);

                        if (index > 0)
                            index--;

                        var ts = new Date().getTime();
                        logkey(-1, '', ts - _cts, 'b');
                        _cts = ts;

                        span = getSpan();
                        setCursor(span);
                    }

                    function doTab(quote) {
                        var span = getSpan();
                        removeCursor(span);

                        for (var i = 0; i < tab_len && index < quote.length - 1; i++, index++, span = $(typer).find('span#' + index)) {

                            var c = ' ';
                            entry = entry + c;
                            var qc = quote.charAt(index);
                            if (c == qc) {
                                span.addClass('correct');
                            } else {
                                span.addClass('incorrect');
                                span.addClass('wasIncorrect'); // this class will stay
                                i++;
                                index++;
                                span = getSpan();
                                break;

                            }
                        }
                        setCursor(span);
                    }

                    function setCursor(span) {
                        if (span.length > 0) {
                            var ypos = span[0].offsetTop;
                            var xpos = span[0].offsetLeft;
                            var parent = span.parent('div')[0];
                            var h = parent.clientHeight;
                            var w = parent.clientWidth;
                            span.addClass('cursor');
                            if (span.html() == "\n")
                                span.html("⏎\n");
                            else if (xpos > w / 2) {
                                if (span.html())
                                // what if this is the last line in the quote?
                                    var newline = span.nextAll("span:contains('\n')")[0];
                                if (newline == null) // this is the last line
                                    newline = span.siblings().last()[0]; // set the "newline" to be the last character
                                // scroll horizontally if this line is wider than the containing div
                                if (newline.offsetLeft > parent.clientWidth)
                                    parent.scrollLeft = xpos - w / 2;
                            }
                            span.removeClass('correct');
                            span.removeClass('incorrect');
                            if (ypos > h / 2)
                                parent.scrollTop = ypos - h / 2;

                            if (xpos < parent.scrollLeft)
                                parent.scrollLeft = 0;

                        }
                    }

                    function removeCursor(span) {
                        span.removeClass('cursor');
                        if (!span.hasClass('incorrect') && span.html() == "⏎\n")
                            span.html('\n');
                    }

                    function averageKeySpeeds(keyTimes) {
                        var avgKeySpds = {};
                        var keys = Object.keys(keyTimes);
                        for (var i = 0; i < keys.length; i++) {
                            var sum = 0;
                            for (var j = 0; j < keyTimes[keys[i]].length; j++) {
                                sum += keyTimes[keys[i]][j];
                            }
                            var avg = Math.round(sum / keyTimes[keys[i]].length);
                            avgKeySpds[keys[i]] = avg;
                        }
                        return avgKeySpds;
                    }

                    function SortKeysBySpeed(avgKeyTimes) {
                        var sorted = [];
                        var keys = Object.keys(avgKeyTimes);
                        for (var i = 0; i < keys.length; i++) {
                            var akti = {
                                k: keys[i],
                                t: avgKeyTimes[keys[i]],
                            };
                            if (sorted.length == 0)
                                sorted[0] = akti;
                            else {
                                for (var j = 0; j < sorted.length; j++) {
                                    if (sorted[j].t > akti.t) {
                                        sorted.splice(j, 0, akti);
                                        break;
                                    }
                                    else if (j == sorted.length - 1) { // last index and nothing greater
                                        sorted.push(akti);
                                        break;
                                    }
                                }
                            }
                        }
                        return sorted;
                    }

                    function getFastestKeys(sortedKeys, number) {
                        return sortedKeys.slice(0, number);
                    }

                    function getSlowestKeys(sortedKeys, number) {
                        return sortedKeys.slice(sortedKeys.length - number, sortedKeys.length);
                    }

                    function getMostMissedKeys(sortedKeys, number) {
                        return sortedKeys.slice(0, Math.min(sortedKeys.length, number));
                    }

                    function getMostMissedWords(words, number) {
                        var d = {};
                        for (var i = 0; i < words.length; i++) {
                            var w = words[i];
                            if (w in d)
                                d[w] += 1;
                            else
                                d[w] = 1;
                        }
                        var sorted = [];
                        var mw = Object.keys(d);
                        for (var i = 0; i < mw.length; i++) {
                            var m = {
                                word: mw[i],
                                errorCnt: d[mw[i]],
                            };
                            if (sorted.length == 0)
                                sorted[0] = m;
                            else {
                                for (var j = 0; j < sorted.length; j++) {
                                    if (sorted[j].errorCnt < m.errorCnt) {
                                        sorted.splice(j, 0, m);
                                        break;
                                    }
                                    else if (j == sorted.length - 1) { // last index
                                        sorted.push(m);
                                        break;
                                    }
                                }
                            }
                        }
                        return sorted.slice(0, Math.min(sorted.length, number));
                    }

                    function SortKeysByErrors(missedKeys) {
                        var sorted = [];
                        var keys = Object.keys(missedKeys);
                        for (var i = 0; i < keys.length; i++) {
                            var m = {
                                key: keys[i],
                                errorCnt: missedKeys[keys[i]],
                            };
                            if (sorted.length == 0)
                                sorted[0] = m;
                            else {
                                for (var j = 0; j < sorted.length; j++) {
                                    if (sorted[j].errorCnt < m.errorCnt) {
                                        sorted.splice(j, 0, m);
                                        break;
                                    }
                                    else if (j == sorted.length - 1) { // last index
                                        sorted.push(m);
                                        break;
                                    }
                                }
                            }
                        }
                        return sorted;
                    }

                    function keyDictToString(sortedKeys) {
                        var s = "";
                        for (var i = 0; i < sortedKeys.length; i++)
                            s += sortedKeys[i].k + " ";
                        return s;
                    }

                    function supplemental(keys, words) { //1st key: error, 2nd key 1st combo
                        var s = "";
                        // console.log(keys);
                        // console.log(words);
                        for (var i = 0; i < keys.length; i++) {
                            var k = keys[i];
                            if (k.toLowerCase() in relatedKeys) {
                                s += rep(k, 3, '', ' ');
                                s += rep(k, 3, ' ', '');
                                s += rep(k + getRelKey(k), 2, ' ', '');
                                s += rep(getRelKey(k) + k, 2, ' ', '');
                            }
                        }
                        for (var i = 0; i < words.length; i++) {
                            s += words[i] + ' ';
                        }
                        s = s.trim();
                        // console.log(s);
                        return s;
                    }

                    function rep(str, n, sep1, sep2) {
                        var sep1 = sep1 || '';
                        var sep2 = sep2 || '';

                        var s = "";

                        for (var j = 0; j < n; j++) {
                            s += str;
                            s += sep1;
                        }
                        s += sep2;
                        return s;
                    }

                    relatedKeys = {
                        a: ';',
                        b: 'f',
                        c: 'd',
                        d: 'k',
                        e: 'd',
                        f: 'j',
                        g: 'f',
                        h: 'j',
                        i: 'k',
                        j: 'f',
                        k: 'd',
                        l: 's',
                        m: 'j',
                        n: 'j',
                        o: 'l',
                        p: ';',
                        q: 'a',
                        r: 'f',
                        s: 'l',
                        t: 'f',
                        u: 'j',
                        v: 'f',
                        w: 's',
                        x: 's',
                        y: 'j',
                        z: 'a',
                        ',': 'k',
                        '.': 'l',
                        '<': 'k',
                        '>': 'l',
                        '/': ';',
                        ';': 'a',
                        '`': 'a',
                        '~': 'a',
                        '1': 'a',
                        '2': 's',
                        '3': 'd',
                        '4': 'f',
                        '5': 'f',
                        '6': 'j',
                        '7': 'j',
                        '8': 'k',
                        '9': 'l',
                        '0': ';',
                        '-': ';',
                        '+': ';',
                        '\'': ';',
                        '\"': ';',
                        '!': 'a',
                        '@': 's',
                        '#': 'd',
                        '$': 'f',
                        '%': 'f',
                        '^': 'j',
                        '&': 'j',
                        '*': 'k',
                        '(': 'l',
                        ')': ';',
                        '_': ';',
                        '=': ';',
                        '[': ';',
                        ']': ';',
                        '{': ';',
                        '}': ';',
                        '\\': ';',
                        '|': ';',
                        '?': ';'
                    }

                    function getRelKey(key) {
                        key = key.toLowerCase();
                        if (key in relatedKeys) {
                            return relatedKeys[key];
                        }
                        return '';
                    }

                }
                inputArea.focus();
                $(this).data('typer', {
                    target: $this,
                    typer: typer
                });

                function initVars() {
                    resulthtml =
                        '<div class="result container">\
                            <ul class="nav nav-tabs" id="myTab" role="tablist">\
                                <li class="nav-item">\
                                    <a class="nav-link active" id="result-tab" data-toggle="tab" href="#result-httid" role="tab" aria-controls="result-httid">Result</a>\
                                </li>\
                                <li class="nav-item" id="stats-nav">\
                                    <a class="nav-link" id="stats-tab" data-toggle="tab" href="#stats-httid" role="tab" aria-controls="stats-httid">Records</a>\
                                </li>\
                                    <li class="nav-item" id="exercise-nav">\
                                    <a class="nav-link" id="exercise-tab" data-toggle="tab" href="#exercise-httid" role="tab" aria-controls="exercise-httid">Supplemental Exercise</a>\
                                </li>\
                            </ul>\
                            <div class="tab-content" id="myTabContent">\
                                <div class="tab-pane fade show active" id="result-httid" role="tabpanel" aria-labelledby="result-tab">\
                                    <div class="row">\
                                        <div class="large stat col">\
                                            <div class="top">htt_wpm</div>\
                                            <div class="bottom">words per minute</div>\
                                        </div>\
                                         <div class="large stat col">\
                                            <div class="top">htt_accuracy%</div>\
                                            <div class="bottom">accuracy</div>\
                                        </div>\
                                        <div class="large stat errors col">\
                                            <div class="top">htt_errors</div>\
                                            <div class="bottom"><p>errors</p>htt_errorstat</div>\
                                            \
                                        </div>\
                                        <div class="large stat col">\
                                            <div class="top">htt_kps</div>\
                                            <div class="bottom">keys per second</div>\
                                        </div>\
                                        <div style="clear: both;"></div>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>';
                    statshtml =
                        '<div class="tab-pane" id="stats-httid" role="tabpanel" aria-labelledby="stats-tab">\                      \
                            <div class="row">\
                                <div class="col">\
                                    <h5 class="notes highlight">Average over Last htt_count Results</h5>\
                                    <div class="row">\
                                         <div class="large stat col">\
                                            <div class="top">htt_wpm</div>\
                                            <div class="bottom">Words per minute</div>\
                                        </div>\
                                        <div class="large stat col">\
                                            <div class="top">htt_accuracy%</div>\
                                            <div class="bottom">Accuracy</div>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div class="col">\
                                    <h5 class="notes highlight">Top Result (htt_date)</h5>\
                                    <div class="row">\
                                        <div class="large stat errors col">\
                                            <div class="top">htt_best_wpm</div>\
                                            <div class="bottom"><p>Words per minute</p></div>\
                                        </div>\
                                        <div class="large stat col">\
                                            <div class="top">htt_best_accuracy%</div>\
                                            <div class="bottom">Accuracy</div>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div style="clear: both;"></div>\
                            </div>\
                                <h5 class="notes highlight">Cumulative Key Statistics for Last htt_count Results</h5>\
                                <div class="row mt-2">\
                                <div class="large stat col">\
                                    <div class="top total-missed keyboard"></div>\
                                    <div class="bottom">total missed keys</div>\
                                </div>\
                                <div class="large stat col">\
                                    <div class="top total-speed keyboard"></div>\
                                    <div class="bottom">average key speed</div>\
                                </div>\
                            </div>\
                            <div class="text-left">\
                            <a data-toggle="modal" href="javascript:void(0)" data-target="#deleteDataModal">\
                                Clear all typing records\
                            </a>\
                            </div>\
                        </div>';
                    morehtml = '<div class="more-stats row">\
                         <div class="large stat col">\
                            <div class="top missed keyboard"></div>\
                            <div class="bottom">missed keys</div>\
                        </div>\
                        <div class="large stat col">\
                            <div class="top speed keyboard"></div>\
                            <div class="bottom">key speed</div>\
                        </div>\
                    </div>\
                    <div style="clear: both;" class="notes"></div>';

                    // <div class="typer"><div class="quote"></div></div>';

                    errorstat = '<span class="details">(htt_errors_fixed fixed)</span>';
                    missed = {};
                    errors_fixed = 0;
                    missed_str = "";
                    keyTimes = {};
                    keydata = [];
                    missed_words = [];
                    _extrakey = false;
                    _missingkey = false;
                    $(typer).find('.wasIncorrect').removeClass('wasIncorrect');
                    $(typer).find('.missed-key').removeClass('missed-key');
                    $(typer).find('.extra-key').removeClass('extra-key');
                    $(typer).find('.swapped-keys').removeClass('swapped-keys');

                }
            });
        },
        destroy: function () {

            return this.each(function () {

                var $this = $(this),
                    data = $this.data('typer');

                // Namespacing FTW
                $(window).unbind('.typer');
                data.tooltip.remove();
                $this.removeData('typer');

            })

        },
        reposition: function () {
        },
        show: function () {
        },
        hide: function () {
        },
        update: function (content) {
        }
    };

    $.fn.typer = function (method) {

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.typer');
        }

    };

})(jQuery);
