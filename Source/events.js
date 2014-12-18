
var on = true;


function updateIcon() {
	if(on === true){
	 chrome.browserAction.setIcon({path:"img/bulbasmall_bw.png"});
	 on = false
	} else {
	 chrome.browserAction.setIcon({path:"img/bulbasmall.png"});
	 on = true
	}
}

chrome.browserAction.onClicked.addListener(updateIcon);


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	sendResponse(on)
  });