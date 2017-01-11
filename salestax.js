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

// console.log(companySalesData[0].sales[0]);
function sum(list) {

}

function sumSales(companyName) {
  // Loop through entire object
  for (var i = 0; i < companySalesData.length; i++) {

    // Find company's name
    if (companySalesData[i].name === companyName) {

      // Set variable to tabulate sales for company
      var totalSales = 0;

      //List sales
      console.log(companyName + companySalesData[i].province + " these are the sales " + companySalesData[i].sales);

      //Loop through all sales for company
      for (var counter = 0; counter < companySalesData[i].sales.length; counter++) {

        //Sum sales
        totalSales = totalSales + companySalesData[i].sales[counter];


      }

        //Print results -- is this working?
        console.log(companyName + companySalesData[i].province + " this is the sum of sales" + totalSales);


    }
  }
}

sumSales("Telus");
