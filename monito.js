var cuerpo = new THREE.BoxGeometry(3,3,1);
cuerpo.translate(0,3,0);
var piernad = new THREE.CylinderGeometry(0.5,0.5,3);
piernad.translate(1,0,0);
var piernai = new THREE.CylinderGeometry(0.5,0.5,3);
piernai.translate(-1,0,0);
var brazod = new THREE.CylinderGeometry(0.5,0.5,3);
brazod.rotateZ(Math.PI/2);
brazod.translate(2,3,0);
var brazoi = new THREE.CylinderGeometry(0.5,0.5,3);
brazoi.rotateZ(Math.PI/2);
brazoi.translate(-2,3,0);
var cuello = new THREE.CylinderGeometry(0.5,0.5,1);
cuello.translate(0,5,0);
var cabeza = new THREE.SphereGeometry(2);
cabeza.translate(0,7,0);

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

var material = new THREE.MeshNormalMaterial();

var piezaMalla = new THREE.Mesh(pieza,material);

var escena = new THREE.Scene();
escena.add(piezaMalla);

var campoVision = 60;
var relacionAspecto = window.innerWidth/window.innerHeight;
var planoCercano = 1;
var planoLejano = 1000;

var camara = new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
camara.position.z = 15;
//camara.position.y = 1;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
