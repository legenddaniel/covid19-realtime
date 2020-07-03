import React from 'react';
import Fetch from './fetch';
import { fetchWorld } from './config';

// Can use props for data
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                lastUpdate: '',
                confirmed: '',
                recovered: '',
                deaths: ''
            }
        };
        this.getLastUpdate = this.getLastUpdate.bind(this);
    }

    getLastUpdate(time) {
        const timeLocale = new Date(time).toLocaleString('en-CA', { hour12: false });
        return time === null ? 'N/A' : `${timeLocale} (EST)`;
    }

    componentDidMount() {
        if (!('data' in this.props)) {
            const showWorldData = Fetch(fetchWorld).showJSONData;
            showWorldData().then(res => {
                const data = res[0];
                this.setState({
                    data: {
                        lastUpdate: this.getLastUpdate(data.lastUpdate),
                        confirmed: data.confirmed,
                        recovered: data.recovered,
                        deaths: data.deaths
                    }
                });
            });
        }
    }

    componentDidUpdate(prevProps) {
        if ('data' in this.props && this.props.data !== prevProps.data) {
            const data = this.props.data;
            this.setState({
                data: {
                    lastUpdate: this.getLastUpdate(data.lastUpdate),
                    confirmed: data.confirmed,
                    recovered: data.recovered,
                    deaths: data.deaths
                }
            });
        }
    }

    render() {
        const shouldBeInvisible = 'visible' in this.props && !this.props.visible;
        const lastUpdate = this.state.data.lastUpdate === '' ? 'Loading...' : this.state.data.lastUpdate;
        return (
            <section className={`dashboard-area${shouldBeInvisible ? ' invisible' : ''}`}>
                <p>Last Update: {lastUpdate}</p>
                <div className="dashboards">
                    <DashboardItem num={this.state.data.confirmed} type="Confirmed" />
                    <DashboardItem num={this.state.data.recovered} type="Recovered" />
                    <DashboardItem num={this.state.data.deaths} type="Deaths" />
                </div>
            </section>
        )
    }
}

class DashboardItem extends React.Component {
    render() {
        const num = this.props.num === '' ? 'Loading...' : this.props.num;
        const dashboardType = {
            Confirmed: 'dashboard-confirmed',
            Recovered: 'dashboard-recovered',
            Deaths: 'dashboard-deaths'
        };
        return (
            <div className={`dashboard ${dashboardType[this.props.type]}`}>{this.props.type}: <br /><span>{num}</span></div>
        )
    }
}

export default Dashboard;