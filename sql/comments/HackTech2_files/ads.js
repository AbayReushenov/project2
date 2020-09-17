/*** MktOps Ads v2020012901 ***/

try {csl=console;} catch(e){}
csl&&csl.log('MktOps::Ads - Init');
var csl;
var iFrameObj = null;

if (window.frameElement != null && window.frameElement.id != null) {
	var myId = window.frameElement.id;
	//self executing function
	(function() {
		try {
			csl&&csl.log('MktOps::Ads OnLoad');
			iFrameObj = window.parent.document.getElementById(myId);
			if(iFrameObj.attributes["width"].value == '468' 
				|| iFrameObj.attributes["width"].value == '600'
				|| iFrameObj.attributes["width"].value == '970') {

				iFrameObj.style.width = '100%';
				csl&&csl.log('MktOps::Ads - Set width to 100% on ' +myId);
		
				setTimeout(function() {
					var myHeight = (document.body.scrollHeight + 2) +'px';
					var adHeight;
					if (iFrameObj.attributes["width"].value == '970') {
						var adContainer = document.querySelectorAll('body > div')[1];
						if (adContainer != null) {
						  //force to block display for height calc
						  adContainer.style.display = "block";
						  adContainer.style.textAlign = "center";
						  adHeight = adContainer.offsetTop + adContainer.offsetHeight;
						} 
						if(adHeight >= 90) { 
						  csl&&csl.log('MktOps::Ads - Setting 970 zone height to adHeight.');
						  myHeight = adHeight +'px'; 
						} else { 
						  myHeight = (Math.trunc(document.body.scrollWidth / 3.9)) +'px'; 
						}
					}

					iFrameObj.style.height = 0;
					iFrameObj.style.height = myHeight;
					csl&&csl.log('MktOps::Ads - Setting Height. myHeight: ' 
						+ myHeight + ' scrollHeight: ' + document.body.scrollHeight 
						+ ' adHeight: ' +adHeight
						+ ' scrollWidth: ' + document.body.scrollWidth +' - ' +myId);
				}, 500);
			}
		} catch(e) {
			csl&&csl.log('MktOps::Ads - Failed to adjust iframe height. Error: ' +e.message);
		}
	})();
}
