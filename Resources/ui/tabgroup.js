Ti.UI.backgroundColor = COLOR.BROWN;
module.exports = function() {
	var $ = Ti.UI.createTabGroup({
		fullscreen : false,
		swipeable : true,
		backgroundColor : COLOR.DARKGRREEN,
		backgroundSelectedColor : COLOR.BROWN,
		activeTabIconTint : COLOR.BROWN,
		smoothScrollOnTabClick : false,
		tintColor : COLOR.BROWN,
		theme : 'Theme.WithActionBar',
		tabs : [Ti.UI.createTab({
			title : 'Suche',
			backgroundColor : '#092B55',
			icon : '/assets/magnify.png'
		}), Ti.UI.createTab({
			title : 'Taxonomie',
			window: require('ui/taxonomy.window')(),
			icon : '/assets/orgchart.png',
			backgroundColor : '#092B55'
		}), Ti.UI.createTab({
			title : 'Karte',
			icon : '/assets/map.png',
			backgroundColor : '#092B55'
		})]
	});
	$.addEventListener('open', function(_event) {
		$.tabs[0].window = require('ui/search.window')();
		$.tabs[2].window = require('ui/map.window')();
		if (Ti.Android) {
			var АктйонБар = require('com.alcoapps.actionbarextras');
			function onCloseFn() {
				$.close();
			};
			АктйонБар.setTitle('Tierstimmenarchiv');
			АктйонБар.setFont('Helvetica-Bold');
			АктйонБар.setSubtitle('des Museums für Naturkunde Berlin');
			АктйонБар.displayUseLogoEnabled = false;
			АктйонБар.setStatusbarColor(COLOR.BROWN);
			_event.source.getActivity().actionBar.displayHomeAsUp = false;
			var activity = _event.source.getActivity();
			АктйонБар.backgroundColor = COLOR.DARKGREEN;
			
			
			activity.onCreateOptionsMenu = function(_menuevent) {
				_menuevent.menu.clear();
				_menuevent.menu.add({
					title : 'Aufnahme',
					itemId : 1,
					showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM,
					icon : Ti.App.Android.R.drawable.ic_action_mic
				}).addEventListener("click", function(_e) {
					require('ui/recorder.window')().open();
				});
			};
		}
	});
	if (Ti.Android) $.activeTab = 1;
	console.log($.apiName);
	$.open();
};
