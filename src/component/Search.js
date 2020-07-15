import React from 'react';

import Dropdown from './Dropdown';
import Dashboard from './Dashboard';

class SearchArea extends React.Component {
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
        this.setState({ data });
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

export default SearchArea;