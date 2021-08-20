import './App.css';
import { Navbar } from './components/Navbar';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
