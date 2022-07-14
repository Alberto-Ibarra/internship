//* ~~~~~~~~~~~~~~~~~~~~~ Api ~~~~~~~~~~~~~~~~~~~~~
const Api = (() => {
	const baseUrl = "https://jsonplaceholder.typicode.com";
	const path = "todos";

	const getTodos = () =>
		fetch([baseUrl, path].join("/")).then((response) => response.json());

	const deleteTodo = (id) =>
		fetch([baseUrl, path, id].join("/"), {
			method: "DELETE",
		});

	return {
		getTodos,
    deleteTodo
	};
})();

//* ~~~~~~~~~~~~~~~~~~~~~ View ~~~~~~~~~~~~~~~~~~~~~
const View = (() => {
	const domstr = {
		todosContainer: "#todolist_container",
    deletebtn: '.dltbtn'
	};

	const render = (ele, tmp) => {
		ele.innerHTML = tmp;
	};
	const createTmp = (arr) => {
		let tmp = "";
		arr.forEach((todo) => {
			tmp += `
        <li>
            <span>${todo.id} - ${todo.title}</span>
            <button class="dltbtn" id="${todo.id}">X</button>
        </li>
        `;
		});
		return tmp;
	};

	return {
		render,
		createTmp,
		domstr,
	};
})();

//* ~~~~~~~~~~~~~~~~~~~~~ Model ~~~~~~~~~~~~~~~~~~~~~
const Model = ((api, view) => {

    class State {
        #todos = []

        get todolist() {
            return this.#todos
        }
        set todolist(todos) {
            this.#todos =[...todos]

            const todosContainer = document.querySelector(view.domstr.todosContainer);
			const tmp = view.createTmp(this.#todos);
			view.render(todosContainer, tmp);

            const deletebtns = document.querySelectorAll(view.domstr.deletebtn);
			deletebtns.forEach((btn) => {
				btn.addEventListener("click", (event) => {
					this.todolist = this.#todos.filter(
						(todo) => +todo.id !== +event.target.id
					);
				});
			});
        }
    }




	const { getTodos, deleteTodo } = api;

	return {
		getTodos,
        deleteTodo,
        State
	};
})(Api, View);

//* ~~~~~~~~~~~~~~~~~~~~~ Controller ~~~~~~~~~~~~~~~~~~~~~
const Controller = ((model, view) => {
    const state = new model.State()

	const init = () => {
        model.getTodos().then((todos) => {
            state.todolist = todos.reverse()
        })
    // const todosContainer = document.querySelector(view.domstr.todosContainer);

		model.getTodos().then((todos) => {
			// const tmp = view.createTmp(todos);
			// view.render(todosContainer, tmp);

        // const deletebtns = document.querySelectorAll(view.domstr.deletebtn);
        // deletebtns.forEach(btn => {
        // btn.addEventListener('click', event => {
        //     const newtodos = todos.filter(todo => +todo.id !== +event.target.id);

        //     const tmp = view.createTmp(newtodos);
        //     view.render(todosContainer, tmp);
        // });
        // })
		});
	};

	return {
		init,
	};
})(Model, View);

Controller.init();


const deletebtns = document.querySelectorAll(view.domstr.deletebtn);
deletebtns.forEach(btn => {
btn.addEventListener('click', event => {
    const newtodos = todos.filter(todo => +todo.id !== +event.target.id);

    const tmp = view.createTmp(newtodos);
    view.render(todosContainer, tmp);
});
})