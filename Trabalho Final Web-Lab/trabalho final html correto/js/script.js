// DARKMODE

// DARKMODE
window.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');
    const icon = document.querySelector('.div-lua i');

    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        icon.classList.remove('ph-moon');
        icon.classList.add('ph-sun');
    } else {
        icon.classList.remove('ph-sun');
        icon.classList.add('ph-moon');
    }
});

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    const icon = document.querySelector('.div-lua i');
    icon.classList.toggle('ph-moon');
    icon.classList.toggle('ph-sun');
}


// ALERTA

function alerta() {
    alert("Ops! Página está em construção.");
}

if (window.location.pathname.includes("construcao.html")) {
    window.addEventListener("DOMContentLoaded", alerta);
}

// ACESSIBILIDADE ON E OFF

let tamanhoAtual = localStorage.getItem('tamanhoFonte')
                   ? parseInt(localStorage.getItem('tamanhoFonte'))
                   : 100;

document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.style.fontSize = tamanhoAtual + '%';
  atualizarStatus(); // exibe o status ao carregar
});

function aumentarFonte() {
  if (tamanhoAtual === 100) {
    tamanhoAtual = 120;
  } else {
    tamanhoAtual = 100;
  }

  document.documentElement.style.fontSize = tamanhoAtual + '%';
  localStorage.setItem('tamanhoFonte', tamanhoAtual);

  atualizarStatus(); // atualiza o texto visível
}

function atualizarStatus() {
  const status = document.getElementById("statusAcessibilidade");
  if (status) {
    status.textContent = (tamanhoAtual === 100) ? "Desligado" : "Ligado";
  }
}