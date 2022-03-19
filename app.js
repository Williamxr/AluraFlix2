function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value; //pegando o valor da caixa input
  if (filmeFavorito.endsWith(".jpg")) {
    //se o filme terminar com .jpg, a função será executada normalmente

    listarFilmesNaTela(filmeFavorito);
  } else {
  }
  document.getElementById("filme").value = ""; //limpando o campo de digitação depois que o filme for adicionado
}

function listarFilmesNaTela(filmeFavorito) {
  var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">"; //selecionando como a imagem vai aparecer na tela
  var elementoListaFilmes = document.getElementById("listaFilmes"); //pegando o id 'listaFilmes' para adicionar o filme na tela quando o botao for clicado
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito; //adicionando filme na tela sem que uma imagem se sobreponha sobre a outra
}
