// Using typeof

var test0 = typeof('what is this?');
console.log('test0 = ',test0);

var test1 = typeof(10);
console.log('test1 = ',test1);

var test2 = typeof(3.2);
console.log('test2 = ',test2);

var test3 = typeof(true);  // or false
console.log('test3 = ',test3);

var test4 = typeof(1 < 2);
console.log('test4 = ',test4);

var test5 = typeof([1, 2, 3]);
console.log('test5 = ',test5);

var test6 = typeof({ firstProp: 4 });
console.log('test6 = ',test6);

var test7 = typeof(function abc() { console.log('abc'); });
console.log('test7 = ',test7);
