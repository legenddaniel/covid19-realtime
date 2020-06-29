import React from 'react';
import Fetch from './fetch';
import { fetchCountryList, fetchCountry } from './config';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            currentCountry: ''
        };
    }

    setCountry() {
        this.setState({ currentCountry: document.getElementById('country').value });
    }

    componentDidMount() {
        let timer = setTimeout(() => {
            const showCountryList = Fetch(fetchCountryList).showJSONData;
            showCountryList().then(res => {
                const data = res.map(country => country);
                this.setState({ countries: data })
            });
            clearTimeout(timer);
        }, 2000)
    }

    render() {
        return (
            <section className="dropdown-area">
                <div className="dropdown">
                    <label htmlFor="country">Select country:</label>
                    <input list="countries" name="country" id="country" onChange={this.setCountry.bind(this)} />
                    <datalist id="countries" required>
                        {this.state.countries.length ?
                            this.state.countries.map(country => <option key={country.name}>{country.name}</option>) :
                            <option>Loading</option>}
                    </datalist>
                </div>
                <BtnSearch country={this.state.currentCountry}/>
            </section>
        )
    }
}

class BtnSearch extends React.Component {
    getCountryData() {
        /* 
        %20 === ' '
        %252C === ',' 
        %25C3%2585 === 'Å'
        %25C3%25A7 === 'ç'
        %25C3%25A9 === 'é'
        */
        const newFetchCountry = { ...fetchCountry };
        newFetchCountry.url = fetchCountry.url + this.props.country;
    }

    render() {
        return (
            <button className="comp" onClick={this.getCountryData.bind(this)}>Search</button>
        )
    }
}

export default Dropdown;