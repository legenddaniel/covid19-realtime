import React from 'react';
import Swal from 'sweetalert2'

import 'sweetalert2/src/sweetalert2.scss'

class Toast extends React.Component {
    componentDidMount() {
        const noKey = !this.detectKey();
        if (noKey) {
            setTimeout(() => {
                const swal = Swal.mixin({ customClass: { popup: 'toast-popup' } });
                swal.fire({
                    title: 'No API key detected!',
                    html: 'You can either go to <a href="https://rapidapi.com/Gramzivi/api/covid-19-data/pricing">RapidAPI</a> and apply for one, <br />or go on without a key',
                    position: 'top',
                    showConfirmButton: false,
                    timer: 5000,
                    timerProgressBar: true,
                    showClass: { popup: 'swal2-show' },
                    hideClass: { popup: 'swal2-hide' },
                    onOpen(swal) {
                        swal.onmouseenter = Swal.stopTimer;
                        swal.onmouseleave = Swal.resumeTimer;
                    }
                })
            }, 5000);
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
