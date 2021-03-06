function Wall(size, x, y) {
  THREE.Mesh.call(this,
        new THREE.MeshNormalMaterial());
  this.size = size;
  this.position.x = x;
  this.position.y = y;
}

Wall.prototype = new THREE.Mesh();

Environment.prototype.setMap = function(map) {
  var _offset = Math.floor(map.length/2);
  
  for ( var i = 0; i < map.length; i++ )
  for ( var j = 0; j < map.length; j++ ) {
    if(map[i][j] === "x" )
      this.add( new Wall( 1, j -_offset, -(i -_offset) ) );
    else if(map[i][j] === "r")
      this.add( new Robot(0.5, j -_offset, -(i -_offset) ) );
  }
}

function setup() {
  var mapa = new Array();
  mapa[0]   = "xxxxxxxxxxxxxxxxxxxxxxxx";
  mapa[1]   = "x                      x";
  mapa[2]   = "";
  mapa[3]   = "";
  mapa[4]   = "";
  mapa[5]   = "";
  mapa[6]   = "";
  mapa[7]   = "";
  mapa[8]   = "";
  mapa[9]   = "";
  mapa[10]  = "";
  mapa[11]  = "";
  mapa[12]  = "";
  mapa[13]  = "";
  mapa[14]  = "";
  mapa[15]  = "";
