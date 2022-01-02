function showTime() {
	var date = new Date()
	var h = date.getHours()
	var m = date.getMinutes()
	var s = date.getSeconds()
	var meridiem = ''

	//Trying Shorthand

	// Fixing the one digit thing

	h = h < 10 ? '0' + h : h
	// if (h < 10) h = '0' + h

	m = m < 10 ? '0' + m : m
	// if (m < 10) m = '0' + m

	s = s < 10 ? '0' + s : s
	// if (s < 10) s = '0' + s

	// the 12 hour clock

	// h == 0 ? h = 12 : h
	// if (h == 0) h = 12
	// if (h > 12) h -= 12
	// h > 12 ? meridiem = "PM" : meridiem = "AM"

	var time = h + ':' + m + ':' + s + ' ' + meridiem

	document.getElementById('display-clock').innerHTML = time
	document.getElementById('display-clock').textContent = time // Compatability for Firefox

    setTimeout(showTime, 1000) // To refresh the time every 1000ms so it looks like the time is running
    
    // Based on the hour, I will display a befitting image with a random picture API
    // Made many if statements to be extra specific with the time
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

showTime() // To call the function immediately when manually refreshed else because of setInterval it will take 1s to show
// setInterval(showTime, 1000) // To refresh the time every 1000ms so it looks like the time is running
