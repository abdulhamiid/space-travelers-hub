const apiURL = 'https://api.spacexdata.com/v3/rockets';

async function getRockets() {
  const response = await fetch(apiURL);
  const rockets = await response.json();
  return rockets.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    description: rocket.description,
    image: rocket.flickr_images[0],
    reserved: false,
  }));
}

export default getRockets;
