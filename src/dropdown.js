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
        this.setCountry = this.setCountry.bind(this);
    }

    setCountry(e) {
        this.setState({ currentCountry: e.target.value });
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
                    <input list="countries" name="country" id="country" onChange={this.setCountry} />
                    <datalist id="countries" required>
                        {this.state.countries.length ?
                            this.state.countries.map(country => <option key={country.name}>{country.name}</option>) :
                            <option disabled>Loading</option>}
                    </datalist>
                </div>
                <BtnSearch country={this.state.currentCountry} />
            </section>
        )
    }
}

class BtnSearch extends React.Component {
    getCountryData() {
        const newFetchCountry = { ...fetchCountry };
        const replacer = (match, p1, p2, p3, p4, p5) => {
            if (p1) return '%20';
            if (p2) return '%252C';
            if (p3) return '%25C3%2585';
            if (p4) return '%25C3%25A7';
            if (p5) return '%25C3%25A9';
        };
        const encodedCountry = this.props.country.replace(/(\s)|(,)|(Å)|(ç)|(é)/g, replacer); // encodeURI() not working well
        newFetchCountry.url = fetchCountry.url + encodedCountry;
        const showCountryData = Fetch(newFetchCountry).showJSONData;
        showCountryData.then(res => {
            const data = res[0];
            // Dropdown.setState({
            //     update: data.lastUpdate,
            //     confirmed: data.confirmed,
            //     recovered: data.recovered,
            //     deaths: data.deaths
            // })
        })
    }

    render() {
        return (
            <button className="comp" onClick={this.getCountryData.bind(this)}>Search</button>
        )
    }
}

export default Dropdown;

/*
Btn fetch data according to Dropdown value
Once receive, in the await function, use callback to set state (update, confirmed, recovered, deaths) to the parent
Parent pass the state as props to sibling dashboard
Sibling dashboard set state to the data

Will it affect another component?

*/