//  BUSINESS LOGIC--------------------------

 // CAMPSITE CONSTRUCTOR
function Campsite(style, setting, price, url, styleIcon, settingIcon, priceIcon, mainImg) {
  this.siteStyle = style;
  this.siteSetting = setting;
  this.sitePrice = price;
  this.siteState = "Oregon";
  this.siteURL = url;
  this.siteStyleIcon = styleIcon;
  this.siteSettingIcon = settingIcon;
  this.sitePriceIcon = priceIcon;
  this.siteMainImg = mainImg;
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
    var tentMountain = new Campsite("tent", "mountain", 5);
    var tentCoast = new Campsite("tent", "coast", 5);
    var tentRiver = new Campsite("tent", "river", 5);
    var rvMountain = new Campsite("rv", "mountain", 5);
    var rvCoast = new Campsite("rv", "coast", 5);
    var rvRiver = new Campsite("rv", "river", 5);
    var cabinMountain = new Campsite("cabin", "mountain", 5);
    var cabinCoast = new Campsite("cabin", "coast", 5);
    var cabinRiver = new Campsite("cabin", "river", 5);

    //  ARRAY THAT HOLDS EACH CAMPING OBJECT
    var campsiteArray = [tentMountain, tentCoast, tentRiver, rvMountain, rvCoast, rvRiver, cabinMountain, cabinCoast, cabinRiver];

    //  COLLECTS USER INPUT INTO VARIANLES
    var selectedStyle = $("input[name=campStyle]:checked").val();
    var selectedSetting = $("input[name=settingStyle]:checked").val();
    newUser = new User(selectedStyle, selectedSetting);

    //  HOLDS THE RETURNED VALUE OF FINDCAMPSITE PROTOTYPE FUNCTION
    var findCampsiteReturn = newUser.findCampsite(campsiteArray);
    console.log(findCampsiteReturn.siteStyle);
    $("#theCost").text(findCampsiteReturn.sitePrice)
    $("#theCost").text(findCampsiteReturn.siteStyle)
    $("#theCost").text(findCampsiteReturn.siteSetting)
    $("#theCost").text(findCampsiteReturn.siteState)
    $("#theCost").text(findCampsiteReturn.siteURL)

  }); // .submit
});  // doc.ready
