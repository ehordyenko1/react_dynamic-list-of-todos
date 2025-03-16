/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';
import { TodoModal } from './components/TodoModal';
import { Loader } from './components/Loader';
import { Todo } from '../src/types/Todo';

export const App: React.FC = ({}) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        setLoading(true);

        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();

        setTodos(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('❌ Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTodos();
  }, []);

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Todos:</h1>

            <div className="block">
              <TodoFilter />
            </div>

            <div className="block">
              {loading ? (
                <Loader />
              ) : (
                <TodoList todos={todos} onSelectTodo={setSelectedTodo} />
              )}
            </div>
          </div>
        </div>
      </div>

      <TodoModal selectedTodo={selectedTodo} />
    </>
  );
};
