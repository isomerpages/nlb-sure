/**
 * ...
 * @author Milbert Cale@Playware Studios
 */
var timeline;
var soundMedia;
var soundSFX;
var cb;
var bgSoundMedia;
var type;
var soundLibrary;
var bgSoundLibrary;
function init(sym){
    timeline = sym;
    type = (document.location.search.substring(1).split("&")[0].split("=")[1]);
    if(this.parent){
        if(type=="video")this.parent.control.addControl();
        this.parent.send(this);
        this.parent.control.removeLoadingPage();
    }

}

function seek(tm,play){
    if(soundMedia)soundMedia.unload();
    if(bgSoundMedia)bgSoundMedia.unload();
    if(!play){
        return;
    }
    for(var i=0;i<soundLibrary.length;i++){
        if((soundLibrary[i].offset*1000)<tm&&soundLibrary[i].offset*1000 + soundLibrary[i].duration*1000>tm){
            var pos = tm-soundLibrary[i].offset*1000;
            soundMedia = new Howl({
                urls:['media/'+soundLibrary[i].url+'.mp3','media/'+soundLibrary[i].url+'.ogg'],
                onload:function(){
                    if(!play)soundMedia.pause();
                    else soundMedia.play();
                    soundMedia.pos(parseInt(pos/1000));
                }
            });
            break;
        }
    }
    
    for(var i=bgSoundLibrary.length-1;i>=0;i--){
        if((bgSoundLibrary[i].offset*1000)<tm){
            bgSoundMedia = new Howl({
                urls:['media/'+bgSoundLibrary[i].url+'.mp3','media/'+bgSoundLibrary[i].url+'.ogg'],
                loop:true,
                onload:function(){
                    if(!play)bgSoundMedia.pause();
                    else bgSoundMedia.play();
                }
            });
            break;
        }
    }
}



function playBGSound(fn){
    if(bgSoundMedia)bgSoundMedia.unload();
    bgSoundMedia = new Howl({
        urls:['media/'+fn+'.mp3','media/'+fn+'.ogg'],
        autoplay:true,
        loop:true
    });
}

function stopBGSound(){
   //if(bgSoundMedia)bgSoundMedia.unload();
}

function playSound(fn,sym,callback){
   if(soundMedia)soundMedia.unload();
   if(sym)timeline=sym;
   cb=callback;
    soundMedia = new Howl({
        urls:['media/'+fn+'.mp3','media/'+fn+'.ogg'],
        onload:function(){
            soundMedia.play();
            timeline.play();
        },
        onend:function(){
            //soundMedia=null;
            if(cb)cb();
        }
    });
    //soundMedia.play();
    //soundMedia.pos(1);
    if(this.parent.muted)Howler.mute();
}

function playSFX(fn){
    if(soundSFX)soundSFX.unload();
    soundSFX = new Howl({
        urls:['media/'+fn+'.mp3','media/'+fn+'.ogg'],
        onload:function(){
            soundSFX.play();
        }
    });
    if(this.parent.muted)Howler.mute();
}
window.onresize = function(){
    //general.monitorScale(this);
};

function hidePauseButton(){
     if(this.parent.hidePauseButton)this.parent.hidePauseButton();
}

function stopSound(){
    //if(soundMedia)soundMedia.unload();
}
function setScript(str){
    if(this.parent.setScript)this.parent.setScript(str);
}

function showContinue(){
    if(this.parent.showContinue)this.parent.showContinue();
}

function markComplete(){
    if(this.parent.markComplete)this.parent.markComplete();
}
function closeVideo(){
    this.parent.$("#extraContentHolderID").hide();
    this.parent.$("#extraContentHolderID").attr("src","");
    this.parent.$("#contentHolderID")[0].contentWindow.videoCloseInvokedEvent();
}

function updateTimeline(){
    //console.log( parseInt(this.parent.updateTimeline));
   if(this.parent.updateTimeline) this.parent.updateTimeline(timeline.getPosition());
}

function stopTimeline(){

}

function startTimeline(){

}

function completeTimeline(){
    if(this.parent.completeTimeline) this.parent.completeTimeline();
}

function nextPart(link){
    if(this.parent){
        this.parent.control.loadPage(link);
    }
}

function continueToNextScene(){
    if(this.parent.control.gotoNextScene)this.parent.control.gotoNextScene();
}

function stopMusic(){
    if(soundMedia)soundMedia.pause();
    if(bgSoundMedia)bgSoundMedia.pause();
}

function playMusic(){
    if(soundMedia)soundMedia.play();
    if(bgSoundMedia)bgSoundMedia.play();
}