//getting user input 


function getingAPI() {

    function isIP( address ){ 
       const r = RegExp('^http[s]?:\/\/((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])');
        return r.test( address )
    }
   
    
    //getting user input
    const userInput = document.querySelector("input");
    const submitBtn = document.querySelector(".submit-btn");
    submitBtn.addEventListener('click',(e) => {
        if (userInput.value.length < 2) {
            {e.preventDefault()}
            return;
        }

   let api_ext="";
   isIP(userInput.value) ?  api_ext=`&ipAddress=${userInput.value}` : api_ext=`&domain=${userInput.value}`
   api_for_ip=`https://geo.ipify.org/api/v1?apiKey=at_C6EPXDtLEJ8aCnJ0RSqqnykUbEg2g${api_ext}`
       
        getIP()
        .catch(err=> {
            console.error("Error while gettind data from API" +err)
        })
    })
    //initializing map and map tiles
    const mymap = L.map('myMap').setView([0,0], 1);
    const atribution = '&copy; <a href="https://www.openstreetmap.org/copyright">Open street map </a> ';
    const tilesURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(tilesURL,{atribution} )
    tiles.addTo(mymap)
    //stating API URL
    let api_for_ip="https://geo.ipify.org/api/v1?apiKey=at_C6EPXDtLEJ8aCnJ0RSqqnykUbEg2g";
    let api_for_time="https://worldtimeapi.org/api/ip/";
    //iniliazed marker for map
    const marker = L.marker([0,0]).addTo(mymap);
   
    
    //calling API to get IP adress 
    async function getIP(input) {
        const responseForIp = await fetch(api_for_ip);
        const dataIP = await responseForIp.json();
        const responseForTime= await fetch (api_for_time);
        const dataTime=await responseForTime.json();
        const timeZone= "UTC " + dataTime.utc_offset
        const isp=dataIP.isp;
        //displaying users dataIP in HTML DOM
        const ip=dataIP.ip;
        const location=dataIP.location.country + " " + dataIP.location.city;
        document.getElementById("ip").textContent=ip
        document.getElementById("city").textContent=location
        document.getElementById("timezone").textContent=timeZone
        document.getElementById("isp").textContent=isp

        //seting marker on the map
        const latitude=dataIP.location.lat;
        const longitude = dataIP.location.lng;
        marker.setLatLng( [latitude, longitude]);
        mymap.setView([latitude,longitude],90);




    }
 

        getIP()
            .catch(err=> {
                console.error("Error while gettind data from API" +err)
            })
    

  
}


export default getingAPI;

