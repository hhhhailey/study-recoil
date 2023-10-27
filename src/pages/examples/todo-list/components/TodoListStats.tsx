import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../../../../mock/todo-list";

const TodoListStats = () => {
  const { percentCompleted, totalCompletedNum, totalNum, totalUncompletedNum } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);
  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>완료: {totalCompletedNum}</li>
      <li>미완료: {totalUncompletedNum}</li>
      <li>완료율: {formattedPercentCompleted}</li>
    </ul>
  );
};

export default TodoListStats;
