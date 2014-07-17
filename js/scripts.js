var sanitize = function(sidesArray){
  var total;
  sidesArray.forEach(function(side){
    total += side;
  });
  return total;
}

$(document).ready(function() {
  $("form#sides-input-form").submit(function(event) {
    event.preventDefault();
    var sideOne = $("#sideOne").val();
    var sideTwo = $("#sideTwo").val();
    var sideThree = $("#sideThree").val();
    var allSides = [parseInt(sideOne), parseInt(sideTwo), parseInt(sideThree)];
    var triangleType = "";
    allSides.sort();

    $("#sideOne").val("");
    $("#sideTwo").val("");
    $("#sideThree").val("");

    if (allSides[0] + allSides[1] <= allSides[2] || isNaN(sanitize(allSides))) {
      alert('That will not form a triangle. Please try again.');
    }
    else {
      var newTriangle = { firstSide: allSides[0],
                          secondSide: allSides[1],
                          thirdSide: allSides[2],
                          sides: allSides,
                          type: function() {
                            if (this.firstSide === this.secondSide &&
                                this.secondSide === this.thirdSide){
                              return "equilateral";
                            }
                            else if (this.firstSide === this.secondSide ||
                                     this.secondSide === this.thirdSide){
                              return "isoceles";
                            }
                            else {
                              return "scalene";
                            }
                          }
                        };
    }
    if (newTriangle){
      triangleType = newTriangle.type();
      if (triangleType === "equilateral"){
        $("#equilateral-list").append("<li>" + allSides.join(", ") + "</li>");
      } else if (triangleType === "isoceles") {
        $("#isoceles-list").append("<li>" + allSides.join(", ") + "</li>");
      } else {
        $("#scalene-list").append("<li>" + allSides.join(", ") + "</li>");
      };
    }
  });

});
