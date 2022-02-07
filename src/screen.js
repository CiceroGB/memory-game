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

}