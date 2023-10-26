import React from "react";
import { useNavigate, useParams } from "react-router";
import { examplesPageRoutes } from "../../constants/routes";
import DefaultLayout from "../../layouts/DefaultLayout";

const ExamplePage = () => {
  const { examplePage } = useParams();
  const route = useNavigate();
  const url = window.location.pathname;
  const key = examplePage || "texting";
  const Component = examplesPageRoutes[key].component;

  React.useLayoutEffect(() => {
    if (url === "/examples") {
      console.log("first");
    }
  }, [route, url]);

  return (
    <DefaultLayout>
      <Component />
    </DefaultLayout>
  );
};

export default ExamplePage;
