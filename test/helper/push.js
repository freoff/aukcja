const id = require('shortid');
let arr=[];
obj1 ={ a:1,ab:2};


obj1.next='jflkas';
obj1.id=id.generate();
arr.push(obj1);
console.log(arr);
console.log(arr.length);