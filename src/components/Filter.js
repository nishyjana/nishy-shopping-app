import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
          <div  className="filter-result">{this.props.count} PRODUCTS </div>
    <div  className="filter-sort"> ORDER{"   "}
        <select value={this.props.sort} onChange={this.props.sortProducts}>
              
              <option >latest</option>
              <option value="lowest">LOWEST</option>
              <option value="highest">HIGHEST</option>
              
        </select></div>
        <div  className="filter-sex"> CATEGORY{"   "}
        <select  onChange={this.props.sortSex}>
              
              
              <option value="male">GENTS</option>
              <option value="female">LADIES</option>
              
        </select></div>
    <div  className="filter-size">FILTER {"   "}
        <select value={this.props.size} onChange={this.props.filterProducts}>
              <option value="">ALL</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>  
        </select>
    </div>

        
      </div>
    );
  }
}
