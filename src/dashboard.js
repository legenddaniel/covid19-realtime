import React from 'react';
import Fetch from './fetch';
import { fetchWorld } from './config';

// Can use props for data
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                update: '',
                confirmed: '',
                recovered: '',
                deaths: ''
            }
        };
    }

    componentDidMount() {
        if (!('data' in this.props)) {
            const showWorldData = Fetch(fetchWorld).showJSONData;
            showWorldData().then(res => {
                const data = res[0];
                this.setState({
                    data: {
                        update: data.lastUpdate,
                        confirmed: data.confirmed,
                        recovered: data.recovered,
                        deaths: data.deaths
                    }
                });
            });
         } // else {
        //     const data = this.props.data;
        //     this.setState({
        //         data: {
        //             update: data.lastUpdate,
        //             confirmed: data.confirmed,
        //             recovered: data.recovered,
        //             deaths: data.deaths
        //         }
        //     });
        // }
    }

    // componentDidUpdate() {
    //     if ('data' in this.props) {
    //         const data = this.props.data;
    //         this.setState({
    //             data: {
    //                 update: data.lastUpdate,
    //                 confirmed: data.confirmed,
    //                 recovered: data.recovered,
    //                 deaths: data.deaths
    //             }
    //         });
    //     }
    // }

    render() {
        const visibility = {
            visibility: 'visible' in this.props && !this.props.visible ? 'hidden' : 'visible'
        };
        return (
            <section className="dashboard-area" style={visibility}>
                <span>Last Update: {this.state.data.update || 'Loading...'}</span>
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
        return (
            <div className="dashboard">{this.props.type}: <br /><span>{this.props.num || 'Loading...'}</span></div>
        )
    }
}

export default Dashboard;