import React, { Component } from 'react'

export default class ProductItem extends Component {

  render() {
    let { name, image, price } = this.props.product;
    return (
      <div className="card mb-3" style={{ width: "15rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body cart__content">
          <b className="card-title">{name}</b>
          <p className="card-text">{price}</p>
          <button onClick={() => { 
            this.props.renderDetail(this.props.product)
           }} data-toggle="modal" data-target="#exampleModal" className='btn btn-dark'>add to carts <i className="fa fa-shopping-cart"></i></button>
        </div>
      </div>
    )
  }
}

