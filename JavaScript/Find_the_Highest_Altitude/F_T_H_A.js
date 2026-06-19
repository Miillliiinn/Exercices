var largestAltitude = function(gain) {
    var higher = 0;
    let cumul = 0;

    for(let i = 0; i < gain.length; i++)
    {
        cumul += parseInt(gain[i]);
        if (cumul > higher)
            higher = cumul;
    }
    return higher;
};