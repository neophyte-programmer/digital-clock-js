function showTime() {
    var date = new Date()
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()

    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s

    document.getElementById('hour').innerHTML = h
    document.getElementById('minute').innerHTML = m
    document.getElementById('seconds').innerHTML = s
    setTimeout(showTime, 1000)
 
    if (h > 0 && h < 6) {
		document.body.style.backgroundImage =
			"url('https://source.unsplash.com/1600x900/?dawn' )"
	} else if (h > 6 && h < 12) {
		document.body.style.backgroundImage =
			"url('https://source.unsplash.com/1600x900/?morning' )"
	} else if (h > 12 && h < 16) {
		document.body.style.backgroundImage =
			"url('https://source.unsplash.com/1600x900/?clouds,sun' )"
	} else if (h > 16 && h < 18) {
		document.body.style.backgroundImage =
			"url('https://source.unsplash.com/1600x900/?sunset' )"
	} else {
		document.body.style.backgroundImage =
			"url('https://source.unsplash.com/1600x900/?night' )"
	}
    
}

showTime()
