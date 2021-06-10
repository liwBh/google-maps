//arreglo para registrar varios marcadores
let arregloPines = [];

//funcion para agregar pines
function agregarMarcador (location) {

  let pin = new google.maps.Marker({
    position: location,
    map: map,
    title: "",
    animation: google.maps.Animation.DROP
  });

  // console.log("Latitud: ",location.lat());
  // console.log("Longitud: ",location.lng());

  //limpiar pines para mantener siempre el ultimo y no generar multiples
  for(let indice in arregloPines){
    arregloPines[indice].setMap(null);
  }

  arregloPines.push(pin);
}

// funcion principal del mapa
function cargar_mapa( ) {
  //configuraciones del mapa
  const myOptions = {
    zoom: 17,
    center: new google.maps.LatLng(10.320589179342974, -83.89857691103012),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  //objeto del mapa
  map = new google.maps.Map(document.getElementById("gmap_canvas"),myOptions); 

  //agregar evento
  map.addListener('click', (e) => {
    agregarMarcador( e.latLng);
  });

  //creando marcador
  let pin = new google.maps.Marker({
    position: new google.maps.LatLng(10.320589179342974, -83.89857691103012),
    map: map,
    title: "Mi ubicación"
  });

  //se agregan los marcadores al arreglo
  arregloPines.push(pin);
}