// JavaScript Document to read the metadata.xml

var visitedArray=[];
var totPagesInSCO=0;



// Static data for Course///

var courseModel="";
var courseName="NLB Academy";
function loadXML()
{
	
	var crsModel=[];
	
	// Data for Module 1/////////////
	var tempModule=[];
	var pagesArr=[];
	
	//Module Title 
	tempModule.push("Five Key Media Themes");
	
	//Page Title 	
	pagesArr.push({pageId:"m01_010_010_010a.html#slide-1-1",pageType:"conceptual",pageTitle:"Objectives" ,hasAudio:0});
	/*pagesArr.push({pageId:"m01_010_010_010.html#slide-1-1",pageType:"conceptual",pageTitle:"Five Key Media Themes (Cont'd)"});*/
	pagesArr.push({pageId:"m01_010_010_020.html#slide-1-1",pageType:"conceptual",pageTitle:"Five Key Media Themes" ,hasAudio:0});
	pagesArr.push({pageId:"m01_010_010_030.html#slide-1-1",pageType:"conceptual",pageTitle:"Long-term Exposure" ,hasAudio:0});
	pagesArr.push({pageId:"m01_010_010_040.html#slide-1-1",pageType:"conceptual",pageTitle:"Beauty and Body Image" ,hasAudio:0});
	pagesArr.push({pageId:"m01_010_010_050.html#slide-1-1",pageType:"conceptual",pageTitle:"Gender Bias" ,hasAudio:0});	
	pagesArr.push({pageId:"m01_010_010_060.html#slide-1-1",pageType:"conceptual",pageTitle:"Culture and Values" ,hasAudio:0});	
	pagesArr.push({pageId:"m01_010_010_070.html#slide-1-1",pageType:"conceptual",pageTitle:"Sense and Sexuality" ,hasAudio:0});	
	pagesArr.push({pageId:"m01_010_010_080.html#slide-1-1",pageType:"conceptual",pageTitle:"Violence" ,hasAudio:0});	
	pagesArr.push({pageId:"m01_010_010_090.html#slide-1-1",pageType:"last",pageTitle:"Summary" ,hasAudio:1});	

	tempModule.push(pagesArr);
	crsModel.push(tempModule);
	localStorage.setItem("crsModel",JSON.stringify(crsModel))
	metadataLoaded(true);
}
// Functions to call once metadata is loaded

function metadataLoaded(success){
	if(success){
		courseModel=JSON.parse(localStorage.getItem('crsModel'));
		totPagesInSCO=totPagesCrs();
		initVisitedArray();
		// Call to controller
		initShell();
	}else{
		alert("Failed to load MetaData");
		//console.log("Failed to load MetaData");
	}
}

function initVisitedArray(){
	for(var i=0;i<totPagesInSCO;i++){
		visitedArray[i]=0;
	}
	//console.log(" visitedArray "+visitedArray);
}
function setVisitedArray(ind){
	visitedArray[ind]=1;
	//console.log(" visitedArray "+visitedArray);
}
function getModel(){
	//console.log(crsModel.length);
	return (courseModel);
}

function getModules(){
	//console.log(crsModel.length);
	return (courseModel.length);
}

function getModName(modNum){
	//console.log(crsModel[modNum][0])
	return (courseModel[modNum][0]);	
}

function getModNames(){
	var arr=[];
	for(var i=0;i<getModules();i++){
		arr.push(courseModel[i][0]);
	}
	//console.log(arr);
	return arr;
}


function getTotalPages(modNum){
	//console.log(crsModel[modNum][1].length);
	return courseModel[modNum][1].length;
}

function getPageName(modNum,pageNum){
	//console.log(crsModel[modNum][1][pageNum].pageTitle);
	return courseModel[modNum][1][pageNum].pageTitle;
}

function getPageNames(modNum){
	var arr=[];
	for(var i=0;i<courseModel[modNum][1].length;i++){
		//console.log(crsModel[modNum][1][i].pageTitle);
		arr.push(courseModel[modNum][1][i].pageTitle);
	}
	return arr;
}

function getPageObject(modNum,pageNum){
	//console.log(courseModel[modNum][1][pageNum]);
	return courseModel[modNum][1][pageNum];
}

function totPagesCrs(){
	var ctr=0;
	
	for(var i=0;i<getModules();i++){	
		ctr+=courseModel[i][1].length;
	}
	//console.log(ctr);
	return ctr;
}


function markPageVisited(){
	for(var k=0;k<totPagesInSCO;k++){
		
		if(visitedArray[k]==1){
			var pageLinkMenu=$('#pageHolder').contents().find('#pgl_'+k);
			pageLinkMenu.removeClass('fileActive');	
			pageLinkMenu.addClass('fileVis')		
			$('#pageHolder').contents().find('#pg_'+k).removeClass('file');
			$('#pageHolder').contents().find('#pg_'+k).addClass('fileVisited');
		}
	}
}

function setActivePage(){
	var pageLinkMenu=$('#pageHolder').contents().find('#pgl_'+pageCounter).addClass('fileActive');
}


/*
	Function to return page when visited page number is given
*/

function getPageInfo(vpn){
	var temp = -1;
	for (var i = 0; i<getModules(); i++) {
		var pages = getTotalPages(i);
		for (var k = 0; k<pages; k++) {
				temp++;
				if (temp>=vpn) {
					var temp = [i, k];
					////trace("Module is "+i+"  Sxn is "+j+" Page is "+(k));
					return temp;
				}
			}
	}
}

function getPageObjVpn(vpn){
	var md=getPageInfo(vpn);
	//console.log(md + " md ");
	return getPageObject(md[0],md[1]);
}


		
function getMenuHtml(el){
			var moduleCount = getModules();
			var html = '<li class=" collapsable-hitarea"><div class=""></div><span class="folder">'+courseName+'</span>';
			html += '<ul style="display: none;">';
			var pnum=0;
			for(var i=0; i<moduleCount; i++){
				
				html += '<li class="">';
                html +=    '<div id="mod'+i+'" class="hitarea collapsable-hitarea lastCollapsable-hitarea"></div><span class="folder">'+getModName(i)+'</span>';
				html +=         '<ul>'
					for(var k=0; k<getTotalPages(i);k++){
						
						html +=     '<li><span id="pg_'+pnum+'" class="file"><a href="#" id="pgl_'+pnum+'" class="file triggerControl" pageId="'+pnum+'">'+getPageName(i,k)+'</a></span></li>';
						pnum++;
					}
				html +=       '</ul>'
			    html +=   '</li>'
				
				
			}
			html +=        '</ul>';
			
			el.html(html);
	}
	