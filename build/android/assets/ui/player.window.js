const DURATION=2e4;module.exports=function(e){var t=Ti.Media.createAudioPlayer({url:e.mp3,allowBackground:!0,volume:1});t.addEventListener("progress",function(e){}),t.addEventListener("change",function(e){if(3==e.state){console.log(t.duration);var a=t.duration||DURATION;i.playerView.darker&&i.playerView.darker.animate({width:0,duration:a})}console.log(e.state)}),t.addEventListener("complete",function(e){i.close()});var i=Ti.UI.createWindow({backgroundColor:"transparent",title:"",theme:"Theme.NoActionBar",fullscreen:!0,screenOrientations:[Ti.UI.PORTRAIT]});return i.darker=Ti.UI.createView({backgroundColor:"#a030"}),i.add(i.darker),i.addEventListener("click",function(){i.close()}),i.playerView=Ti.UI.createView({backgroundColor:"black",bottom:0,height:200}),i.playerView.add(Ti.UI.createImageView({width:Ti.UI.FILL,height:Ti.UI.FILL,image:e.spectrogram})),i.playerView.darker=Ti.UI.createView({backgroundColor:"#e000",width:"100%",right:0}),i.playerView.add(i.playerView.darker),i.playerView.add(Ti.UI.createLabel({text:e.title,color:COLOR.LIGHTGREEN,bottom:160,opacity:.4,height:33,wordWrap:!1,ellipsize:Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_MARQUEE,font:{fontSize:24,fontWeight:"bold"}})),i.add(i.playerView),i.addEventListener("close",function(){t.pause(),t.stop(),t.release(),t=null}),t.start(),i};