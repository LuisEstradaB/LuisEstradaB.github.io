var figura = new THREE.Shape();

figura.moveTo(10, 10);//1
figura.lineTo(12, 10);//2
figura.lineTo(12, 18);//3
figura.lineTo(13, 18);//4
figura.lineTo(13, 10);//5
figura.lineTo(15, 10);//6
figura.lineTo(15, 30);//7
figura.lineTo(16, 30);//8
figura.lineTo(16, 21);//9
figura.lineTo(17, 21);//10
figura.lineTo(17, 31);//11
figura.lineTo(14, 31);//12
figura.lineTo(14, 32);//13
figura.lineTo(15, 32);//14
figura.lineTo(15, 36);//15
figura.lineTo(10, 36);//16
figura.lineTo(10, 32);//17
figura.lineTo(11, 32);//18
figura.lineTo(11, 31);//19
figura.lineTo(8, 31);//20
figura.lineTo(8, 21);//21
figura.lineTo(9, 21);//22
figura.lineTo(9, 30);//23
figura.lineTo(10, 30);//24
figura.lineTo(10, 10);//25

var forma = new THREE.ExtrudeGeometry( figura,
                                       {amount: 5} );
                                       
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateY( Math.PI/4 );

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
