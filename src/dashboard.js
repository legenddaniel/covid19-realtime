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
                    <Item type={this.state.confirmed} name="Confirmed" />
                    <Item type={this.state.recovered} name="Recovered" />
                    <Item type={this.state.deaths} name="Deaths" />
                </div>
            </section>
        )
    }
}

class Item extends React.Component {
    render() {
        return (
            <div className="dashboard">{this.props.name}: <br /><span>{this.props.type || 'Loading...'}</span></div>
        )
    }
}

export default Dashboard;