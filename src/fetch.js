import { apiInfo } from './config';

// class Fetch {
//     constructor(api) {
//         this.url = api.url;
//         this.opt = api.option;
//     }

//     static async ajax() {
//         const res = await fetch(this.url, this.opt);
//         const data = await res.text();
//         // console.log(res.json());
//         return data;
//     }

//     async showJSONData(type) {
//         console.log(this);
//         const data = await Fetch.ajax.call(this);
//         return data[0][type];
//     };
// }

function Fetch(api) {
    const url = api.url;
    const opt = api.option;
    const ajax = async () => {
        const res = await fetch(url, opt);
        const data = await res.json();
        return data;
    };
    return {
        async showJSONData() {
            const data = await ajax();
            return data[0];
        }
    }
}

export const showWorldData = Fetch(apiInfo).showJSONData;