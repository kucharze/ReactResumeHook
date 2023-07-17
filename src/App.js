import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Add skills</h1>
      <Skills />
      <h1>Add References</h1>
    </div>
  );
}

export default App;
