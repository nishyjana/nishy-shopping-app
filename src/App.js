import React from 'react';
import Product from './components/products';
import data from './data.json';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      products:data.products,
      size:"",
      sort:""
    }
  }
  render(){
    return (
      <div className="grid-container">
        <header>
          <a href="/">NISHY SHOPPING</a> 
        </header>
        <main>
          <div className="content">
            <div className="main"><Product   products={this.state.products}></Product></div>
            <div className="sidebar">Card Items </div>

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
