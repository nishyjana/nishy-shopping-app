import React, { Component } from 'react';
import formatCurrency from '../util'
import Fade from 'react-reveal/Bounce'

export default class card extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            address:"",
            
            
            
            showCheckout:false}

    }
    handleInput=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    createOrders=(e)=>{
        e.preventDefault();
        const order ={
            name:this.state.name,
            email:this.state.email,
            address:this.state.address,
            cardItems:this.props.cardItems,
        }
        this.props.createOrders(order)
    }
  render() {
      const {cardItems} = this.props;
    return (
    
      <div >
          {cardItems.length ===0? (
              
          <div className="cart cart-header">Cart is empty </div>)
          :(
           <div className="cart cart-header">
               YOU HAVE {cardItems.length} IN CARD{" "}
               </div>
               )}
        <div >
      
            <div className="cart">
            <Fade bottom cascade>
               <ul className="cart-items">
                    {cardItems.map(item =>(
                        <li key={cardItems._id}>
                            <div className="cart-image">
                              <img src={item.image} alt={item.title}></img>  
                            </div>
                            <div>
                                <div >
                                    {cardItems.title}
                                    <div className="right">
                                    {formatCurrency (  item.price)} x {item.count}{" "} 
                                    <button onClick={()=>{this.props.removeFromCart(item)}}>REMOVE</button>
                                    </div>
                                </div>
                              
                            </div>

                        </li>
                    ))}

                </ul>
                </Fade>
                 </div>
                 
                 {cardItems.length!==0 &&(
                 <div>
                 <div className="">
                 <div className="total">
                         <div>TOTAL:{" "}
                             {formatCurrency(
                                 cardItems.reduce((a,c)=>a+c.price*c.count,0)
                             )}
                         </div>
                         <button className="button primary" onClick={()=>{this.setState({showCheckout:true})}}> PROCEED</button>
                     </div>
                 </div>
                 
                     {this.state.showCheckout && (
                        <Fade up cascade>
                        <div className="cart">
                             <form onSubmit={this.createOrders}>
                                 <ul className="form-container">
                                     <li>
                                        <li>
                                        <label>EMAIL:</label>
                                        </li>
                                     <input 
                                     name="email"
                                     type="email" 
                                     required
                                     onChange={this.handleInput}
                                     ></input>
                                     </li>
                                     <li>
                                     <li>
                                     <label>NAME:</label>
                                     </li>
                                     <input
                                     name="name"
                                     type="text" 
                                     required
                                     onChange={this.handleInput}
                                     ></input>
                                     </li>
                                     <li>
                                    <li>
                                    <label>ADDRESS: </label>
                                    </li>
                                     <input
                                     name="address"
                                     type="text" 
                                     required
                                     onChange={this.handleInput}
                                     ></input>
                                     </li>
                                     {/* <li>
                                     <label>PHONENUM</label>
                                     <input 
                                     name="phonenumber"
                                     type="PHONENUM" 
                                     required
                                     onChange={this.handleInput}
                                     ></input>
                                     </li> */}
                                     <li>
                                         <button className="button primary" type="submit">CHECKOUT</button>
                                     </li>
                                 </ul>
                             </form>
                         </div>
                         </Fade>
                     )}
                     
                 </div>
                 
                 )}
        </div>
        
      </div>
    );
  }
}
