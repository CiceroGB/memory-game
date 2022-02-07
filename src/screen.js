const ID_CONTENT = 'content'
class Screen {

  static getHtml(item) {
    return `
      <div class="col-md-3">
        <div class="card" style="width: 50%;">
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

}