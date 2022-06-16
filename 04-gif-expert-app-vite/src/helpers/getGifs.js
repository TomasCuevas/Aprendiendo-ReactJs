export const getGifs = async( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=ENn8GXJ9NZwet2ZprGgi4c67WUJwK6MJ&q=${category}&limit=7`;
  const response = await fetch(url);
  const { data = [] } = await response.json();

  const gifs = data.map( gif => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url
  }))

  console.log( gifs );
  return gifs;
}