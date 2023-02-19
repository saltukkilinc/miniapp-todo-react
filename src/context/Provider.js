import React, { useReducer, useEffect} from 'react';
import context from './tasks-context';
import todoReducer from './reducerFn';
import { initialState } from './reducerFn';


const Provider = ({children}) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.tasks))
  }, [state.tasks])
  
  // TAKE-SAVE INPUT VALUE
  const handleAddInputChange = (e) => {
    dispatch({type: 'TODO', todo: e.target.value})
  };
  // ADD PIN IN THE BEGINNING
  const addPinHandler = () => {
    dispatch({type: 'ADD_PIN'})
  }

  // ADD NEW TODO
  const handleAddNewTodo = () => {
    if(state.todo.title.trim() === '') {
      return;
    };
    dispatch({type: 'ADD'});
    dispatch({type: 'RESET_INPUT'});
  };

  // ISCHECKED HANDLER
  const isCheckedhandler = (id) => {
    dispatch({type: 'ISCHECKED', id: id})
  }

  // TAKE ID FOR DELETING, PINNING & UPDATING
  const idHandler = (id) => {
    dispatch({type: 'İD', id: id})
  }
  
  // DELETE HANDLER
  const deleteHandler = () => {
    dispatch({type: 'DELETE'})
  }

  // PIN HANDLER
  const pinHandler = () => {
    dispatch({type: 'PIN'})
  }

  // UPDATE Input Value
  const updateInputValue = () => {
    const todo = state.tasks.find(task => task.id === state.id);
    const updatedInput = todo.title;
    return updatedInput 
  }

  // UPDATE HANDLER
  const updateHandler = (updateInput) => {
    dispatch({type: 'UPDATE', payload: updateInput});
  }

  

  const contextValues = {
    tasks: state.tasks,
    todo: state.todo,
    handleAddInputChange,
    handleAddNewTodo,
    addPinHandler,
    idHandler,
    deleteHandler,
    pinHandler,
    updateInputValue,
    updateHandler,
    isCheckedhandler,
  }


  return (
    <context.Provider value={contextValues}>
      {children}
    </context.Provider>
  )
}

export default Provider
