import React from 'react';
import Fetch from './fetch';
import { fetchCountryList, fetchCountry } from './config';
import Dashboard from './dashboard';

export default class SearchArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                lastUpdate: '',
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
        this.setState({
            data: {
                lastUpdate: data.lastUpdate,
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
            currentCountry: '',
            btnTxt: 'Search',
            color: 'green',
            btnDisabled: false
        };
        this.ref = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.focusInput = this.focusInput.bind(this);
        this.switchColor = this.switchColor.bind(this);
    }

    handleClick() {
        if (this.state.countries.some(country => country.name === this.state.currentCountry)) {
            const newFetchCountry = { ...fetchCountry };
            const encodedCountry = encodeURI(this.state.currentCountry);
            newFetchCountry.url = fetchCountry.url + encodedCountry;
            const showCountryData = Fetch(newFetchCountry).showJSONData;
            showCountryData().then(res => {
                const data = res[0];
                this.passCountryData(data);
            });
            this.passToggleDashboard(true);
        } else {
            this.setState({
                btnTxt: 'Invalid Value',
                color: 'red',
                btnDisabled: true
            });
            this.focusInput();
        }
    }

    handleChange(e) {
        this.setState({
            currentCountry: e.target.value,
            btnTxt: 'Search',
            color: 'green',
            btnDisabled: false
        });
        this.passToggleDashboard(false);
    }

    focusInput() {
        this.ref.current.focus();
    }

    switchColor(color) {
        this.setState({ color });
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
                    {/* <label htmlFor="country">Select country: </label> */}
                    <input type="search" placeholder="Select Country" list="countries" name="country" id="country" className={`input input-${this.state.color}`} onChange={this.handleChange} ref={this.ref} />
                    <datalist id="countries" required>{
                        this.state.countries.length ?
                            this.state.countries.map(country => <option key={country.name}>{country.name}</option>) :
                            <option disabled>Loading</option>
                    }
                    </datalist>
                </div>
                <button className={`btn-search btn-search-${this.state.color}`} onClick={this.handleClick} disabled={this.state.btnDisabled} >{this.state.btnTxt}</button>
            </section>
        )
    }
}