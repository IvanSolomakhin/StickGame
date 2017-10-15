function getLastRowLength() {
	return $('.field .rowContainer:last-child .row').children().length;
}

function clearInput() {
	const input = $('#inputNum');
	input.val('');
	$('span').css('color', 'white');
}

function checkEnd(who) {
	if ($('.field .rowContainer:last-child').children().length < 1) {
		return who;
	}
	return null;
}

function addLog(num, who) {
	const logContainer = $('.logContainer');
	let text = who + ' removed ' + num;
	if (num > 1) {
		text = text + ' sticks';
	} else {
		text = text + ' stick'
	}

	logContainer.append($('<p />', {
		text
	}));
	clearLog(logContainer)
}

function clearLog(logContainer) {
	if (logContainer.children().length > 2) {
		logContainer.children()[0].remove();
	}
}
