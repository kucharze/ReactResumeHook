import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import References from "./components/References";

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Experience />
      <References />
    </div>
  );
}

export default App;
