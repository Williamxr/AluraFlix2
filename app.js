function adicionarFilme() {
  var campoFilmeFavorito = document.getElementById("filme").value;
  var elementoFilmeFavorito = "<img src=" + campoFilmeFavorito + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}
