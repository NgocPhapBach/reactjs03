import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

  renderProductList = () => {
    return this.props.shoesArray.map((product) => {
      let { id } = product
      return <div className="col-4" key={id}>
        <ProductItem renderDetail={this.props.renderDetail} product={product}/>

      </div>
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="row">
        {this.renderProductList()}
      </div>
    )
  }
}
