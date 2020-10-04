/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    return Array.from(new Set(hashtags.map(elem => elem.toLowerCase()))).join(', ');
};
