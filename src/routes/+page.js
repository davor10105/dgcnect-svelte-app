/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const data = (async () => {
        const response = await fetch('http://0.0.0.0:7000/dgcnect/countries_data');
        return await response.json();
    })();

    return {
        countries: await data,
    };
}
