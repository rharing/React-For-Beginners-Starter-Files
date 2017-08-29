/* eslint-disable */
import React from 'react';
import CitySelector from './CitySelector';

class App extends React.Component {
    constructor(){
        super();
        this.selectCity = this.selectCity.bind(this);
    }
    selectCity(city) {
        // event.preventDefault()
        if(city.id && city.href) {
            console.log("selectedcity id: " + city.id);
        }
        // fetch the movies
        //and store these in the state
        // then show the movies page
    }
    render() {
        return (
                <div>
                    <CitySelector selectCity ={this.selectCity}/>
                </div>
        )
    }
}

export default App;
