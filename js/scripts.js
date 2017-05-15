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
function User(style, setting, name, email, price, numberOfPeople) {
  this.userName = name;
  this.userEmail = email;
  this.userStyle = style;
  this.userSetting = setting;
  this.userPrice = price;
  this.userState = "Oregon";
  this.userNumberOfPeople = numberOfPeople;
};


User.prototype.findCampsite = function(campsiteArray) {
  for (i = 0; i <= campsiteArray.length; i++) {
    if (this.userStyle === campsiteArray[i].siteStyle && this.userSetting === campsiteArray[i].siteSetting) {
      return campsiteArray[i]
    }
  }
}

//  UI LOGIC--------------------------
$(document).ready(function() {
  $(".userInput").submit(function(event) {
    event.preventDefault();

    //  INITIALIZING CAMPING OBJECTS
    var tentMountain = new Campsite("tent", "mountain", 5);
    var tentCoast = new Campsite("tent", "coast", 5);
    var tentRiver = new Campsite("tent", "river", 5);
    var rvMountain = new Campsite("rv", "mountain", 5);
    var rvCoast = new Campsite("rv", "coast", 5);
    var rvRiver = new Campsite("rv", "river", 5);
    var cabinMountain = new Campsite("cabin", "mountain", 5);
    var cabinCoast = new Campsite("cabin", "coast", 5);
    var cabinRiver = new Campsite("cabin", "river", 5);

    var campsiteArray = [tentMountain, tentCoast, tentRiver, rvMountain, rvCoast, rvRiver, cabinMountain, cabinCoast, cabinRiver];

    var selectedStyle = $("input[name=campStyle]:checked").val();
    var selectedSetting = $("input[name=settingStyle]:checked").val();
    newUser = new User(selectedStyle, selectedSetting);

    var test = newUser.findCampsite(campsiteArray);
    console.log(test);

  }); // .submit
});  // doc.ready
