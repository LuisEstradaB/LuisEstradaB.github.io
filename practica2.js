var figura = new THREE.Shape();

figura.moveTo(-5, 5);
figura.lineTo(-3, 5);
figura.lineTo(-3, 3);
figura.lineTo(-5, 3);
figura.lineTo(-5, 5);

var forma = new THREE.ShapeGeometry(figura);

var malla=[];

for(var i=0;i<=4;i++){
  for(var j=0;j<=4;j++){
    malla.push( new THREE.Mesh(forma))
    forma.translate(2,0,0);
  }
  forma.translate(-10,-2,0)
}
//var malla = new THREE.Mesh(forma);

var escena = new THREE.Scene();
for(var k=0;k<malla.length;k++){
  malla[k].rotateX(Math.PI/2);
  escena.add(malla[k]);
}

var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
