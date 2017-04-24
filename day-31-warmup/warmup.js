var inventory = {
  eggs: 247,
  stripsOfBacon: 200,
  cheeseUnits: 143
}


function fullfillOrder(orders) {
  inventory.eggs -= orders.omelets * 3;
  inventory.stripsOfBacon -= orders.omelets * 2;
  inventory.cheeseUnits -= orders.omelets * 1;

  inventory.eggs -= orders.eggPlates * 2;
  inventory.stripsOfBacon -= orders.eggPlates * 3;
}

function fullfillOrder2(orders) {
  for (var i = 0; i < orders.omelets; i++) {
    inventory.eggs -= 3;
    inventory.stripsOfBacon -= 2;
    inventory.cheeseUnits -= 1;
  }

  for (var i = 0; i < orders.eggPlates; i++) {
    inventory.eggs -= 2;
    inventory.stripsOfBacon -= 3;
  }
}


//every omelet uses 3 eggs, 2 strips of bacon, and 1 cheese unit
//every egg plate uses 2 eggs and 3 strips of bacon
fullfillOrder2({
  omelets: 4,
  eggPlates: 12
});


console.log(inventory);

// How many eggs do you have left?
// How many strips of bacon do you have left?
// How many units of cheese do you have left?
