import React, { Component } from 'react';
import formatCurrency from '../../utils';
import './Products.css';

export default class Products extends Component {
    render() {
        return (
           <div>
             <ul className="productos">
                 {this.props.products.map((product) => (
                  <li key={product.id}>
                      <div className="producto">
                         <a href={"#" + product.id}>
                              <img src={product.image} alt="bicicleta"/>
                              <p>{product.title}</p>
                          </a>
                          <div className="precio-precio">
                              <div>
                                  {formatCurrency(product.price)}
                              </div>
                              <button className="button primary">
                                  add to card
                              </button>
                          </div>
                      </div>
                  </li>
                ))}
             </ul>
           </div>
        )
    }
}
