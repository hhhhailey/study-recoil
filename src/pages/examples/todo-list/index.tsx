import React from "react";
import { atom, useRecoilValue } from "recoil";
import TodoItem from "./components/TodoItem";
import TodoItemCreator from "./components/TodoItemCreator";
import TodoListFilters from "./components/TodoListFilters";
import {
  TodoListProps,
  filteredTodoListState,
  todoListState,
} from "../../../mock/todo-list";
import TodoListStats from "./components/TodoListStats";

const TodoList = () => {
  const todoList = useRecoilValue<TodoListProps[]>(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
