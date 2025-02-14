
const success = (pos) => {  // Add pos as the argument for the success function
  const long = pos.coords.longitude;
  const lat = pos.coords.latitude;
   fetch(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${lat}&lon=${long}`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    document.querySelector("#Location").innerText =  data["name"];

    document.querySelector("#weather").innerText =
      data["weather"][0]["description"];
    document.querySelector("#temp").innerText = data["main"]["temp"] + "°C"
    
    document.querySelector("#feels").innerText =
      data["main"]["feels_like"] + "°C"
    document.querySelector("#icon").setAttribute("src", data["weather"][0]["icon"])
  
    const changeTemp = () => {
  
       document.querySelector("#temp").innerText = (data["main"]["temp"] * 9/5 + 32) + "°F";
    
    document.querySelector("#feels").innerText =
      (data["main"]["feels_like"] * 9/5 + 32) + "°F";
    
}
   document.querySelector("#switch").addEventListener("click", changeTemp);
    //  document.querySelector("#Location").innerText = data["id"]
  });

    // Use innerHTML, not innerHtml
};

const error = () => {
  console.error("Geolocation error.");
};

window.navigator.geolocation.watchPosition(success, error);

