module.exports = function(id) {
	var $ = Ti.UI.createWindow({
		backgroundColor : COLOR.LIGHTGREEN
	});
	console.log('Info: window orders opened ≈≈≈≈≈≈≈≈≈≈≈≈≈≈ ' + id);

	$.addEventListener('close', function(_event) {
		console.log('ordo window closed by event   ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈');
		_event.source = null;

	});
	$.addEventListener('open', function(_event) {
		if (Ti.Android) {
			var activity = _event.source.getActivity();
			activity.actionBar.onHomeIconItemSelected = onCloseFn;
			var АктйонБар = require('com.alcoapps.actionbarextras');
			function onCloseFn() {
				console.log('ordo window closed   from <-  ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈');
				_event.source.close();

			};
			АктйонБар.setTitle('Tierstimmenarchiv');
			АктйонБар.setFont('Helvetica-Bold');
			АктйонБар.setSubtitle('Class: ' + id);
			АктйонБар.displayUseLogoEnabled = false;
			АктйонБар.setStatusbarColor(COLOR.BROWN);
			_event.source.getActivity().actionBar.displayHomeAsUp = true;
			АктйонБар.backgroundColor = COLOR.DARKGREEN;
		}
		var TSA = new (require('model/tsa.adapter'))();
		var rows = TSA.getOrdersByClass(id).map(function(c) {
			var row = Ti.UI.createTableViewRow({
				height : Ti.UI.SIZE,
				hasChild : true,
				itemId : c.latin
			});
			row.add(Ti.UI.createImageView({
				defaultImage : '/assets/default.png',
				top : 0,
				left : 0,
				width : 100,
				touchEnabled : false,
				height : 'auto'
			}));
			row.add(Ti.UI.createLabel({
				left : 120,
				text : c.latin,
				top : 10,
				color : COLOR.DARKGREEN,
				width : Ti.UI.FILL,
				textAlign : 'left',
				touchEnabled : false,
				height : Ti.UI.SIZE,
				font : {
					fontSize : 22,
					fontWeight : 'bold'
				}
			}));
			row.add(Ti.UI.createLabel({
				left : 120,
				top : 40,
				text : c.de,
				color : COLOR.BROWN,
				touchEnabled : false,
				width : Ti.UI.FILL,
				textAlign : 'left',
				height : Ti.UI.SIZE,
				font : {
					fontSize : 18,

				}
			}));
			require('vendor/wikimedia.adapter').getSpeciesImage(c.latin, function(_image) {
				row.children[0].setImage(_image);
				row.children[0].setHeight(_image.height * 100 / _image.width);
				row.children[0].setWidth(100);
				
			});
			return row;
		});
		$.list = Ti.UI.createTableView({
			data : rows
		});
		$.add($.list);
		$.list.addEventListener('click', function(_e) {
			require('ui/families.window')(_e.row.itemId).open();
		});
	});
	return $;
};
