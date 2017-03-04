//Pieza Extrusion
var c = new THREE.Color("rgb(255, 0, 0)");
var material1 = new THREE.MeshBasicMaterial();
material1.color=c;
var material2 = new THREE.MeshNormalMaterial();

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

var forma1 = new THREE.ExtrudeGeometry( figura,
                                       {amount: 1} );
                                       
//var material1 = new THREE.MeshNormalMaterial();
var malla1 = new THREE.Mesh( forma1, material1 );


//Pieza Revolucion
var puntos = [];

for ( var i = 0; i < 10; i ++ ) {
    puntos.push( new THREE.Vector2( (7/9)*i , i ) );
}
for ( var i = 10; i < 19; i ++ ) {
    puntos.push( new THREE.Vector2( 10-(1/3)*i , i ) );
}
for ( var i = 19; i < 23; i ++ ) {
    puntos.push( new THREE.Vector2( 2, i ) );
}
for ( var i = 23; i < 30; i ++ ) {
    puntos.push( new THREE.Vector2( Math.sqrt(16-(i-25)*(i-25)) , i ) );
}
//puntos.push( new THREE.Vector2( 0 , 28 ) );

var forma2 = new THREE.LatheGeometry(puntos);
forma2.translate(50,5,0);

//var material2 = new THREE.MeshNormalMaterial();

var malla2 = new THREE.Mesh( forma2, material1 );


//Pieza Union
var cuerpo = new THREE.DodecahedronGeometry(10);
cuerpo.translate(0,10,0);
var piernad = new THREE.BoxGeometry(2,10,2);
piernad.translate(2,0,0);
var piernai = new THREE.BoxGeometry(2,10,2);
piernai.translate(-2,0,0);
var brazod = new THREE.BoxGeometry(8,2,2);
brazod.translate(8,12,0);
var brazoi = new THREE.BoxGeometry(8,2,2);
brazoi.translate(-8,12,0);
var cuello = new THREE.CylinderGeometry(2,2,4);
cuello.translate(0,17,0);
var cabeza = new THREE.SphereGeometry(6);
cabeza.translate(0,25,0);

var cuerpoMalla = new THREE.Mesh(cuerpo);
var piernadMalla = new THREE.Mesh(piernad);
var piernaiMalla = new THREE.Mesh(piernai);
var brazodMalla = new THREE.Mesh(brazod);
var brazoiMalla = new THREE.Mesh(brazoi);
var cuelloMalla = new THREE.Mesh(cuello);
var cabezaMalla = new THREE.Mesh(cabeza);

var pieza = new THREE.Geometry();

pieza.merge(cuerpoMalla.geometry,cuerpoMalla.matrix);
pieza.merge(piernadMalla.geometry,piernadMalla.matrix);
pieza.merge(piernaiMalla.geometry,piernaiMalla.matrix);
pieza.merge(brazodMalla.geometry,brazodMalla.matrix);
pieza.merge(brazoiMalla.geometry,brazoiMalla.matrix);
pieza.merge(cuelloMalla.geometry,cuelloMalla.matrix);
pieza.merge(cabezaMalla.geometry,cabezaMalla.matrix);
pieza.translate(100,10,0);

//var c = new THREE.Color("rgb(255, 0, 0)");
//var material3 = new THREE.MeshNormalMaterial();
//var material3 = new THREE.MeshBasicMaterial();
//material3.color=c;

var piezaMalla = new THREE.Mesh(pieza,material1);


var tabla = new THREE.BoxGeometry(200,10,200);
//tabla.translate(0,0,-200);
var material4 = new THREE.MeshNormalMaterial();
var malla4 = new THREE.Mesh(tabla,material4);


var escena = new THREE.Scene();
escena.add(malla1);
escena.add(malla2);
escena.add(piezaMalla);
escena.add(malla4);


//forma1.translate(-20,0,0);
var malla12 = new THREE.Mesh( forma1, material2 );
malla12.translateX(-20);
//forma2.translate(-100,0,0);
var malla22 = new THREE.Mesh( forma2, material2 );
malla22.translateX(-100);
//pieza.translate(-200,0,0);
var piezaMalla2 = new THREE.Mesh(pieza,material2);
piezaMalla2.translateX(-200);

escena.add(malla12);
escena.add(malla22);
escena.add(piezaMalla2);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 400;
camara.position.y = 300;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
