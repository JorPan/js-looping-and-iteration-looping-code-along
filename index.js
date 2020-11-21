// Code your solutions in this file
function countDown(num) {
    while (num >= 0) {
        console.log(num--)
}};


function writeCards(arr, event) {
    let dumb = []
    for (let i=0; i<arr.length; i++) {
        dumb.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    }
    return dumb
}