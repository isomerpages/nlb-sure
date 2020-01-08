// JavaScript Document to control the various Tracking controls



function saveData(pageLoc){

	if(isLMSReady=="true"){		
			// Call to function in SCO.js
			setPageData(pageLoc,visitedArray.join(","));
	}else{
			localStorage.crsLoc172=pageLoc;
			localStorage.visitedArray172=visitedArray; 
	}
}
