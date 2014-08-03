require(['./app/rectangle.js'], function (Rect) {
  var canvasElement = document.getElementById('mainCanvas');
  sheetengine.scene.init(canvasElement, {w:2000,h:1500});

sheetengine.shadows.lightSource = { x: 1, y: 120, z: 350 };
sheetengine.shadows.lightSourcep1 = { x: 1, y: 2, z: -1 };
sheetengine.shadows.lightSourcep2 = { x: 3, y: 0, z: 3 };

  var basesheet = new sheetengine.BaseSheet({x:0,y:0,z:0}, {alphaD:90,betaD:0,gammaD:0}, {w:600,h:800});
  basesheet.color = '#39343C';

  var img = new Image();
  var img2 = new Image();
  var img3 = new Image();

  img.src = 'app/textures/windows_pink.png';
  img2.src = 'app/textures/windows_green.png';
  img3.src = 'app/textures/windows_blue.png';

  var building_1 = Rect({x:0, y:0},{w:80,h:400},img);
  building_1[0].context.fillStyle = '#33b393e';
  building_1[0].context.fillRect(0,0,80,80);

  var building_2 = Rect({x:-80, y:80},{w:100,h:200},img2);
  building_2[0].context.fillStyle = '#33b393e';
  building_2[0].context.fillRect(0,0,100,100);

  var building_3 = Rect({x:100, y:80},{w:80,h:130}, img3);
  building_3[0].context.fillStyle = '#33b393e';
  building_3[0].context.fillRect(0,0,80,80);



  var building_4 = Rect({x:-100, y:-280},{w:80,h:300}, img3);
  building_4[0].context.fillStyle = '#33b393e';
  building_4[0].context.fillRect(0,0,80,80);

  var sheets = [
    [building_1,img],
    [building_2,img2],
    [building_3,img3],
    [building_4,img3]
  ];

  function setImages(sheets){
    for (var i = 0; i< sheets.length; i++){
      for (var x=1; x<sheets[i][0].length; x++){
        sheets[i][0][x].context.drawImage(sheets[i][1], 0,0);
      }
    }
  };


var imageCount = 0;
function imageLoaded() {
  imageCount++;
  if (imageCount == 3) {
    // draw the scene
    setImages(sheets);
    sheetengine.calc.calculateChangedSheets();
    sheetengine.drawing.drawScene(true);
  }
}

img.onload = imageLoaded;
img2.onload = imageLoaded;
img3.onload = imageLoaded;






});
