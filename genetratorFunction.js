// A generator function in JavaScript is a special type of function that can be paused and resumed during its execution, allowing it to produce a series of values over time, rather than computing them all at once. Generator functions use the function* syntax and yield keyword to control the flow of values.
function *Favourites() {
    var pizza = yield "What is your favourite pizza";
    var game = yield "What is your favourite game";
    var movie = yield "What is your favourite movie";

    console.log(pizza + " " + game + " " + movie);
}
var q = Favourites();
console.log(q.next());
console.log(q.next("Cheese Burger"));
console.log(q.next("Guard of Honor"));
console.log(q.next("Dead Men Tell no Tales"));