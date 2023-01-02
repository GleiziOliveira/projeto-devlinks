function toggleMode() {
  const html = document.documentElement

  /* Função resumida usando um atributo ja existente*/

  html.classList.toggle("light")

  /* função completa 
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */

  //pegar a tag imagem

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  const text = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    text.setAttribute(
      "alt",
      "Foto de Gleizi Oliveira, séria, usando blusa azul, óculos e o fundo tem plantas e luz verde"
    )
  } else {
    text.setAttribute(
      "alt",
      "Foto de Gleizi Oliveira, sorrindo usando blusa azul, óculos e o fundo tem plantas e luz verde"
    )
  }
}
