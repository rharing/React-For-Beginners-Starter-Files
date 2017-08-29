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
        localStorage.setItem('selectedCity', JSON.stringify(city));
        this.setState({selectedCity : city})
        // fetch the movies
        //and store these in the state
        // then show the movies page
    }

    componentWillMount(){
        let item = localStorage.getItem('selectedCity');
        if (item){
            this.setState({selectedCity : JSON.parse(item)})
        }
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
