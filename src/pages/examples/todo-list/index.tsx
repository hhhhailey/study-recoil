import React from "react";
import { atom, useRecoilValue } from "recoil";
import TodoItem from "./components/TodoItem";
import TodoItemCreator from "./components/TodoItemCreator";

export interface TodoListStateProps {
  id: number;
  text: string;
  isCompleted: boolean;
}

export const todoListState = atom<TodoListStateProps[]>({
  key: "todoListState",
  default: [],
});

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

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
