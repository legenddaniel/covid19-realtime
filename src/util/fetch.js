function formatDate(time) {
    const timeLocale = new Date(time).toLocaleString('en-CA');
    return time === null ? 'N/A' : `${timeLocale} (EST)`;
}

function Fetch(api) {
    const { url, option } = api;
    const ajax = async () => {
        const res = await fetch(url, option);
        const data = await res.json();
        return data;
    };
    return async function () {
        const data = await ajax();
        data.lastUpdate = formatDate(data.lastUpdate);
        return data;
    }
}

export default function onFetch(data, callback) {
    const showData = Fetch(data);
    showData().then(callback);
}
