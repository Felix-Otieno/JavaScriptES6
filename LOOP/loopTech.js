// The break statement breaks out of a switch or a loop. In a switch, it breaks out of the switch block. This stops the execution of more code inside the switch. In in a loop, it breaks out of the loop and continues executing the code after the loop (if any).
// The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

for (i = 0; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}

for (d = 5; d <= 20; d++) {
    if (d === 10) {
        continue;
    }
    console.log(d);
}