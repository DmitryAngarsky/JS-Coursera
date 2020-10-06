// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */

module.exports = function (command) {
    var cmd = command.split(' ');
    switch (cmd[0]) {
        case 'ADD':
            var name = cmd[1];
            var number = cmd[2].split(','); // Массив номеров телефонов
            if (!(name in phoneBook)) {
                phoneBook[name] = number;
            }
            else {
                number.forEach(function (num) {
                    if (phoneBook[name].indexOf(num) === -1) {
                        phoneBook[name].push(num);
                    }
                });
            }
            break;
        case 'REMOVE_PHONE':
            var numberDel = cmd[1];
            for (var name in phoneBook) {
                var index = phoneBook[name].indexOf(numberDel);
                if (index >= 0) {
                    if (phoneBook[name].length > 1) {
                        phoneBook[name].splice(index, 1); }
                    else {
                        delete phoneBook[name]; }
                    return true;
                }
            }
            return false;
        case 'SHOW':
            var str = [];
            for (var name in phoneBook) {
                str.push(name + ': ' + phoneBook[name].join(', '));
            }
            str.sort();
            return str;
    }
};