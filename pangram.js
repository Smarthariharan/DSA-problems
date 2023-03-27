const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function pangram(str) {
    let lower = str.toLowerCase();
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let isPangram = true;
  
    for(let i = 0; i < alphabets.length; i++){
      if(!lower.includes(alphabets[i])){
        isPangram = false;
        break;
      }
    }
  
    if(isPangram) {
      console.log("Pangram");
      return "Pangram";
    } else {
      console.log("Not Pangram");
      return "Not Pangram";
    }
  }

  pangram(str);