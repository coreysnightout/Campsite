//  BUSINESS LOGIC--------------------------

 // CAMPSITE CONSTRUCTOR
function Campsite(style, setting, price) {
  this.siteStyle = style;
  this.siteSetting = setting;
  this.sitePrice = price;
  this.siteState = "Oregon";
  this.siteURL = ""; // Add URL later
};

//  USER CONSTRUCTOR
function User(style, setting) {
  this.userName = name;
  this.userEmail = email;
  this.userStyle = style;
  this.userSetting = setting;
  this.userPrice = price;
  this.userState = "Oregon";
  this.userNumberOfPeople = numberOfPeople;
};


  //  INITIALIZING CAMPING OBJECTS
var tentMountain = new Campsite(tent, mountain, 5);
var tentCoast = new Campsite(tent, coast, 5);
var tentRiver = new Campsite(tent, river, 5);
var rvMountain = new Campsite(rv, mountain, 5);
var rvCoast = new Campsite(rv, coast, 5);
var rvRiver = new Campsite(rv, river, 5);
var cabinMountain = new Campsite(cabin, mountain, 5);
var cabinCoast = new Campsite(cabin, coast, 5);
var cabinRiver = new Campsite(cabin, river, 5);


//  UI LOGIC--------------------------
$(document).ready(function() {
  $("*").submit(function(event) {
    event.preventDefault();
    var selectedStyle = $("#style").val();
    var selectedSetting = $("#setting").val();
    newUser = new User(selectdStyle, selectedSetting);
    console.log(newUser); //-------------------log-----------------------

  }); // .submit
});  // doc.ready
