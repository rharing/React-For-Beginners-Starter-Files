/* eslint-disable */
import React from 'react';

class City extends React.Component {
constructor(){
    super();
}
    render(){
    // const mycity = this.props.city;
        return<div className="bold" onClick={()=> this.props.selectCity(this.props.city)}>{this.props.city.name}</div>
    }
}

export default City;
