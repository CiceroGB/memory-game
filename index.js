function onLoad() {

    const hero = {
        img: './files/batman.png',
        name: 'batman'
    }

    Screen.updateImages([
        hero,
        hero,
        hero,
        hero
    ])

}

window.onload = onLoad