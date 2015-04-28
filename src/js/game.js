app.game = function () {

	app.spotArray = ['','','','','','','','',''];

	var clickedBlock;

	console.log($('.game-block'));

	app.placeXMove = function (num) {
	    app.spotArray.splice(num,1,'X');
	    clickedBlock = num;
	    // console.log(app.spotArray[num]);
	    // app.counterWin();
	    return app.spotArray[num];
	}

	app.placeOMove = function (num) {
	    app.spotArray.splice(num,1,'O');
	    clickedBlock = num;
	    // console.log(app.spotArray[num]);
	    block = $('#' + (num + 1));
	    block.html('O');
	    return app.spotArray[num];
	}

	$('.game-block').on('click', function() {
		var block = $(this);
		block.html('X');
	    app.placeXMove(block.attr('id'));
	});

	var blocks = $('.game-block');

	function styleOs() {
	    for (var i = blocks.length - 1; i >= 0; i--) {
	        if (blocks[i].innerHTML === 'O') {
	            blocks[i].style.paddingRight = 2 + '%'
	            blocks[i].style.paddingLeft = 0 + '%'
	        }
	    };
	}






};

app.game();

