var name_array1 = ["Amar", "Raja", "Rani"];
var score_array = ["Chennai", "Delhi", "Banglore"];

document.write('<table  border="1" cellspacing="0" cellpadding="5"><tr><th>Name</th><th>Place</th></tr>')

for (var i = 0; i < name_array1.length; i++) {
    document.write("<tr><td>" + name_array1[i] + "</td><td>" + score_array[i] + "</td></tr>")

}

document.write("</table>")
