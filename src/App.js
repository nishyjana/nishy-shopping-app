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
      cardItems:[]
    };
    
  }
  
  removeFromCart=(product)=>{
    const cardItems= this.state.cardItems.slice();
    this.setState({cardItems:cardItems.filter(x=>x._id !== product._id)})
    

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


  }
  sortSex=(event)=>{
    // const sex = event.target.value;
    // console.log(event.target.value)
   
    // if(event.target.value == "male"){
    //   this.setState(this.state.products.find(sex="male"))
    // }else if(event.target.value == "female") {
    //   this.setState(this.state.products.find(sex="female"))
    // }
     
   
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
              size={this.state.size}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}
              sortSex={this.sortSex}
              
              >
                
              </Filter>
              <Product   
              products={this.state.products}
              addToCart={this.addToCart}
              ></Product>
              </div>
            <div className="sidebar">
              <Cart cardItems={this.state.cardItems}
               removeFromCart={this.removeFromCart}></Cart> </div>
            
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
