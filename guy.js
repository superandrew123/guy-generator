var places = ["place1","place2","place3","place4","place5"];
var foodStyles = ["foodStyle1","foodStyle2","foodStyle3","foodStyle4","foodStyle5"];
var names = ["name1","name2","name3","name4","name5"];
var foodTypes = ["foodType1","foodType2","foodType3","foodType4","foodType5"];
var restaurantTypes = ["restaurantType1","restaurantType2","restaurantType3","restaurantType4","restaurantType5"];

var title = [];
title.push(returnName(places));
title.push(returnName(foodStyles));
title.push(returnName(names));
title.push(returnName(foodTypes));
title.push(returnName(restaurantTypes));

document.getElementById("name-holder").innerHtml(title.join(" "));

function returnName(data){
  var index = Math.floor(Math.random() * data.length);
  return data[index];
}