var versionCompare=function(e,t){var a,n,i,r=(""+e).split("."),s=(""+t).split("."),o=Math.min(r.length,s.length);for(i=0;o>i;i++)if(a=i?parseFloat("0."+r[i],10):parseInt(r[i],10),n=i?parseFloat("0."+s[i],10):parseInt(s[i],10),isNaN(a)&&(a=r[i]),isNaN(n)&&(n=s[i]),a!=n)return a>n?1:n>a?-1:NaN;return r.length===s.length?0:r.length<s.length?-1:1};module.exports=function(){var e=Ti.App.getVersion(),t=(arguments[0]||{},"https://play.google.com/store/apps/details?id="+Ti.App.getId()),a=Ti.Network.createHTTPClient({onerror:function(){console.log("Warning: no connection to playstore "+e)},onload:function(){var a=/itemprop="softwareVersion">(.*?)</m.exec(this.responseText);if(!a)return void console.log("Warning: no connection to playstore "+e);var n=a[1].replace(/\s+/g,"");switch(console.log("Store=["+n+"] app=["+Ti.App.getVersion()+"]"),versionCompare(Ti.App.getVersion(),n)){case-1:var i=Ti.UI.createAlertDialog({cancel:1,buttonNames:["Zum Playstore","Abbruch"],message:"Es gibt eine neue Version in Playstore.\n\nDiese App auf Deinem "+Ti.Platform.model+" ist in Version  "+Ti.App.getVersion()+"\n\nIm Playstore  gibt es schon  "+n+" und wartet auf Dich.\n\nWillst Du erneuern?",title:"Neues Tierstimmenarchiv"});i.show(),i.addEventListener("click",function(e){e.index!=e.source.cancel&&Ti.Platform.openURL(t)});break;case 1:Ti.Android&&Ti.UI.createNotification({message:Ti.App.getName()+" ist neuer als neu … ("+Ti.App.getVersion()+")"}).show();break;case 0:break;default:console.log("Warning: versions compare has error")}}});a.open("GET",t),a.send()};