// Resources
import React from 'react';
import { BrowserRouter, Route ,Switch} from "react-router-dom";

// Dependencies
import  Header  from './Home/1-Header/Header';
import Footer  from './Home/3-Footer/Footer';
import Home from './Home/Home';
import PagLibroReclamaciones from './LibroReclamaciones/PagReclamaciones';
function App() {
  return (
    <div>
        <Header/>
            <BrowserRouter>
                <Switch>
                    <Route path='/'>
                        <Home/>
                    </Route>
                    <Route path='/libro-reclamaciones'>
                        <PagLibroReclamaciones/>
                    </Route> 
                </Switch>
            </BrowserRouter>
        <Footer/>   
    </div>

  );
}

export default App;