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

        // const prev = this.state.selectedcities;
        this.setState({selectedcities: tmpcities});

    }

    render() {
         var content = "<div><p>City:<input type=\"text\" placeholder=\"type to search for city\"/></p>";
        for (var i = 0; i < this.state.selectedcities.length; i++) {
            var city = this.state.selectedcities[i];
            console.log(city);
            content = content + "<span>" + city.name + "</span>";

        }

        // return ( <p>iets</p> )
        return (<p>City:<input type="text" ref={(input) => { this.selectedcity = input}}
                                    placeholder="type to search for city" onChange={(e) => this.changecity(e)}/>
            {
                this.state.selectedcities.map(city =><City city={city}/>)
            }
        </p>)


    }
}

export default CitySelector;
