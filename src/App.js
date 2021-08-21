import './App.css';
import { Navbar } from './components/Navbar';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Rage } from './pages/Rage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rage" exact component={Rage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
