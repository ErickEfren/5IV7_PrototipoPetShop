const getDog = async (breedId) => {
    const URL = !breedId || breedId === 0
    ? "https://api.thedogapi.com/v1/images/search"
    : "https://api.TheDogAPI.com/v1/images/search?breed_ids=" + breedId

    const res = await fetch(URL);

    if(!res.ok) {
        const { url, status, statusText } = res;
        throw Error(`Error: ${status} ${statusText} in fetch ${url}`);
    }

    const data = await res.json();

    let  url, breeds = null;

    data.map(dat =>{
        ({url, breeds} = dat)
    })

    if(!breeds) {
        breeds = {
            id: 0,
            name: 'random'
        }
    }

    const dog = {
        url,
        breeds
    }

    return dog;
}

export default getDog;