var canvas = new fabric.Canvas("myCanvas");

block_width = 30;
block_height = 30;
player_x = 10;
player_y = 10;

player_obj = " ";
block_obj = " ";

function playerUpdate()
{
  fabric.Image.fromURL ("player.png", function (Img)
  {
    player_obj = Img;
    player_obj.scaleToWidth(150);
    player_obj.scaleToHeight(140);
    player_obj.set({top: player_y, left: player_x});
    canvas.add(player_obj);
  });
}

function newImage(get_image)
{
  fabric.Image.fromURL ( get_image, function (Img)
  {
    block_obj = Img;
    block_obj.scaleToWidth(block_width);
    block_obj.scaleToHeight(block_height);
    block_obj.set({top: player_y, left: player_x});
    canvas.add(block_obj);
  });
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e)
{
  key_pressed = e.keyCode;
  console.log(key_pressed);

  if (e.shiftKey == true && key_pressed == "80")
  {
   console.log ("p and shift key have been pressed together");
   block_width = block_width + 10;
   block_height = block_height + 10;
   document.getElementById("current_width").innerHTML = block_width;
   document.getElementById("current_height").innerHTML = block_height;
  }

  if (e.shiftKey == true && key_pressed == "77")
  {
   console.log ("m and shift key have been pressed together");
   block_width = block_width - 10;
   block_height = block_height - 10;
   document.getElementById("current_width").innerHTML = block_width;
   document.getElementById("current_height").innerHTML = block_height;
  }

  if (key_pressed == '38')
  {
    up();
    console.log("up arrow");
  }

  if (key_pressed == '40')
  {
    down();
    console.log("down arrow");
  }

  if (key_pressed == '37')
  {
    left();
    console.log("left arrow");
  }

  if (key_pressed == '39')
  {
    right();
    console.log("right arrow");
  }

  if (key_pressed == '65')
  {
    //A is pressed here
    newImage("A.png");
    console.log("Letter A");
  }

  if (key_pressed == '66')
  {
    //B is pressed here
    newImage("B.png");
    console.log("Letter B");
  }

  if (key_pressed == '67')
  {
    //C is pressed here
    newImage("C.png");
    console.log("Letter C");
  }

  if (key_pressed == '68')
  {
    //D is pressed here
    newImage("D.png");
    console.log("Letter D");
  }

  if (key_pressed == '69')
  {
    //E is pressed here
    newImage("E.png");
    console.log("Letter E");
  }

  if (key_pressed == '70')
  {
    //F is pressed here
    newImage("F.png");
    console.log("Letter F");
  }

  if (key_pressed == '71')
  {
    //G is pressed here
    newImage("G.png");
    console.log("Letter G");
  }

  if (key_pressed == '72')
  {
    //H is pressed here
    newImage("H.png");
    console.log("Letter H");
  }

  if (key_pressed == '73')
  {
    //I is pressed here
    newImage("I.png");
    console.log("Letter I");
  }

  if (key_pressed == '74')
  {
    //J is pressed here
    newImage("J.png");
    console.log("Letter J");
  }

  if (key_pressed == '75')
  {
    //K is pressed here
    newImage("K.png");
    console.log("Letter K");
  }

  if (key_pressed == '76')
  {
    //L is pressed here
    newImage("L.png");
    console.log("Letter L");
  }

  if (key_pressed == '77')
  {
    //M is pressed here
    newImage("M.png");
    console.log("Letter M");
  }

  if (key_pressed == '78')
  {
    //N is pressed here
    newImage("N.png");
    console.log("Letter N");
  }

  if (key_pressed == '79')
  {
    //O is pressed here
    newImage("O.png");
    console.log("Letter O");
  }

  if (key_pressed == '80')
  {
    //P is pressed here
    newImage("P.png");
    console.log("Letter P");
  }

  if (key_pressed == '81')
  {
    //Q is pressed here
    newImage("Q.png");
    console.log("Letter Q");
  }

  if (key_pressed == '82')
  {
    //R is pressed here
    newImage("R.png");
    console.log("Letter R");
  }

  if (key_pressed == '83')
  {
    //S is pressed here
    newImage("S.png");
    console.log("Letter S");
  }

  if (key_pressed == '84')
  {
    //T is pressed here
    newImage("T.png");
    console.log("Letter T");
  }

  if (key_pressed == '85')
  {
    //U is pressed here
    newImage("U.png");
    console.log("Letter U");
  }

  if (key_pressed == '86')
  {
    //V is pressed here
    newImage("V.png");
    console.log("Letter V");
  }

  if (key_pressed == '87')
  {
    //W is pressed here
    newImage("W.png");
    console.log("Letter W");
  }

  if (key_pressed == '88')
  {
    //X is pressed here
    newImage("X.png");
    console.log("Letter X");
  }

  if (key_pressed == '89')
  {
    //Y is pressed here
    newImage("Y.png");
    console.log("Letter Y");
  }

  if (key_pressed == '90')
  {
    //Z is pressed here
    newImage("Z.png");
    console.log("Letter Z");
  }
}

function up()
{
  if (player_y >= 20)
  {
    player_y = player_y - block_height;
    console.log ("block's height is " + block_height);
    console.log ("when up is pressed, x = " + player_x + ", y = " + player_y);
    canvas.remove(player_obj);
    playerUpdate();
  }
}

function down()
{
  if (player_y <= 450)
  {
    player_y = player_y + block_height;
    console.log ("block's height is " + block_height);
    console.log ("when down is pressed, x = " + player_x + ", y = " + player_y);
    canvas.remove(player_obj);
    playerUpdate();
  }
}

function left()
{
  if (player_x >= 5)
  {
    player_x = player_x - block_width;
    console.log ("block's width is " + block_width);
    console.log ("when left is pressed, x = " + player_x + ", y = " + player_y);
    canvas.remove(player_obj);
    playerUpdate();
  }
}

function right()
{
  if (player_x <= 840)
  {
    player_x = player_x + block_width;
    console.log ("block's width is " + block_width);
    console.log ("when left is pressed, x = " + player_x + ", y = " + player_y);
    canvas.remove(player_obj);
    playerUpdate();
  }
}