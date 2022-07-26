import { FC, useEffect, useState } from 'react';
import { ITodo } from "../types/types";
import axios from "axios";
import { TodoItem } from "./TodoItem";
import { List } from "./List";

export const TodosPage:FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');

      setTodos(response.data);
    } catch (error) {
      alert(error)
    }
  }

  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
    />
  )
};
