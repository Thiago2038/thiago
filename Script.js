function toggleMenu() {
    document.querySelector(".nav-links").
    classList.topggle("show");
}

//Validacão do Formulário
document.getElementById("contactForm").
addEventListener("submit", function(event){

});

     event.preventDefault();

     let nome = document.getElementById
     ("nome").value.trim();
     let Email = document.getElementById
     ("Email").value.trim();
     let mensagem = document.getElementById
     ("mensagem").value.trim();
     let feedback = document.getElementById
     ("feedback");

      // Validação: Verifica se os campos estão vazios
      if (nome === "" || email === "" || mensagem === "") {
        feedback.innerHTML = "Por favor, preencha todos os campos.";
        feedback.style.color = "red"; // Mostra a mensagem de erro em vermelho
        return; // Interrompe a execução se faltar algum campo
    }

    // Validação básica de e-mail (formato simples)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        feedback.innerHTML = "Por favor, insira um e-mail válido.";
        feedback.style.color = "red";
        return;
    }

    // Exibe os valores no console
    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("Mensagem:", mensagem);

    // Alerta de sucesso
    feedback.innerHTML = "Formulário enviado com sucesso!";
    feedback.style.color = "green"; // Exibe mensagem de sucesso em verde

    // Limpa o formulário
    formulario.reset();
});
});