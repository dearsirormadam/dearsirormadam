//export from here to main
exports.upper = (text) => {

    let newArr = [];
    text = text.split(' ');//слова в срічку
    text.forEach(item => {
        item = item.split('');//слово в масив
        item[0] = item[0].toUpperCase();//1 літера з великої
        newArr.push(item.join(''))//додати пробіли
    });

    return newArr.join(' ')//з масиву в текст
};

exports.fib = (n)=> { //фібоначчі
    let prev = 0, next = 1;
    for (let i = 0; i < n; i++) {
        next = prev + next;
        prev = next - prev;
        console.log(next);
    }
};

exports.minus = (arr) => {
    return Array.from(new Set(arr));
};

exports.substraction = (one, two) => { //різниця між датами

    let sec = (one - two) / 1000;
    let num = 604800;
    let days = Math.floor(sec/num);

    console.log(`Тижні: ${days}`);
    console.log(`Дні: ${sec/86400}`);
    console.log(`Секунди: ${sec}`);
};

exports.merge_sort = function (array) {  //сортування злиттям

    function merge(left, right) {
        let result = [];
        let il = 0;
        let ir = 0;
        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }

        return result.concat(left.slice(il)).concat(right.slice(ir));
    }

    function merge_sort(items) {
        if (items.length < 2) {
            return items;
        }
        let middle = Math.floor(items.length / 2);
        let left = items.slice(0, middle);
        let right = items.slice(middle);
        return merge(merge_sort(left), merge_sort(right));
    }

    return merge_sort(array);
};