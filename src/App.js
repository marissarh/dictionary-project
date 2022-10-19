import "./App.css";
import Dictionary from "./Dictionary";
import dictionary from "./dictionary.png";

function App() {
  return (
    <div className="App">
      <div className="containter">
        <header className="App-header">
          <img
            src={dictionary}
            className="App-dictionary img-fluid"
            alt="dictionary"
          />
        </header>

        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          Coded by Marissa B and is{" "}
          <a href="https://github.com/mbutto26/dictionary-project.git">
            open-sourced on Github{"  "}
          </a>
          and{" "}
          <a href="https://iridescent-bonbon-a05cad.netlify.app">
            hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
