import './App.css';
import Header from './Header'
import CatsList from './CatsList'
import  React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <div>
              <center>
                <Header />
                <CatsList />
              </center>    
          
        </div>
    )
}
export default App;