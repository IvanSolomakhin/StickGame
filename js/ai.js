function manage_st(st, playerChoice) {
	let num;

	if (st > 8) {
		return (4 - playerChoice)
	}
	if (st === 8) {
		return 3;
	}
	if (st === 7) {
		return 2;
	}
	if (st === 6) {
		return 1;
	}
	if (st <= 4) {
		num = 1;
		while (st - num !== 1 && st - num !== 0) {
			num++;
		}
		return num;
	}
	return (1);
}

function AImove(st, playerChoice) {
	let num;

	const off = st % 4;
	if (off > 1) {
		num = 1;
		while (off - num !== 1) {
			num++;
		}
		return num;
	}
	return manage_st(st, playerChoice);
}

function AI(playerChoice) {
	const lastRow = $('.field .rowContainer:last-child .row span');
	let rowLength = getLastRowLength();
	const AI_choice = AImove(rowLength, playerChoice);
	removeSticks(AI_choice);
	addLog(AI_choice, 'AI');
}
