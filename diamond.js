function diamondUpper(width, height) {
  for (let rowNum = height / 2; rowNum <= height; rowNum++) {
    let txt = "";
    let stars = rowNum * (width / height) + 1;
    let totalSpace = (width - stars) / 2;
    let prevSpace = Math.floor(totalSpace);
    let postSpace = Math.floor(totalSpace);
    for (let j = 0; j < prevSpace; j++) {
      txt += " ";
    }
    for (let j = 0; j < stars; j++) {
      txt += "*";
    }
    for (let j = 0; j < postSpace; j++) {
      txt += " ";
    }
    console.log(txt);
  }
}

function diamondLower(width, height) {
  for (let rNum = height / 2; rNum > 0; rNum--) {
    let text = "";
    let strs = rNum*(width / height) + 1;
    let ttalSpace = (width - strs) / 2;
    let prSpace = Math.floor(ttalSpace);
    let ptSpace = Math.floor(ttalSpace);
    for (let k = 0; k < prSpace; k++){
      text+= " ";
    }
    for (let k = 0; k < strs; k++) {
      text+= "*";
    }
    for (let k = 0; k < ptSpace; k++) {
      text+= " ";
    }
    console.log(text);
  }
}

function main() {
  diamondUpper(10, 20);
  diamondLower(10, 20);
}

main();
