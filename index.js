let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};


function multiplyNumeric(obj) {
    for (let key in obj) {
        typeof obj[key] === 'number' ? obj[key] *= 2 : null; 
        console.log(obj[key])
    }
}

multiplyNumeric(menu);

console.log( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );