import './App.css';
import Marker from './components/marker/Marker';

function App() {
  return (
    <div>
      <h1>CSS Color Markers</h1>
      <div className="container">
        <Marker color='red'/>
        <Marker color='green'/>
        <Marker color='blue'/>
      </div>
    </div>
  );
}

export default App;
