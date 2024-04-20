const Fruits = [
    {type:"Mango"},
    {type:"Apple"},
    {type:"banana"},
    {type:"Strawberry"},
    {type:"Pineapple"},
    {type:"badam"},
    {type:"Cherry"},
    {type:"Grapes"}
  ];
   
  displayFruits();
  function sort() {
    Fruits.sort(function(a, b){
      let x = a.type.toLowerCase();
      let y = b.type.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    displayFruits();
  }
  function displayFruits() {
    document.getElementById("link").innerHTML =
    Fruits[0].type + "<br>" +
    Fruits[1].type + "<br>" +
    Fruits[2].type + "<br>" +
    Fruits[3].type + "<br>" +
    Fruits[4].type + "<br>" +
    Fruits[5].type + "<br>" +
    Fruits[6].type + "<br>" +
    Fruits[7].type ;
  }