class MemoryGame {
    constructor({ screen }) {
        this.screen = screen

        this.initialHeroes = [
            {
                img: "./files/batman.png",
                name: "batman"
            },
            {
                img: "./files/flash.png",
                name: "flash"
            },
            {
                img: "./files/spiderman.png",
                name: "spiderman"
            },
            {
                img: "./files/wolverine.png",
                name: "wolverine"
            },

        ]

    }

    //if you dont need this use static
    // if u need this dont use static
    start() {
        //get all methods of Screen
        this.screen.updateImages(this.initialHeroes)

        //bind to use 'this' of this class
        this.screen.settingButtonPlay(this.play.bind(this))

    }

    shuffle() {
        const copies = this.initialHeroes
            .concat(this.initialHeroes)
            //create id cards
            .map(cards => {
                return Object.assign({}, cards, { id: Math.random() / 0.5 })
            })

            .sort(() => Math.random() - 0.5)

        this.screen.updateImages(copies)
    }

    play() {
        this.shuffle()
    }


}