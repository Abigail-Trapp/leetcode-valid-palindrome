var isPalindrome = function(s) {
  let split = s.split("").reverse()
  let comparison = split.join("").toLowerCase()
  let fullComparison = comparison.replace(/[^a-z0-9]/gi, '')

  let sSplit = s.split("")
  let sComparison = sSplit.join("").toLowerCase()
  let sFullComparison = sComparison.replace(/[^a-z0-9]/gi, '')
  console.log(fullComparison)
  console.log(sFullComparison)
  if(fullComparison === sFullComparison){
    return true
  } return false
};
console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("ab_a"))