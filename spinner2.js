const arr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let i = 0;
const spinnerLoad = setInterval(() => {
    if (i < arr.length) {
        process.stdout.write('\r' + arr[i++]);
    } else 
    clearInterval(spinnerLoad)

}, 200)