const search = document.getElementById("searchInput");
const produtos = document.querySelectorAll(".produto");

if (search) {
  search.addEventListener("keyup", () => {
    const texto = search.value.toLowerCase();
    produtos.forEach(produto => {
      produto.style.display =
        produto.dataset.nome.includes(texto) ? "block" : "none";
    });
  });
}

function filtrar(categoria) {
  produtos.forEach(produto => {
    produto.style.display =
      categoria === "todos" || produto.dataset.cat === categoria
        ? "block"
        : "none";
  });
}
