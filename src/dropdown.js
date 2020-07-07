import React from 'react';

import onFetch from './fetch';
import { fetchCountryList, fetchCountry } from './config';

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
    }

    handleClick() {
        if (this.state.countries.some(country => country.name === this.state.currentCountry)) {
            const newFetchCountry = { ...fetchCountry };
            const encodedCountry = encodeURI(this.state.currentCountry);
            newFetchCountry.url = fetchCountry.url + encodedCountry;
            
            onFetch(newFetchCountry, res => {
                const data = res[0];
                this.passCountryData(data);
            });
            this.passToggleDashboard(true);
            this.fakeThrottling(5);
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

    inCooldown(cd) {
        this.setState({
            btnTxt: `After ${cd}s`,
            color: 'red',
            btnDisabled: true
        });
    }

    fakeThrottling(cd) {
        const state = this.state;
        let cooldown = cd;
        this.inCooldown(cooldown);
        let timer = setInterval(() => {
            if (cooldown > 1) {
                --cooldown;
                this.inCooldown(cooldown);
            } else {
                clearInterval(timer);
                this.setState(state);
            }
        }, 1000);
    }

    passCountryData(data) {
        this.props.onSetCountryData(data);
    }

    passToggleDashboard(toggle) {
        this.props.onShowDashboard(toggle);
    }

    componentDidMount() {
        let timer = setTimeout(() => {
            onFetch(fetchCountryList, res => {
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

export default Dropdown;