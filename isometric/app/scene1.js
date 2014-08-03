require(['./app/rectangle.js'], function (Rect) {
  var canvasElement = document.getElementById('mainCanvas');
  sheetengine.scene.init(canvasElement, {w:2000,h:1500});


  var basesheet = new sheetengine.BaseSheet({x:0,y:0,z:0}, {alphaD:90,betaD:0,gammaD:0}, {w:600,h:800});
  basesheet.color = '#39343C';

sheetengine.scene.setCenter({x:0, y:0, z:0});

  var img = new Image();
  var img2 = new Image();
  var img3 = new Image();
  var img4 = new Image();

  img.src = 'app/textures/windows_pink_hue.png';
  img2.src = 'app/textures/windows_green_hue.png';
  img3.src = 'app/textures/windows_blue_hue.png';
  img4.src = 'app/textures/billboard.png';


  var billboard = new sheetengine.Sheet(
                      {x:-100,y:-150,z:200},
                      {alphaD:0,betaD:0,gammaD:0},
                      {w:100, h:50}
                    );


  var building_1 = Rect({x:-40, y:-40, z:0},{w:40,h:400});
  var building_2 = Rect({x:-50, y:85, z:0},{w:40,h:200});
  var building_3 = Rect({x:80, y:0, z:-25},{w:40,h:130});
  var building_4 = Rect({x:0, y:0, z:0},{w:80,h:300});
  var building_5 = Rect({x:-115, y:-20, z:0},{w:100,h:440});
  var building_6 = Rect({x:-115, y:-320, z:0},{w:150,h:440});

  var sheets = [
    [building_1,img],
    [building_2,img2],
    [building_3,img3],
    [building_4,img3],
    [building_5, img],
    [building_6, img2]
  ];

  function setImages(sheets){
    for (var i = 0; i< sheets.length; i++){
      for (var x=1; x<sheets[i][0].length; x++){
        sheets[i][0][x].context.drawImage(sheets[i][1], 0,0);
      }
    }
    billboard.context.drawImage(img4,0,0);
  };


var imageCount = 0;
function imageLoaded() {
  imageCount++;
  if (imageCount == 4) {
    // draw the scene
    setImages(sheets);
    sheetengine.calc.calculateChangedSheets();
    sheetengine.drawing.drawScene(true);
  }
}

img.onload = imageLoaded;
img2.onload = imageLoaded;
img3.onload = imageLoaded;
img4.onload = imageLoaded;






});
