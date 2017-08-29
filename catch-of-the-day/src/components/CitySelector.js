/* eslint-disable */
import React from 'react';
import cities from '../hardcoded_cities';
import City from './city';

class CitySelector extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedcities: cities,
        }
        this.selectedcity = "";
        this.changecity = this.changecity.bind(this);
    }

    changecity(event) {
        if (event) event.preventDefault();
        var tmpcities = [];
        if (this.selectedcity.value !== "") {

            for (var i = 0; i < cities.length; i++) {
                var city = cities[i];
                 if (city.name.toLowerCase().startsWith(this.selectedcity.value.toLowerCase())) {
                    tmpcities.push(city)
                }
            }
        }
        else {
            tmpcities = cities;
        }
        if(tmpcities.length ===1){
            this.props.selectCity(tmpcities[0]);

        }
        // const prev = this.state.selectedcities;
        this.setState({selectedcities: tmpcities});

    }

    render() {
        return (<div>City:<input type="text" ref={(input) => { this.selectedcity = input}}
                                    placeholder="type to search for city" onChange={(e) => this.changecity(e)}/>
            {
                this.state.selectedcities.map(city =><City city={city} key={city.id} selectCity={this.props.selectCity}/>)
            }
        </div>)


    }
}

export default CitySelector;
