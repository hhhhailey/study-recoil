import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { TodoListProps, todoListState } from "../../../../mock/todo-list";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = React.useState("");
  const todoList = useRecoilValue<TodoListProps[]>(todoListState);
  const setTodoList = useSetRecoilState<TodoListProps[]>(todoListState);

  const nextId: number =
    todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 0;

  const addItem = React.useCallback(() => {
    if (!inputValue.trim()) {
      alert("내용입력하셈");
      return;
    }

    const newTodo: TodoListProps = {
      id: nextId,
      text: inputValue,
      isCompleted: false,
    };

    setTodoList((oldTodoList) => [...oldTodoList, newTodo]);
    setInputValue("");
  }, [inputValue, nextId, setTodoList]);

  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  const onKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        addItem();
      }
    },
    [addItem]
  );

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="TODO 입력하기"
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoItemCreator;
