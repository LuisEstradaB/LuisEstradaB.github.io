var cuerpo = new THREE.DodecahedronGeometry(5);
cuerpo.translate(0,5,0);
var piernad = new THREE.BoxGeometry(1,5,1);
piernad.translate(1,0,0);
var piernai = new THREE.BoxGeometry(1,5,1);
piernai.translate(-1,0,0);
var brazod = new THREE.BoxGeometry(3,1,1);
brazod.translate(5,5,0);
var brazoi = new THREE.BoxGeometry(3,1,1);
brazoi.translate(-5,5,0);
var cuello = new THREE.CylinderGeometry(1,1,3);
cuello.translate(0,10,0);
var cabeza = new THREE.SphereGeometry(3);
cabeza.translate(0,12,0);

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

//var troncoForma = new THREE.CylinderGeometry(.25, .5, 1);
//var esferaForma = new THREE.SphereGeometry(.65);
//esferaForma.translate(0,1,0);
//var troncoMalla = new THREE.Mesh(troncoForma);
//var esferaMalla = new THREE.Mesh(esferaForma);
//var arbolForma = new THREE.Geometry();
//arbolForma.merge(troncoMalla.geometry, troncoMalla.matrix);
//arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix);
//arbolForma.translate(0,0,-5);

var material = new THREE.MeshNormalMaterial();

var piezaMalla = new THREE.Mesh(pieza,material);

//var arbolMalla = new THREE.Mesh(arbolForma, material);

var escena = new THREE.Scene();
escena.add(piezaMalla);
//escena.add(arbolMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
