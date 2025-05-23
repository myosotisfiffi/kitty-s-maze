document.getElementById("startBtn").addEventListener("click", () => {
    const current = document.getElementById("bg1");
    const next = document.getElementById("bg2");
  
    // Move a imagem atual para cima
    current.style.transform = "translateY(-100%)";
    // Move a próxima imagem para a tela
    next.style.transform = "translateY(0)";
  });
  