export const utilService = {
    makeId,
    getRandomColor,
    getRandomInt,
    getFormattedNowDate,
    getFormattedDate,
    getFormattedHour,
}

function makeId(length = 8) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getRandomColor() {
    const options = ['#aecbfa', '#e8eaed', '#e6c9a8', '#fdcfe8', '#d7aefb', '#cbf0f8', '#a7ffeb', '#ccff90', '#fff475', '#fbbc04', '#f28b82']
    return options[getRandomInt(0, options.length - 1)]
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// TIME // 

function getFormattedNowDate() {
    const date = new Date();
    const year = date.getFullYear().toString()
    let month = (date.getMonth() + 1).toString()
    let day = date.getDate().toString()
    if (month < 10) month = '0' + month
    if (day < 10) day = '0' + day
    return year + '-' + month + '-' + day
}

function getFormattedDate(timestamp) {
    const time = new Date(timestamp)
    // Replacing '.' with '/'
    return time.toLocaleString().split(',')[0].replace(/\./g, '/');
}

function getFormattedHour(timestamp) {
    const time = new Date(timestamp)
    let hours = time.getHours();
    let minutes = time.getMinutes();
    const ampm = (hours >= 12) ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const timeStr = hours + ':' + minutes + ' ' + ampm;
    return timeStr
}






