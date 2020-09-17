$jQ(document).ready(function(){init();});function fixDiv(){consoleMsg("Fixing div...");if($jQ(".article-side-300x600, .sidevert").length<1){return true;}
var typeSelector="";var leftOffset=0;if($jQ(".article-side-wrap").length>0){typeSelector=".article-side-wrap";leftOffset=10;}
if($jQ(".event-side-wrap").length>0){typeSelector=".event-side-wrap";leftOffset=28;}
if(typeSelector===""){return true;}
var div=$jQ(".article-side-300x600").length>0?$jQ(".article-side-300x600"):$jQ(".sidevert");var $cache=div;if($jQ(window).scrollTop()+div.height()+20>$jQ(".desktop-footer").offset().top){$cache.css({top:$jQ(".desktop-footer").offset().top-$jQ(typeSelector).offset().top-div.height()-30,left:leftOffset,position:"absolute"});}
else if($jQ(window).scrollTop()>$jQ(typeSelector).offset().top){$cache.css({top:20,left:$jQ(typeSelector).offset().left+leftOffset,position:"fixed"});}
else{$cache.css({'position':"relative",'top':"0px",'left':"0px"});}}
function init(){consoleMsg('Document ready. Initializing...');fixDiv();$jQ(window).scroll(fixDiv);var cat='AdServer-Click';var act=getQSParamByName('smg_campaign');var lab=getQSParamByName('smg_medium')+
(getQSParamByName('smg_content')!=""?'-'+getQSParamByName('smg_content'):'-NULL');if(act.length>0&&lab.length>0){consoleMsg("Tracking campaign event: '"+cat+"', '"+act+"', '"+lab+"'.");_gaq.push(['_trackEvent',cat,act,lab]);}
if(window.location.href.indexOf("MainRSSFeed")>0){setCookie("RSS_Inbound",1,new Date("1/1/2020"));}
if(window.location.pathname.indexOf("/newsletter/confirmed/")>-1){setCookie("Newsletter_Subscribed",1,new Date("1/1/2020"));setCookie("Newsletter_SubscribeDate",new Date().toUTCString(),new Date("1/1/2020"));}else if(getQSParamByName('utm_medium')=='Email'||getQSParamByName('utm_medium')=='email'||getQSParamByName('mkt_tok')!=''){var count=parseInt(getCookie("EmailVisitCount"));count=isNaN(count)?1:count+1;setCookie("EmailVisitCount",count,new Date("1/1/2020"));setCookie("Newsletter_Subscribed",1,new Date("1/1/2020"));emailVisitCount=count;}
visitCount=parseInt(getCookie("VisitCount"));visitCount=isNaN(visitCount)?1:visitCount;consoleMsg('Visit count: '+visitCount);var lastVisit=getCookie("LastVisit");if(lastVisit){lastVisit=new Date(lastVisit).getTime()/1000/3600;var now=new Date().getTime()/1000/3600;var diff=now-lastVisit;if(diff>4){visitCount=visitCount+1;setCookie("VisitCount",visitCount,new Date("1/1/2020"));setCookie("LastVisit",new Date().toUTCString(),new Date("1/1/2020"));}
var firstVisit=getCookie("FirstVisit");if(firstVisit==''){setCookie("FirstVisit",new Date().toUTCString(),new Date("1/1/2020"));}}else{setCookie("VisitCount",1,new Date("1/1/2020"));setCookie("FirstVisit",new Date().toUTCString(),new Date("1/1/2020"));setCookie("LastVisit",new Date().toUTCString(),new Date("1/1/2020"));}
try{$jQ('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({disableOn:700,type:'iframe',mainClass:'mfp-fade',removalDelay:160,preloader:false,fixedContentPos:false});}catch(e){}}
function cwc_setBackground(key,img){$jQ('body').addClass(key);if(typeof img!=='undefined'&&img!=''&&img.indexOf('http')>-1){$jQ('body').css('background-image','url('+img+')');$jQ('body').css('background-repeat','no-repeat');$jQ('body').css('background-position','center 83px');}
switch(key){case 'vendor-name-1508':$jQ('body').addClass('vendor-name-1508');break;}}
function validateNLSubscribe(inputId,formId,formName){if(validateEmail($jQ(inputId).val())==false){alert('Please enter a valid email address.');$jQ(inputId).focus();return false;}else{$jQ(formId).attr('action','/newsletter/sign-up/?src='+window.location.pathname
+'&form='+formName
+'&utm_source=internal&utm_medium='+formName
+'&utm_campaign=Newsletter-Signup'
+'&from='+$jQ(inputId).val());return true;}}
function defaultVal(arg,val){return typeof arg!=='undefined'?arg:val;}
function setCookie(name,value,expires,path,domain,secure){if(domain&&domain.match(/^\.?localhost$/))
domain=null;var curCookie=name+"="+escape(value)+
(expires?"; expires="+expires.toGMTString():"")+
(path?"; path="+path:"; path=/")+
(domain?"; domain="+domain:"; domain=.cmswire.com")+
(secure?"; secure":"");document.cookie=curCookie;}
function getCookie(name){var pairs=document.cookie.split("; "),count=pairs.length,parts;while(count--){parts=pairs[count].split("=");if(parts[0]===name)
return unescape(parts[1]);}
return false;}
function deleteCookie(name,path,domain,secure){if(getCookie(name)){if(domain&&domain.match(/^\.?localhost$/))
domain=null;document.cookie=name+"="+
(path?"; path="+path:"")+
(domain?"; domain="+domain:"")+
(secure?"; secure":"")+
"; expires=Thu, 01-Jan-70 00:00:01 GMT";}}
function getQSParamByName(name){var retVal='';try{if(name){var r=$jQ.QueryString[name]
if(typeof r!=='undefined')
{retVal=r;}}}catch(e){}
return retVal;}
(function($){$.QueryString=(function(a){if(a=="")return{};var b={};for(var i=0;i<a.length;++i)
{var p=a[i].split('=');if(p.length!=2)continue;b[p[0]]=decodeURIComponent(p[1].replace(/\+/g," "));}
return b;})(window.location.search.substr(1).split('&'))})(jQuery);function gaRecordEvent(evtCategory,evtAction,evtLabel,evtValue,evtNonInteraction){if(typeof ga==="function"){ga('send','event',evtCategory,evtAction,evtLabel,defaultVal(evtValue,0),{nonInteraction:true});}
return true;}
function gaRecordPV(path){if(typeof(_gaq)!="undefined"){_gaq.push(['_trackPageview',path]);}
if(typeof ga==="function"){ga('send','pageview',path);}
return true;}