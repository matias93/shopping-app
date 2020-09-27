import React from 'react'
import data from './data.json';
import Products from './components/Products/Products';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products:data.products,
      size:"",
      sort:"",
    };
  }
  render(){
    return (
      <div className="grid-container">
        <header>
           <a href="/">React Shopping App</a>
        </header>
        <main>
          <div className="contenido">
            <div className="main">
               <Products products={this.state.products}/>
            </div>
            <div className="sidebar">
              Card Items
            </div>
          </div>
        </main>
        <footer>
           All Rigth is reset. 
        </footer>
      </div>
    );
  }
  
}

export default App;
