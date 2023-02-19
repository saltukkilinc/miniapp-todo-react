const takeTodosFromLocalStorage = () => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  } else {
    return [];
  }
};

export const initialState = {
  todo: { title: "", isPinned: false },
  tasks: takeTodosFromLocalStorage(),
  id: null,
};

const todoReducer = (state, action) => {
  if (action.type === "TODO") {
    const newTodo = { title: action.todo, isPinned: false };
    return { todo: newTodo, tasks: state.tasks, id: state.id };
  }
  if (action.type === "ADD_PIN") {
    const newTodo = { ...state.todo, isPinned: !state.todo.isPinned };
    return { todo: newTodo, tasks: state.tasks, id: state.id };
  }
  if (action.type === "RESET_INPUT") {
    return {
      todo: { title: "", isPinned: false },
      tasks: state.tasks,
      id: state.id,
    };
  }
  if (action.type === "ADD") {
    const newTodo = {
      id: Math.floor(Math.random() * 10000 + 1),
      title: state.todo.title,
      isPinned: state.todo.isPinned,
      isChecked: false,
    };
    const newtaskList = [...state.tasks, newTodo];
    return { todo: state.todo, tasks: newtaskList, id: state.id };
  }
  if (action.type === "ISCHECKED") {
    const newTasks = state.tasks.map((task) => {
      return task.id === action.id
        ? { ...task, isChecked: !task.isChecked }
        : task;
    });
    return { todo: state.todo, tasks: newTasks, id: state.id };
  }
  if (action.type === "İD") {
    return { todo: state.todo, tasks: state.tasks, id: action.id };
  }
  if (action.type === "DELETE") {
    const newTasks = state.tasks.filter((task) => task.id !== state.id);
    return { todo: state.todo, tasks: newTasks, id: state.id };
  }
  if (action.type === "PIN") {
    const newTasks = state.tasks.map((task) => {
      return task.id === state.id
        ? { ...task, isPinned: !task.isPinned }
        : task;
    });

    return { todo: state.todo, tasks: newTasks, id: state.id };
  }

  if (action.type === "UPDATE") {
    const newTitle = action.payload;
    const newTasks = state.tasks.map((task) => {
      return task.id === state.id ? { ...task, title: newTitle } : task;
    });

    return { todo: state.todo, tasks: newTasks, id: state.id };
  }

  return initialState;
};

export default todoReducer;
