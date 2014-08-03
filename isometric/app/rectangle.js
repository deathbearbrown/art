define(function () {
  return function(center, size){
    var halfW = size.w/2;
    var z = center.z;
    //top, front, back, right, left]
    var rect = [
              new sheetengine.Sheet({x:center.x,y:center.y+halfW,z:(size.h/2)+z-5}, {alphaD:90,betaD:0,gammaD:0}, {w:size.w,h:size.w}),
              new sheetengine.Sheet({x:center.x,y:center.y+size.w,z:z}, {alphaD:0,betaD:0,gammaD:0}, size),
              new sheetengine.Sheet({x:center.x,y:center.y,z:z}, {alphaD:0,betaD:0,gammaD:0}, size),
              new sheetengine.Sheet({x:center.x+halfW ,y:center.y+halfW ,z:z}, {alphaD:0,betaD:0,gammaD:90}, size),
              new sheetengine.Sheet({x:center.x-halfW ,y:center.y+halfW ,z:z}, {alphaD:0,betaD:0,gammaD:90}, size)
              ];

    rect[0].context.fillStyle = '#33b393e';
    rect[0].context.fillRect(0,0,size.w,size.w);

    return rect;
  };
});
