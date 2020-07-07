import React from 'react';

import onFetch from './fetch';
import { fetchWorld } from './config';

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
    }

    getLastUpdate(time) {
        const timeLocale = new Date(time).toLocaleString('en-CA');
        return time === null ? 'N/A' : `${timeLocale} (EST)`;
    }

    componentDidMount() {
        if (!('data' in this.props)) {
            onFetch(fetchWorld, res => {
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

function DashboardItem(props) {
    const num = props.num === '' ? 'Loading...' : props.num;
    const dashboardType = {
        Confirmed: 'dashboard-confirmed',
        Recovered: 'dashboard-recovered',
        Deaths: 'dashboard-deaths'
    };
    return (
        <div className={`dashboard ${dashboardType[props.type]}`}>{props.type}: <br /><span>{num}</span></div>
    )
}

export default Dashboard;