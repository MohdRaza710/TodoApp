import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
  const [todo, setTodo] = useState('');
  const [date, setDate] = useState('');
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo || !date) return;

    addTodo({ todo, date, completed: false });
    setTodo('');
    setDate('');
  };

  return (
    <form onSubmit={add} className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <input
        type="date"
        className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit" className="rounded-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
