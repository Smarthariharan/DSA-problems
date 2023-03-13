let normalTime = "07:05:45PM";
let [time, meridian] = normalTime.split(/([AP]M)/); 
let [hours, minutes, seconds] = time.split(':');

// Convert hours to 24-hour format
if (meridian === 'PM' && hours !== '12') {
  hours = String(Number(hours) + 12);
} else if (meridian === 'AM' && hours === '12') {
  hours = '00';
}

let railwayTime = `${hours}:${minutes}:${seconds}`;
console.log(railwayTime); 