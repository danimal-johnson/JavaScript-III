/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding

If this is referred to in the global scope, it will refer to the window or console object. This isn't
treated as an error by Javascript, but there is most-likely an error in your code if you get this.

* 2. Implicit Binding

If there's a dot before the function name, this refers to the object before the dot.
In cat.meow(), "this" would refer to a property of cat.

* 3. New Binding

When a constructor is used, "this" refers to the item you are creating.


* 4. Explicit Binding

If you use "call" or "apply", "this" is set explicitly. 

****** */
/**********
*
* write out a code example of each explanation above
*
***********/

// Principle 1: Window Binding
let innerWidth = 4;
console.log (innerWidth);       // The value we set above.
console.log(this.innerWidth);   // The browser window's size.



// Principle 2: Implicit Binding
let cat = {
    name: "Mittens",
    color: "black and white",
    greet() {
        console.log(`Meow. My name is ${this.name}. Meow.`);
    }
}
cat.greet();


// Principle 3: New Binding
function User (name, password) {
    this.name     = name;       // "this" refers to this prototype when "new" is used.
    this.password = password;
}
const bob = new User("Robert", "12345");
console.log(bob);


// Principle 4: Explicit Binding
function myColor() {
    console.log( `Hello! I am ${this.color} in colo(u)r.`); 
}
myColor.call(cat);  // We're explicitly setting the 'this' here.