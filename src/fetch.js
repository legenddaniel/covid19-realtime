// import { fetchWorld, fetchCountryList } from './config';

// Since the API I use is the free version and request restricted (1 request per second) so I may use setTimeout in some cases
export default function Fetch(api) {
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
            return data;
        }
    }
}

// export const showWorldData = Fetch(fetchWorld).showJSONData;
// export const showCountryList = Fetch(fetchCountryList).showJSONData;