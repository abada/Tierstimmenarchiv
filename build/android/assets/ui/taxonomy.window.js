module.exports=function(e){var t=Ti.UI.createWindow({backgroundColor:COLOR.LIGHTGREEN}),i=new(require("model/tsa.adapter"));return t.list=Ti.UI.createTableView({top:0}),t.add(t.list),t.addEventListener("focus",function(e){t.list.data.length||(t.list.data=i.getAllClasses().map(function(e){var t=Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,e.image).read(),i=Ti.UI.createTableViewRow({height:Ti.UI.SIZE,hasChild:!0,itemId:e.latin});return i.add(Ti.UI.createImageView({image:t,top:10,bottom:10,touchEnabled:!1,left:5,width:100,height:t.height/t.width*100})),i.add(Ti.UI.createLabel({left:120,text:e.latin,touchEnabled:!1,color:COLOR.DARKGREEN,font:{fontSize:22,fontWeight:"bold"}})),i}))}),t.list.addEventListener("click",function(e){require("ui/orders.window")(e.row.itemId).open()}),t};