var sanitize = function(sidesArray){
  var total = 0;
  sidesArray.forEach(function(side){
    total += side;
  });
  return total;
}

$(document).ready(function() {
  $("form#sides-input-form").submit(function(event) {
    event.preventDefault();
    var allSides = [parseInt($("#sideOne").val()), parseInt($("#sideTwo").val()), parseInt($("#sideThree").val())].sort();

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
                            if (this.firstSide === this.thirdSide){
                              $("#equilateral-list").append("<li>" + allSides.join(", ") + "</li>");
                            }
                            else if (this.firstSide === this.secondSide ||
                                     this.secondSide === this.thirdSide){
                              $("#isoceles-list").append("<li>" + allSides.join(", ") + "</li>");
                            }
                            else {
                              $("#scalene-list").append("<li>" + allSides.join(", ") + "</li>");
                            }
                          }
                        };
    }
    if (newTriangle){
      newTriangle.type();
    }
  });
});
