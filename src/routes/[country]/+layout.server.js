/** @type {import('./$types').LayoutLoad} */
export async function load({ params }) {
    const fetchCountryDetails = (async () => {
        const response = await fetch(`http://localhost:7000/dgcnect/country_details/${params.country}`);
        return await response.json();
    })();

    return {
        country: params.country,
        country_details: await fetchCountryDetails,
    };
}