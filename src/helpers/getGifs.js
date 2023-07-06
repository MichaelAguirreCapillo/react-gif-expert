
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=13q2lsvxTpO2O3O4LH9CllpCxXH8Eqiw&limit=20&q=${category}}`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
}