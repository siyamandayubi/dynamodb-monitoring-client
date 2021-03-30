import './App.css';
import Login from './Components/Login.js';
import Header from './Components/Header.js';


function App() {
  return (
    <div>
      <Header></Header>
      <div className="container main-container">
        <div className="card">
          <div className="card-header">Login</div>
          <div className="card-body">
            <Login></Login>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
