/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    var copycolle = JSON.parse(JSON.stringify(collection));
    var arg = [].slice.call(arguments);
    arg.sort();

    if(arg.length == 1){
        return copycolle;
    }

    for(var i = 1; i < arg.length; i++) {
        if (arg[i][0] == 'filterIn') {
            var str_value = arg[i][2].join();
            for (var j = copycolle.length - 1; j >= 0; j--) {
                if (str_value.indexOf(copycolle[j][arg[i][1]]) == -1) {
                    copycolle.splice(j, 1);
                }
            }
        }

        if (arg[i][0] == 'select') {
            var str_value = arg[i][1].join();
            for (var j = 0; j < copycolle.length; j++) {
                var arr_value = Object.keys(copycolle[j]);
                for (var l = 0; l < arr_value.length; l++) {
                    if (str_value.indexOf(arr_value[l]) == -1) {
                        delete copycolle[j][arr_value[l]];
                    }
                }
            }
        }
    }
return copycolle;
}

/**
 * @params {String[]}
 */
function select() {
    var fields = [].slice.call(arguments);
    return ['select', fields];
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return ['filterIn', property, values];
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
