// Recupera produtos do localStorage ou cria padrão
let produtos = JSON.parse(localStorage.getItem("produtos")) || [
  {id:"garagem1", nome:"Portão Garagem Gradeado", categoria:"portão-garagem", preco:"R$500", estoque:true},
  {id:"garagem2", nome:"Portão Garagem Duplo", categoria:"portão-garagem", preco:"R$650", estoque:true},
  {id:"industrial1", nome:"Portão Industrial Furado", categoria:"portão-industrial", preco:"R$1200", estoque:true},
  {id:"social1", nome:"Portão Social Liso", categoria:"portão-social", preco:"R$700", estoque:true},
  {id:"manutencao1", nome:"Manutenção de Portões", categoria:"manutenção", preco:"R$200", estoque:true}
];

const list = document.getElementById("admin-list");

function renderAdmin() {
  list.innerHTML = "";
  produtos.forEach(p => {
    const div = document.createElement("div");
    div.className = "admin-item" + (p.estoque ? "" : " fora");
    div.innerHTML = `
      <span>${p.nome} - ${p.categoria} - ${p.preco}</span>
      <button class="${p.estoque ? "estoque" : "fora"}" onclick="toggle('${p.id}')">
        ${p.estoque ? "Em estoque" : "Fora de estoque"}
      </button>
    `;
    list.appendChild(div);
  });
}

function toggle(id) {
  const produto = produtos.find(p => p.id === id);
  produto.estoque = !produto.estoque;
  salvar();
  renderAdmin();
}

function salvar() {
  localStorage.setItem("produtos", JSON.stringify(produtos));
}

function adicionarProduto() {
  const nome = document.getElementById("novoNome").value.trim();
  const categoria = document.getElementById("novaCategoria").value.trim();
  const preco = document.getElementById("novoPreco").value.trim();

  if(!nome || !categoria || !preco) {
    alert("Preencha todos os campos para adicionar um produto!");
    return;
  }

  const id = categoria.toLowerCase().replace(/ /g,"-") + (produtos.length + 1);
  produtos.push({id, nome, categoria, preco, estoque:true});
  salvar();
  renderAdmin();

  document.getElementById("novoNome").value = "";
  document.getElementById("novaCategoria").value = "";
  document.getElementById("novoPreco").value = "";
}

// Inicializa
renderAdmin();
