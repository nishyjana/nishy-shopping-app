import React, { Component } from 'react';
import formatCurrency from '../util';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';

import {connect} from 'react-redux';
import {fetchProducts} from '../actions/productActions';
class Products extends Component {
  constructor(props){
    super(props);
    this.state={
      product:null
    };
  }
  componentDidMount(){
    this.props.fetchProducts();

  }
  openModal=(product)=>{
    this.setState({product});
      

  }
  closeModal=()=>{
    this.setState({product:null,
      isOpen:false
    })

  }
  render() {
    const {product}= this.state;
    return (
        <div>
        <Fade bottom cascade> 
        {
          !this.props.products ? <div>Loading.........</div>:
         <ul className="products">
         {this.props.products.map(product =>(
          <li key={product._id}>
            <Fade left cascade>
              <div className="product">
                  <a href={"#"+ product._id}>
                      <img src={product.image} alt={product.title} onClick={()=>{this.openModal(product)}}></img>
                      
                      <p>{product.title} </p>
                  </a>
                  <div className="product-price">
                      <div>{formatCurrency (product.price)}</div>
                      
                      <button onClick={()=>this.props.addToCart(product)} className="button primary">ADD TO CART</button>
                    
                  </div>
              </div>
              </Fade>
          </li>

         ))}
      </ul>
        }
       
        </Fade>
        { product &&(
          <Modal isOpen={true}>
            <Zoom>
              <button className="closebtn" onClick={()=>{this.closeModal()}} >X</button>
        <div className="close-title"><strong>{product.title}</strong></div>
            <div className="mpic">
            <img src={product.image} alt={product.title} ></img>
            </div>
            <div>
            <div>
                      <p>{product.description} </p>
        <p>Available Sizes: {" "}
        {product.availableSizes.map((x)=>(
          <span>
            {" "}
        <button className="button">{x}</button>
          </span>
        ))}
        
        
        </p>
                      </div>
            <div className="mpic-detail">
                          <div>{formatCurrency (product.price)}</div>
                          
                          <button onClick={()=>{this.props.addToCart(product);
                            this.closeModal()}} className="button primary">ADD TO CART</button>
                         
                      </div>
                      

            </div>
            </Zoom>
          </Modal>
        )}
    </div>
    );
  }
}
export default connect((state)=>({products:state.products.items}),{
  fetchProducts})(Products);