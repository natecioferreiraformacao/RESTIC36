document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm") as HTMLFormElement;
    const feedback = document.getElementById("formFeedback") as HTMLElement;

    form.addEventListener("submit", (event: Event) => {
        event.preventDefault();

        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const message = (document.getElementById("message") as HTMLTextAreaElement).value;

        // Simula envio de dados para uma API (aqui você poderia usar fetch)
        const data = {
            name,
            email,
            message
        };

        console.log("Dados enviados:", data);

        // Exibe mensagem de sucesso
        feedback.textContent = `Obrigado, ${name}! Sua mensagem foi enviada.`;
        feedback.style.color = "green";

        // Limpa o formulário
        form.reset();
    });
});