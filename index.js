function scuberGreetingForFeet(ride){
  let rideScript;
  if (ride <= 400){
    rideScript = `This one is on me!`;
    console.log(rideScript);
    return rideScript;
  } else if (ride <= 2500){
    rideScript = `I will gladly take your thirty bucks.`;
    console.log(rideScript);
    return rideScript;
  } else (ride >= 2500);{
    rideScript = `No can do.`;
    console.log(rideScript);
    return rideScript;
  }
  
}

function ternaryCheckCity(city){
  const checkCity = city;
  const isNYC = checkCity === `NYC` ? `Ok, sounds good.` : `No go.`;
  console.log(isNYC);
  return isNYC;
}

function switchOnCharmFromTip(tip){
  const generosity = tip;

  let tipMessage;

  switch(generosity) {
    case `generous`:
      tipMessage = `Thank you so much.`;
      console.log(tipMessage);
      return tipMessage;
      break;

    case `not as generous`:
      tipMessage = `Thank you.`;
      console.log(tipMessage);
      return tipMessage;
      break;

    default:
      tipMessage = `Bye.`;
      console.log(tipMessage);
      return tipMessage;
      break;
  }
}