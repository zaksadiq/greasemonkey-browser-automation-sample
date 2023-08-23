// https://jsfiddle.net/zaksadiq/ujq6evbm/27/
// ==UserScript==
// @name         Browser Automation: Export Locations Data By Date Range
// @namespace    
// @version      0.1
// @description  Opens many tabs containing download links based on date information and available 
//							 locations. You will have to disable pop-ups on your browser for the page's domain.
// @author       Zak Sadiq
// @match        https://thepagewiththedownloadlinkon.com/*
// @grant        none
// ==/UserScript==


// inject export button 
(function() {
    'use strict';

    var button = document.createElement("button");
    button.innerHTML = "export";
    button.onclick = downloadLocations;
    document.body.appendChild(button);
})();


//
function downloadLocations() {
    var url, id;
    var dateMin = document.querySelector("#daterange-min").value;
    var dateMax = document.querySelector("#daterange-max").value;
    var selectboxes = document.querySelectorAll("option");
		var i = 0;
    for (let element of selectboxes) {
     	console.log('doing: ' + i);
      i++;
    	id = element.getAttribute('id');
      url = "https://therequireddownloadlink.com/?graph=12522?id=" + id + "...?date-min=" + dateMin+"..?date-max=" + dateMax;
      console.log(url);
      window.open(url, '_blank');
		  //sleep(1000);
    }
}


// sleep for a period of time.
// for debugging purposes only - not used.
function sleep(milliseconds) {
  var startTime = new Date().getTime();
  var currentTime;
  for (var i = 0; i < 1e7; i++) {
    currentTime = new Date().getTime();
    if ((currentTime - startTime) > milliseconds){
      break;
    }
  }
}