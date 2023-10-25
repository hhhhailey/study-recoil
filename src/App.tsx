import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/main/Main";
import StudyPage from "./pages/study";
import ExamplePage from "./pages/examples";
import "./styles/styles.scss";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          routes
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/study" element={<StudyPage />}></Route>
          <Route path="/examples" element={<ExamplePage />}></Route>
          <Route
            path="/examples/:examplePage"
            element={<ExamplePage />}
          ></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
