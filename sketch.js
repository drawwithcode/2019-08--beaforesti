var myMap;
var canvas;
var position;
var mappa = new Mappa('MapboxGL', "pk.eyJ1IjoiYmVhZmlvcmUiLCJhIjoiY2sycm93NWV1MHBuZjNibDRvNHg0dWt0biJ9.z9oz2PuAy578jdhkKEdKlQ");

var poliLat = 45.5048188;
var poliLon = 9.1629839;

var options = {
  lat: poliLat,
  lng: poliLon,
  zoom: 8, //map is centered in the point 0, 0, zoom level 4
  // style: "mapbox://styles/mapbox/navigation-preview-night-v2",
  style: "mapbox://styles/beafiore/ck2rncqlt3lrv1cmkf6lw37g9",

}

function preload() {
  position = getCurrentPosition();
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

}

function draw() {
  clear()

  var here = myMap.latLngToPixel(position.latitude, position.longitude);
  fill(color("#ff6600"));
  // strokeWeight(3);
  textSize(14);
  ellipse(here.x, here.y, 30)
  text('Here you are', here.x - 40, here.y - 20);

  var poli = myMap.latLngToPixel(poliLat, poliLon);
  fill(color("#0066ff"));
  ellipse(poli.x, poli.y, 30);
  text('Politecnico di Milano', poli.x - 60, poli.y - 20);

}
