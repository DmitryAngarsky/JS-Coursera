"use strict";

const { exception } = require("console");

/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var formatDate = new Date(date);

    function getMonthFormat(month){
        month += 1;
        return month < 10 ? '0' + month : month;
    }

    function timeFormat(minutes){
        return minutes < 10 ? '0' + minutes : minutes;
    }

    function result(dateTime) {
        return dateTime.getFullYear() + '-' 
        + getMonthFormat(dateTime.getMonth()) + '-' 
        + timeFormat(dateTime.getDate()) + ' ' 
        + timeFormat(dateTime.getHours()) + ':' 
        + timeFormat(dateTime.getMinutes());
    } 

    return {
        add: function (count, type) {
            if(count < 0 || ['hours', 'months', 'days', 'minutes'].indexOf(type) === -1)
            {
                throw new TypeError();
            }
            switch (type){
                case 'hours':
                    formatDate.setHours(formatDate.getHours() + count);
                    return this;
                case 'months':
                    formatDate.setMonth(formatDate.getMonth() + count);
                    return this;
                case 'days':
                    formatDate.setHours(formatDate.getHours() + (count * 24));
                    return this;
                case 'minutes':
                    formatDate.setMinutes(formatDate.getMinutes() + count);
                    return this;
            }
        },
        subtract: function (count, type) {
            if(count < 0 || ['hours', 'months', 'days', 'minutes'].indexOf(type) === -1) 
            {
                throw new TypeError();
            }
            switch (type){
                case 'hours':
                    formatDate.setHours(formatDate.getHours() - count);
                    return this;
                case 'months':
                    formatDate.setMonth(formatDate.getMonth() - count);
                    return this;
                case 'days':
                    formatDate.setHours(formatDate.getHours() - (count * 24));
                    return this;
                case 'minutes':
                    formatDate.setMinutes(formatDate.getMinutes() - count);
                    return this;
            }
        },

        value: result(formatDate)
    }
};
