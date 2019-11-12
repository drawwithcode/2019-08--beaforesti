var col1 = "#ff6600";
var myMap;
var canvas;
var position;
var mappa = new Mappa('MapboxGL', "pk.eyJ1IjoiYmVhZmlvcmUiLCJhIjoiY2sycm93NWV1MHBuZjNibDRvNHg0dWt0biJ9.z9oz2PuAy578jdhkKEdKlQ");

// Monte Bianco coordinates
var monteBiancoLat = 45.5048188;
var monteBiancoLon = 6.8564201;

var options = {
  lat: monteBiancoLat,
  lng: monteBiancoLon,
  zoom: 12,
  style: "mapbox://styles/mapbox/satellite-v9",
  // style: "mapbox://styles/beafiore/ck2rncqlt3lrv1cmkf6lw37g9",

}

function preload() {
  position = getCurrentPosition();
  img = loadImage('assets/logoMonteBia.png');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

}

function draw() {
  clear()

  //your position (placeholder + text)
  push()
  var here = myMap.latLngToPixel(position.latitude, position.longitude);
  fill(color(col1));
  noStroke()
  textSize(20);
  ellipse(here.x, here.y, 30)
  text('Here you are', here.x - 40, here.y - 20);

  //Monte Bianco position (place holder + text)
  var monteBianco = myMap.latLngToPixel(monteBiancoLat, monteBiancoLon);
  img.resize(100, 0);
  image(img, monteBianco.x - img.width / 2, monteBianco.y - 1.5 * img.height);
  fill(240);
  textSize(30)
  text('Monte Bianco', monteBianco.x - 60, monteBianco.y - 30);
  text("4.808mt", monteBianco.x - 50, monteBianco.y - 5);
  pop()

  //distance between you and Monte Bianco
  var howFar = calcGeoDistance(position.latitude, position.longitude, monteBiancoLat, monteBiancoLon, "km");
  strokeWeight(6);
  strokeCap(ROUND);
  stroke(color("#2659a3"));
  line(here.x, here.y, monteBianco.x, monteBianco.y)

  //text
  fill(240)
  textSize(30)
  textAlign(CENTER)
  text("There are only " + Math.round(howFar) + "km between you and the top of Europe. Dream higher!", width / 2, height - 200)

}
