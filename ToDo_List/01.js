
const inputBox = document.getElementById("Name")
const listContainer = document.getElementById("list-container")

function Todo() {
    if (inputBox.value === '') {
        alert("Enter Something")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let button = document.createElement("button");
        button.id = "before";
        li.appendChild(button)

        button.addEventListener("click", () => {
            button.id = "checked-before"
            li.id = "new"
        });

        button.addEventListener("dblclick", () => {
            button.id = "before"
            li.id = "double"
        });
    }
    inputBox.value = "";
}

