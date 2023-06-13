// complete the given function

function palindrome(s){
const sanitizedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // Compare the reversed string with the original string
  const reversedString = sanitizedString.split('').reverse().join('');
  return sanitizedString === reversedString;
}
module.exports = palindrome
