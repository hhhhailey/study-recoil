import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoListFilterState } from "../../../../mock/todo-list";
import { filter_options } from "../../../../constants/todo-list";

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(value);
  };

  return (
    <StyledWrap>
      Filter:
      <select value={filter} onChange={updateFilter}>
        {filter_options.map(({ label, value }, i) => (
          <option key={i} value={value}>
            {label}
          </option>
        ))}
      </select>
    </StyledWrap>
  );
};

export default TodoListFilters;

const StyledWrap = styled.div``;
