import React from 'react';
import Product from './components/products';
import data from './data.json';
import Filter from "./components/Filter";
import Cart from './components/card';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      products:data.products,
      size:"",
      sort:"",
      sex:"",
      males:[],
      
      cardItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]
    };
    
  }
  createOrders=(order)=>{
    alert("Need to save order for  " +order.name)
  }
  sortSex=(event)=>{

    const sex = event.target.value;
    
 
    this.state.males= data.products.filter( (pro)=>sex==pro.sex)
    this.setState({
     products:this.state.males
    })
  
}
  
  removeFromCart=(product)=>{
    const cardItems= this.state.cardItems.slice();
    this.setState({
      cardItems:cardItems.filter(x=>x._id !== product._id)})
    localStorage.setItem("cartItems",JSON.stringify(cardItems.filter(x=>x._id !== product._id)));

  }
  addToCart=(product)=>{
    const cardItems= this.state.cardItems.slice();
    let alreadyInCart =false;
    cardItems.forEach(item=>{
      if(item._id ===product._id){
        item.count++;
        alreadyInCart=true;
      }
    });
    if(!alreadyInCart){
      cardItems.push({...product,count:1})
    }
    this.setState({cardItems})
    localStorage.setItem("cartItems",JSON.stringify(cardItems));


  }
  
  sortProducts=(event)=>{
    const sort =event.target.value
    console.log(event.target.value)
    this.setState((state)=>({
      sort: sort,
      products: this.state.products.slice().sort((a,b)=>(
        sort === "lowest"
         ? 
        a.price  < b.price
        ?-1
        :1:
        sort === "highest"
        ?
        a.price > b.price
        ? -1
        :1:
        a._id <  b._id
        ? 1:-1)

      )
    }))
  }
  filterProducts=(event)=>{
    console.log(event.target.value)
    if(event.target.value===""){
      this.setState({size:  event.target.value, product:data.products});
    } else 
    {
      this.setState({
      size:event.target.value,
      products: data.products.filter(
        (product)=> product.availableSizes.indexOf(event.target.value)>= 0        ),

    })}
  }
  render(){
    return (
      <div className="grid-container">
        <header>
          <a href="/">NISHY SHOPPING</a> 
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.products.length}
            
              sort={this.state.sort}
              sex={this.state.sex}
              size={this.state.size}
             
              
              sortSex={this.sortSex}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}>
                
              </Filter>
              <Product   
              products={this.state.products}
              addToCart={this.addToCart}
              ></Product>
              </div>
              <div className="sidebar">
              <Cart cardItems={this.state.cardItems}
               removeFromCart={this.removeFromCart}
               createOrders={this.createOrders}>
                 create</Cart> </div>
    
           
            
          </div>
          
        </main>
        <footer>
          All Rights Reserverd <br></br>
        </footer>
      </div>
    );
  }

}

export default App;
