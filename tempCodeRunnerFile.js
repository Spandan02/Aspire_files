function diamondLower(width, height) {
  for (let rNum = height / 2; rNum > 0; rNum--) {
    let text = "";
    let strs = rNum*(width / height) + 1;
    let ttalSpace = (width - height) / 2;
    let prSpace = Math.floor(ttalSpace);
    let ptSpace = Math.floor(ttalSpace);
    for (let k = 0; k < prSpace; j++) {
      text += " ";
    }
    for (let k = 0; k < strs; k++) {
      text += "*";
    }
    for (let k = 0; k < ptSpace; k++) {
      text += " ";
    }
    console.log(text);
  }
}
