const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const suggestionBtns = document.querySelectorAll(".suggestion-btn");

// Function to add message to chat
function addMessage(content, sender = "user") {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender === "ai" ? "ai-message" : "user-message");

    if (sender === "ai") {
        messageDiv.innerHTML = `<div class="ai-avatar">🤖</div><p>${content}</p>`;
    } else {
        messageDiv.innerHTML = `<div class="avatar small">🙋🏻</div><p>${content}</p>`;
    }

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
}

// Send user message and AI reply
function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    addMessage(message, "user");
    userInput.value = "";

    // Simulate AI reply (basic)
    setTimeout(() => {
        addMessage("🤖 This is a sample AI response!", "ai");
    }, 600);
}

// Event listeners
sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

// Suggestion button clicks
suggestionBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        userInput.value = btn.textContent;
        sendMessage();
    });
});

const profileLink = document.querySelector(".profile-settings");
const modal = document.getElementById("profileModal");
const closeModal = document.getElementById("closeModal");
const saveBtn = document.getElementById("saveBtn");

const nameInput = document.getElementById("nameInput");
const profileName = document.getElementById("profileName");
const themeSelect = document.getElementById("themeSelect");
const languageSelect = document.getElementById("languageSelect");

// Open modal on click
profileLink.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
});

// Close modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Save changes
saveBtn.addEventListener("click", () => {
    if (nameInput.value.trim()) {
        profileName.textContent = nameInput.value;
        document.querySelector(".profile h2").textContent = nameInput.value;
    }

    // Theme switching
    if (themeSelect.value === "light") {
        document.body.classList.add("light-theme");
    } else {
        document.body.classList.remove("light-theme");
    }

    modal.style.display = "none";
});

// Click outside modal to close
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});