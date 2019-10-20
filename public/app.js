

const foods = [

  apple = {
    name: "apple",
    price_lb: 1.62,
    price_cup: 0.44,
    conversion: 0.243,
    serving_size_user: 223,
    serving_size_user_portion: "1 large apple",
    serving_backend: 0.4916310000099869959
  },
  apricots = {
    name: "apricots",
    price_lb: 3.09,
    price_cup: 1.21,
    conversion: 0.364,
    serving_size_user: 35,
    serving_size_user_portion: "1 apricot",
    serving_backend: 0.0771618
  },
  banana = {
    name: "banana",
    price_lb: 0.55,
    price_cup: 0.28,
    conversion: 0.331,
    serving_size_user: 118,
    serving_size_user_portion: "1 medium",
    serving_backend: 0.260145
  },
  blackberries = {
    name: "blackberries",
    price_lb: 5.66,
    price_cup: 1.89,
    conversion: 0.320,
    serving_size_user: 39,
    serving_size_user_portion: "6 blackberries",
    serving_backend: 0.0859803
  },
  cantaloupe = {
    name: "cantaloupe",
    price_lb: 0.52,
    price_cup: 0.38,
    conversion: 0.375,
    serving_size_user: 552,
    serving_size_user_portion: "1 medium",
    serving_backend: 1.21695
  },
  // vegetables
  acorn_squash = {
    name: "acorn squash",
    price_lb: 1.12,
    price_cup: 1.10,
    conversion: 0.452,
    serving_size_user: 205,
    serving_size_user_portion: "1 cup in cubes",
    serving_backend: 0.451948
  },
  artichoke = {
    name: "artichoke",
    price_lb: 2.36,
    price_cup: 2.43,
    conversion: 0.375,
    serving_size_user: 120,
    serving_size_user_portion: "1 medium",
    serving_backend: 0.264555
  },
  asparagus = {
    name: "asparagus",
    price_lb: 3.08,
    price_cup: 2.47,
    conversion: 0.397,
    serving_size_user: 75,
    serving_size_user_portion: "5 spears",
    serving_backend: 0.165347
  },
  avocados = {
    name: "avocados",
    price_lb: 2.23,
    price_cup: 0.96,
    conversion: 0.320,
    serving_size_user: 201,
    serving_size_user_portion: "1 avocado",
    serving_backend: 0.443129
  },
  black_beans = {
    name: "black beans",
    price_lb: 1.40,
    price_cup: 0.24,
    conversion: 0.386,
    serving_size_user: 194,
    serving_size_user_portion: "1 cup",
    serving_backend: 0.427697
  },
  black_eye_peas = {
    name: "blackeye peas",
    price_lb: 1.61,
    price_cup: 0.24,
    conversion: 0.386,
    serving_size_user: 171,
    serving_size_user_portion: "1 cup",
    serving_backend: 0.37699
  },
  broccoli = {
    name: "broccoli",
    price_lb: 1.92,
    price_cup: 0.84,
    conversion: 0.342,
    serving_size_user: 37,
    serving_size_user_portion: "1 spear",
    serving_backend: 0.081571
  },
  brussel_spouts = {
    name: "brussels sprouts",
    price_lb: 2.96,
    price_cup: 0.95,
    conversion: 0.342,
    serving_size_user: 168,
    serving_size_user_portion: "8 sprouts",
    serving_backend: 0.370377
  },
  butternut_squash = {
    name: "butternut squash",
    price_lb: 1.29,
    price_cup: 0.82,
    conversion: 0.452,
    serving_size_user: 205,
    serving_size_user_portion: "1 cup",
    serving_backend: 0.451948
  },
  green_cabbage = {
    name: "green cabbage",
    price_lb: 0.62,
    price_cup: 0.26,
    conversion: 0.331,
    serving_size_user: 89,
    serving_size_user_portion: "1 cup",
    serving_backend: 0.196211
  },
  red_cabbage = {
    name: "red cabbage",
    price_lb: 1.02,
    price_cup: 0.43,
    conversion: 0.331,
    serving_size_user: 150,
    serving_size_user_portion: "1 cup shredded",
    serving_backend: 0.330693
  },
  carrots = {
    name: "carrots",
    price_lb: 0.77,
    price_cup: 0.276,
    conversion: 0.24,
    serving_size_user: 46,
    serving_size_user_portion: "1 carrot",
    serving_backend: 0.101413
  }
]

let total = 0
let listOfItems = []
let count = 0
let listOfItemsSMS = []

function displayAllItems() {

  listOfItems.map(item => ($("#wholeList").append(('<p class="card-text">' + item.name + '<p>')).addClass("text-center")))
}



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
    }
  }

  displayAllItems()
  itemPerDay()
}

function itemPerDay() {
  let weeklyAmount = listOfItems.length;
  let dailyAmount = weeklyAmount / 5;
  console.log("Daily Amount", dailyAmount);
  let arrayofdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
listOfItemsSMS = listOfItems
  for (i = 0; i < 5; i++) {

    console.log("Current list of budgeted array", listOfItems);
  
    // this variable will store our first day of the week

    let itemsForDay = listOfItems.filter(item => listOfItems.indexOf(item) < dailyAmount)

    let day = arrayofdays[i];

    // we want to send this to cards.
    let newCardDiv = $("<div>").addClass("card")
    let newCardBody = $("<div>").addClass("card-body")
    newCardDiv.append(newCardBody)
    $(".card-group").append(newCardDiv);

    displayResults(newCardDiv, itemsForDay, day);

    listOfItems = listOfItems.filter(item => !(listOfItems.indexOf(item) < dailyAmount));

  }
  // displayResults(itemPerDay)
}

$("#submit").on("click", function getBudgetInput(event) {
  event.preventDefault()
  let budget = $("#budget").val().trim()
  budget = budget.split(".")
  budget = budget[0]
  console.log(budget)
  getFood(budget)
  if ($("#phone").val().trim()) {
    let phone = $("#phone").val().trim()
sendSMS(budget,phone)
  }
  
})



function displayResults(newCardDiv, card, day) {
  console.log("This is our day", day);

  let itemsForCurrentDay = card;
  console.log("This is our array for our current day", itemsForCurrentDay);

  let dayLabel = $('<h3>').addClass("card-title").text(day);
  let span = $('<span>').text(" ")
  let icon = $('<i>').addClass("fa fa-calendar").attr("aria-hidden","true")
  span.append(icon)
  dayLabel.append(span)




  newCardDiv.append(dayLabel)
  newCardDiv.append(itemsForCurrentDay.map((item => ('<p class="card-text">' + '<strong>' + item.name + '</strong>' + '<p>') 
  + ('<p class="card-text">' + "serving size portion: " + item.serving_size_user_portion + '<p>') 
  + ('<p class="card-text">' + "price: $" + (
    item.serving_backend * item.price_lb 
  )+ '<p>'))
  
  ));


}


function sendSMS(budget,phone) {


  let stringSMS = {
    phone: phone,
    message:
     "With a budget of,  $" + budget + " , you can afford to buy at least: " + listOfItemsSMS.map(item => " " + item.name )
  }
$.post("/api/sms", stringSMS,
      function(data) {

        // If a table is available... tell user they are booked.
        if (data) {
          console.log("data: " + data)
        }
        
      });
    }

// $.ajax({ url: "/api/sms", method: "GET" })
// .then(function(stringSMS) {

//   // Here we then log the tableData to console, where it will show up as an object.
//   console.log(stringSMS);
//   console.log("------------------------------------");

 
// });

  
