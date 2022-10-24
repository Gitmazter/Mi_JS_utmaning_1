let email;
email = "philip.andelic@medieinstitutet.com";
email = "philip.imaboss@live.com";
email = "java.scripts@philip.andelic";

// 1: skriv ut positionen för den sista punkten i varabeln 
// email, oavsett hur lång/kort den är

console.log("last dot is at:" + email.lastIndexOf('.'));

// 2: Skriv ut topp-domänen från e-postadressen
// som står i email efter den sista punkten .com 
let x = email.lastIndexOf('.');
let y = email.length;
console.log("The top domain is" + email.slice(x, y));