const notesContainer = document.querySelector(".notes-container");
const CreateBtn = document.querySelector(".Notes");
let notes = document.querySelectorAll(".input-Box");
const deleteBtn = document.querySelector(".delete");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("Notes");
}

showNotes();

function updateStorage() {
    localStorage.setItem("Notes", notesContainer.innerHTML);
}

CreateBtn.addEventListener("click", () => {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-Box";
    inputbox.setAttribute("contenteditable", "true");
    img.className = "delete";
    img.src = "images/delete.png";

    notesContainer.appendChild(inputbox).appendChild(img);
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage()
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-Box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }

        })

    }
})


