// code your solution here
function saturdayFun(a = 'roller-skate') {
    let defaultWords = `This Saturday, I want to ${a}!`
    return defaultWords
}
function mondayWork(a= 'go to the office') {
    let defaultWords = `This Monday, I will ${a}.`
    return defaultWords
}
function wrapAdjective(flair) {
    return function doIt(a='special'){
        return `You are ${flair}${a}${flair}!`
    }
}