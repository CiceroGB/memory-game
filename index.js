function onLoad() {

    const dependences = {
        screen: Screen,
        util: Util
    }

    const memoryGame = new MemoryGame(dependences)
    memoryGame.start()
}

window.onload = onLoad