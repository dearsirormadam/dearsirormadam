const {minus,fib,substraction,upper,merge_sort} = require('./allTask')


// 1. Реалізувати злиття масиву слів у стрічку. Допустим є написання функцій.
console.log('1. Реалізувати злиття масиву слів у стрічку. Допустим є написання функцій.');

let text = ['I', 'want', 'to', 'sleep'];

text = text.join(' ');

console.log(text);

// 2. Написати функцію, яка першу літеру кожного слова речення переведе у верхній регістр
console.log('2. Написати функцію, яка першу літеру кожного слова речення переведе у верхній регістр')
let newText = 'i want to sleep';



console.log(upper(newText));

// 3. Написати функцію, яка порахує перші n числа Фібоначі
console.log('3. Написати функцію, яка порахує перші n числа Фібоначі');



fib(8);

// 4. Написати функцію, яка видалить усі дублі із масиву стрічок
console.log('4. Написати функцію, яка видалить усі дублі із масиву стрічок');

let arr = ['Want', 'not', 'sleep', 'not', 'I', 'sleep', 'I'];



console.log(minus(arr));

// 5. Написати функцію, яка порахує різницю між датами у днях/тижнях/секундах.
console.log('5. Написати функцію, яка порахує різницю між датами у днях/тижнях/секундах.');

let first = new Date(2020, 11, 12);//month from 0
let second = new Date(2019, 11, 5);


substraction(first, second);

// 6. Написати реалізацію сортування злиттям масиву
console.log('6. Написати реалізацію сортування злиттям масиву');



console.log(merge_sort([1, 4, 8, 2, 4, 5, 7, 9, 435, 7, 68, 78, 45, 34, 23,]));


//7

const Market = require('./market.js');
const Goods = require('./goods.js');
const Stock = require('./stock.js');
const GoodsOnStock = require('./GoS.js');
markets = [];
all_goods = [];
stocks = [];
//a
function AddMarket(name) {
  market = new Market(name);
  markets.push(market);
}
AddMarket('Tom');
AddMarket('Mot');
AddMarket('Omt');
//b
function EditMarket(name, market) {
  for (i = 0, len = markets.length; i < len; i++) {
    if (markets[i].name == name) {
      markets[i] = market;
    }
  }
}
EditMarket('Mot', new Market('edited_Mot'))
//c
function FindMarket(name) {
  return markets.filter(market => market.name === name)[0]
}
console.log('Find market:', FindMarket('edited_Mot'));
//d
function RmMarket(name) {
    markets = markets.filter(market => market.name != name)
}
RmMarket('Tom');
//e
function AddGoods(name){
  goods = new Goods(name)
  all_goods.push(goods);
}
AddGoods('GLO');
AddGoods('LOG');
AddGoods('OGL');
AddGoods('g20')
//f
function EditGoods(name, goods) {
  for (i = 0, len = all_goods.length; i < len; i++) {
    if (all_goods[i].name == name) {
      all_goods[i] = goods;
      return
    }
  }
}
EditGoods('LOG', new Goods('LOG_1'))
//g
function RmGoods(name) {
    all_goods = all_goods.filter(goods => goods.name != name)
}
RmGoods('OLG')
//h
function FindGoods(name) {
  return all_goods.filter(goods => goods.name === name)[0]
}
console.log('Find goods:', FindGoods('LOG_1'))
//i
function AddStock(name){
  stock = new Stock(name)
  stocks.push(stock);
}
AddStock('St');
AddStock('Sy');
AddStock('Su');
//j
function EditStock(name, stock) {
  for (i = 0, len = all_goods.length; i < len; i++) {
    if (stocks[i].name == name) {
      stocks[i] = stock;
      return
    }
  }
}
EditStock('Sy', new Stock('Sy_e'))
//k
function RmStock(name) {
    stocks = stocks.filter(stock => stock.name != name)
}
RmStock('Sy_e')
//l
function FindStock(name) {
  return stocks.filter(stock => stock.name === name)[0]
}
console.log('Find stock:', FindStock('St'))
//m
function ShipGoodsOnStock(goods, stock){
  stock.goods.push(goods)
  return
}
ShipGoodsOnStock(all_goods[0], stocks[0])
//n
function RmGoodsFromStock(goods, stock) {
  stock.goods = stock.goods.filter(good => good.name != goods.name)
}
//o
function MoveGoods(goods, stock1, stock2) {
  RmGoodsFromStock(goods, stock1)
  ShipGoodsOnStock(goods, stock2)
}
//p
function ShipGoodsToMarket(goods, stock, market) {
  RmGoodsFromStock(goods, stock)
  market.goods.push(goods)
}
ShipGoodsToMarket(all_goods[0], stocks[0], markets[0])
console.log(markets)
console.log(all_goods)
console.log(stocks)