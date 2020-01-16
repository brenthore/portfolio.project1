var database = [
{
	username: "francis",
	password: "bugna"
},
{
	username: "Shana",
	password: "Ellaine"
},
{
	username: "Diana",
	password: "Mendez"
}
];

var newsFeed = [
   {
       username: "Carol",
       timeline:" i love u pransis"
   },
   {
       username:"asdasd",
      timeline:"asdasdasdasdasdasdasdasd"
   },
   {
       username:"asdsd3asd",
      timeline:"asdasdasd3467843asdasdasdasdasd"
   }

];

function isUserValid(username, password) {
		for (var i=0; i < database.length; i++) {
		if(database[i].username === username && database[i].password === password) {
			return true; 
		} 
	}
     return false;
}

function signIn(username, password) {
		if (isUserValid(username, password)) {
		console.log(newsFeed);
} else {
	alert("Wrong password!");
   }
}


var userNamePrompt = prompt("Enter your username");
var passwordPrompt = prompt("Enter your password");

signIn(userNamePrompt, passwordPrompt);
