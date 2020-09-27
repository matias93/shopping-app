import React, { Component } from 'react'
import './Busqueda.css';

export default class Busqueda extends Component {
    render() {
        return (
            <div className="busqueda">
                <div className="resultado-busqueda">{this.props.count} Productos</div>
                <div className="busqueda-sort">
                {""}    
                Order
                <select
                onChange={this.props.sortProducts}
                value={this.props.size}>
                    <option value="lowest">Latest</option>
                    <option value="highest">Highest</option>
                </select>
                </div>
                <div className="busqueda-size">Filter
                {""}
                  <select
                  onChange={this.props.filtrarProductos}
                  value={this.props.size}>
                     <option value="ALL">Todo</option>
                     <option value="RUTA">Ruta</option>
                     <option value="MBX">Moutan Bike</option>
                     <option value="MOUNTANG BIKE">BMX</option>
                  </select>
                </div>
                <div></div>
            </div>
        )
    }
}
