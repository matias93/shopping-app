import React from 'react'
import data from './data.json';
import Products from './components/Products/Products';
import Busqueda from './components/Busqueda/Busqueda';
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
  sortProducts = (e) => {
    console.log(e.target.value)
    const sort = e.target.value;
   this.setState((state) => ({
     sort: sort,
     products:this.state.products.slice().sort((a,b) => (
      sort === "lowest" ? a.price > b.price ? 1 :-1
      : sort ==="highest"? a.price > b.price ? 1 : -1
      : a.id < b.id ? 1 : -1
     ))
   }))
  }
  filtrarProductos = (e) =>{
    console.log(e.target.value)
    if (e.target.value=== "") {
      this.setState({size:e.target.value , product:data.products})
    }else {
      this.setState({
        size: e.target.value,
        products:data.products.filter(product => product.availableSizes.indexOf(e.target.value)>=0)
      })
    }
    
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
               <Busqueda 
               size={this.state.size}
               sort={this.state.sort}
               count={this.state.products.length}
               filtrarProductos={this.filtrarProductos}
               sortProducts={this.sortProducts}
               />
               <Products products={this.state.products}
               />
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
