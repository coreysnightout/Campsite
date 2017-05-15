//  BUSINESS LOGIC--------------------------

 // CAMPSITE CONSTRUCTOR
function Campsite(style, setting, price, styleIcon, settingIcon) {
  this.siteStyle = style;
  this.siteSetting = setting;
  this.sitePrice = price;
  this.siteState = "Oregon";
  this.siteURL = "url";
  this.siteStyleIcon = styleIcon;
  this.siteSettingIcon = settingIcon;
  this.sitePriceIcon = "priceIcon";
  this.siteMainImg = "mainImg";
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

  //  CHECKS USER'S INPUT TO EACH CAMPSITE OBJECT
User.prototype.findCampsite = function(campsiteArray) {
  for (i = 0; i <= campsiteArray.length; i++) {
    if (this.userStyle === campsiteArray[i].siteStyle && this.userSetting === campsiteArray[i].siteSetting) {
      return campsiteArray[i]
    }
  }
};

//  UI LOGIC--------------------------
$(document).ready(function() {
  $(".userInput").submit(function(event) {
    event.preventDefault();

    //  INITIALIZING CAMPING OBJECTS
    var tentMountain = new Campsite("tent", "mountain", 5, "<img src='img/tent-icon.png'>");
    var tentCoast = new Campsite("tent", "coast", 5, "<img src='img/tent-icon.png'>");
    var tentRiver = new Campsite("tent", "river", 5, "<img src='img/tent-icon.png'>", "<img src='img/river-icon.png'/>");
    var rvMountain = new Campsite("rv", "mountain", 10);
    var rvCoast = new Campsite("rv", "coast", 10);
    var rvRiver = new Campsite("rv", "river", 10);
    var cabinMountain = new Campsite("cabin", "mountain", 15);
    var cabinCoast = new Campsite("cabin", "coast", 15);
    var cabinRiver = new Campsite("cabin", "river", 15);

    //  ARRAY THAT HOLDS EACH CAMPING OBJECT
    var campsiteArray = [tentMountain, tentCoast, tentRiver, rvMountain, rvCoast, rvRiver, cabinMountain, cabinCoast, cabinRiver];

    //  COLLECTS USER INPUT INTO VARIANLES
    var selectedStyle = $("input[name=campStyle]:checked").val();
    var selectedSetting = $("input[name=settingStyle]:checked").val();
    newUser = new User(selectedStyle, selectedSetting);

    //  HOLDS THE RETURNED VALUE OF FINDCAMPSITE PROTOTYPE FUNCTION
    var findCampsiteReturn = newUser.findCampsite(campsiteArray);

      //  DISPLAYS CONTENT IN HTML
    // $("#theCost").text(findCampsiteReturn.sitePrice)
    $(".displayStyle").text(findCampsiteReturn.siteStyle)
    $(".displaySetting").text(findCampsiteReturn.siteSetting)
    $(".styleIcon").append(findCampsiteReturn.siteStyleIcon)
    $(".settingIcon").append(findCampsiteReturn.siteSettingIcon)
    // $("").text(findCampsiteReturn.siteState)
    // $("").text(findCampsiteReturn.siteURL)

  }); // .submit
});  // doc.ready
