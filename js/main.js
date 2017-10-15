$(function () {

	$('#play').on('click', function () {
		$('.welcomeContainer').hide();
		$('.settingsContainer').show();
	});

	$('#start').on('click', function () {
		$('.settingsContainer').hide();
		$('.gameContainer').show();
		initEvents();
		restart();
	})
});

function restart() {
	prepareGame(function () {
		$(document).keypress(function(e) {
			if(e.which === 13) {

				let choice;
				let loser = null;

				playerMove(function (playerChoice) {
					choice = playerChoice;
					loser = checkEnd('Player');
				});

				if (choice && !loser) {
					AI(choice);
					loser = checkEnd('AI');
				}
				if (loser) {
					gameEnd(loser);
				}
			}
		});
	});
}

function gameEnd(loser) {
	const logContainer = $('.logContainer');

	logContainer.empty();

	logContainer.append($('<p />', {
		text: loser + ' Lose!'
	}));
	clearLog(logContainer);
	restart();
}

function initEvents() {

	$('#inputNum').on('input', function () {

		let val = parseInt($(this).val());
		const rowLength = $('.field .rowContainer:last-child .row').children().length;

		$('span').css('color', 'white');

		if (val > 3) {
			$(this).val(3);
		}
		else if (val < 1) {
			$(this).val(1);
		}

		val = parseInt($(this).val());
		if (val > rowLength) {
			$(this).val(rowLength);
			val = rowLength;
		}

		const lastRow = $('.field .row:last-child span');
		if (val) {
			lastRow.slice(-val).css("color", "red");
		}

	});
}

function playerMove(callback) {
	const val = parseInt($('#inputNum').val());
	if (val && val > 0 && val < 4) {
		addLog(val, 'Player');
		removeSticks(val);
		return callback(val);
	}
	clearInput();
	callback();
}

function removeSticks(val) {
	const lastRow = $('.field .rowContainer:last-child .row span');

	lastRow.slice(-val).remove();
	const rowLength = getLastRowLength();
	$('.field .rowContainer:last-child .rowLabel').text(rowLength);
	if (rowLength === 0) {
		$('.field .rowContainer:last-child').remove();
	}
	clearInput();
}

function prepareGame(callback) {

	const multiRows = $('#multiRows').prop('checked');
	const gameLength = $('#gameLength').find(':selected').val();

	createField(multiRows, gameLength, callback);
}
