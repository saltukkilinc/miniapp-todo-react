import React from 'react';
import { useContext } from 'react';
import context from '../../context/tasks-context';
import Todo from '../Todo/Todo';

const TaskList = () => {
  const ctx = useContext(context)

  return (
    <ul>
      {ctx.tasks.map(task => !task.isPinned && <Todo key={task.id} todo = {task}/> )}
    </ul>
  )
}

export default TaskList
