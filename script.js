
const modalCadastro = document.getElementById("modalCadastro");
const btnCadastrar = document.getElementById("btnCadastrar");
const btnCancelar = document.getElementById("btnCancelar");
const formJogo = document.getElementById("formJogo");
const listarJogos = document.getElementById("listarJogos");
const mensagemVazia = document.getElementById("mensagemVazia");

btnCadastrar.addEventListener("click", () => {
    modalCadastro.showModal();
});
btnCancelar.addEventListener("click", () => {
    modalCadastro.close();
    formJogo.reset();
});
function criarCard(titulo_jogo, plataforma, preco, imagem) {
    mensagemVazia.hidden = true;
    const card = document.createElement("article");
    card.classList.add("card-jogo");
    const capa = document.createElement("div");
    capa.classList.add("capa");
    const imagemCapa = document.createElement("img");
    imagemCapa.src = imagem;
    capa.appendChild(imagemCapa);
    const info = document.createElement("div");
    info.classList.add("info-jogo");
    const titulo = document.createElement("h3");
    titulo.textContent = titulo_jogo;
    const pPlataforma = document.createElement("p");
    pPlataforma.textContent = "Plataforma: " + plataforma;
    const valor = document.createElement("strong");
    valor.classList.add("preco");
    valor.textContent = Number(preco).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    info.append(titulo, pPlataforma, valor);
    card.append(capa, info);
    listarJogos.appendChild(card);
}
formJogo.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const tituloVal = document.getElementById("titulo_jogo").value;
    const plataformaVal = document.getElementById("plataforma").value;
    const desenvolvedoraVal = document.getElementById("desenvolvedora").value;
    const imagemVal = document.getElementById("imagem").value;
    const precoVal = document.getElementById("preco").value;
    criarCard(tituloVal, plataformaVal, precoVal, imagemVal);
    modalCadastro.close();
    formJogo.reset();
});
