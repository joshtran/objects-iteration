var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];



function calculateSalesTax(salesData, taxRates) {
  // Create new container object for companies
  var outputObject = {};
  // Loop through original object
  for (var i = 0; i < salesData.length; i++) {
    //Check to see if name key exists in new container object
    if (outputObject[salesData[i].name] === undefined){
      //Since name key not found in new container object, create nested company object
      outputObject[salesData[i].name] = {
      totalSales : 0,
      totalTaxes : 0
    }}
    //Calculate total sales for company and plug into appropriate key in nested company object
    outputObject[salesData[i].name].totalSales +=
     sumArray(salesData[i].sales)
    //Calculate total taxes for company and plug into appropriate key in nested company object
    outputObject[salesData[i].name].totalTaxes +=
     totalTax(sumArray(salesData[i].sales), salesData[i].province)
    }
  return outputObject;
}



// Calculate and ouput total taxes -- values passed in from given object key
function totalTax(totalSale, province){
  var taxRate = salesTaxRates[province];
  output = totalSale * taxRate;
  return output;
}
// Calculate and output total sales -- array passed in from given object key
function sumArray(saleArray){
  var total = 0;
  for (var i = 0; i < saleArray.length; i++) {
    total += saleArray[i];
  }
  return total;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);