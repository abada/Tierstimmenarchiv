var Map=require("ti.map"),TSA=new(require("model/tsa.adapter")),АктйонБар;module.exports=function(e){var t=Ti.UI.createWindow();return require("gms.test")()&&(t.mapView=Map.createView({region:{latitude:0,longitude:0,latitudeDelta:50,longitudeDelta:50},mapType:Map.TERRAIN_TYPE,enableZoomControls:!1,compassEnabled:!1,userLocation:!1,userLocationButton:!1,mapToolbarEnabled:!1}),t.add(t.mapView),t.mapView.addEventListener("complete",function(){var i=TSA.getRecordsBySpeciesWithLatLng(e.species);t.mapView.setLocation(i.region),console.log("††††††††††††††††††††††††††††††††††††"),console.log(e.species),t.mapView.addAnnotations(i.records.map(function(e){return console.log(e.latitude+"    "+e.longitude),Map.createAnnotation(e)})),АктйонБар&&АктйонБар.setSubtitle(i.records.length+" Aufnahmen")})),t.addEventListener("open",function(i){if(Ti.Android){АктйонБар=require("com.alcoapps.actionbarextras"),АктйонБар.setTitle(e.species),АктйонБар.setFont("Helvetica-Bold"),АктйонБар.setSubtitle("Alle Aufnahmen"),АктйонБар.displayUseLogoEnabled=!1,АктйонБар.setStatusbarColor(COLOR.BROWN),АктйонБар.backgroundColor=COLOR.DARKGREEN,i.source.getActivity().actionBar.displayHomeAsUp=!0;var a=i.source.getActivity();a.actionBar.onHomeIconItemSelected=function(){t.close()}}}),t};