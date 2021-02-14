//when loadData is called, it creates an XMLHttpRequest
const loadData = (method, type, extras, callback) => {

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(xhr.response);
        }

    };
    xhr.open(method, "http://localhost:8080/" + type + "/" + extras, true);
    xhr.responseType = 'json';
    xhr.send();
    console.log("get already");
}

const addCell = (tr, text) => {
    var td = tr.insertCell();
    td.textContent = text;
    return td;
}


let today = new Date();
let laterToday = new Date(); //22
laterToday.setHours(laterToday.getHours() + 1); //23

const getTodayString = () => {
    let days = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let nameDays = days[today.getDay()];
    let nameMonths = months[today.getMonth()]
    return `${nameDays} ${today.getDate()} ${nameMonths}`;
}
const getLatestData = (data) => {

    const latestData = data.filter(data_t => {
        var t = new Date((data_t.time).substring(0, (data_t.time).length - 1)); //...22,23...
        return today < t && t < laterToday;
    });

    console.log(latestData);
    appendWeather(latestData);
    // appendWeather(getlatestDataFromType(latestData, 'wind speed'));
    // appendWeather(getlatestDataFromType(latestData, 'cloud coverage'));
    // appendWeather(getlatestDataFromType(latestData, 'precipitation'));


}
// const getlatestDataFromType = (data, type) => {
//     return data.filter(data_t => data_t.type == type)
// }
const helper = (string) => {

    return document.getElementById(string);
}
function formatDateOfPlace(place) {
    place.innerHTML = getTodayString();
}

const appendWeather = (data) => {
    let horsensTime = helper("horsens_now_time");
    let horsensMinMax = helper("horsens_now_min-max-temp");
    let horsensCloud = helper("horsens_now_type");
    let horsensTemp = helper("horsens_now_temp");

    //Århus
    let aarhusTime = helper("aarhus_now_time");
    let aarhusCloud = helper("aarhus_now_type");
    let aarhusMinMax = helper("aarhus_now_min-max-temp");
    let aarhusTemp = helper("aarhus_now_temp");
    formatDateOfPlace(horsensTime);
    formatDateOfPlace(aarhusTime)



    data.forEach(element => {
        switch (element.place) {
            case 'Horsens':
                switch (element.type) {
                    case 'temperature':
                        horsensTemp.innerHTML = ((element.from + element.to) / 2) + '°' + element.unit;
                        horsensMinMax.innerHTML = element.from + "° / " + element.to + '°';
                        horsensCloud.innerHTML = element.from + "° / " + element.to + '°';
                    case 'cloud coverage':
                        horsensCloud.innerHTML = ((element.from + element.to) / 2) + "% Cloudy"
                }
            case 'Aarhus':
                switch (element.type) {
                    case 'temperature':
                        aarhusTemp.innerHTML = ((element.from + element.to) / 2) + '°' + element.unit;
                        aarhusMinMax.innerHTML = element.from + "° / " + element.to + '°';
                        aarhusCloud.innerHTML = element.from + "° / " + element.to + '°';
                    case 'cloud coverage':
                        aarhusCloud.innerHTML = ((element.from + element.to) / 2) + "% Cloudy"
                }
        }

        // horsensTemp.innerHTML += "<p>" + element.type + ":" + element.value + element.unit + " </p>";

    });

}


loadData("GET", "forecast", "Horsens", getLatestData);
loadData("GET", "forecast", "Aarhus", getLatestData);


// loadData("GET", "forecast", "Horsens", appendWeather);


