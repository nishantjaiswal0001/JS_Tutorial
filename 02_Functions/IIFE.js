// Immediately Invoked Function Expressions(IIFE)
(function chai(){
    console.log(`DB Connected`)
})();

(function () {
  let secret = 42;
  console.log(secret);
})();

// console.log(secret); // ❌ ReferenceError

(function (name) {
  console.log("Hello", name);
})("Nishant");


// ()()

