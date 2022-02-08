const util = Util

const ID_CONTENT = 'content'
const ID_PLAY_BTN = 'play'
const ID_MESSAGE = 'message'
const INVISIBLE_CLASS = 'invisible'
const ID_LOADING = 'loading'
const ID_COUNTER = 'counter'
const ID_BTN_SHOW_ALL = 'showAll'
const MESSAGES = {
  success: {
    text: 'Match',
    class: 'alert-sucess'
  },
  err: {
    text: 'Fail!',
    class: 'alert-danger'
  }
}
class Screen {

  static getHtml(item) {
    return `
      <div class="col-md-3 ">
        <div class="card m-4"onclick="window.checkSelected('${item.id}', '${item.name}')">
          <img src="${item.img}" name=${item.name} class="card-img-top" alt="...">
        </div>
      </div>
      `
  }

  static contentChange(htmlCode) {
    const content = document.getElementById(ID_CONTENT)
    content.innerHTML = htmlCode
  }

  static createStringHtml(itens) {
    return itens.map(item => Screen.getHtml(item)).join('')

  }

  static updateImages(itens) {
    const htmlCode = Screen.createStringHtml(itens)
    Screen.contentChange(htmlCode)
  }

  static settingButtonPlay(functionOnCLick) {
    const playBtn = document.getElementById(ID_PLAY_BTN)
    playBtn.onclick = functionOnCLick
  }

  static settingButtonCheckSelected(functionOnCLick) {
    window.checkSelected = functionOnCLick
  }

  static settingButtonShowAll(funcaoOnClick) {
    const btnShowAll = document.getElementById(ID_BTN_SHOW_ALL)
    btnShowAll.onclick = funcaoOnClick
}

  static showHeroes(heroName, img) {
    const htmlElements = document.getElementsByName(heroName)
    htmlElements.forEach(item => (item.src = img))
  }

  static async showMessage(success = true) {
    const elemento = document.getElementById(ID_MESSAGE)
    if (success) {
      elemento.classList.remove(MESSAGES.err.class)
      elemento.classList.add(MESSAGES.success.class)
      elemento.innerText = MESSAGES.success.text
    }
    else {
      elemento.classList.remove(MESSAGES.success.class)
      elemento.classList.add(MESSAGES.err.class)
      elemento.innerText = MESSAGES.err.text
    }
    elemento.classList.remove(INVISIBLE_CLASS)

    await util.timeout(1000)
    elemento.classList.add(INVISIBLE_CLASS)

  }

  static showLoading(show = true) {
    const loading = document.getElementById(ID_LOADING)
    if (show) {
      loading.classList.remove(INVISIBLE_CLASS)
      return;
    }
    loading.classList.add(INVISIBLE_CLASS)
  }

  static startCounter() {
    let maxCount = 3
    const counterElement = document.getElementById(ID_COUNTER)

    const findText = "$$counter"
    const defaultText = `Starting in ${findText} seconds...`

    const updateText = () =>
      (counterElement.innerHTML = defaultText.replace(findText, maxCount--))

    updateText()
    const idInterval = setInterval(updateText, 1000)
    return idInterval
  }

  static clearCount(idInterval){
    clearInterval(idInterval)
    document.getElementById(ID_COUNTER).innerHTML = ""
  }
}