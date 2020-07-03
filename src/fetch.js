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
