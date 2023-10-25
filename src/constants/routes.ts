import TextingPage from "../pages/examples/Texting";

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
        key: "texting",
        label: "텍스팅",
        route: "/examples/texting",
      },
    ],
  },
];

export const examplesPageRoutes: any = {
  texting: {
    component: TextingPage,
  },
};
