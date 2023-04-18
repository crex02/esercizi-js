// ESERCIZI JS

// Riconoscere ID riunioni di Google Meet
let meetId = /[a-z]{3}-[a-z]{4}-[a-z]{3}/;
console.log(meetId.test("ako-tjrf-asd"));

// Riconoscere una data
let datePattern = /\d{1,2}\/\d{1,2}\/\d*/;
console.log(datePattern.test("30/05/2002"));
//testRegex(datePattern, "20/04/2002");

// Riconoscere un dominio
let domainPattern = /^[a-zA-Z\d][\w\-]*(\.[a-zA-Z]+)*(:\d+)?$/;
console.log(domainPattern.test("localhost:8080"));
console.log(domainPattern.test("google.com"));
console.log(domainPattern.test("english-site-co-uk:21"));



