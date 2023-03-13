function convertIntoRailwayTime(normalTime) {

    const [hours, minutes] = normalTime.split(':');

    let railwayTime;
    if(hours < 12){
        railwayTime = `${hours}:${minutes} AM`;
    }
    else if(hours === '12'){
        railwayTime = `${hours}:${minutes} PM`;
    }
    else{
        railwayTime = `${hours - 12}:${minutes} PM`;
    }

    if(hours === '00'){
        railwayTime = `12:${minutes}AM`;
    }

    return railwayTime;
}

console.log(convertIntoRailwayTime('10:30'));


