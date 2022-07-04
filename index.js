
    let type = "webinar";
	const types = ["ebook", "webinar", "whitepaper"]
	const classes = ["primary", "warning", "blue"]
	let index = types.findIndex(test => test == type);
    alert(classes[index]);