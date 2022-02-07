const ID_CONTENT = 'content'
const ID_PLAY_BTN = 'play'
const ID_MESSAGE = 'message'
const INVISIBLE_CLASS = 'invisible'
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
        <div class="card m-4" style="width: 50%;"onclick="window.checkSelected('${item.id}', '${item.name}')">
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
    setTimeout(() => { elemento.classList.add(INVISIBLE_CLASS) }, 1000)

  }


}