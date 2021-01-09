let longestConsec = (strarr, k) => {
    let newStr = '';
    let longStr = '';

    for(let i = 0; i < strarr.length; i++){

        newStr = strarr.slice(i, i+k)

        if (newStr.join('').length > longStr.length) longStr = newStr.join('')
        
    }
    if(k <= 0 || k > strarr.length) return ''
    else return longStr
}



console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu","sjbfhdbfaldhb","jsdhoewnd"], 4))