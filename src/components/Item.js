import React from "react";

class Item extends React.Component{
  state = {
    isIncart : false
  }
  handleAddToCartClick() {
    this.setState((isInCart) => !isInCart);
  }
  render(){
    return (
      <li className={this.isInCart ? "in-cart" : ""}>
        <span>{this.name}</span>
        <span className="category">{this.category}</span>
        <button
          className={this.isInCart ? "remove" : "add"}
          onClick={this.handleAddToCartClick}
        >
          {this.isInCart ? "Remove From" : "Add to"} Cart
        </button>
      </li>
    );
  }
}

export default Item;
