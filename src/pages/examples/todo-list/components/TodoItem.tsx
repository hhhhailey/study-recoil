import React from "react";
import { FaEdit, FaTrash, FaCheckCircle } from "react-icons/fa";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoListState } from "..";
import {
  removeItemAtIndex,
  replaceItemAtIndex,
} from "../../../../utils/common";

const TodoItem: React.FC<any> = ({ item }) => {
  const inputRef = React.useRef<any>(null);
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [inputValue, setInputValue] = React.useState("");
  const [isReadOnly, setIsReadOnly] = React.useState(true);
  const isEditMode = React.useMemo(
    () => (isReadOnly ? false : true),
    [isReadOnly]
  );
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItem = React.useCallback(
    (e: React.MouseEvent<SVGElement, MouseEvent>) => {
      setIsReadOnly(false);
      inputRef?.current.focus();
    },
    []
  );

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isCompleted: !item.isCompleted,
    });

    setTodoList(newList);
  };

  React.useLayoutEffect(() => {
    if (item.text) setInputValue(item.text);
  }, [item, inputValue]);

  return (
    <StyledWrap>
      <input type="checkbox" onChange={toggleItemCompletion} />
      <StyledInput readOnly={!!isReadOnly}>
        <input
          type="text"
          readOnly={!!isReadOnly}
          ref={inputRef}
          className="todo-text"
          onChange={(e) => setInputValue(e.target.value)}
          defaultValue={inputValue}
        />
      </StyledInput>
      {!isEditMode ? (
        <FaEdit onClick={editItem} />
      ) : (
        <FaCheckCircle onClick={() => setIsReadOnly(true)} />
      )}
      <FaTrash onClick={deleteItem} />
    </StyledWrap>
  );
};

export default TodoItem;

const StyledWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;

const StyledInput = styled.div<{ readOnly?: boolean }>`
  height: 35px;
  border-bottom: 2px solid transparent;

  ${(p) =>
    !p.readOnly &&
    `
      border-bottom: 2px solid var(--navy);
    `}

  input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    background: transparent;
  }
`;
