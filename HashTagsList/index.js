/**
 * @param {String} tweet
 * @returns {String[]}
 */
function tagFind(tweet) {
    return tweet.startsWith("#");
}

function clearTag(tweet) {
    return tweet.slice(1);
}

module.exports = function (tweet) {
    return tweet
    .split(" ")
    .filter(tagFind)
    .map(clearTag);
};
