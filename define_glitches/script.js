function times() {
	var body = document.querySelector('body')
	let colors = Array("red", "green", "blue")
	if (document.querySelector('[align]').getAttribute('class') === 'скрыт') {
		setTimeout(function() {
			body.setAttribute('class', colors[0])
			if (document.querySelector('[align]').getAttribute('class') !== 'скрыт') {
				body.setAttribute('class', '')
			}
		}, 2000)
		setTimeout(function() {
			body.setAttribute('class', colors[1])
			if (document.querySelector('[align]').getAttribute('class') !== 'скрыт') {
				body.setAttribute('class', '')
			}
		}, 4000)
		setTimeout(function() {
			body.setAttribute('class', colors[2])
			times()
			if (document.querySelector('[align]').getAttribute('class') !== 'скрыт') {
				body.setAttribute('class', '')
			}
		}, 6000)
	}
	document.onclick = function() {
		document.querySelector('[align]').classList.toggle('скрыт')
	}
}
document.onclick = function() {
	document.querySelector('[align]').setAttribute('class', 'скрыт')
	if (document.querySelector('[align]').getAttribute('class') === 'скрыт') {
		times()
	}
}