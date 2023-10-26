import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { TodoListStateProps, todoListState } from "..";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = React.useState("");
  const todoList = useRecoilValue<TodoListStateProps[]>(todoListState);
  const setTodoList = useSetRecoilState<TodoListStateProps[]>(todoListState);

  const nextId: number =
    todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 0;

  const addItem = React.useCallback(() => {
    const newTodo: TodoListStateProps = {
      id: nextId,
      text: inputValue,
      isCompleted: false,
    };

    setTodoList([...todoList, newTodo]);
    setInputValue("");
  }, []);

  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        placeholder="TODO 입력하기"
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoItemCreator;
