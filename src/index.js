module.exports = function check(str, bracketsConfig) {
  let arr = []

  for(i=0; i<str.length; i++) {
    if(str.charAt(i) === arr[arr.length - 1]  && isSpecial(str.charAt(i), bracketsConfig)) {
      let openBracket = arr.pop()
      if(!openBracket || !isPair(openBracket, str.charAt(i), bracketsConfig)){
        return false
      }
    } else if (isOpeningBracket(str.charAt(i), bracketsConfig)) {
      arr.push(str.charAt(i))
    } else if(!isOpeningBracket(str.charAt(i), bracketsConfig) ) {
      let openBracket = arr.pop()
      if(!openBracket || !isPair(openBracket, str.charAt(i), bracketsConfig)){
        return false
      }
    }
  }
  return arr.length === 0
}



function isOpeningBracket(element, bracketsConfig) {
  for(item of bracketsConfig) {
    if(element === item[0]) {
      return true
    } 
  }
  return false
}

function isPair(openBracket, closeBracket, bracketsConfig) {
  for(item of bracketsConfig) {
    if(openBracket === item[0] && closeBracket === item[1]) {
      return true
    } 
  }
  return false
} 

function isSpecial(element, bracketsConfig) {
  return isPair(element, element, bracketsConfig)
}