import React from "react";

const TodoItem: React.FC<any> = ({ item }) => {
  console.log(item, "item");
  return <div>{item}</div>;
};

export default TodoItem;
