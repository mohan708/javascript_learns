const account=111;
console.log(account);
//account=222;
//console.log(account);

let accountEmail="hc@hc.com"
var accountPassword="abc123"
var accountCity="Benglauru"
let accountState;
console.table([account,accountEmail,accountPassword,accountCity,accountState])

accountEmail="hc@12hc.com"
accountPassword="moabc123"
accountCity="vizag"
accountState="1234";

console.table([account,accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/