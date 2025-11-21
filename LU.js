 let todos = JSON.parse(localStorage.getItem("todos")) || [];

    function showTodos() {
      const list = document.getElementById("todoList");
      list.innerHTML = "";

      todos.forEach((t, i) => {
        list.innerHTML += `
          <li>
            ${t}
            <button onclick="removeTask(${i})">X</button>
          </li>
        `;
      });
    }

    function addTask() {
      const input = document.getElementById("todoInput");
      if (input.value.trim() === "") return;

      todos.push(input.value);
      input.value = "";
      localStorage.setItem("todos", JSON.stringify(todos));
      showTodos();
    }

    function removeTask(i) {
      todos.splice(i, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
      showTodos();
    }


    showTodos();