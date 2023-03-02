import "./App.css";
import RiddleAccord from "./components/RiddleAccord";
import data from "./helper/data";

function App() {
  return (
    <>
      <div className="header">
        <img src="./img/detective.png" alt="" width="100px" />
        <h2>Riddles For Kids</h2>
      </div>
      <div className="app">
        <div className="main">
          <RiddleAccord data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
