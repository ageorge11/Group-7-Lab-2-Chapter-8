/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */
console.log('helo')

for (var i = 0; i < 3; i++) {
   outputCartRow(filenames, titles, quantities, prices, calculateTotal());
   }
   
   var printSubTotal = outputSubtotal(quantities,prices);
   var printTax = calculateTax(printSubTotal);
   var printShipping = calculateShipping(printSubTotal);
   var printGrandTotal = calculateGrandTotal(printSubTotal, printTax, printShipping)
