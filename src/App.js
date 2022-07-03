import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import Page1 from "./components/page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import Page9 from "./components/Page9";
import Page8 from "./components/Page8";
import ScrollSpy from "./components/scrollspy";

function App() {
  return (
    <div className="App">
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <ScrollSpy />
      <Page7 />

      <Page8 />

      <Page9 />
    </div>
  );
}

export default App;
