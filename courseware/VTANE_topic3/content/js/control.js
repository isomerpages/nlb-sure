function nextPage(){
    alert("next")
}

function prevPage(){
    alert("back")
}

var totalDuration=0;
var currentPosition=0;
var ChildIFRAME;
var scrubbing=false;
var playing=true;
var thisWindow=this;
var firstStart=true;
var currentTargetIndex=0;
var avatarPositionIndex=0;
var itemNumber=0;
var videoComplete=false;
var control = new function(){
    this.addControl = function(){
        if($(".control-holder").length>0)return;
        playing=true;
        scrubbing=false;
        videoComplete=false;
        var html="<div class='control-holder'>"
                    +"<div id='play-button' onclick='playVideo()'></div>"
                    +"<div id='pause-button' onclick='pauseVideo()'></div>"
                    +"<div id='prog-bar-wrapper' class='prog-class'><div id='prog-bar'></div></div>"
                    +"<div id='prog-trigger' class='prog-class'></div>"
                    +"<div id='prog-scrub'></div>"
                +"</div>";
        var id="#content";
        $(id).parent().append(html);
        
        var tm=0;
        $("#prog-trigger").click(function(e){
            var mouseX = e.pageX-50;
            var _totalWidth = $(this).width();
            
            $("#prog-bar").css({
                width: mouseX
            },100);
            var xpos=0;
            if(mouseX<$("#prog-scrub").width()/2)xpos=50;
            else xpos=mouseX+50-$("#prog-scrub").width()/2;
            $("#prog-scrub").css({
                left:xpos
            },100);

            
            seek();
            //if(ChildIFRAME.soundMedia)ChildIFRAME.soundMedia.stop();
            //ChildIFRAME.seek(tm,playing);
        });
        
        
        $("#prog-scrub").draggable({
            containment:"#prog-bar-wrapper",
            axis:"x",
            drag:function(){
                scrubbing=true;
                $("#prog-bar").css({
                    width:$("#prog-scrub").position().left-50+$("#prog-scrub").width()/2
                });
                
                seekTimeline();
                //if(ChildIFRAME.soundMedia)ChildIFRAME.soundMedia.stop();
                //if(ChildIFRAME.bgSoundMedia)ChildIFRAME.bgSoundMedia.stop();
            },
            stop:function(){
                scrubbing=false;
                seek();
                //ChildIFRAME.seek(tm,playing);
                //if(playing)ChildIFRAME.bgSoundMedia.play();
            }
        });
        resize();
    };  
    this.removeControl=function(){
        $(".control-holder").remove();
    }
    
    this.addLoadingPage=function(){
        $("#content").append("<div class='loading-bar'></div>");
        $(".loading-bar").fadeIn();
    }
    
    this.removeLoadingPage=function(){
        $(".loading-bar").fadeOut(function(){
            $(".loading-bar").remove();
        });
    }
    
    this.loadPage = function(path){
        //alert(path)
        control.addLoadingPage();
        control.removeControl();
        $("#pageHolder").attr("src",path);
    }
    this.gotoNextScene=function(){
        if(currentTargetIndex<itemNumber)currentTargetIndex = parseInt(avatarPositionIndex)+1;
        else currentTargetIndex = avatarPositionIndex = itemNumber-1;
        control.removeControl();
        $("#pageHolder").attr("src","content/navigation/index.html");
    }
};

function seekTimeline(){
    var current = $("#prog-bar").width()-$("#prog-scrub").width()/2;
    var total = $("#prog-bar-wrapper").width() - $("#prog-scrub").width();
    tm = parseInt((current/total)*totalDuration);
    if(playing)ChildIFRAME.timeline.play(tm);
    else ChildIFRAME.timeline.stop(tm);
}
function seek(){
    seekTimeline();
    ChildIFRAME.seek(tm,playing);
}

function resize(){
    $("#prog-bar-wrapper,#prog-trigger").css({
        width:$(".control-holder").width()-50-10
    })
}

//Global=================================================
function send(childIFrame){
    ChildIFRAME = childIFrame;
    
    ChildIFRAME.onresize = function(){
        resize();
    }
    
    totalDuration = ChildIFRAME.timeline.getDuration();
}


function updateTimeline(pos){
    if(scrubbing||!playing)return;
    $("#play-button").hide();
    $("#pause-button").show();
    currentPosition = pos;
    $("#prog-bar").css({
        width:$("#prog-scrub").width()/2+($("#prog-bar-wrapper").width()-$("#prog-scrub").width())*(currentPosition/totalDuration)
    });
    $("#prog-scrub").css({
        left:$("#prog-bar-wrapper").position().left + $("#prog-bar").width()-$("#prog-scrub").width()/2
    });
}

function completeTimeline(){
    videoComplete=true;
    //ChildIFRAME.timeline.stop(0);
    pauseVideo();
}
//=========================================================
function playVideo(){
    ChildIFRAME.timeline.play();
    playing=true;
    
    if(videoComplete){
        ChildIFRAME.timeline.play(0);
        videoComplete=false;
    }
    else{
        seek();
    }
    $("#play-button").hide();
    $("#pause-button").show();
   // if(ChildIFRAME.soundMedia)ChildIFRAME.soundMedia.play();
    //if(ChildIFRAME.bgSoundMedia)ChildIFRAME.bgSoundMedia.play();
}

function pauseVideo(){
    ChildIFRAME.timeline.stop();
    playing=false;
    seek();
    $("#play-button").show();
    $("#pause-button").hide();
    //try{
    //    if(ChildIFRAME.soundMedia)ChildIFRAME.soundMedia.pause();
    //    if(ChildIFRAME.bgSoundMedia)ChildIFRAME.bgSoundMedia.stop();
   // }
    //catch(e){
    //}
}



// FS SCORM - fscommand adapter for ADL SCORM 1.2 and Flash MX 2004 Learning Interactions
// version 1.0    08/19/03
// Modified by Andrew Chemey, Macromedia
// Based on FS SCORM adapater version 1.2.4:
// 		Fragments Copyright 2002 Pathlore Software Corporation All rights Reserved
// 		Fragments Copyright 2002 Macromedia Inc. All rights reserved.
// 		Fragments Copyright 2003 Click2learn, Inc. All rights reserved.
// 		Developed by Tom King, Macromedia, Leonard Greenberg, Pathlore, and Claude Ostyn, Click2learn, Inc.
// 		Includes code by Jeff Burton and Andrew Chemey, Macromedia (01/09/02)
// -----------------------------------------------------------------
// Change these preset values to suit your taste and requirements.
var g_bShowApiErrors = false; 	// change to true to show error messages
var g_bInitializeOnLoad = true; // change to false to not initialize LMS when HTML page loads
// Translate these strings if g_bShowApiErrors is true and you need to localize the application
var g_strAPINotFound = "Management system interface not found.";
var g_strAPITooDeep = "Cannot find API - too deeply nested.";
var g_strAPIInitFailed = "Found API but LMSInitialize failed.";
var g_strAPISetError = "Trying to set value but API not available.";
var g_strFSAPIError = 'LMS API adapter returned error code: "%1"\nWhen FScommand called API.%2\nwith "%3"';
var g_strDisableErrorMsgs = "Select cancel to disable future warnings.";
// Change g_bSetCompletedAutomatically to true if you want the status to be set to completed automatically when calling LMSFinish.
// Normally, this flag remains false if the Flash movie itself sets status to completed by sending a FSCommand to set status to "completed", "passed" or "failed" (both of which imply "completed")
var g_bSetCompletedAutomatically = false;
// This value is normally given by the LMS, but in case it is not this is the default value to use to determine passed/failed.
// Set this null if the Flash actionscript uses its own method to determine passed/fail, otherwise set to a value from 0 to 1 inclusive (may be a floating point value, e.g "0.75".
var g_SCO_MasteryScore = null; // allowable values: 0.0..1.0, or null
//==================================================================
// WARNING!!!
// Do not modify anything below this line unless you know exactly what you are doing!
// You should not have to change these two values as the Flash template presets are based on them.
var g_nSCO_ScoreMin = 0; 		// must be a number
var g_nSCO_ScoreMax = 100; 		// must be a number > nSCO_Score_Min
// Per SCORM specification, the LMS provided mastery score, if any, will override the SCO in interpreting whether the score should be interpreted when the pass/fail status is determined.
// The template tries to obtain the mastery score, and if it is available, to set the status to passed or failed accordingly when the SCO sends a score.
// The LMS may not actually make the determination until the SCO has been terminated.
// Default value for this flag is true. Set it to false if don't want to predict how the LMS will set pass/fail status based on the mastery score (the LMS will win in the end anyway).
var g_bInterpretMasteryScore = true;
// This script implements various aspects of common logic behavior of a SCO.
/////////// API INTERFACE INITIALIZATION AND CATCHER FUNCTIONS ////////
var g_nFindAPITries = 0;
var g_objAPI = null;
var g_bInitDone = false;
var g_bFinishDone = false;
var	g_bSCOBrowse = false;
var g_dtmInitialized = new Date(); // will be adjusted after initialize
var g_bMasteryScoreInitialized = false;
function AlertUserOfAPIError(strText) {
        if (g_bShowApiErrors) {
                var s = strText + "\n\n" + g_strDisableErrorMsgs;
                if (!confirm(s)){
                        g_bShowApiErrors = false
                }
        }
}
function ExpandString(s){
        var re = new RegExp("%","g")
        for (i = arguments.length-1; i > 0; i--){
                s2 = "%" + i;
                if (s.indexOf(s2) > -1){
                        re.compile(s2,"g")
                        s = s.replace(re, arguments[i]);
                }
        }
        return s
}
function FindAPI(win) {
        while ((win.API == null) && (win.parent != null) && (win.parent != win)) {
                g_nFindAPITries ++;
                if (g_nFindAPITries > 500) {
                        AlertUserOfAPIError(g_strAPITooDeep);
                        
                        return null;
                }
                win = win.parent;
        }
        return win.API;
}
function APIOK() {
        return ((typeof(g_objAPI)!= "undefined") && (g_objAPI != null))
}
function SCOInitialize() {
        var err = true;
        if (!g_bInitDone) {
                if ((window.parent) && (window.parent != window)){
                        g_objAPI = FindAPI(window.parent)
                }
                if ((g_objAPI == null) && (window.opener != null))	{
                        g_objAPI = FindAPI(window.opener)
                }
                if (!APIOK()) {
                        AlertUserOfAPIError(g_strAPINotFound);
                        err = false
                } else {
                        err = g_objAPI.LMSInitialize("");
                        if (err == "true") {
                                g_bSCOBrowse = (g_objAPI.LMSGetValue("cmi.core.lesson_mode") == "browse");						if (!g_bSCOBrowse) {
                                        if (g_objAPI.LMSGetValue("cmi.core.lesson_status") == "not attempted") {
                                                err = g_objAPI.LMSSetValue("cmi.core.lesson_status","incomplete")
                                        }
                                }
                        } else {
                                AlertUserOfAPIError(g_strAPIInitFailed)
                        }
                }
                if (typeof(SCOInitData) != "undefined") {
                        // The SCOInitData function can be defined in another script of the SCO
                        SCOInitData()
                }
                g_dtmInitialized = new Date();
        }
        g_bInitDone = true;
        return (err + "") // Force type to string
}
function SCOFinish() {
        if ((APIOK()) && (g_bFinishDone == false)) {
                SCOReportSessionTime()
                if (g_bSetCompletedAutomatically){
                        SCOSetStatusCompleted();
                }
                if (typeof(SCOSaveData) != "undefined"){
                        // The SCOSaveData function can be defined in another script of the SCO
                        SCOSaveData();
                }
                g_bFinishDone = (g_objAPI.LMSFinish("") == "true");
        }
        return (g_bFinishDone + "" ) // Force type to string
}
// Call these catcher functions rather than trying to call the API adapter directly
function SCOGetValue(nam)			{return ((APIOK())?g_objAPI.LMSGetValue(nam.toString()):"")}
function SCOCommit()					{return ((APIOK())?g_objAPI.LMSCommit(""):"false")}
function SCOGetLastError()		{return ((APIOK())?g_objAPI.LMSGetLastError():"-1")}
function SCOGetErrorString(n)	{return ((APIOK())?g_objAPI.LMSGetErrorString(n):"No API")}
function SCOGetDiagnostic(p)	{return ((APIOK())?g_objAPI.LMSGetDiagnostic(p):"No API")}
//LMSSetValue is implemented with more complex data management logic below
var g_bMinScoreAcquired = false;
var g_bMaxScoreAcquired = false;
// Special logic begins here
function SCOSetValue(nam,val){
        var err = "";
        if (!APIOK()){
                        AlertUserOfAPIError(g_strAPISetError + "\n" + nam + "\n" + val);
                        err = "false"
        } else if (nam == "cmi.core.score.raw") err = privReportRawScore(val)
        if (err == ""){
                        err = g_objAPI.LMSSetValue(nam,val.toString() + "");
                        if (err != "true") return err
        }
        if (nam == "cmi.core.score.min"){
                g_bMinScoreAcquired = true;
                g_nSCO_ScoreMin = val
        }
        else if (nam == "cmi.core.score.max"){
                g_bMaxScoreAcquired = true;
                g_nSCO_ScoreMax = val
        }
        return err
}
function privReportRawScore(nRaw) { // called only by SCOSetValue
        if (isNaN(nRaw)) return "false";
        if (!g_bMinScoreAcquired){
                if (g_objAPI.LMSSetValue("cmi.core.score.min",g_nSCO_ScoreMin+"")!= "true") return "false"
        }
        if (!g_bMaxScoreAcquired){
                if (g_objAPI.LMSSetValue("cmi.core.score.max",g_nSCO_ScoreMax+"")!= "true") return "false"
        }
        if (g_objAPI.LMSSetValue("cmi.core.score.raw", nRaw)!= "true") return "false";
        g_bMinScoreAcquired = false;
        g_bMaxScoreAcquired = false;
        if (!g_bMasteryScoreInitialized){
                var nMasteryScore = parseInt(SCOGetValue("cmi.student_data.mastery_score"),10);
                if (!isNaN(nMasteryScore)) g_SCO_MasteryScore = nMasteryScore
        }
        if ((g_bInterpretMasteryScore)&&(!isNaN(g_SCO_MasteryScore))){
        var stat = (nRaw >= g_SCO_MasteryScore? "passed" : "failed");
        if (SCOSetValue("cmi.core.lesson_status",stat) != "true") return "false";
        }
        return "true"
}
function MillisecondsToCMIDuration(n) {
//Convert duration from milliseconds to 0000:00:00.00 format
        var hms = "";
        var dtm = new Date();	dtm.setTime(n);
        var h = "000" + Math.floor(n / 3600000);
        var m = "0" + dtm.getMinutes();
        var s = "0" + dtm.getSeconds();
        var cs = "0" + Math.round(dtm.getMilliseconds() / 10);
        hms = h.substr(h.length-4)+":"+m.substr(m.length-2)+":";
        hms += s.substr(s.length-2)+"."+cs.substr(cs.length-2);
        return hms
}
// SCOReportSessionTime is called automatically by this script, but you may call it at any time also from the SCO
function SCOReportSessionTime() {
        var dtm = new Date();
        var n = dtm.getTime() - g_dtmInitialized.getTime();
        return SCOSetValue("cmi.core.session_time",MillisecondsToCMIDuration(n))
}
// Since only the designer of a SCO knows what completed means, another script of the SCO may call this function to set completed status.
// The function checks that the SCO is not in browse mode, and avoids clobbering a "passed" or "failed" status since they imply "completed".
function SCOSetStatusCompleted(){
        var stat = SCOGetValue("cmi.core.lesson_status");
        if (SCOGetValue("cmi.core.lesson_mode") != "browse"){
                if ((stat!="completed") && (stat != "passed") && (stat != "failed")){
                        return SCOSetValue("cmi.core.lesson_status","completed")
                }
        } else return "false"
}
// Objective management logic
function SCOSetObjectiveData(id, elem, v) {
        var result = "false";
        var i = SCOGetObjectiveIndex(id);
        if (isNaN(i)) {
                i = parseInt(SCOGetValue("cmi.objectives._count"));
                if (isNaN(i)) i = 0;
                if (SCOSetValue("cmi.objectives." + i + ".id", id) == "true"){
                        result = SCOSetValue("cmi.objectives." + i + "." + elem, v)
                }
        } else {
                result = SCOSetValue("cmi.objectives." + i + "." + elem, v);
                if (result != "true") {
                        // Maybe this LMS accepts only journaling entries
                        i = parseInt(SCOGetValue("cmi.objectives._count"));
                        if (!isNaN(i)) {
                                if (SCOSetValue("cmi.objectives." + i + ".id", id) == "true"){
                                        result = SCOSetValue("cmi.objectives." + i + "." + elem, v)
                                }
                        }
                }
        }
        return result
}
function SCOGetObjectiveData(id, elem) {
        var i = SCOGetObjectiveIndex(id);
        if (!isNaN(i)) {
                return SCOGetValue("cmi.objectives." + i + "."+elem)
        }
        return ""
}
function SCOGetObjectiveIndex(id){
        var i = -1;
        var nCount = parseInt(SCOGetValue("cmi.objectives._count"));
        if (!isNaN(nCount)) {
                for (i = nCount-1; i >= 0; i--){ //walk backward in case LMS does journaling
                        if (SCOGetValue("cmi.objectives." + i + ".id") == id) {
                                return i
                        }
                }
        }
        return NaN
}
// Functions to convert AICC compatible tokens or abbreviations to SCORM tokens
function AICCTokenToSCORMToken(strList,strTest){
        var a = strList.split(",");
        var c = strTest.substr(0,1).toLowerCase();
        for (i=0;i<a.length;i++){
                        if (c == a[i].substr(0,1)) return a[i]
        }
        return strTest
}
function normalizeStatus(status){
        return AICCTokenToSCORMToken("completed,incomplete,not attempted,failed,passed", status)
}
function normalizeInteractionType(theType){
        return AICCTokenToSCORMToken("true-false,choice,fill-in,matching,performance,sequencing,likert,numeric", theType)
}
function normalizeInteractionResult(result){
        return AICCTokenToSCORMToken("correct,wrong,unanticipated,neutral", result)
}
// Detect Internet Explorer
var g_bIsInternetExplorer = navigator.appName.indexOf("Microsoft") != -1;
// Handle fscommand messages from a Flash movie, remapping any AICC Flash template commands to SCORM if necessary

if (g_bInitializeOnLoad) {
    SCOInitialize();
}



