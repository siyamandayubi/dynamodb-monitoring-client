import './App.css';
import Login from './Components/Login.js';
import Home from './Components/Home.js';
import Layout from './Components/Layout.js'
import { Route } from 'react-router';
import AuthenticatedComponent from './Components/AuthenticatedComponent.js';

function App() {
  return (
    <Layout>
      <Route exact path='/' >
        <AuthenticatedComponent><Home></Home></AuthenticatedComponent>
      </Route>
      <Route exact path='/login' component={Login}></Route>
    </Layout>
  );
}

export default App;
