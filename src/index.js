const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJpa3JhbWVyMjQiLCJhIjoiY2phOXVjczNqMGJvNjJ3cGV1a3gwN3g1aSJ9.sKjCdoouG1IPsVu5Vc_m-A';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const rest = buildMarker('restaurants', [-73.9911, 40.7359]);
rest.addTo(map);
const hotel = buildMarker('hotels', [-74.009, 40.705]);
hotel.addTo(map);
const fun = buildMarker('activities', [-73.9911, 40.7359]);
fun.addTo(map);