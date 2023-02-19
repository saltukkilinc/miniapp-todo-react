import React, {useContext} from 'react';
import context from '../../context/tasks-context';
import Todo from '../Todo/Todo';
import styles from './PinnedTodoList.module.css';

const PinnedTodoLists = () => {
  const ctx = useContext(context);
  return (
    <ul className={styles.pinnedTodosContainer}>
      {ctx.tasks.map(task => task.isPinned && <Todo key={task.id} todo={task}/> )}
    </ul>
  )
}

export default PinnedTodoLists
