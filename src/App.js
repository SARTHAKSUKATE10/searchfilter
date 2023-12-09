import './App.css';
import JSONDATA from "./MOCK_DATA.json"
function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Search..." />

      {JSONDATA.map((value, key) => {
        return (
          <div className="user" key={key}>
            <p>{value.first_name}</p>
          </div>
        )
      })}

    </div>
  );
}

export default App;
