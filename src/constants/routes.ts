import TextingPage from "../pages/examples/Texting";
import TodoList from "../pages/examples/todo-list";

export const routes = [
  {
    id: "0",
    key: "main",
    label: "홈",
    route: "/",
  },
  {
    id: "1",
    key: "study",
    label: "공부",
    route: "/study",
  },
  {
    id: "2",
    key: "examples",
    label: "예제",
    route: "/examples",
    children: [
      {
        id: "2-1",
        key: "count",
        label: "카운트",
        route: "/examples/count",
      },
      {
        id: "2-2",
        key: "todoList",
        label: "투두리스트",
        route: "/examples/todoList",
      },
    ],
  },
];

export const examplesPageRoutes: any = {
  count: {
    component: TextingPage,
  },
  todoList: {
    component: TodoList,
  },
};
