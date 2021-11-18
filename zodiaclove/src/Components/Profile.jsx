import React from "react";

//TODO
//Add styling according to the css files

function checkSign(sign) {
  sign = sign.toUpperCase();
  //TODO
  //complete the URLS based on the images once the branch is merged
  if (sign === "ARIES") {
    //return imageURL
  } else if (sign === "TAURUS") {
    //return imageURL
  } else if (sign === "GEMINI") {
    //return imageURL
  } else if (sign === "CANCER") {
    //return imageURL
  } else if (sign === "LEO") {
    //return imageURL
  } else if (sign === "VIRGO") {
    //return imageURL
  } else if (sign === "LIBRA") {
    //return imageURL
  } else if (sign === "SCORPIO") {
    //return imageURL
  } else if (sign === "SAGITTARIUS") {
    //return imageURL
  } else if (sign === "CAPRICORN") {
    //return imageURL
  } else if (sign === "AQUARIUS") {
    //return imageURL
  } else if (sign === "PISCES") {
    //return imageURL
  }
}

function signData(bd, sign) {
  var zodiacURL = checkSign(sign);
  return (
    <div>
      <p>{bd}</p>
      <hr />
      <p>{sign}</p>
      <img src={zodiacURL} alt={`Their sign is ${sign}`} />
    </div>
  );
}

export default function ProfileView(props) {
  const sign = signData(props.bd, props.sign);

  return (
    <div>
      <img src={props.img} alt="Profile pic" />
      <h1>{`${props.name} ${props.last_name}`}</h1>
      <div>
        <div>{sign}</div>
        <div>
          <p>{props.bio}</p>
        </div>
      </div>
      <div>
        <ul>
          {
            //Add a forEach in the hobbies array
          }
        </ul>
      </div>
    </div>
  );
}
