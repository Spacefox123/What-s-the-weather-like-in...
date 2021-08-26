import React from "react";

const Weatherdisplay = ({ value }) => {
  const convertTime = (unix) => {
    let date = new Date(unix * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    var formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

    return formattedTime;
  };

  const convertWindDirection = (deg) => {
    let val = Math.floor(deg / 22.5 + 0.5);
    let sides = [
      "north",
      "north-north-east",
      "north-ease",
      "east-north-east",
      "east",
      "east-south-east",
      "south-east",
      "south-south-east",
      "south",
      "south-south-west",
      "south-west",
      "west-south-west",
      "west",
      "west-north-west",
      "north-west",
      "north-north-west",
    ];
    return sides[val % 16];
  };

  try {
    let description = value.data.weather[0].description;
    let url = `https://openweathermap.org/img/wn/${value.data.weather[0].icon}@2x.png`;
    let temp = value.data.main.temp;
    let feels = value.data.main.feels_like;
    let humidity = value.data.main.humidity;
    let pressure = value.data.main.pressure;
    let wind = value.data.wind.speed;
    let windDeg = convertWindDirection(value.data.wind.deg);
    let clouds = value.data.clouds.all;
    let sunrise = convertTime(value.data.sys.sunrise);
    let sunset = convertTime(value.data.sys.sunset);
    let city = value.data.name;

    console.log(value);
    console.log(url);
    console.log(value.data.weather[0].icon);
    return (
      <div className="weatherdisplay card">
        <h1 className="animate__bounceIn">{`What's the motherfucking weather in ${city}??`}</h1>
        <div className="info">
          <div className="text">
            <i class="fas fa-meteor fa-3x"></i>
            <p>{`Today, it's goddamn ${description}, or just look through the window, you lazy pissing wanker!`}</p>
            <i class="fas fa-thermometer-half fa-3x"></i>
            <p>{`It's ${temp}°C outside. That's bollocks though, beacause it feels more like ${feels}°C.`}</p>
            <i class="fas fa-tint fa-3x"></i>
            <p>{`The cocksucking pressure is ${pressure} kPa and the humidity is ${humidity}%. That's moist!`}</p>
            <i class="fas fa-wind fa-3x"></i>
            <p>
              {`That asshole wind is blowing at ${wind}m/s. The son of a bitch is blowing ${windDeg} `}
            </p>
            <i class="fas fa-cloud fa-3x"></i>
            <p>{`The cunt clouds are covering ${clouds}% of the motherfucking sky. Git fucked.`}</p>
          </div>
          <div className="images">
            <img src={url} alt="Weather icon"></img>

            <svg
              viewBox="0 0 475 313"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Frame">
                <rect id="sky" width="475" height="257" fill="#ABE6FF" />
                <path
                  id="arrow"
                  d="M420 225L426.645 185.135L388.799 199.313L420 225ZM52 225C55.3621 225.973 55.3619 225.973 55.362 225.973C55.3623 225.972 55.3625 225.971 55.3631 225.969C55.3642 225.965 55.3661 225.959 55.3688 225.95C55.3742 225.931 55.3827 225.902 55.3943 225.863C55.4176 225.784 55.4535 225.663 55.502 225.502C55.5992 225.18 55.747 224.696 55.9465 224.062C56.3454 222.792 56.9509 220.919 57.7699 218.529C59.4081 213.749 61.8997 206.903 65.3016 198.682C72.1099 182.229 82.5423 160.318 97.0439 138.433C126.122 94.5504 171.041 51.5 235.354 51.5L235.354 44.5C167.532 44.5 120.774 89.9496 91.2087 134.567C76.3887 156.932 65.758 179.271 58.8335 196.006C55.3691 204.378 52.8268 211.361 51.1479 216.26C50.3083 218.71 49.6843 220.64 49.2685 221.963C49.0605 222.625 48.9047 223.135 48.7999 223.482C48.7475 223.656 48.7079 223.789 48.6809 223.88C48.6674 223.926 48.6571 223.961 48.65 223.986C48.6464 223.998 48.6436 224.008 48.6416 224.014C48.6406 224.018 48.6397 224.021 48.6392 224.023C48.6385 224.025 48.6379 224.027 52 225ZM235.354 51.5C283.022 51.5 320.179 75.1215 348.235 105.255C376.318 135.419 395.053 171.882 405.732 196.879L412.169 194.129C401.337 168.775 382.221 131.486 353.358 100.485C324.468 69.4551 285.582 44.5 235.354 44.5L235.354 51.5Z"
                  fill="#6FB1FF"
                />
                <g id="sunrise">
                  <path
                    id="Star 1"
                    d="M52 205L54.2336 250.126L82.5648 214.931L57.8476 252.751L101.455 240.931L59.228 257L101.455 273.069L57.8476 261.249L82.5648 299.069L54.2336 263.874L52 309L49.7664 263.874L21.4352 299.069L46.1524 261.249L2.54506 273.069L44.772 257L2.54506 240.931L46.1524 252.751L21.4352 214.931L49.7664 250.126L52 205Z"
                    fill="#FFD951"
                  />
                  <circle
                    id="Ellipse 1"
                    cx="52"
                    cy="257"
                    r="23"
                    fill="#FFF06B"
                  />
                </g>
                <g id="sunset">
                  <path
                    id="Star 1_2"
                    d="M423 205L425.234 250.126L453.565 214.931L428.848 252.751L472.455 240.931L430.228 257L472.455 273.069L428.848 261.249L453.565 299.069L425.234 263.874L423 309L420.766 263.874L392.435 299.069L417.152 261.249L373.545 273.069L415.772 257L373.545 240.931L417.152 252.751L392.435 214.931L420.766 250.126L423 205Z"
                    fill="#FFD643"
                  />
                  <circle
                    id="Ellipse 1_2"
                    cx="423"
                    cy="257"
                    r="23"
                    fill="#FFA95A"
                  />
                </g>
                <rect
                  id="ground"
                  y="257"
                  width="475"
                  height="56"
                  fill="#BB9D7A"
                />
              </g>
            </svg>

            <p>{`The fucking sun will come up at ${sunrise}`}</p>
            <p>{`And it will finally fuck off at ${sunset}`}</p>
          </div>
        </div>
      </div>
    );
  } catch (err) {
    return (
      <div className="weatherdisplay notfound">
        <p>City not found!</p>
        <hr />
        <i class="fas fa-spinner fa-pulse fa-3x"></i>
      </div>
    );
  }
};

export default Weatherdisplay;
