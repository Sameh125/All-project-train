let theInput = document.querySelector(".add-task input"),
    theAddButton = document.querySelector(".add-task .plus"),
    tasksContainer = document.querySelector(".task-content"),
    tasksCount = document.querySelector(".tasks-count span"),
    tasksCompleted = document.querySelector(".tasks-completed span");

window.onload = function () {
    theInput.focus();
};

theAddButton.onclick = function () {
    if (theInput.value === "") {
        console.log("No Value");
    } else {
        let noTasksMsg = document.querySelector(".no-tasks-message");

        if (
            document.body.contains(document.querySelector(".no-tasks-message"))
        ) {
            noTasksMsg.remove();
        }

        let mainSpan = document.createElement("span"),
            deleteElement = document.createElement("span"),
            text = document.createTextNode(theInput.value),
            deleteText = document.createTextNode("Delete");

        mainSpan.appendChild(text);
        mainSpan.className = "task-box";
        deleteElement.appendChild(deleteText);
        deleteElement.className = "delete";
        mainSpan.appendChild(deleteElement);
        tasksContainer.appendChild(mainSpan);
        theInput.value = "";
        theInput.focus();
        calculateTasks();
    }
};

document.addEventListener("click", function (e) {
    if (e.target.className == "delete") {
        e.target.parentNode.remove();

        if (tasksContainer.childElementCount == 0) {
            createNoTasks();
        }
    }
    if (e.target.classList.contains("task-box")) {
        e.target.classList.toggle("finished");
    }
    calculateTasks();
});

function createNoTasks() {
    let msgSpan = document.createElement("span"),
        msgText = document.createTextNode("No Tasks To Show");

    msgSpan.appendChild(msgText);
    msgSpan.className = "no-tasks-message";
    tasksContainer.appendChild(msgSpan);
}

function calculateTasks() {
    tasksCount.innerHTML = document.querySelectorAll(
        ".task-content .task-box"
    ).length;
    tasksCompleted.innerHTML = document.querySelectorAll(
        ".task-content .finished"
    ).length;
}


