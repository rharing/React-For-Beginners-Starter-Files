import React from 'react';

class City extends React.Component {
constructor(){
    super();
}
    render(){
        return<h3>{this.props.city.name}</h3>
    }
}

export default City;
