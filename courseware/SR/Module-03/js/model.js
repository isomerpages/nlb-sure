// JavaScript Document to read the metadata.xml

var visitedArray=[];
var totPagesInSCO=0;



// Static data for Course///

var courseModel="";
var courseName="S.U.R.E. Campaign";
function loadXML()
{
	
	var crsModel=[];
	
	// Data for Module 1/////////////
	var tempModule=[];
	var pagesArr=[];
	
	//Module Title 
	tempModule.push("Plan Your Data Collection");
	
	//Page Title 	
	pagesArr.push({pageId:"m01_030_010_010.html#slide-1-1",pageType:"conceptual",pageTitle:"Lesson Outline",hasAudio:1});
	pagesArr.push({pageId:"m01_030_010_020.html#slide-1-1",pageType:"conceptual",pageTitle:"Step 4: Collecting the Data",hasAudio:1});
	pagesArr.push({pageId:"m01_030_010_030.html#slide-1-1",pageType:"conceptual",pageTitle:"Step 4: Collecting Data - Focus Groups",hasAudio:0});
	pagesArr.push({pageId:"m01_030_010_040.html#slide-1-1",pageType:"conceptual",pageTitle:"Step 4: Collecting Data - Observations",hasAudio:0});
	//pagesArr.push({pageId:"m01_030_010_040a.html#slide-1-1",pageType:"conceptual",pageTitle:"Collecting Data - Observations"});
	pagesArr.push({pageId:"m01_030_010_050.html#slide-1-1",pageType:"conceptual",pageTitle:"Step 4: Collecting Data - Surveys",hasAudio:0});
	pagesArr.push({pageId:"m01_030_010_060.html#slide-1-1",pageType:"conceptual",pageTitle:"Advantages and Disadvantages of Each Survey Method - Question 1", hasAudio:1});
	pagesArr.push({pageId:"m01_030_010_070.html#slide-1-1",pageType:"conceptual",pageTitle:"Advantages and Disadvantages of Each Survey Method - Question 2",hasAudio:0});	
	pagesArr.push({pageId:"m01_030_010_080.html#slide-1-1",pageType:"conceptual",pageTitle:"Advantages and Disadvantages of Each Survey Method - Question 3",hasAudio:0});	
	pagesArr.push({pageId:"m01_030_010_090.html#slide-1-1",pageType:"conceptual",pageTitle:"Advantages and Disadvantages of Each Survey Method - Question 4",hasAudio:0});	
	pagesArr.push({pageId:"m01_030_010_100.html#slide-1-1",pageType:"conceptual",pageTitle:"Advantages and Disadvantages of Each Survey Method - Question 5",hasAudio:0});	
	pagesArr.push({pageId:"m01_030_010_110.html#slide-1-1",pageType:"conceptual",pageTitle:"Advantages and Disadvantages of Each Survey Method - Question 6",hasAudio:0});	
	pagesArr.push({pageId:"m01_030_010_120.html#slide-1-1",pageType:"conceptual",pageTitle:"Advantages and Disadvantages of Each Survey Method - Question 7",hasAudio:0});	
	pagesArr.push({pageId:"m01_030_010_130.html#slide-1-1",pageType:"conceptual",pageTitle:"Advantages and Disadvantages of Each Survey Method - Question 8",hasAudio:0});	
	pagesArr.push({pageId:"m01_030_010_150.html#slide-1-1",pageType:"conceptual",pageTitle:"Activity 1",hasAudio:0});
	pagesArr.push({pageId:"m01_030_010_160.html#slide-1-1",pageType:"conceptual",pageTitle:"Tips on Data Collection",hasAudio:0});	
	pagesArr.push({pageId:"m01_030_010_170.html#slide-1-1",pageType:"conceptual",pageTitle:"Step 5: Analyse and Interpret the Data",hasAudio:1});	
	pagesArr.push({pageId:"m01_030_010_180.html#slide-1-1",pageType:"conceptual",pageTitle:"Three Sub-Steps of Data Analysis",hasAudio:0});	
	pagesArr.push({pageId:"m01_030_010_190.html#slide-1-1",pageType:"conceptual",pageTitle:"Consolidating the Data",hasAudio:1});	
	pagesArr.push({pageId:"m01_030_010_200.html#slide-1-1",pageType:"conceptual",pageTitle:"Consolidating the Data (Cont'd)",hasAudio:0});	
	pagesArr.push({pageId:"m01_030_010_210.html#slide-1-1",pageType:"conceptual",pageTitle:"Organising the Data",hasAudio:1});	
	pagesArr.push({pageId:"m01_030_010_220.html#slide-1-1",pageType:"conceptual",pageTitle:"Organising the Data - Tables",hasAudio:0});	
	pagesArr.push({pageId:"m01_030_010_230.html#slide-1-1",pageType:"conceptual",pageTitle:"Organising the Data - Example 1",hasAudio:0});	
	pagesArr.push({pageId:"m01_030_010_240.html#slide-1-1",pageType:"conceptual",pageTitle:"Organising the Data - Example 2",hasAudio:0});	
	pagesArr.push({pageId:"m01_030_010_250.html#slide-1-1",pageType:"conceptual",pageTitle:"Discussing and Reporting",hasAudio:1});	
	pagesArr.push({pageId:"m01_030_010_260.html#slide-1-1",pageType:"conceptual",pageTitle:"Discussing and Reporting - Brad's Project",hasAudio:0});	
	pagesArr.push({pageId:"m01_030_010_280.html#slide-1-1",pageType:"conceptual",pageTitle:"Activity 2",hasAudio:1});	
	pagesArr.push({pageId:"m01_030_010_290.html#slide-1-1",pageType:"conceptual",pageTitle:"Activity 3",hasAudio:0});	
	pagesArr.push({pageId:"m01_030_010_300.html#slide-1-1",pageType:"conceptual",pageTitle:"Activity 4",hasAudio:0});	
	pagesArr.push({pageId:"m01_030_010_310.html#slide-1-1",pageType:"conceptual",pageTitle:"Activity 5",hasAudio:0});	
	pagesArr.push({pageId:"m01_030_010_320.html#slide-1-1",pageType:"conceptual",pageTitle:"Pitfalls and Ethical Issues in Data Collection and Analysis",hasAudio:1});	
	pagesArr.push({pageId:"m01_030_010_330.html#slide-1-1",pageType:"conceptual",pageTitle:"Pitfalls in Data Collection and Analysis",hasAudio:1});
	//pagesArr.push({pageId:"m01_030_010_330a.html#slide-1-1",pageType:"conceptual",pageTitle:"Pitfalls in Data Collection and Analysis"});
	//pagesArr.push({pageId:"m01_030_010_330b.html#slide-1-1",pageType:"conceptual",pageTitle:"Pitfalls in Data Collection and Analysis"});
	pagesArr.push({pageId:"m01_030_010_340.html#slide-1-1",pageType:"conceptual",pageTitle:"Ethical Issues in Data Collection and Analysis",hasAudio:0});	

	pagesArr.push({pageId:"m01_030_010_350.html#slide-1-1",pageType:"last",pageTitle:"Summary",hasAudio:1});
	
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
	