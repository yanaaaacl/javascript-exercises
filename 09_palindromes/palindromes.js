const palindromes = function (str) {
    let arr = [];
    let arr2 = [];
    let str2 = str.toLowerCase();
    str2 = str2.replace('!', '');
    str2 = str2.replace('.', '');
   
   for (let i = 0; i < str2.length; i++){
    arr.push(str2.charAt(i));
   }

   arr2 = arr.slice(0);
   arr2 = arr2.reverse();

   let str3 = arr.join('');
   let str4 = arr2.join('');

   str3 = str3.replace(/,/g, '');
   str3 = str3.replace(/\s+/g, '');

   str4 = str4.replace(/,/g, '');
   str4 = str4.replace(/\s+/g, ''); 

   
    
    if (str3 == str4){
        return true;
    } else {
        return false;
    }
    
    
};
palindromes('racecar');
// Do not edit below this line
module.exports = palindromes;
