function onLoad() {

    const hero = {
        img: './files/batman.png',
        name: 'batman'
    }

    const htmlCode = Screen.getHtml(hero)
    Screen.contentChange(htmlCode.concat(htmlCode))


}

window.onload = onLoad