// main.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const contactSection = document.querySelector("#contact");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Empêche l'envoi réel du formulaire

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Vérification des champs
    if (!name || !email || !message) {
      showMessage("⚠️ Veuillez remplir tous les champs du formulaire.", "error");
      return;
    }

    // Si tout est bon
    showMessage(`✅ Merci ${name} ! Votre message a bien été envoyé.`, "success");

    // Réinitialiser le formulaire
    form.reset();
  });

  // Fonction pour afficher le message
  function showMessage(text, type) {
    // Supprimer tout message précédent
    const oldMsg = document.querySelector(".form-message");
    if (oldMsg) oldMsg.remove();

    // Créer un nouvel élément
    const msg = document.createElement("div");
    msg.classList.add("form-message", type);
    msg.textContent = text;

    // Ajouter dans la page
    contactSection.appendChild(msg);

    // Disparaît après 4 secondes
    setTimeout(() => {
      msg.remove();
    }, 4000);
  }
});
