function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  // you can only write your code here!
  
  var list =[];
  // console.log(shoppers)
  if (shoppers.length === 0) {
    return list
  } else {
  for (var i=0; i<listBarang.length; i++){
    var obj ={}
    obj.product = listBarang[i][0];
    obj.shopper = []
    obj.harga = listBarang[i][1];
    obj.leftOver = listBarang[i][2];
    obj.totalProfit = 0;
    list.push(obj)
  }

  var jualSepatu =0;
  var jualBaju =0;
  var jualSweater =0;
  var stokSepatu = list[0].leftOver
  var stokBaju = list[1].leftOver
  var stokSweater = list[2].leftOver

  for (var j=0; j<shoppers.length;j++){
    if (shoppers[j].product === 'Sepatu Stacattu'){
      if (stokSepatu>=shoppers[j].amount) {
        list[0].shopper.push(shoppers[j].name);
        jualSepatu += shoppers[j].amount
        stokSepatu -= shoppers[j].amount
      }
    } else if (shoppers[j].product === 'Baju Zoro') {
      if (stokBaju>=shoppers[j].amount) {
        list[1].shopper.push(shoppers[j].name);
        jualBaju += shoppers[j].amount
        stokBaju -= shoppers[j].amount
      }
    } else if (shoppers[j].product === 'Sweater Uniklooh') {
      if (stokSweater>=shoppers[j].amount) {
        list[2].shopper.push(shoppers[j].name);
        jualSweater += shoppers[j].amount
        stokSweater -= shoppers[j].amount
      }
    }

  }
  list[0].leftOver = list[0].leftOver - jualSepatu
  list[0].totalProfit += list[0].harga * jualSepatu

  list[1].leftOver = list[1].leftOver - jualBaju
  list[1].totalProfit += list[1].harga * jualBaju

  list[2].leftOver = list[2].leftOver - jualSweater
  list[2].totalProfit += list[2].harga * jualSweater
  }
  
  var result = []
  for (var k=0; k<listBarang.length; k++){
    var obj1 ={}
    obj1.product = listBarang[k][0];
    obj1.shopper = list[k].shopper
    obj1.leftOver = list[k].leftOver;
    obj1.totalProfit = list[k].totalProfit;
    result.push(obj1)
  }

  return result
  
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]