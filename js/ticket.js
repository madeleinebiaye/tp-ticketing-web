console.log("JavaScript connecté !");

const form = document.querySelector(".ticket-form");

if (!form) {
    console.error("Formulaire introuvable");
} else {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const titleInput = document.getElementById("title");
        const descriptionInput = document.getElementById("description");
        const typeSelect = document.getElementById("type");

        const title = titleInput.value.trim();
        const description = descriptionInput.value.trim();
        const type = typeSelect.value;

        // RESET styles
        titleInput.style.border = "";
        descriptionInput.style.border = "";

        // VALIDATION
        if (title === "" || description === "") {
            alert("❌ Le titre et la description sont obligatoires");

            if (title === "") {
                titleInput.style.border = "2px solid red";
            }

            if (description === "") {
                descriptionInput.style.border = "2px solid red";
            }

            return;
        }

        // SUCCÈS
        alert("✅ Ticket créé avec succès !");

        if (type === "Facturable") {
            alert("⚠️ Ce ticket sera facturé au client");
        } else {
            alert("ℹ️ Ce ticket est inclus dans le contrat");
        }

        console.log({
            title,
            description,
            type
        });
    });
}
const typeSelect = document.getElementById("type");
const infoText = document.getElementById("ticket-type-info");

typeSelect.addEventListener("change", () => {
    if (typeSelect.value === "Facturable") {
        infoText.textContent = "⚠️ Ce ticket sera facturé au client";
        infoText.style.color = "red";
    } else {
        infoText.textContent = "✅ Ce ticket est inclus dans le contrat";
        infoText.style.color = "green";
    }
});
