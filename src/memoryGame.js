class MemoryGame {
    constructor({ screen, util }) {
        this.screen = screen
        this.util = util

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

        this.defaultIcon = './files/default.png'

        this.hiddenHeroes = []
        this.selectedHeroes = []
    }

    //if you dont need this use static
    // if u need this dont use static
    start() {
        //get all methods of Screen
        this.screen.updateImages(this.initialHeroes)


        //bind to use 'this' of this class
        this.screen.settingButtonPlay(this.play.bind(this))
        this.screen.settingButtonCheckSelected(this.checkSelected.bind(this))
        this.screen.settingButtonShowAll(this.showAll.bind(this))

    }

    async shuffle() {
        const copies = this.initialHeroes
            .concat(this.initialHeroes)
            //create id cards
            .map(cards => {
                return Object.assign({}, cards, { id: Math.random() / 0.5 })
            })
            .sort(() => Math.random() - 0.5)

        this.screen.updateImages(copies)
        this.screen.showLoading()
        
        const idInterval = this.screen.startCounter()
        await this.util.timeout(3000)
        this.screen.clearCount(idInterval)
        this.hideHeroes(copies)
        this.screen.showLoading(false)
    }

    hideHeroes(heroes) {
        const hideHeroes = heroes.map(({ name, id }) => ({
            id,
            name,
            img: this.defaultIcon
        }))
        this.screen.updateImages(hideHeroes)
        this.hiddenHeroes = hideHeroes
    }

    checkSelected(id, name) {
        const item = { id, name }
        const selectedHeroes = this.selectedHeroes.length

        switch (selectedHeroes) {
            case 0:
                this.selectedHeroes.push(item)
                break;
            case 1:
                const [option1] = this.selectedHeroes

                this.selectedHeroes = []

                if (option1.name === item.name &&

                    option1.id !== item.id
                ) {
                    this.showHeroes(item.name)

                    this.screen.showMessage()

                    return;
                }

                this.screen.showMessage(false)

                break;
        }



    }

    showHeroes(heroName) {

        const { img } = this.initialHeroes.find(({ name }) => name === heroName)

        this.screen.showHeroes(heroName, img)

    }

    showAll() {

        const hiddenHeroes = this.hiddenHeroes
        for(const hero of hiddenHeroes) {
            const { img } = this.initialHeroes.find(item => item.name === hero.name)
            hero.img = img
        }
        this.screen.updateImages(hiddenHeroes)
    }

    play() {
        this.shuffle()
    }


}