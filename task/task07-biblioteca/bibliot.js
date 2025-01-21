// Objeto biblioteca
const biblioteca = {
    nome: "Biblioteca Code Start",
    localizacao: "Pojecto Nova Vida",
    livros: [
      {
        titulo: "Verity",
        autor: "Collen Hoover",
        disponivel: true,
        categorias: ["Conto", "Aventura"]
      },
      {
        titulo: "É assim que acaba",
        autor: "Collen Hoover",
        disponivel: false,
        categorias: ["Conto", "Aventura"]
      },
      {
        titulo: "Código Limpo",
        autor: "Paulo Coelho",
        disponivel: true,
        categorias: ["Cientifico", "Tecnologia"]
      }
    ]
  };
  
  // Função para listar livros no HTML
  function renderizarLivros() {
    const listaLivros = document.getElementById("listaLivros");
    listaLivros.innerHTML = ""; // Limpa a lista antes de renderizar
  
    biblioteca.livros.forEach((livro, index) => {
      const item = document.createElement("li");
      item.textContent = `${livro.titulo} - ${livro.autor}- ${livro.categorias} (${livro.disponivel ? "Disponível" : "Indisponível"})`;
      listaLivros.appendChild(item);
    });
  }
  
  // Função para adicionar um novo livro
  function adicionarLivroNoHTML() {
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const disponivel = document.getElementById("disponivel").checked;
    const categorias = document.getElementById("categorias").value.split(",").map(cat => cat.trim());
  
    const novoLivro = { titulo, autor, disponivel, categorias };
    biblioteca.livros.push(novoLivro);
  
    renderizarLivros(); // Atualiza a lista de livros no HTML
  
    // Limpa os campos do formulário
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("disponivel").checked = false;
    document.getElementById("categorias").value = "";
  }
  
  // Inicializa a lista de livros ao carregar a página
  document.addEventListener("DOMContentLoaded", renderizarLivros);
  