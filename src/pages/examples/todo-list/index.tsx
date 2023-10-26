import React from "react";
import { atom, useRecoilValue } from "recoil";
import TodoItem from "./components/TodoItem";
import TodoItemCreator from "./components/TodoItemCreator";

export interface TodoListProps {
  id: number;
  text: string;
  isCompleted: boolean;
}

export const todoListState = atom<TodoListProps[]>({
  key: "todos",
  default: [],
});

const TodoList = () => {
  const todoList = useRecoilValue<TodoListProps[]>(todoListState);

  return (
    <>
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
