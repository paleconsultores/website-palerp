// Resources
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

// Dependencies
import { Home } from './Home';
import PagLibroReclamaciones from './LibroReclamaciones/PagReclamaciones';

function App() {
  return (
    // <Home></Home>
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/libro-reclamaciones">
                <PagLibroReclamaciones/>   
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;