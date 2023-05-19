function palindrome(str) {
    let removeChar = str.toLowerCase().replace(/[^a-z0-9]/g,"");
    let palindrome = removeChar.split("").reverse().join("");
    return removeChar === palindrome;
    }
    
    palindrome("eye");