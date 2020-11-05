
const width = window.innerWidth;

let philoRight = document.querySelector('.philo-right')

let philoLeft = document.querySelector('.philo-left')

let philoImgRight = document.querySelector('.philo-right-img')


const restylePhilosophy = ()=>{
  philoImgRight.parentNode.removeChild(philoImgRight)
  philoLeft.innerHTML =
  `<div class="philo-left-img">
  <img data-aos="zoom-in" data-aos-delay="90" class="philo-left-img-1" src="./img/img-1.jpg" alt="the copper mill best dishthe copper mill best dish">
  <img data-aos="zoom-in" data-aos-delay="80" class="philo-left-img-2" src="./img/img-2.png" alt="he Copper Mill coffee - Alexandria , Sydney (Australia)">
  <img data-aos="zoom-in" data-aos-delay="80" class="philo-left-img-3" src="./img/img-3.png" alt="the copper mill dishes">
 </div>`
}


//WIdth minus than 900px
if(width<900){
  restylePhilosophy()
}


//
window.onresize =(e) =>{
 if (e.target.matchMedia(("max-width: 900px"))){

   restylePhilosophy()
 } 

}


//GOOGLE MAP
var script = document.createElement('script');
script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB0JcL_EiEModoJKJplqyJaDqhvBHn7hRA&callback=initMap&libraries=&v=weekly";
script.defer = true;

let map;

function initMap() {
  const myLatLng = { lat: -33.906181, lng: 151.188675 }
 const  map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 15,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#393B4A" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
 

  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "The Copper Mill",
    zoomControl: false,

    
  });
  
  
}

document.head.appendChild(script);
