
import './App.css';
import FetchData from "./components/FetchData";
import FetchAsyncData from './components/FetchAsyncData'

function App() {
  return (
    <div className="App">
       <h1>Fetching Data from API</h1>
        {/*<FetchData/>*/}
        <FetchAsyncData/>
    </div>
  );
}

export default App;
