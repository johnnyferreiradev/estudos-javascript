function parseCelcius(F){
    let c = 5 * (F - 32)/9
    return c;
}

console.log(`212ºF correspondem a ${parseCelcius(212)}ºC`);
