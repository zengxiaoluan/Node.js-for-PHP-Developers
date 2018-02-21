importScripts('js/tree.js', 'js/file2.js');

self.onmessage = function (event) {
    let arr = event.data
    console.log(arr)
    arr.sort((a, b) => {
        return a - b
    })
    self.postMessage(arr)
}