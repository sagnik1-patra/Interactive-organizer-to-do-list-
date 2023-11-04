function addTask() {
    var taskInput = document.getElementById("taskInput");
    var timeLimit = document.getElementById("timeLimit");
    var dueDate = document.getElementById("dueDate");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        var li = document.createElement("li");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function() {
            if (this.checked) {
                li.style.textDecoration = "line-through";
            } else {
                li.style.textDecoration = "none";
            }
        });

        var label = document.createElement("label");
        label.textContent = taskInput.value;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            li.remove();
        });

        var dueDateLabel = document.createElement("label");
        dueDateLabel.textContent = "Due Date: " + dueDate.value;

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(dueDateLabel);
        li.appendChild(deleteButton);

        taskList.appendChild(li);

        taskInput.value = "";
        timeLimit.value = "";
        dueDate.value = "";
    }
}
