import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Experience />
      <h1>Add References</h1>
    </div>
  );
}

export default App;
