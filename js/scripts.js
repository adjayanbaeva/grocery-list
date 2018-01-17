$(document).ready(function () {
  $("#groceries").submit(function (event) {
    event.preventDefault();

    // 1. create an array for items (as indicated in the HTML)
    var groceryItems = ["item1", "item2", "item3"];

    // 3. create an empty array to house the user input
    var sortedList = [];

    // 2. Loop through the groceryItems array
    groceryItems.forEach(function(groceryItem) {

      // and assign user input to var item.
      var item = $("input#" + groceryItem).val();

      // call thr class from the HTML form-group and output to form
      $("." + groceryItem).text(item);

      // 4. push the user input to the emoty array created in step 3.
      sortedList.push(item);

      // 5. close forEach Loop
    });

    // 6. sorted the array created in step 3.
    sortedList.sort();

    // 7. create a function to return the sortedList as all upper case.
    var upperCaseList = function (sortedList) {
      return sortedList.toUpperCase();
    }

    // 8. create a new array that will house the all upper case list that was returned in Step 7.
    var capitalizedList = sortedList.map(upperCaseList);

    // print to document.
    document.write(capitalizedList);
  });
});
