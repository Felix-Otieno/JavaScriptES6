// The most common type of nested loops will be one loop inside another. The first loop is usually called the outer loop while the second loop is called the inner loop. The outer loop always executes first, and the inner loop executes inside the outer loop each time the outer loop executes once.
// Outer loop
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop - Iteration ${i}`);

    // Inner loop
    for (let j = 1; j <= 2; j++) {
        console.log(`   Inner Loop - Iteration ${j}`);
    }
}
