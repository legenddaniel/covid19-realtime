import React from 'react';
import { showWorldData } from './fetch';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmed: '',
            recovered: '',
            deaths: ''
        };
    }

    componentDidMount() {
        showWorldData().then(res => {
            this.setState({
                confirmed: res.confirmed,
                recovered: res.recovered,
                deaths: res.deaths
            });
        });

    }

    render() {
        return (
            <section className="dashboard-area">
                <h2>Worldwide:</h2>
                <div className="dashboards">
                    <div className="dashboard">Confirmed: <br /><span>{this.state.confirmed}</span></div>
                    <div className="dashboard">Recovered: <br /><span>{this.state.recovered}</span></div>
                    <div className="dashboard">Deaths: <br /><span></span>{this.state.deaths}</div>
                </div>
            </section>
        )
    }
}

export default Dashboard;