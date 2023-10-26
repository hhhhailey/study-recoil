import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { todoListState } from "..";

const TodoItem: React.FC<any> = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItem = React.useCallback(
    (e: React.MouseEvent<SVGElement, MouseEvent>) => {
      // const newList = replaceItemAtIndex(todoList, index)
    },
    []
  );
  return (
    <StyledWrap>
      <div className="todo-text">{item.text}</div>
      <FaEdit onClick={editItem} />
      <FaTrash />
    </StyledWrap>
  );
};

export default TodoItem;

const StyledWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
