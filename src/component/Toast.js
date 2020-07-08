import React from 'react';
import Swal from 'sweetalert2'

import 'sweetalert2/src/sweetalert2.scss'

class Toast extends React.Component {
    componentDidMount() {
        const noKey = !this.detectKey();
        if (noKey) {
            setTimeout(() => {
                Swal.fire({
                    title: 'No API key detected!',
                    html: 'You can either go to <a href="https://rapidapi.com/Gramzivi/api/covid-19-data/pricing">RapidAPI</a> and apply for one, <br />or go on without a key',
                    position: 'top',
                    showConfirmButton: false,
                    timer: +this.props.autoClose,
                    timerProgressBar: true,
                    onOpen(swal) {
                        swal.onmouseenter = Swal.stopTimer;
                        swal.onmouseleave = Swal.resumeTimer;
                    }
                })
            }, +this.props.delay);
        }
    };

    detectKey() {
        const key = process.env.REACT_APP_KEY;
        return key === 'Your API Key' ? false : true;
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default Toast;
