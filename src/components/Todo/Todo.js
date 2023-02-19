import styles from './Todo.module.css';
import React, { useContext} from 'react';
import ThreePointModal from '../UI/ThreePointsModule';
import context from '../../context/tasks-context';


const Todo = ({todo}) => {
  const ctx = useContext(context);


  return (
    <li className={styles.todoItemLi} >
      <label>
      <div onClick={() => ctx.isCheckedhandler(todo.id)}>
      {!todo.isChecked && <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="24" height="24" rx="6" fill="white" stroke="#999C9F" stroke-width="1.5"/>
      </svg>}
      {todo.isChecked && (
        <div style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="24" height="24" rx="6" fill="white" stroke="#21A7F9" stroke-width="1.5"/>
          </svg>
          <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute'}}>
          <path d="M1 5.92724L4.64138 9.64286L12 1" stroke="#21A7F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      )   
      }
      </div>
        <span >{todo.title}</span>
      </label>
      <span onClick={() => ctx.idHandler(todo.id)}>
        <ThreePointModal />  
      </span>   
    </li>
  )
}

export default Todo



