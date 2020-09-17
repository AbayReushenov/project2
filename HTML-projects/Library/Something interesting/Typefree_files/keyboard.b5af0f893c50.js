function contrastKeyColor(kc, sc) {
    var k = d3.hsl(kc);
    var s = d3.hsl(sc);
    if (k.l > .5) {
        return d3.hsl(s.h, s.s, .2);
    }
    if (k.l < .5) {
        return d3.hsl(s.h, s.s, .9);
    }
    return s;
}

function makeCorner(k, w, h) {
    return 'm ' + (k.x + 1) + ',' + (k.y + 1)
        + ' l ' + (k.width * w - 1) + ',' + (h - 2)
        + ' 0,' + (0 - h + 3) + ' -2,-2 '
        + (0 - k.width * w + 3) + ',0 z';
}

function corner(sel, size, keyColor, strokeColor, altkeyColor) {
    var height = size;
    var width = height;
    var space = size/5;

    var svg = d3.selectAll(sel).append("svg")
        .attr('height', height)
        .attr('width', width);

    var group = svg.append('g')
        .attr('x', 0)
        .attr('y', 0)
        .attr('height', height)
        .attr('width', width)
        .attr('stroke', 'none');

    group.append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', width)
        .attr('height', width)
        .attr('rx', space)
        .attr('ry', space)
        .attr('fill', keyColor)

    group.append('path')
        .attr('d', makeCorner(
            {x: 0, y: 0, width: 1},
            width, height))
        .attr('fill', altkeyColor);
}

function keyboard(sel, keyColor, strokeColor, altKeyColor, legend) {
    if (altKeyColor == null)
        altKeyColor = 'transparent';

    // programmatically generate keyboard data object
    row1 = [
        {width: 1.25, text: '', char: ''},
        {width: 1, text: '', char: ''},
        {width: 1, text: '', char: ''},
        {width: 1, text: '', char: ''},
        {width: 6, text: 'Space', char: ' '},
        {width: 1, text: '', char: ''},
        {width: 1.5, text: '', char: ''},
        {width: 1, text: '', char: ''},
        {width: 1.5, text: '', char: ''},
    ];
    row2 = [
        {width: 2.25, text: '⇧', char: ''},
        {width: 1, text: 'z', char: 'zZ'},
        {width: 1, text: 'x', char: 'xX'},
        {width: 1, text: 'c', char: 'cC'},
        {width: 1, text: 'v', char: 'vV'},
        {width: 1, text: 'b', char: 'bB'},
        {width: 1, text: 'n', char: 'nN'},
        {width: 1, text: 'm', char: 'mM'},
        {width: 1, text: ',', char: ',<'},
        {width: 1, text: '.', char: '.>'},
        {width: 1, text: '/', char: '/?'},
        {width: 2.5, text: '⇧', char: ''},
    ];
    row3 = [
        {width: 1.5, text: 'Cap', char: ''},
        {width: 1, text: 'a', char: 'aA'},
        {width: 1, text: 's', char: 'sS'},
        {width: 1, text: 'd', char: 'dD'},
        {width: 1, text: 'f', char: 'fF'},
        {width: 1, text: 'g', char: 'gG'},
        {width: 1, text: 'h', char: 'hH'},
        {width: 1, text: 'j', char: 'jJ'},
        {width: 1, text: 'k', char: 'kK'},
        {width: 1, text: 'l', char: 'lL'},
        {width: 1, text: ';', char: ';:'},
        {width: 1, text: '\'', char: '\'\"'},
        {width: 2, text: '⏎', char: '\n'},
    ];
    row4 = [
        {width: 1.25, text: '⇥', char: ''},
        {width: 1, text: 'q', char: 'qQ'},
        {width: 1, text: 'w', char: 'wW'},
        {width: 1, text: 'e', char: 'eE'},
        {width: 1, text: 'r', char: 'rR'},
        {width: 1, text: 't', char: 'tT'},
        {width: 1, text: 'y', char: 'yY'},
        {width: 1, text: 'u', char: 'uU'},
        {width: 1, text: 'i', char: 'iI'},
        {width: 1, text: 'o', char: 'oO'},
        {width: 1, text: 'p', char: 'pP'},
        {width: 1, text: '[', char: '[{'},
        {width: 1, text: ']', char: ']}'},
        {width: 1, text: '\\', char: '\\|'},
    ];
    row5 = [
        {width: 1, text: '`', char: '`~'},
        {width: 1, text: '1', char: '1!'},
        {width: 1, text: '2', char: '2@'},
        {width: 1, text: '3', char: '3#'},
        {width: 1, text: '4', char: '4$'},
        {width: 1, text: '5', char: '5%'},
        {width: 1, text: '6', char: '6^'},
        {width: 1, text: '7', char: '7&'},
        {width: 1, text: '8', char: '8*'},
        {width: 1, text: '9', char: '9('},
        {width: 1, text: '0', char: '0)'},
        {width: 1, text: '-', char: '-_'},
        {width: 1, text: '=', char: '=+'},
        {width: 1.25, text: '⟵', char: ''},
    ];

    var kwidth = 16;
    var kheight = kwidth;
    var kspace = 4;
    var svgheight = 5 * kheight + 4 * kspace + 1;
    if (legend != null)
        svgheight += 1.25 * kheight; // extra 1.5 rows for legend
    var svgwidth = 14.5 * kwidth + 13 * kspace + 1;

    function setPos(row, y) {
        for (var i = 0, x = 1; i < row.length; i++) {
            row[i].x = x;
            row[i].y = y;
            x = x + (kwidth * row[i].width + kspace);
        }
    }

    var rows = [row5, row4, row3, row2, row1];
    for (var i = 0; i < rows.length; i++) {
        setPos(rows[i], i * (kheight + kspace) + 1);
    }

    var r = row1.concat(row2).concat(row3).concat(row4).concat(row5);

    var keys = [];

    var kbdsvg = d3.selectAll(sel).append("svg")
        .attr('height', svgheight)
        .attr('width', svgwidth);

    keys = kbdsvg.selectAll('keys')
        .data(r)
        .enter() // enter each row in the data
        .append('g')
        .attr('translate', function (k) {
            return 'translate(' + k.x + ', ' + k.y + ')';
        });

    keys.append("rect")
        .attr('x', function (k) {
            return k.x;
        })
        .attr('y', function (k) {
            return k.y;
        })
        .attr('width', function (k) {
            return k.width * kwidth;
        })
        .attr('height', kheight)
        .attr('rx', kspace)
        .attr('ry', kspace)
        .attr('fill', keyColor)
        .attr('stroke', strokeColor);

    //The data for our line
    var lineData = [{"x": 0, "y": 0}, {"x": kwidth, "y": kheight},
        {"x": kwidth, "y": 0}, {"x": 0, "y": 0}];

    // //This is the accessor function we talked about above
    // var lineFunction = d3.svg.line()
    //     .x(function (d) {
    //         return d.x;
    //     })
    //     .y(function (d) {
    //         return d.y;
    //     })
    //     .interpolate("linear");


    var corner = keys.append('path')
    // .attr('d', lineFunction(lineData))
        .attr('d', function (k) {
            return makeCorner(k, kwidth, kheight);

        })
        .attr('fill', altKeyColor);

    keys.append('text')
        .attr('x', function (k) {
            return k.x + kspace / 1.5;
        })
        .attr('y', function (k) {
            return k.y + kheight - kheight / 2.5;
        })
        .attr('dy', function (k) {
            return 0;
        })
        .attr('font-size', function (k) {
            return kheight / 1.5 + "px";
        })
        .attr('fill', function (k) {
            return contrastKeyColor(keyColor(k), strokeColor);
        })
        .attr('alignment-baseline', 'middle')
        .attr('lengthAdjust', 'spacing')
        .text(function (k) {
            return k.text;
        });


    if (legend != null) {

        lsvg = kbdsvg.append('g')
            .attr('x', 0)
            .attr('y', legend.y)
            .attr('height', kheight)
            .attr('width', svgwidth);
        //.attr('stroke', strokeColor);

        legend.x = svgwidth / 2 - kwidth * legend.width / 2;
        legend.y = svgheight - kheight;

        var labels = {
            min: {
                x: legend.x - kwidth / 2,
                y: legend.y + kheight / 2,
                text: legend.min
            },
            max: {
                x: legend.x + legend.width * kwidth + kwidth / 2,
                y: legend.y + kheight / 2,
                text: legend.max
            },
            fontSize: (kheight / 1.5) + 'px',
            fontColor: strokeColor
        };

        if (legend.mode == 'discrete') {
            var step = 1 + Math.floor(legend.max / 10);
            var colors = d3.range(0, legend.max + 1, step);

            lsvg.selectAll('boxes')
                .data(colors)
                .enter()
                .append('rect')
                .attr('fill', function (c, i) {
                    return legend.scale(c)
                })
                .attr('height', kheight)
                .attr('width', kwidth)
                .attr('stroke', strokeColor)
                .attr('x', function (c, i) {
                    return legend.x + i * kwidth
                })
                .attr('y', legend.y);
        } else { // continuous
            var defs = kbdsvg.append("defs");

            //Append a linearGradient element to the defs and give it a unique id
            var linearGradient = defs.append("linearGradient")
                .attr("id", "linear-gradient-" + legend.id);

            //Set the color for the start (0%)
            linearGradient.append("stop")
                .attr("offset", "0%")
                .attr("stop-color", legend.scale(1));

            //Set the color for the end (100%)
            linearGradient.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", legend.scale(0));

            lsvg.append('rect')
                .attr('height', kheight)
                .attr('width', kwidth * 4)
                .attr('x', legend.x)
                .attr('y', legend.y)
                .style("fill", "url(#linear-gradient-" + legend.id + ")")
                .attr('stroke', strokeColor);
        }

        lsvg.append('text')
            .attr('x', labels.min.x)
            .attr('y', labels.min.y)
            .attr('font-size', labels.fontSize)
            .attr('dy', 0)
            .attr('alignment-baseline', 'middle')
            .attr('text-anchor', 'end')
            .attr('fill', strokeColor)
            .text(labels.min.text);

        lsvg.append('text')
            .attr('x', labels.max.x)
            .attr('y', labels.max.y)
            .attr('font-size', labels.fontSize)
            .attr('dy', 0)
            .attr('alignment-baseline', 'middle')
            .attr('text-anchor', 'start')
            .attr('fill', strokeColor)
            .text(labels.max.text);
    }


    kbdsvg.keys = keys;

    return kbdsvg;
}


function hands(sel, fingerColor) {

    var rfdata = [

        {
            name: 'pointer',
            fill: 'grey',
            d: "m -85.091804,325.86219 a 7.5812888,9.2286552 0 0 1 0.07883,-0.19871 7.5812888,9.2286552 0 0 1 0.396086,-0.78642 7.5812888,9.2286552 0 0 1 0.458594,-0.73439 7.5812888,9.2286552 0 0 1 0.516585,-0.67496 7.5812888,9.2286552 0 0 1 0.569342,-0.60886 7.5812888,9.2286552 0 0 1 0.616453,-0.53659 7.5812888,9.2286552 0 0 1 0.517407,-0.3613 c -0.03815,5.3e-4 -0.07629,0 -0.114443,0 0.0017,-0.10843 0.08679,-5.68683 -6.15e-4,-8.41768 -0.0214,-0.6686 -0.531109,-2.41352 -1.471236,-2.40628 -0.964557,0.007 -1.464355,1.82158 -1.471237,2.49178 -0.02715,2.64354 0,8.39397 0,8.39397 0.03111,1.10217 0.03064,2.13435 0.04013,3.23684 0,0 -0.105818,0.46304 -0.135895,0.6024 z"
        },
        {
            name: 'thumb',
            fill: 'grey',
            d: "m -84.831099,334.87928 a 7.5812888,9.2286552 0 0 1 -0.285133,-0.60526 7.5812888,9.2286552 0 0 1 -0.309562,-0.84206 7.5812888,9.2286552 0 0 1 -0.238944,-0.87541 7.5812888,9.2286552 0 0 1 -0.165969,-0.90004 7.5812888,9.2286552 0 0 1 -0.09135,-0.91575 7.5812888,9.2286552 0 0 1 -0.01899,-0.65279 7.5812888,9.2286552 0 0 1 0.03439,-0.83734 c -0.01687,0.0643 -0.03782,0.13309 -0.05501,0.19799 -0.743205,-1.6831 -1.551933,-3.51531 -2.095079,-4.76986 -0.322539,-0.74499 -2.003063,-2.41447 -3.076418,-1.87564 -0.508717,0.25539 -0.450304,0.94563 -0.158167,1.70033 1.152303,2.97681 4.131039,10.37583 4.131039,10.37583 l 0.07606,-0.0194 -0.0033,0.0194 h 2.091487 z"
        },
        {
            name: 'pinky',
            fill: 'grey',
            d: "m -73.342751,323.18022 a 7.5812888,9.2286552 0 0 1 0.421438,0.47799 7.5812888,9.2286552 0 0 1 0.500163,0.69313 7.5812888,9.2286552 0 0 1 0.440837,0.75029 7.5812888,9.2286552 0 0 1 0.376996,0.80018 7.5812888,9.2286552 0 0 1 0.309561,0.84206 7.5812888,9.2286552 0 0 1 0.239047,0.87541 7.5812888,9.2286552 0 0 1 0.153139,0.83025 l -0.01098,-3.29144 c 0,0 0.07272,-5.17293 0,-7.3723 -0.01764,-0.5333 -0.508263,-1.31089 -1.212174,-1.3105 -0.705386,4.2e-4 -1.206605,0.78004 -1.212276,1.3146 -0.01472,1.38787 -0.01065,3.67053 -0.0057,5.39033 z"
        }, {
            name: 'ring',
            fill: 'grey',
            d: "m -77.217396,320.97634 a 7.5812888,9.2286552 0 0 1 0.363755,0.0669 7.5812888,9.2286552 0 0 1 0.734283,0.22817 7.5812888,9.2286552 0 0 1 0.711909,0.31633 7.5812888,9.2286552 0 0 1 0.682348,0.40122 7.5812888,9.2286552 0 0 1 0.563799,0.42083 l -0.110132,-0.20025 c 0,0 0.08825,-6.33955 0,-9.03496 -0.0214,-0.65357 -0.616932,-1.60648 -1.471236,-1.606 -0.856099,4.2e-4 -1.464354,0.9559 -1.471236,1.61103 -0.02243,2.13474 -0.0093,6.20224 -0.0035,7.79671 z"
        },
        {
            name: 'middle',
            fill: 'grey',
            d: "m -79.659193,308.42095 c -0.856098,6e-4 -1.464353,1.21979 -1.471235,2.05577 -0.02565,3.11544 -0.0037,10.20324 -0.0011,11.02318 a 7.5812888,9.2286552 0 0 1 0.02463,-0.0134 7.5812888,9.2286552 0 0 1 0.719196,-0.29088 7.5812888,9.2286552 0 0 1 0.739416,-0.20199 7.5812888,9.2286552 0 0 1 0.752246,-0.11116 7.5812888,9.2286552 0 0 1 0.536291,-0.0232 7.5812888,9.2286552 0 0 1 0.180133,0.011 c 0.01578,-1.60656 0.06881,-7.39445 -0.0083,-10.39996 -0.0214,-0.83399 -0.616933,-2.04991 -1.471236,-2.0493 z"
        },
        {
            name: 'hand',
            fill: 'grey',
            d: "m -78.179642,320.87021 a 7.5812888,9.2286552 0 0 0 -0.180133,-0.011 7.5812888,9.2286552 0 0 0 -0.536292,0.0232 7.5812888,9.2286552 0 0 0 -0.752246,0.11116 7.5812888,9.2286552 0 0 0 -0.739415,0.20199 7.5812888,9.2286552 0 0 0 -0.719196,0.29088 7.5812888,9.2286552 0 0 0 -0.02463,0.0134 c 1.58e-4,0.044 10e-4,0.45552 10e-4,0.45921 -0.269325,0.001 -0.538605,-10e-4 -0.807979,0.002 a 7.5812888,9.2286552 0 0 0 -0.517406,0.36129 7.5812888,9.2286552 0 0 0 -0.616454,0.5366 7.5812888,9.2286552 0 0 0 -0.569341,0.60886 7.5812888,9.2286552 0 0 0 -0.516586,0.67496 7.5812888,9.2286552 0 0 0 -0.458593,0.73439 7.5812888,9.2286552 0 0 0 -0.396087,0.78642 7.5812888,9.2286552 0 0 0 -0.07883,0.19871 c -0.117235,0.5432 -0.363,1.66515 -0.814856,3.38844 a 7.5812888,9.2286552 0 0 0 -0.03438,0.83734 7.5812888,9.2286552 0 0 0 0.01899,0.65278 7.5812888,9.2286552 0 0 0 0.09135,0.91576 7.5812888,9.2286552 0 0 0 0.165968,0.90004 7.5812888,9.2286552 0 0 0 0.238945,0.87541 7.5812888,9.2286552 0 0 0 0.309561,0.84206 7.5812888,9.2286552 0 0 0 0.285133,0.60526 h 5.005425 7.934248 a 7.5812888,9.2286552 0 0 0 0.184854,-0.36693 7.5812888,9.2286552 0 0 0 0.329678,-0.83066 7.5812888,9.2286552 0 0 0 0.259781,-0.86649 7.5812888,9.2286552 0 0 0 0.187522,-0.89378 7.5812888,9.2286552 0 0 0 0.03849,-0.31018 l -0.01047,-3.16171 a 7.5812888,9.2286552 0 0 0 -0.153138,-0.83025 7.5812888,9.2286552 0 0 0 -0.239048,-0.87541 7.5812888,9.2286552 0 0 0 -0.309561,-0.84206 7.5812888,9.2286552 0 0 0 -0.376995,-0.80018 7.5812888,9.2286552 0 0 0 -0.440837,-0.75029 7.5812888,9.2286552 0 0 0 -0.500163,-0.69313 7.5812888,9.2286552 0 0 0 -0.421438,-0.47799 c 9.29e-4,0.32598 0.0012,0.48656 0.0021,0.72196 l -0.820602,-1.49236 a 7.5812888,9.2286552 0 0 0 -0.563799,-0.42083 7.5812888,9.2286552 0 0 0 -0.682348,-0.40122 7.5812888,9.2286552 0 0 0 -0.711909,-0.31633 7.5812888,9.2286552 0 0 0 -0.734283,-0.22817 7.5812888,9.2286552 0 0 0 -0.363755,-0.0669 c 10e-4,0.28488 0.0028,0.99774 0.003,1.04672 -0.324579,-0.0136 -0.649028,-0.0177 -0.973536,-0.027 8e-6,-7.3e-4 0.006,-0.89455 0.0083,-1.12585 z"
        },
    ];

    var handsvg = d3.selectAll(sel).append("svg")
        .attr('height', 100)
        .attr('width', 78)
        .attr('viewBox', "0 0 20.633515 26.458419");

    var g = handsvg.append('g')
        .attr('transform', 'translate(91.513743,-308.42095)');

    var fingers = g.selectAll('fingers')
        .data(rfdata)
        .enter(); // enter each row in the data

    fingers.append('path')
        .attr('d', function (f) {
            return f.d;
        })
        .attr('fill', fingerColor);

    return handsvg;
}

