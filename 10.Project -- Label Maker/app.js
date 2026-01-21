const labelsContainer = document.querySelector(".container");
let text = "With Love";
let sender = "Anonymous";

function getLabels(text, sender, ...recipients) {
  labelsContainer.innerHTML = "";
  recipients
    .map((recipient) => {
      labelsContainer.innerHTML += `
      <div class="recipient">
        <p class="text">${text}</p>
        <p class="sender">${sender}</p>
        <p class="sender">${recipient}</p>
      </div>
    `;
    })
    .join("");
}

getLabels(text, sender, "Alice", "Bob", "Charlie", "Diana", "Andrew", "Eva");
