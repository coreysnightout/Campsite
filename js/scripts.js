//  --------------------------BUSINESS LOGIC--------------------------

 // CAMPSITE CONSTRUCTOR
function Campsite(style, setting, price, styleIcon, settingIcon, name, address, mainImg, amenities, anomolies) {
  this.siteStyle = style;
  this.siteSetting = setting;
  this.sitePrice = price;
  this.siteStyleIcon = styleIcon;
  this.siteSettingIcon = settingIcon;
  this.siteName = name;
  this.siteAddress = address;
  this.siteMainImg = mainImg;
  this.siteAmenities = amenities;
  this.siteAnomolies = anomolies;
};

//  USER CONSTRUCTOR
function User(style, setting, numberOfPeople, numberOfNights, price) {
  this.userChosenStyle = style;
  this.userChosenSetting = setting;
  this.userNumberOfPeople = numberOfPeople;
  this.userNumberOfNights = numberOfNights;
  this.userTotalPrice = price;
  this.userName = "";
  this.userEmail = "";
  this.userCalendar = "";
};

  //  CALCULATES AND RETURNS THE TOTAL COST
User.prototype.calculateTotalCost = function(campPrice) {
  this.userTotalPrice = this.userNumberOfPeople * this.userNumberOfNights * campPrice;
  return this.userTotalPrice;
};

  //  CHECKS USER'S INPUT TO EACH CAMPSITE OBJECT AND RETURNS THE MATCHING OBJECT
User.prototype.findCampsite = function(campsiteArray) {
  for (i = 0; i <= campsiteArray.length; i++) {
    if (this.userChosenStyle === campsiteArray[i].siteStyle && this.userChosenSetting === campsiteArray[i].siteSetting) {
      return campsiteArray[i]
    }
  }
};

//  --------------------------UI LOGIC--------------------------
$(document).ready(function() {
  // $(".introLink").clickable();
  $(".introLink").click(function(event) {
    event.preventDefault();
    $(".intro").fadeOut('slow');
  });





  //  -----------------------------------------------------FIRST SUBMIT BUTTON-----------------------------------------------------
  $(".formOne").submit(function(event) {
    event.preventDefault();
    var selectedStyle;
    var selectedSetting;
    var userTotalPrice;
    var userNumberOfNights;
    var userNumberOfPeople;

    //  COLLCTS DATA FROM FIRST FORM
    selectedStyle = $("input[name=campStyle]:checked").val();
    selectedSetting = $("input[name=settingStyle]:checked").val();

    //  INITALIZES USER OBJECT
    var newUser = new User(selectedStyle, selectedSetting);

    //  INITIALIZES CAMPING OBJECTS
    var tentMountain = new Campsite("Tent", "Mountain", 5, "<img src='img/tent-icon.png'>", "<img src='img/mountains-icon.png'>", "Green Mountain Campground", "Crack in the Ground Rd, Silver Lake, OR 97638", "<img src='img/tent-mtn.jpg'>", "<img src='img/shower.png'>", "<img src='img/abduction .png'>");
    var tentCoast = new Campsite("Tent", "Coast", 5, "<img src='img/tent-icon.png'>", "<img src='img/coast-icon.png'>", "Minam State Recreation Area", "72601 OR-82, Wallowa, OR 97885", "<img src='img/tent-coast2.jpg'>", "<img src='img/campfire.png'>");
    var tentRiver = new Campsite("Tent", "River", 5, "<img src='img/tent-icon.png'>", "<img src='img/river-icon.png'/>", "Marsters Spring campground", "42.558826, -120.774129", "<img src='img/tent-river.jpg'>", "<img src='img/shower.png'>");
    var rvMountain = new Campsite("RV", "Mountain", 10, "<img src='img/trailer-icon.png'>", "<img src='img/mountains-icon.png'>", "Cape Perpetua campground", "Siuslaw National Forest, 2200 US-101, Yachats, OR 97498", "<img src='img/trailer-mtn.jpg'>", "<img src='img/campfire.png'>");
    var rvCoast = new Campsite("RV", "Coast", 10, "<img src='img/trailer-icon.png'>", "<img src='img/coast-icon.png'>", "Stub Stewart State Park", "L.L. Stub Stewart State Park, Buxton, OR 97109", "<img src='img/trailer-coast2.jpg'>", "<img src='img/shower.png'>");
    var rvRiver = new Campsite("RV", "River", 10, "<img src='img/trailer-icon.png'>", "<img src='img/river-icon.png'>", "Oxbow Regional Park", "3010 SE Oxbow Pkwy, Gresham, OR 97080", "<img src='img/trailer-river.png'>", "<img src='img/campfire.png'>");
    var cabinMountain = new Campsite("Cabin", "Mountain", 15, "<img src='img/cabin-icon.png'>", "<img src='img/mountains-icon.png'>", "Cascadia State Park", "Cascadia State Park, Cascadia, OR 97329", "<img src='img/cabin-mtn.jpg'>", "<img src='img/campfire.png'>", "<img src='img/abduction .png'>");
    var cabinCoast = new Campsite("Cabin", "Coast", 15, "<img src='img/cabin-icon.png'>", "<img src='img/coast-icon.png'>", "Natural Bridge campground", "42.892457, -122.462465", "<img src='img/cabin-coast.jpg'>", "<img src='img/shower.png'>");
    var cabinRiver = new Campsite("Cabin", "River", 15, "<img src='img/cabin-icon.png'>", "<img src='img/river-icon.png'>", "Head of the River campground", "42.731500, -121.420325", "<img src='img/cabin-river.jpg'>", "<img src='img/fishing.png'>");


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
    $(".mainImg").append(findCampsiteReturn.siteMainImg);
    $("#nameOfCamping").text(" " + findCampsiteReturn.siteName);
    $(".campsiteAddress").text(findCampsiteReturn.siteAddress);
    $(".amenities").append(" " + findCampsiteReturn.siteAmenities);
    $(".anomolies").append(" " + findCampsiteReturn.siteAnomolies);

    //  FINDS ADDRESS TAGS IN HTML AND REPLACES ADDRESS WITH GOOGLE MAP.
    $("address").each(function(){
      var embed ="<iframe class='map' frameborder='0' scrolling='no'  marginheight='0' marginwidth='0'   src='https://maps.google.com/maps?&amp;q="+ encodeURIComponent( $(this).text() ) +"&amp;output=embed'></iframe>";
      $(this).html(embed);
    });  //  ABOVE FUNCTION WAS CREATED BY MICHEL JASPER AND FOUND ON STACKOVERFLOW. SEE README FOR MORE INFORMATION.

    //  TRANSITION STYLING
    $(".output").show(500);
    $("#partTwo").show(500);
    $(".formOne").slideUp(500);

    //  -----------------------------------------------------SECOND SUBMIT BUTTON-----------------------------------------------------
    $(".formTwo").submit(function(event) {
      event.preventDefault();

      //  COLLECTS AND STORES USER INPUT INTO .userNumberOfNights AND .userNumberOfPeople PROPERTIES
      newUser.userNumberOfNights = parseInt($("input#nights").val());
      newUser.userNumberOfPeople = parseInt($("input#people").val());
      newUser.userCalendar = $('input[type="date"]').val();

      //  DISPLAYS userNumberOfNights AND userNumberOfPeople
      $(".totalNights").text(newUser.userNumberOfNights + " nights");
      $(".totalPeople").text(newUser.userNumberOfPeople + " people");
      $(".calendarDate").text("Your reservation starts on " + newUser.userCalendar + ".")

      //  CALLS calculateTotalCost AND DISPLAYS IN totalCost CLASS
      $(".totalCost").text(" Your reservation will cost " + "$" + newUser.calculateTotalCost(findCampsiteReturn.sitePrice));

      //  TRANSITION STYLING
      $("#output2").show(500);
      $("#partTwo").slideUp(500);

      //  RESETS THE FORM VIA PAGE REFRESH
      $("#reset").click(function(event) {
        form.reset();
      });
      // -----------------------------------------------------THIRD SUBMIT BUTTON-----------------------------------------------------
      $(".formThree").submit(function(event) {
        event.preventDefault();

        // TRANSITION STYLING
        $("#form-three").slideUp(500)

        //  COLLECTS AND STORES USER INPUT INTO .userName and .userEmail PROPERTIES
        newUser.userName = $("#userFullName").val();
        newUser.userEmail = $("#userEmail").val();


        //  APPENDS CONTENT INTO finalOutput ID
        $("#finalOutput").append('<div> Thank you, ' +
                        newUser.userName + "!<br>" +
                        ' We have sent a confirmation email to ' +

                        newUser.userEmail +
                        '.</div>')
      });  //  formThree.submit
    });  //  formTwo.submit
  });  //  formOne.submit
});  //  doc.ready
