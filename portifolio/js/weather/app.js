async function populatetableRows() {
await fetch('https://openweathermap.org/city/2964574')

    const capitalize = s => s && s[0].toUpperCase() + s.slice(1)

            let strTableRows = `<tr>
                        <td><span>Summary</span></td>
                        <td>${capitalize(data["weather"][0]["description"])}</td>
                    </tr>
                    <tr>
                        <td><span>Temperature</span></td>
                        <td>${data["main"]["temp"] +  " &deg;C"}</td>
                    </tr>
                    <tr>
                        <td><span>Humidity</span></td>
                        <td>${data["main"]["humidity"] +  " %"}</td>
                    </tr>
                    <tr>
                        <td><span>Pressure</span></td>
                        <td>${data["main"]["pressure"] +  " Pa"}</td>
                    </tr>`;
                    document.querySelector("#table-weather-dublin tbody").innerHtml = strTableRows;

                    .catch(error => {
                              // handle any error
                    });
}

function change_background(){
    let d = new Date();
    let n = d.getHours();
    if(n> 23 || n <= 6){
    document.querySelector(".theme-js").style.backgroundImage = "url('assets/img/dublin-night.jpg')";
    }else{
    document.querySelector(".theme-js").style.backgroundImage = "url('assets/img/dublin-day.jpg')";
    }
}
change_background();

