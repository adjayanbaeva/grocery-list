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



      // 4. push the user input to the empty array created in step 3.
      sortedList.push(item);

      // 5. close forEach Loop
    });

    // 6. sort the array created in step 3.
    sortedList.sort();

    // 7. create a function to return the sortedList as all upper case.
    var upperCaseList = function (sortedList) {
      return sortedList.toUpperCase();
    }

    // 8. create a new array that will house the all upper case list that was returned in Step 7.
    var capitalizedList = sortedList.map(upperCaseList);

    // print to document.
    // document.write(capitalizedList);

    // 9. create another forEach loop to append the items in the capitalizedList to the "#list" in the HTML
    capitalizedList.forEach (function (item) {
      // 10. capitalized and sorted items will be sent to <ul> tags in HTML
      $("#list").append("<li>" + item + "</li>");
    })

    // 11. Print output.
    $("#initially-showing").hide();
    $("#output").show();
  });
});
