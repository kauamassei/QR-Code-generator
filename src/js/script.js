const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");


//Gerar qrcode

function generateQrCode() {
  const qrCodeInputValue = qrCodeInput.value; // busca o valor do input

  if (!qrCodeInputValue) return;

  qrCodeBtn.innerText = "Gerando código..."; // insere o texto no botao

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`; // gera o qrcode confome o valor do input

  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active"); // ativa o container para o css exibir 
    qrCodeBtn.innerText = "Código criado!"; // insere outro texto no botao
  });
}

qrCodeBtn.addEventListener("click", () => {
  generateQrCode(); // chama função quando clicada
});

qrCodeInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    generateQrCode(); // chama função com enter
  }
});

// Limpar área do input

qrCodeInput.addEventListener("keyup", () => {
    if (!qrCodeInput.value) {
        container.classList.remove("active"); // remove o container ativado
    qrCodeBtn.innerText = "Gerar QR Code"; // insere outro texto no botao
    }
})

// Botão navbar

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("open"); // Anima o botão hambúrguer
});
 