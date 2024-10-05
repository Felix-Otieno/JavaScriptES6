// let epic = function() {
//     var epicLoop = function() {
//         for (i = 0; i < 10; i++) {
//             console.log(i);
//          }
//     } ();
   
//      console.log(i);
// }
// let epic2 = (function() {
//     var epicLoop = function() {
//         for (i = 0; i < 10; i++) {
//             console.log(i);
//          }
//     }) ();
//     console.log(i);
// }
// epic();
// epic2();

(function() {
    console.log("This is an IIFE!");
})();
(function(name) {
    console.log("Hello, " + name);
})("Felix");
