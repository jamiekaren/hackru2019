// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.sidenav');
//   var instances = M.Sidenav.init(elems, options);
// });

// // Or with jQuery

// $(document).ready(function(){
//   $('.sidenav').sidenav();
// });

const foods = [

  apple = {
    name: "apple",
    price_lb: 1.62,
    price_cup: 0.44,
    conversion: 0.243
  },
  apricots = {
    name: "apricots",
    price_lb: 3.09,
    price_cup: 1.21,
    conversion: 0.364
  },
  banana = {
    name: "banana",
    price_lb: 0.55,
    price_cup: 0.28,
    conversion: 0.331
  },
  blackberries = {
    name: "blackberries",
    price_lb: 5.66,
    price_cup: 1.89,
    conversion: 0.320
  },
  cantaloupe = {
    name: "cantaloupe",
    price_lb: 0.52,
    price_cup: 0.38,
    conversion: 0.375
  },
  // vegetables
  acorn_squash = {
    name: "acorn squash",
    price_lb: 1.12,
    price_cup: 1.10,
    conversion: 0.452
  },
  artichoke = {
    name: "artichoke",
    price_lb: 2.36,
    price_cup: 2.43,
    conversion: 0.375
  },
  asparagus = {
    name: "asparagus",
    price_lb: 3.08,
    price_cup: 2.47,
    conversion: 0.397
  },
  avocados = {
    name: "avocados",
    price_lb: 2.23,
    price_cup: 0.96,
    conversion: 0.320
  },
  black_beans = {
    name: "black beans",
    price_lb: 1.40,
    price_cup: 0.24,
    conversion: 0.386
  },
  black_eye_peas = {
    name: "blackeye peas",
    price_lb: 1.61,
    price_cup: 0.24,
    conversion: 0.386
  },
  broccoli = {
    name: "broccoli",
    price_lb: 1.92,
    price_cup: 0.84,
    conversion: 0.342
  },
  brussel_spouts = {
    name: "brussels sprouts",
    price_lb: 2.96,
    price_cup: 0.95,
    conversion: 0.342
  },
  butternut_squash = {
    name: "butternut squash",
    price_lb: 1.29,
    price_cup: 0.82,
    conversion: 0.452
  },
  green_cabbage = {
    name: "green cabbage",
    price_lb: 0.62,
    price_cup: 0.26,
    conversion: 0.331
  },
  red_cabbage = {
    name: "red cabbage",
    price_lb: 1.02,
    price_cup: 0.43,
    conversion: 0.331
  },
  carrots = {
    name: "carrots",
    price_lb: 0.77,
    price_cup: 0.276,
    conversion: 0.24
  }
]

let total = 0
let listOfItems = []
let count = 0



function getFood(budget) {

  // We iterate through our foods array
  for (i = 0; i <= foods.length; i++) {

    // our current total cost is less than or equal to our budget 
    if (total <= budget) {
      // set our currentItem and Current price variables
      let indexNumber = Math.floor((Math.random(i) * foods.length))

      let currentItem = foods[indexNumber]
      let currentPrice = currentItem.price_lb

      // Then if our list of items array does not already include current item, then push and add price of current item
      if (!listOfItems.includes(currentItem)) {

        listOfItems.push(currentItem)
        // displayResults(currentItem);
        total += currentPrice
      }

      // console.log("--------------------------------------")
      // console.log(currentItem, currentPrice)
      // console.log("--------------------------------------")
      // console.log("total",total)
      // console.log("--------------------------------------")
      // console.log("listOfItems",listOfItems)
    }
  }
  itemPerDay()
}

function itemPerDay() {
  let weeklyAmount = listOfItems.length;
  let dailyAmount = weeklyAmount / 5;
  console.log("Daily Amount", dailyAmount);
  let arrayofdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

  for (i = 0; i < 5; i++) {

    console.log("Current list of budgeted array", listOfItems);
    // this variable will store our first day of the week

    let itemsForDay = listOfItems.filter(item => listOfItems.indexOf(item) < dailyAmount)

    let day = arrayofdays[i];

    // we want to send this to cards.
    let newCardDiv = $("<div>").addClass("card");

    $(".card-group").append(newCardDiv);

    displayResults(newCardDiv, itemsForDay, day);

    listOfItems = listOfItems.filter(item => !(listOfItems.indexOf(item) < dailyAmount));

  }
  // displayResults(itemPerDay)
}

$("#submit").on("click", function getBudgetInput(event) {
  event.preventDefault()
  let budget = $("#budget").val().trim()
  getFood(budget)
})



function displayResults(newCardDiv, card, day) {
  console.log("This is our day", day);

  let itemsForCurrentDay = card;
  console.log("This is our array for our current day", itemsForCurrentDay);

  let dayLabel = $('<h1>').text(day);

  newCardDiv.append(dayLabel)
  newCardDiv.append(itemsForCurrentDay.map(item => ('<p>' + item.name + '<p>')));


}

// const cardGroup = $(".card-group")
// const newCardContainer = $("<div>").addClass("row")
// const newNote = $('<div>').addClass("notes")
// const newPostCard = $('<div>').addClass("card")
// const newPostTitle = $("<h5>").addClass('card-title');
// const newCardBody = $("<div>").addClass("card-body");
// const newPostPrice = $("<p>").addClass('card-text');
// const newPostDay = $("<p>").addClass('card-text');
// newPostTitle.text(currentItem.name)
// newPostDay.text(day)
// newPostPrice.text(currentItem.price_lb)
// newCardBody.append(newPostDay)
// newCardBody.append(newPostTitle)

// newCardBody.append(newPostPrice)
// newPostCard.append(newCardBody)
// newCardContainer.append(newPostCard)
// newCardContainer.append(newNote)
// cardGroup.append(newCardContainer)
