var pastBooks = ["Divergent", "Mrs.Peregrine's Home for Peculiar Children"];
var futureBooks =  ["Snow Country"];

var booksReadHeading = "<div id='booksReadDiv'><h2 id='booksRead'>Books Read</h2></div>"

document.body.innerHTML = booksReadHeading;

var table = document.createElement('table');
for (var i = 0; i < pastBooks.length; i++){
    var tr = document.createElement('tr');   

    var td1 = document.createElement('td');

    var text1 = document.createTextNode(pastBooks[i]);

    td1.appendChild(text1);
    tr.appendChild(td1);

    table.appendChild(tr);

}

booksReadDiv = document.getElementById('booksReadDiv'); 

booksReadDiv.appendChild(table);


var x = document.createElement("INPUT");
x.setAttribute("type", "text");

booksReadDiv.appendChild(x);

console.log("hello world");