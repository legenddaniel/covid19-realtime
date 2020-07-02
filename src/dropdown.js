import React, { Component } from 'react';
import Fetch from './fetch';
import { fetchCountryList, fetchCountry } from './config';
import Dashboard from './dashboard';

export default class SearchArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                update: '',
                confirmed: '',
                recovered: '',
                deaths: ''
            },
            showDashboard: false
        }
        this.setCountryData = this.setCountryData.bind(this);
        this.showDashboard = this.showDashboard.bind(this);
    }

    setCountryData(data) {
        console.log(data);
        this.setState({
            data: {
                update: data.lastUpdate,
                confirmed: data.confirmed,
                recovered: data.recovered,
                deaths: data.deaths
            }
        });
    }

    showDashboard(toggle) {
        this.setState({ showDashboard: toggle })
    }

    render() {
        return (
            <div>
                <Dropdown onSetCountryData={this.setCountryData} onShowDashboard={this.showDashboard} />
                <Dashboard data={this.state.data} visible={this.state.showDashboard} />
            </div>
        )
    }
}

// props for data
class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            currentCountry: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.passCountryData = this.passCountryData.bind(this);
        // this.passToggleDashboard = this.passToggleDashboard.bind(this);
    }

    handleClick() {
        const newFetchCountry = { ...fetchCountry };
        const replacer = (match, p1, p2, p3, p4, p5) => {
            if (p1) return '%20';
            if (p2) return '%252C';
            if (p3) return '%25C3%2585';
            if (p4) return '%25C3%25A7';
            if (p5) return '%25C3%25A9';
        };
        const encodedCountry = this.state.currentCountry.replace(/(\s)|(,)|(Å)|(ç)|(é)/g, replacer); // encodeURI() not working well
        newFetchCountry.url = fetchCountry.url + encodedCountry;
        // console.log(newFetchCountry);
        const showCountryData = Fetch(newFetchCountry).showJSONData;
        showCountryData().then(res => {
            const data = res[0];
            this.passCountryData(data);
            // console.log(this);
        })

        this.passToggleDashboard(true);
    }

    handleChange(e) {
        this.setState({ currentCountry: e.target.value, });
        this.passToggleDashboard(false);
    }

    passCountryData(data) {
        this.props.onSetCountryData(data);
    }

    passToggleDashboard(toggle) {
        this.props.onShowDashboard(toggle);
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
                    <input list="countries" name="country" id="country" onChange={this.handleChange} />
                    <datalist id="countries" required>
                        {this.state.countries.length ?
                            this.state.countries.map(country => <option key={country.name}>{country.name}</option>) :
                            <option disabled>Loading</option>}
                    </datalist>
                </div>
                <button className="comp" onClick={this.handleClick}>Search</button>

            </section>
        )
    }
}

/*
1. When mounted, get data from xhr and set state of country list
2. When selected a country, set state of current country
3. When clicking button, get data from xhr and fire passCountryData within the promise
4. Now the parent holds data in state
5. Assign the prop value of Dashboard as the data in parent state
6. Change the Dashboard componentDidMount() to get different data
7. Set Dashboard state equal to props (for this Dashboard only)

*/