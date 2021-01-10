function domainName(url){
  let wordsArray = url.match(/[a-z-_0-9]{1,}/g);


    if(wordsArray[0] == 'http') wordsArray.shift()
    if(wordsArray[0] == 'https') wordsArray.shift()
    if(wordsArray[0] == 'www') wordsArray.shift()

    return wordsArray[0]
}
