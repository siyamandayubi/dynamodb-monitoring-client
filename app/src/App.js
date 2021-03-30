import './App.css';
import Login from './Components/Login.js';
import Layout from './Components/Layout.js'
import { Route } from 'react-router';


function App() {
  return (
    <Layout>
      <Route exact path='/' component={Login} />
    </Layout>
  );
}

export default App;
