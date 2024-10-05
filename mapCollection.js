// The JavaScript Map object holds key-value pairs and preserves the original insertion order.
let mapCollection = new Map();
mapCollection.set("Key1", "Hello world");
console.log(mapCollection.get("Key1")); 
console.log(mapCollection.has("key1"));
console.log(mapCollection.has("Key1"));


let mapCollect = new Map(
    [
            ["key1", "value1"],
            ["key2", "value2"],
            ["key3", "value3"],
            ["key4", "value4"]
    ]
);
console.log(mapCollect);
for (let i of mapCollect.entries()) {
       console.log(`${i[0]} - ${i[1]}`);   
}