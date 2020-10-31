import React, { Component } from 'react';
import formatCurrency from '../util'

export default class card extends Component {
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
                 </div>
                 <div className="cart">
                     <div className="total">
                         <div>TOTAL:{" "}
                             {formatCurrency(
                                 cardItems.reduce((a,c)=>a+c.price*c.count,0)
                             )}
                         </div>
                         <button className="button primary" onClick={this.processd}> PROCEED</button>
                     </div>
                 </div>
        </div>
        
      </div>
    );
  }
}
