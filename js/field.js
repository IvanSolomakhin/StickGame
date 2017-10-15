function generateSticks(length) {
	if (length === 'short') {
		return Math.floor(Math.random() * (20 - 10 + 1) + 10);
	}
	if (length === 'medium') {
		return Math.floor(Math.random() * (30 - 20 + 1) + 20);
	}
	if (length === 'long') {
		return Math.floor(Math.random() * (50 - 30 + 1) + 30);
	}
}

function createRow(sticks) {
	const rowContainer = $('<div />', {
		class: 'rowContainer'
	});
	const label = $('<span />', {
		class: 'rowLabel',
		text: sticks
	});
	const row = $('<div />', {
		class: 'row'
	});
	for (let i = 0; i < sticks; i++) {
		row.append($('<span />', {
			class: 'stick',
			text: ' | '
		}))
	}
	rowContainer.append(label);
	rowContainer.append(row);
	return rowContainer;
}

function createField(multiRows, length, callback) {
	const field = $('.field');

	let rows = 1;
	if (multiRows) {
		rows = Math.floor(Math.random() * (10 - 2 + 1) + 2);
	}

	let i = -1;
	while (++i < rows) {

		let sticks = generateSticks(length);
		field.append(createRow(sticks));
	}
	callback();
}
