Ti.Map=require("ti.map"),module.exports=function(){var e=Ti.Map.isGooglePlayServicesAvailable();if(e!=Ti.Map.SUCCESS){var i="GooglePlayService ";switch(e){case Ti.Map.SERVICE_MISSING:i+="ist nicht installiert.";break;case Ti.Map.SERVICE_VERSION_UPDATE_REQUIRED:i+="ist nicht in aktueller Version.";break;case Ti.Map.SERVICE_DISABLED:i+="ist abgeschaltet.";break;case Ti.Map.SERVICE_INVALID:i+="kann sich nicht bei Google anmelden.";break;default:alert("Unbekannter Fehler.")}i+="\nDeswegen kann keine Karte angezeigt werden. Bitte installieren Sie die neueste Version von GMS.\n\nGegebenenfalls müssen Sie ein GoogleKonto anlegen.";var t=Ti.UI.createAlertDialog({message:i,ok:"Ok",androidView:Ti.UI.createImageView({image:"/images/gms.png",width:Ti.UI.FILL,height:"auto"}),title:"Problem mit GoogleMaps"});t.show(),t.addEventListener("click",function(){try{Ti.Android.currentActivity.startActivity(Ti.Android.createIntent({action:Ti.Android.ACTION_VIEW,data:"market://details?id=com.google.android.gms"}))}catch(e){}})}return e==Ti.Map.SUCCESS?!0:!1};