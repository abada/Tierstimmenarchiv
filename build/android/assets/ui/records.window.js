module.exports=function(e){var t=Ti.UI.createWindow({backgroundColor:COLOR.LIGHTGREEN});t.listView=Ti.UI.createListView({sections:[Ti.UI.createListSection({})],templates:{template:require("TEMPLATES").animalsounds},defaultItemTemplate:"template"}),t.add(t.listView);var i=new(require("model/tsa.adapter")),a=i.getRecordsBySpecies(e);return console.log(a),t.listView.sections[0].items=a.map(function(e){return{properties:{itemId:e.itemId,accessoryType:Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE},deutscher_name:{text:e.deutscher_name,color:COLOR.DARKGREEN},autor:{text:e.autor},beschreibung:{text:e.beschreibung,color:COLOR.DARKGREEN},spectrogram:{image:e.spectrogram}}}),t.listView.addEventListener("itemclick",require("ui/player.window")),t.addEventListener("focus",function(e){t&&t.searchView&&t.searchView.animate({top:0},function(){Ti.Android&&Ti.UI.createNotification({message:"Geben Sie einen Suchbegriff ein."}).show(),t.searchView.focus()})}),t.addEventListener("close",function(e){}),t.addEventListener("blur",function(e){}),t.addEventListener("open",function(i){if(Ti.Android){var a=require("com.alcoapps.actionbarextras");a.setTitle("Tierstimmenarchiv"),a.setFont("Helvetica-Bold"),a.setSubtitle("Species: "+e),a.displayUseLogoEnabled=!1,a.setStatusbarColor(COLOR.BROWN),a.backgroundColor=COLOR.DARKGREEN,i.source.getActivity().actionBar.displayHomeAsUp=!0;var r=i.source.getActivity();r.actionBar.onHomeIconItemSelected=function(){t.close()}}}),require("vendor/versionsreminder")(),t};