function lowerCase(str){
  return str.toLowerCase();
}

function removeSpaces(str){
  return str.replace(/\s/g,'');
}

function findUniqueLetters(str){
  var uniqueLetterArr = [];
  for (var i = 0; i < str.length; i++){
    if (uniqueLetterArr.indexOf(str[i]) === -1){
      uniqueLetterArr.push(str[i]);
    }
  }
  return uniqueLetterArr;
}

function buildletterCountingObj(str){
  var newStr = removeSpaces(lowerCase(str));
  var newArr = findUniqueLetters(newStr);
  var letterCountingObj = {};

  for(var i = 0; i < newStr.length; i++){
    if (!letterCountingObj.hasOwnProperty(newStr[i])){
      letterCountingObj[newStr[i]] = 1;
    }else{
      letterCountingObj[newStr[i]] += 1;
    }
  }
  return letterCountingObj;
}

console.log(buildletterCountingObj("lighthouse in the house"));
