/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {

    var intHours = parseInt(hours, 10);
    var intMinutes = parseInt(minutes, 10)

    if(intHours === NaN || intMinutes === NaN){
        return false;
    }

    return (intHours >= 0 && intHours < 24 && intMinutes >=0 && intMinutes <60) ? true : false;
};
