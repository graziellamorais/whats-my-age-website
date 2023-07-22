function verifyAge() {
    var d = new Date()
    var year = d.getFullYear()
    var yform = document.getElementById('txtyear')
    var result = document.querySelector('div#result')
    if (yform.value.length == 0 || Number(yform.value) > year) {
        window.alert('[ERROR] Verify your infos and try again')
    } else {
        var sform = document.getElementsByName('radsex')
        var age = year - Number(yform.value)
        var sex = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'image')
        if (sform[0].checked) {
            sex = 'male'
            if (age >= 0 && age < 10) {
                // Kid
                img.setAttribute('src', 'images/babyboy.jpeg')
            } else if (age < 21) {
                // Teen
                img.setAttribute('src', 'images/teenboy.jpeg')
            } else if (age < 50) {
                // Adult
                img.setAttribute('src', 'images/adultmale.jpeg')
            } else {
                // Old
                img.setAttribute('src', 'images/oldman.jpeg')
            }
        } else if (sform[1].checked) {
            sex = 'female'
            if (age >= 0 && age < 10) {
                // Kid
                img.setAttribute('src', 'images/babygirl.jpeg')
            } else if (age < 21) {
                // Teen
                img.setAttribute('src', 'images/teengirl.jpeg')
            } else if (age < 50) {
                // Adult
                img.setAttribute('src', 'images/adultfemale.jpeg')
            } else {
                // Old
                img.setAttribute('src', 'images/oldwoman.jpeg')
            }
        }
        result.innerHTML = `You're a ${age} years old ${sex}.`
        result.appendChild(img)
    }
}