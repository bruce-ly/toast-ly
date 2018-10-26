import Toast from './main'

let $toast = new Toast({
    // boxBgClass: 1,
    // textBgClass: 1,
    // animation: 1,
    autoClose: 1,
    // duration: 1000
})

document.querySelector('button').addEventListener('click', function () {
    $toast.open('test');
})