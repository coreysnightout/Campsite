//  BUSINESS LOGIC--------------------------

 // CAMPSITE CONSTRUCTOR
function Campsite(style, setting, price, styleIcon, settingIcon, mainImg) {
  this.siteStyle = style;
  this.siteSetting = setting;
  this.sitePrice = price;
  this.siteState = "Oregon";
  this.siteURL = "url";
  this.siteStyleIcon = styleIcon;
  this.siteSettingIcon = settingIcon;
  this.sitePriceIcon = "priceIcon";
  this.siteMainImg = mainImg;
};

//  USER CONSTRUCTOR
function User(style, setting, numberOfPeople, numberOfNights, price) {
  this.userName = "";
  this.userEmail = "";
  this.userStyle = style;
  this.userSetting = setting;
  this.userNumberOfPeople = numberOfPeople;
  this.userNumberOfNights = numberOfNights;
  this.userPrice = price;
  this.userState = "Oregon";
};

  //  CALCULATES THE TOTAL COST
User.prototype.calculateTotalCost = function(campPrice) {
  this.userPrice = this.userNumberOfPeople * this.userNumberOfNights * campPrice
  return this.userPrice;

};

  //  CHECKS USER'S INPUT TO EACH CAMPSITE OBJECT AND RETURNS A MATCH
User.prototype.findCampsite = function(campsiteArray) {
  for (i = 0; i <= campsiteArray.length; i++) {
    if (this.userStyle === campsiteArray[i].siteStyle && this.userSetting === campsiteArray[i].siteSetting) {
      return campsiteArray[i]
    }
  }
};

//  UI LOGIC--------------------------
$(document).ready(function() {
  //  FIRST SUBMIT BUTTON
  $(".formOne").submit(function(event) {
    event.preventDefault();
    var selectedStyle;
    var selectedSetting;
    var userPrice;
    var userNumberOfNights;
    var userNumberOfPeople;

    //  COLLCTS DATA FROM FIRST FORM
    selectedStyle = $("input[name=campStyle]:checked").val();
    selectedSetting = $("input[name=settingStyle]:checked").val();

    //  INITALIZES USER OBJECT
    newUser = new User(selectedStyle, selectedSetting);

    //  INITIALIZING CAMPING OBJECTS
    var tentMountain = new Campsite("Tent", "Mountain", 5, "<img src='img/tent-icon.png'>", "<img src='img/mountains-icon.png'>", "<img src='img/tent-mtn.jpg'>");
    var tentCoast = new Campsite("Tent", "Coast", 5, "<img src='img/tent-icon.png'>", "<img src='img/coast-icon.png'>", "<img src='img/tent-coast2.jpg'>");
    var tentRiver = new Campsite("Tent", "River", 5, "<img src='img/tent-icon.png'>", "<img src='img/river-icon.png'/>", "<img src='img/tent-river.jpg'>");
    var rvMountain = new Campsite("RV", "Mountain", 10, "<img src='img/trailer-icon.png'>", "<img src='img/mountains-icon.png'>", "<img src='img/trailer-mtn.jpg'>");
    var rvCoast = new Campsite("RV", "Coast", 10, "<img src='img/trailer-icon.png'>", "<img src='img/coast-icon.png'>", "<img src='img/trailer-coast2.jpg'>");
    var rvRiver = new Campsite("RV", "River", 10, "<img src='img/trailer-icon.png'>", "<img src='img/river-icon.png'>", "<img src='img/trailer-river.png'>");
    var cabinMountain = new Campsite("Cabin", "Mountain", 15, "<img src='img/cabin-icon.png'>", "<img src='img/mountains-icon.png'>", "<img src='img/cabin-mtn.jpg'>");
    var cabinCoast = new Campsite("Cabin", "Coast", 15, "<img src='img/cabin-icon.png'>", "<img src='img/coast-icon.png'>", "<img src='img/cabin-coast.jpg'>");
    var cabinRiver = new Campsite("Cabin", "River", 15, "<img src='img/cabin-icon.png'>", "<img src='img/river-icon.png'>", "<img src='img/cabin-river.jpg'>");

    //  ARRAY THAT HOLDS EACH CAMPING OBJECT
    var campsiteArray = [tentMountain, tentCoast, tentRiver, rvMountain, rvCoast, rvRiver, cabinMountain, cabinCoast, cabinRiver];

    //  HOLDS THE RETURNED VALUE OF FINDCAMPSITE PROTOTYPE FUNCTION
    var findCampsiteReturn = newUser.findCampsite(campsiteArray);


      //  DISPLAYS CONTENT IN HTML
    $("#totalCost").text(" $" + findCampsiteReturn.sitePrice + " Per night per person");
    $(".displayStyle").text(" " + findCampsiteReturn.siteStyle);
    $(".displaySetting").text(" " + findCampsiteReturn.siteSetting);
    $(".styleIcon").append(" " + findCampsiteReturn.siteStyleIcon);
    $(".settingIcon").append(" " + findCampsiteReturn.siteSettingIcon);
    $(".bigPhoto").append(findCampsiteReturn.siteMainImg);
    // $("").text(findCampsiteReturn.siteState)
    // $("").text(findCampsiteReturn.siteURL)
    $(".output").show(500);
    $("#partTwo").show(500);
    $(".formOne").slideUp(500);


    //  TRANSITION STYLING
    $(".output").show(500);
    $("#partTwo").show(500);
    $(".formOne").slideUp(800);

    //  SECOND SUBMIT BUTTON
    $(".formTwo").submit(function(event) {
      event.preventDefault();

      //  COLLECTS USER INPUT
      NumberOfNights = parseInt($("input#nights").val());
      NumberOfPeople = parseInt($("input#people").val());

      //  ASSIGNS ABOVE USER INPUT TO NEWUSER PROPERTIES
      newUser.userNumberOfNights = NumberOfNights;
      newUser.userNumberOfPeople = NumberOfPeople;

      //  HOLDS SITEPRICE PROPERTY OF CAMPSITE OBJECT RETURNED IN FINDCAMPSITE FUNCTION
      var totalPrice = findCampsiteReturn.sitePrice;

      //
      var totalCost = newUser.calculateTotalCost(totalPrice);

      $("#output2").show(500);
      $(".totalNights").text(" " + NumberOfNights + " nights");
      $(".totalPeople").text(" " + NumberOfPeople + " people");
      $(".totalCost").text(" Your reservation will cost " + "$" + totalCost);
      // console.log(newUser.userNumberOfNights);
      // console.log(totalCost);
      $("#partTwo").slideUp(500);
      $("#reset").click(function(event) {
        form.reset();
      });
      $(".formThree").submit(function(event) {
        event.preventDefault();

        // TRANSITION STYLEING
        $("#form-three").slideUp(500)

        //  COLLECTS VALUES FROM FORMTHREE
        newUser.userName = $("#userFullName").val();
        newUser.userEmail = $("#userEmail").val();

        //  APPENDS CONTENT
        $("#foo").append('<div> Thank you, ' +
                        newUser.userName +
                        ' we have sent a confirmation email to ' +
                        newUser.userEmail +
                        '.</div>')
      }); // .submit 3
    }); // .submit 2
  }); // .submit 1
});  // doc.ready
