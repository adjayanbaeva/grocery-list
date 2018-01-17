$(document).ready(function () {
  $("#groceries").submit(function (event) {
    event.preventDefault();

    // create an array for items (as indicated in the HTML)
    var groceryItems = ["item1", "item2", "item3"];

    var sortedList = [];

    groceryItems.forEach(function(groceryItem) {
      var item = $("input#" + groceryItem).val();
      $("." + groceryItem).text(item);
      sortedList.push(item);
    });

    sortedList.sort();

    var upperCaseList = function (sortedList) {
      return sortedList.toUpperCase();
    }

    var capitalizedList = sortedList.map(upperCaseList);

    document.write(capitalizedList);
  });
});
