function onLoad() {

    const dependences = {
        screen: Screen
    }

    const memoryGame = new MemoryGame(dependences)
    memoryGame.start()
}

window.onload = onLoad