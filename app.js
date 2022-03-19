function adicionarFilme() {
  var campoFilmeFavorito = document.getElementById("filme").value; //pegando o valor da caixa input
  var elementoFilmeFavorito = "<img src=" + campoFilmeFavorito + ">"; //selecionando como a imagem vai aparecer na tela
  var elementoListaFilmes = document.getElementById("listaFilmes"); //pegando o id 'listaFilmes' para adicionar o filme na tela quando o botao for clicado
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito; //adicionando filme na tela sem que uma imagem se sobreponha sobre a outra

  campoFilmeFavorito.value = ""; //limpando o campo de digitação depois que o filme for adicionado
}
