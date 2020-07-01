import React from 'react';
import Fetch from './fetch';
import { fetchWorld } from './config';

// Can use props
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            update: '',
            confirmed: '',
            recovered: '',
            deaths: ''
        };
    }

    componentDidMount() {
        const showWorldData = Fetch(fetchWorld).showJSONData;
        showWorldData().then(res => {
            const data = res[0];
            this.setState({
                update: data.lastUpdate,
                confirmed: data.confirmed,
                recovered: data.recovered,
                deaths: data.deaths
            });
        });

    }

    render() {
        return (
            <section className="dashboard-area">
                <span>Last Update: {this.state.update || 'Loading...'}</span>
                <div className="dashboards">
                    <DashboardItem num={this.state.confirmed} type="Confirmed" />
                    <DashboardItem num={this.state.recovered} type="Recovered" />
                    <DashboardItem num={this.state.deaths} type="Deaths" />
                </div>
            </section>
        )
    }
}

class DashboardItem extends React.Component {
    render() {
        return (
            <div className="dashboard">{this.props.type}: <br /><span>{this.props.num || 'Loading...'}</span></div>
        )
    }
}

export default Dashboard;