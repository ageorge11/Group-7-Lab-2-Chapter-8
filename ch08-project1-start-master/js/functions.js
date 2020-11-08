/* define functions here */

var calculateTotal = function(quantity, price) {
    return quantity * price;
    };
    
    var output = function outputCartRow(file, title, quantity, price, total) {
    total = calculateTotal(quantity[i], price[i]);
    document.write("<tr>");
    document.write("<td><img src='images/" + file[i] + "'</td>");
    document.write("<td>" + title[i] + "</td>");
    document.write("<td>" + quantity[i] + "</td>");
    document.write("<td>" + price[i].toFixed(2) + "</td>");
    document.write("<td>" + total.toFixed(2) + "</td>");
    document.write("</tr>");
    };
    
    