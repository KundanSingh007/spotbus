import "./App.css";
import GoogleMap from "./components/GoogleMap";
import { GoogleApiWrapper } from 'google-maps-react';
import SelectRoute from "./components/SelectRoute";

function App() {
  return (
    <div className="App">
      <div>
        <h2>SPOTBUS BY KUNDAN SINGH</h2>

        <h2>Admin Dashboard</h2>
        <hr />
        <SelectRoute />

      </div>
      <GoogleMap />
    </div>

  );
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyACcLnz8fYay9wHpTaZBhBG5 - g2wQ3y2vo")
})(App);