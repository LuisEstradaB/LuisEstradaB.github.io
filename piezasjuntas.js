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

var malla1 = new THREE.Mesh( forma1, material1 );


//Pieza Revolucion---------------------------------------------------------------------------------------------------------------------
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

var forma2 = new THREE.LatheGeometry(puntos);
forma2.translate(30,5,0);

var malla2 = new THREE.Mesh( forma2, material1 );


//Pieza Union--------------------------------------------------------------------------------------------------------------------------
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
pieza.translate(60,10,0);

var piezaMalla = new THREE.Mesh(pieza,material1);

//Oruga--------------------------------------------------------------------------------------------------------------------------------
var Cabeza = new THREE.SphereGeometry(4);

var CuerpoFrente = new THREE.SphereGeometry(2);
var CuerpoMedio = new THREE.SphereGeometry(2);
var CuerpoAtras = new THREE.SphereGeometry(2);

var PataFrente1 = new THREE.CylinderGeometry(.25, .25, 1.5);
var PataFrente2 = new THREE.CylinderGeometry(.25, .25, 1.5);
var PataFrente3 = new THREE.CylinderGeometry(.25, .25, 1.5);
var PataFrente4 = new THREE.CylinderGeometry(.25, .25, 1.5);

var PataMedio1 = new THREE.CylinderGeometry(.25, .25, 1.5);
var PataMedio2 = new THREE.CylinderGeometry(.25, .25, 1.5);
var PataMedio3 = new THREE.CylinderGeometry(.25, .25, 1.5);
var PataMedio4 = new THREE.CylinderGeometry(.25, .25, 1.5);

var PataAtras1 = new THREE.CylinderGeometry(.25, .25, 1.5);
var PataAtras2 = new THREE.CylinderGeometry(.25, .25, 1.5);
var PataAtras3 = new THREE.CylinderGeometry(.25, .25, 1.5);
var PataAtras4 = new THREE.CylinderGeometry(.25, .25, 1.5);

CuerpoFrente.translate(0,-4,-2);
CuerpoMedio.translate(0,-4,-5.5);
CuerpoAtras.translate(0,-4,-9);

PataFrente1.translate(1,-6,-1);
PataFrente2.translate(-1,-6,-1);
PataFrente3.translate(1,-6,-3);
PataFrente4.translate(-1,-6,-3);

PataMedio1.translate(1,-6,-4.5);
PataMedio2.translate(-1,-6,-4.5);
PataMedio3.translate(1,-6,-6.5);
PataMedio4.translate(-1,-6,-6.5);

PataAtras1.translate(1,-6,-8);
PataAtras2.translate(-1,-6,-8);
PataAtras3.translate(1,-6,-10);
PataAtras4.translate(-1,-6,-10);

var CabezaM = new THREE.Mesh(Cabeza);

var CuerpoFrenteM = new THREE.Mesh(CuerpoFrente);
var CuerpoMedioM = new THREE.Mesh(CuerpoMedio);
var CuerpoAtrasM = new THREE.Mesh(CuerpoAtras);

var PataFrente1M = new THREE.Mesh(PataFrente1);
var PataFrente2M = new THREE.Mesh(PataFrente2);
var PataFrente3M = new THREE.Mesh(PataFrente3);
var PataFrente4M = new THREE.Mesh(PataFrente4);

var PataMedio1M = new THREE.Mesh(PataMedio1);
var PataMedio2M = new THREE.Mesh(PataMedio2);
var PataMedio3M = new THREE.Mesh(PataMedio3);
var PataMedio4M = new THREE.Mesh(PataMedio4);

var PataAtras1M = new THREE.Mesh(PataAtras1);
var PataAtras2M = new THREE.Mesh(PataAtras2);
var PataAtras3M = new THREE.Mesh(PataAtras3);
var PataAtras4M = new THREE.Mesh(PataAtras4);

var Oruga = new THREE.Geometry();

Oruga.merge(CabezaM.geometry, CabezaM.matrix);

Oruga.merge(CuerpoFrenteM.geometry, CuerpoFrenteM.matrix);
Oruga.merge(CuerpoMedioM.geometry, CuerpoMedioM.matrix);
Oruga.merge(CuerpoAtrasM.geometry, CuerpoAtrasM.matrix);

Oruga.merge(PataFrente1M.geometry, PataFrente1M.matrix);
Oruga.merge(PataFrente2M.geometry, PataFrente2M.matrix);
Oruga.merge(PataFrente3M.geometry, PataFrente3M.matrix);
Oruga.merge(PataFrente4M.geometry, PataFrente4M.matrix);

Oruga.merge(PataMedio1M.geometry, PataMedio1M.matrix);
Oruga.merge(PataMedio2M.geometry, PataMedio2M.matrix);
Oruga.merge(PataMedio3M.geometry, PataMedio3M.matrix);
Oruga.merge(PataMedio4M.geometry, PataMedio4M.matrix);

Oruga.merge(PataAtras1M.geometry, PataAtras1M.matrix);
Oruga.merge(PataAtras2M.geometry, PataAtras2M.matrix);
Oruga.merge(PataAtras3M.geometry, PataAtras3M.matrix);
Oruga.merge(PataAtras4M.geometry, PataAtras4M.matrix);

//var material = new THREE.MeshNormalMaterial();
Oruga.rotateY(Math.PI/4);
Oruga.translate(90,10,0);
var OrugaM = new THREE.Mesh(Oruga, material1);


//Lobito------------------------------------------------------------------------------------------------------------------------------
var forma = new THREE.Geometry();

//Cuerpo
forma.vertices.push( new THREE.Vector3( -3,  8, -6 ) ); // Vértice 0 A
forma.vertices.push( new THREE.Vector3(  3,  8, -6 ) ); // Vértice 1 B
forma.vertices.push( new THREE.Vector3( -3,  8,  0 ) ); // Vértice 2 C
forma.vertices.push( new THREE.Vector3(  3,  8,  0 ) ); // Vértice 3 D
forma.vertices.push( new THREE.Vector3( -3,  4, -6 ) ); // Vértice 4 E
forma.vertices.push( new THREE.Vector3(  3,  4, -6 ) ); // Vértice 5 F
forma.vertices.push( new THREE.Vector3( -3,  4,  0 ) ); // Vértice 6 G
forma.vertices.push( new THREE.Vector3(  3,  4,  0 ) ); // Vértice 7 H

//Cabeza
forma.vertices.push( new THREE.Vector3( -3, 10,  0 ) ); // Vértice 8  A
forma.vertices.push( new THREE.Vector3(  3, 10,  0 ) ); // Vértice 9  B
forma.vertices.push( new THREE.Vector3( -3, 10,  6 ) ); // Vértice 10 C
forma.vertices.push( new THREE.Vector3(  3, 10,  6 ) ); // Vértice 11 D
forma.vertices.push( new THREE.Vector3( -3,  4,  0 ) ); // Vértice 12 E
forma.vertices.push( new THREE.Vector3(  3,  4,  0 ) ); // Vértice 13 F
forma.vertices.push( new THREE.Vector3( -3,  4,  6 ) ); // Vértice 14 G
forma.vertices.push( new THREE.Vector3(  3,  4,  6 ) ); // Vértice 15 H

//Cola
forma.vertices.push( new THREE.Vector3( -1,  8, -10 ) ); // Vértice 16 A
forma.vertices.push( new THREE.Vector3(  1,  8, -10 ) ); // Vértice 17 B
forma.vertices.push( new THREE.Vector3( -1,  8,  -6 ) ); // Vértice 18 C
forma.vertices.push( new THREE.Vector3(  1,  8,  -6 ) ); // Vértice 19 D
forma.vertices.push( new THREE.Vector3( -1,  6, -10 ) ); // Vértice 20 E
forma.vertices.push( new THREE.Vector3(  1,  6, -10 ) ); // Vértice 21 F
forma.vertices.push( new THREE.Vector3( -1,  6,  -6 ) ); // Vértice 22 G
forma.vertices.push( new THREE.Vector3(  1,  6,  -6 ) ); // Vértice 23 H

//Hocico
forma.vertices.push( new THREE.Vector3( -3,  6,  6 ) ); // Vértice 24 A
forma.vertices.push( new THREE.Vector3(  3,  6,  6 ) ); // Vértice 25 B
forma.vertices.push( new THREE.Vector3( -3,  6,  8 ) ); // Vértice 26 C
forma.vertices.push( new THREE.Vector3(  3,  6,  8 ) ); // Vértice 27 D
forma.vertices.push( new THREE.Vector3( -3,  4,  6 ) ); // Vértice 28 E
forma.vertices.push( new THREE.Vector3(  3,  4,  6 ) ); // Vértice 29 F
forma.vertices.push( new THREE.Vector3( -3,  4,  8 ) ); // Vértice 30 G
forma.vertices.push( new THREE.Vector3(  3,  4,  8 ) ); // Vértice 31 H

//Pata trasera derecha
forma.vertices.push( new THREE.Vector3( -3,  4, -6 ) ); // Vértice 32 A
forma.vertices.push( new THREE.Vector3( -1,  4, -6 ) ); // Vértice 33 B
forma.vertices.push( new THREE.Vector3( -3,  4, -4 ) ); // Vértice 34 C
forma.vertices.push( new THREE.Vector3( -1,  4, -4 ) ); // Vértice 35 D
forma.vertices.push( new THREE.Vector3( -3,  0, -6 ) ); // Vértice 36 E
forma.vertices.push( new THREE.Vector3( -1,  0, -6 ) ); // Vértice 37 F
forma.vertices.push( new THREE.Vector3( -3,  0, -4 ) ); // Vértice 38 G
forma.vertices.push( new THREE.Vector3( -1,  0, -4 ) ); // Vértice 39 H

//Pata trasera izquierda
forma.vertices.push( new THREE.Vector3( 1,  4, -6 ) ); // Vértice 40 A
forma.vertices.push( new THREE.Vector3( 3,  4, -6 ) ); // Vértice 41 B
forma.vertices.push( new THREE.Vector3( 1,  4, -4 ) ); // Vértice 42 C
forma.vertices.push( new THREE.Vector3( 3,  4, -4 ) ); // Vértice 43 D
forma.vertices.push( new THREE.Vector3( 1,  0, -6 ) ); // Vértice 44 E
forma.vertices.push( new THREE.Vector3( 3,  0, -6 ) ); // Vértice 45 F
forma.vertices.push( new THREE.Vector3( 1,  0, -4 ) ); // Vértice 46 G
forma.vertices.push( new THREE.Vector3( 3,  0, -4 ) ); // Vértice 47 H

//Pata delantera derecha
forma.vertices.push( new THREE.Vector3( -3,  4,  0 ) ); // Vértice 48 A
forma.vertices.push( new THREE.Vector3( -1,  4,  0 ) ); // Vértice 49 B
forma.vertices.push( new THREE.Vector3( -3,  4,  2 ) ); // Vértice 50 C
forma.vertices.push( new THREE.Vector3( -1,  4,  2 ) ); // Vértice 51 D
forma.vertices.push( new THREE.Vector3( -3,  0,  0 ) ); // Vértice 52 E
forma.vertices.push( new THREE.Vector3( -1,  0,  0 ) ); // Vértice 53 F
forma.vertices.push( new THREE.Vector3( -3,  0,  2 ) ); // Vértice 54 G
forma.vertices.push( new THREE.Vector3( -1,  0,  2 ) ); // Vértice 55 H

//Pata delantera izquierda
forma.vertices.push( new THREE.Vector3( 1,  4,  0 ) ); // Vértice 56 A
forma.vertices.push( new THREE.Vector3( 3,  4,  0 ) ); // Vértice 57 B
forma.vertices.push( new THREE.Vector3( 1,  4,  2 ) ); // Vértice 58 C
forma.vertices.push( new THREE.Vector3( 3,  4,  2 ) ); // Vértice 59 D
forma.vertices.push( new THREE.Vector3( 1,  0,  0 ) ); // Vértice 60 E
forma.vertices.push( new THREE.Vector3( 3,  0,  0 ) ); // Vértice 61 F
forma.vertices.push( new THREE.Vector3( 1,  0,  2 ) ); // Vértice 62 G
forma.vertices.push( new THREE.Vector3( 3,  0,  2 ) ); // Vértice 63 H

//Oreja derecha
forma.vertices.push( new THREE.Vector3( -3, 12,  2 ) ); // Vértice 64 A
forma.vertices.push( new THREE.Vector3( -1, 12,  2 ) ); // Vértice 65 B
forma.vertices.push( new THREE.Vector3( -3, 12,  4 ) ); // Vértice 66 C
forma.vertices.push( new THREE.Vector3( -1, 12,  4 ) ); // Vértice 67 D
forma.vertices.push( new THREE.Vector3( -3, 10,  2 ) ); // Vértice 68 E
forma.vertices.push( new THREE.Vector3( -1, 10,  2 ) ); // Vértice 69 F
forma.vertices.push( new THREE.Vector3( -3, 10,  4 ) ); // Vértice 70 G
forma.vertices.push( new THREE.Vector3( -1, 10,  4 ) ); // Vértice 71 H

//Oreja izquierda
forma.vertices.push( new THREE.Vector3( 1, 12,  2 ) ); // Vértice 72 A
forma.vertices.push( new THREE.Vector3( 3, 12,  2 ) ); // Vértice 73 B
forma.vertices.push( new THREE.Vector3( 1, 12,  4 ) ); // Vértice 74 C
forma.vertices.push( new THREE.Vector3( 3, 12,  4 ) ); // Vértice 75 D
forma.vertices.push( new THREE.Vector3( 1, 10,  2 ) ); // Vértice 76 E
forma.vertices.push( new THREE.Vector3( 3, 10,  2 ) ); // Vértice 77 F
forma.vertices.push( new THREE.Vector3( 1, 10,  4 ) ); // Vértice 78 G
forma.vertices.push( new THREE.Vector3( 3, 10,  4 ) ); // Vértice 79 H

//Lengua
forma.vertices.push( new THREE.Vector3( -1,  4,  4 ) ); // Vértice 80 A
forma.vertices.push( new THREE.Vector3(  1,  4,  4 ) ); // Vértice 81 B
forma.vertices.push( new THREE.Vector3( -1,  4,  6 ) ); // Vértice 82 C
forma.vertices.push( new THREE.Vector3(  1,  4,  6 ) ); // Vértice 83 D
forma.vertices.push( new THREE.Vector3( -1,  2,  4 ) ); // Vértice 84 E
forma.vertices.push( new THREE.Vector3(  1,  2,  4 ) ); // Vértice 85 F
forma.vertices.push( new THREE.Vector3( -1,  2,  6 ) ); // Vértice 86 G
forma.vertices.push( new THREE.Vector3(  1,  2,  6 ) ); // Vértice 87 H

//Cuerpo
forma.faces.push( new THREE.Face3( 3, 6, 7 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 3, 2, 6 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 2, 4, 6 ) ); // Cara 2
forma.faces.push( new THREE.Face3( 2, 0, 4 ) ); // Cara 3
forma.faces.push( new THREE.Face3( 0, 5, 4 ) ); // Cara 4
forma.faces.push( new THREE.Face3( 0, 1, 5 ) ); // Cara 5
forma.faces.push( new THREE.Face3( 1, 7, 5 ) ); // Cara 6
forma.faces.push( new THREE.Face3( 1, 3, 7 ) ); // Cara 7
forma.faces.push( new THREE.Face3( 1, 2, 3 ) ); // Cara 8
forma.faces.push( new THREE.Face3( 1, 0, 2 ) ); // Cara 9
forma.faces.push( new THREE.Face3( 5, 7, 6 ) ); // Cara 10
forma.faces.push( new THREE.Face3( 5, 6, 4 ) ); // Cara 11

//Cabeza
forma.faces.push( new THREE.Face3( 11, 14, 15 ) ); // Cara 12
forma.faces.push( new THREE.Face3( 11, 10, 14 ) ); // Cara 13
forma.faces.push( new THREE.Face3( 10, 12, 14 ) ); // Cara 14
forma.faces.push( new THREE.Face3( 10,  8, 12 ) ); // Cara 15
forma.faces.push( new THREE.Face3(  8, 13, 12 ) ); // Cara 16
forma.faces.push( new THREE.Face3(  8,  9, 13 ) ); // Cara 17
forma.faces.push( new THREE.Face3(  9, 15, 13 ) ); // Cara 18
forma.faces.push( new THREE.Face3(  9, 11, 15 ) ); // Cara 19
forma.faces.push( new THREE.Face3(  9, 10, 11 ) ); // Cara 20
forma.faces.push( new THREE.Face3(  9,  8, 10 ) ); // Cara 21
forma.faces.push( new THREE.Face3( 13, 15, 14 ) ); // Cara 22
forma.faces.push( new THREE.Face3( 13, 14, 12 ) ); // Cara 23

//Cola
forma.faces.push( new THREE.Face3( 19, 22, 23 ) ); // Cara 24
forma.faces.push( new THREE.Face3( 19, 18, 22 ) ); // Cara 25
forma.faces.push( new THREE.Face3( 18, 20, 22 ) ); // Cara 26
forma.faces.push( new THREE.Face3( 18, 16, 20 ) ); // Cara 27
forma.faces.push( new THREE.Face3( 16, 21, 20 ) ); // Cara 28
forma.faces.push( new THREE.Face3( 16, 17, 21 ) ); // Cara 29
forma.faces.push( new THREE.Face3( 17, 23, 21 ) ); // Cara 30
forma.faces.push( new THREE.Face3( 17, 19, 23 ) ); // Cara 31
forma.faces.push( new THREE.Face3( 17, 18, 19 ) ); // Cara 32
forma.faces.push( new THREE.Face3( 17, 16, 18 ) ); // Cara 33
forma.faces.push( new THREE.Face3( 21, 23, 22 ) ); // Cara 34
forma.faces.push( new THREE.Face3( 21, 22, 20 ) ); // Cara 35

//Hocico
forma.faces.push( new THREE.Face3( 27, 30, 31 ) ); // Cara 36
forma.faces.push( new THREE.Face3( 27, 26, 30 ) ); // Cara 37
forma.faces.push( new THREE.Face3( 26, 28, 30 ) ); // Cara 38
forma.faces.push( new THREE.Face3( 26, 24, 28 ) ); // Cara 39
forma.faces.push( new THREE.Face3( 24, 29, 28 ) ); // Cara 40
forma.faces.push( new THREE.Face3( 24, 25, 29 ) ); // Cara 41
forma.faces.push( new THREE.Face3( 25, 31, 29 ) ); // Cara 42
forma.faces.push( new THREE.Face3( 25, 27, 31 ) ); // Cara 43
forma.faces.push( new THREE.Face3( 25, 26, 27 ) ); // Cara 44
forma.faces.push( new THREE.Face3( 25, 24, 26 ) ); // Cara 45
forma.faces.push( new THREE.Face3( 29, 31, 30 ) ); // Cara 46
forma.faces.push( new THREE.Face3( 29, 30, 28 ) ); // Cara 47

//Pata trasera derecha
forma.faces.push( new THREE.Face3( 35, 38, 39 ) ); // Cara 48
forma.faces.push( new THREE.Face3( 35, 34, 38 ) ); // Cara 49
forma.faces.push( new THREE.Face3( 34, 36, 38 ) ); // Cara 50
forma.faces.push( new THREE.Face3( 34, 32, 36 ) ); // Cara 51
forma.faces.push( new THREE.Face3( 32, 37, 36 ) ); // Cara 52
forma.faces.push( new THREE.Face3( 32, 33, 37 ) ); // Cara 53
forma.faces.push( new THREE.Face3( 33, 39, 37 ) ); // Cara 54
forma.faces.push( new THREE.Face3( 33, 35, 39 ) ); // Cara 55
forma.faces.push( new THREE.Face3( 33, 34, 35 ) ); // Cara 56
forma.faces.push( new THREE.Face3( 33, 32, 34 ) ); // Cara 57
forma.faces.push( new THREE.Face3( 37, 39, 38 ) ); // Cara 58
forma.faces.push( new THREE.Face3( 37, 38, 36 ) ); // Cara 59

//Pata trasera izquierda
forma.faces.push( new THREE.Face3( 43, 46, 47 ) ); // Cara 60
forma.faces.push( new THREE.Face3( 43, 42, 46 ) ); // Cara 61
forma.faces.push( new THREE.Face3( 42, 44, 46 ) ); // Cara 62
forma.faces.push( new THREE.Face3( 42, 40, 44 ) ); // Cara 63
forma.faces.push( new THREE.Face3( 40, 45, 44 ) ); // Cara 64
forma.faces.push( new THREE.Face3( 40, 41, 45 ) ); // Cara 65
forma.faces.push( new THREE.Face3( 41, 47, 45 ) ); // Cara 66
forma.faces.push( new THREE.Face3( 41, 43, 47 ) ); // Cara 67
forma.faces.push( new THREE.Face3( 41, 42, 43 ) ); // Cara 68
forma.faces.push( new THREE.Face3( 41, 40, 42 ) ); // Cara 69
forma.faces.push( new THREE.Face3( 45, 47, 46 ) ); // Cara 70
forma.faces.push( new THREE.Face3( 45, 46, 44 ) ); // Cara 71

//Pata delantera derecha
forma.faces.push( new THREE.Face3( 51, 54, 55 ) ); // Cara 72
forma.faces.push( new THREE.Face3( 51, 50, 54 ) ); // Cara 73
forma.faces.push( new THREE.Face3( 50, 52, 54 ) ); // Cara 74
forma.faces.push( new THREE.Face3( 50, 48, 52 ) ); // Cara 75
forma.faces.push( new THREE.Face3( 48, 53, 52 ) ); // Cara 76
forma.faces.push( new THREE.Face3( 48, 49, 53 ) ); // Cara 77
forma.faces.push( new THREE.Face3( 49, 55, 53 ) ); // Cara 78
forma.faces.push( new THREE.Face3( 49, 51, 55 ) ); // Cara 79
forma.faces.push( new THREE.Face3( 49, 50, 51 ) ); // Cara 80
forma.faces.push( new THREE.Face3( 49, 48, 50 ) ); // Cara 81
forma.faces.push( new THREE.Face3( 53, 55, 54 ) ); // Cara 82
forma.faces.push( new THREE.Face3( 53, 54, 52 ) ); // Cara 83

//Pata delantera izquierda
forma.faces.push( new THREE.Face3( 59, 62, 63 ) ); // Cara 84
forma.faces.push( new THREE.Face3( 59, 58, 62 ) ); // Cara 85
forma.faces.push( new THREE.Face3( 58, 60, 62 ) ); // Cara 86
forma.faces.push( new THREE.Face3( 58, 56, 60 ) ); // Cara 87
forma.faces.push( new THREE.Face3( 56, 61, 60 ) ); // Cara 88
forma.faces.push( new THREE.Face3( 56, 57, 61 ) ); // Cara 89
forma.faces.push( new THREE.Face3( 57, 63, 61 ) ); // Cara 90
forma.faces.push( new THREE.Face3( 57, 59, 63 ) ); // Cara 91
forma.faces.push( new THREE.Face3( 57, 58, 59 ) ); // Cara 92
forma.faces.push( new THREE.Face3( 57, 56, 58 ) ); // Cara 93
forma.faces.push( new THREE.Face3( 61, 63, 62 ) ); // Cara 94
forma.faces.push( new THREE.Face3( 61, 62, 60 ) ); // Cara 95

//Oreja derecha
forma.faces.push( new THREE.Face3( 67, 70, 71 ) ); // Cara 96
forma.faces.push( new THREE.Face3( 67, 66, 70 ) ); // Cara 97
forma.faces.push( new THREE.Face3( 66, 68, 70 ) ); // Cara 98
forma.faces.push( new THREE.Face3( 66, 64, 68 ) ); // Cara 99
forma.faces.push( new THREE.Face3( 64, 69, 68 ) ); // Cara 100
forma.faces.push( new THREE.Face3( 64, 65, 69 ) ); // Cara 101
forma.faces.push( new THREE.Face3( 65, 71, 69 ) ); // Cara 102
forma.faces.push( new THREE.Face3( 65, 67, 71 ) ); // Cara 103
forma.faces.push( new THREE.Face3( 65, 66, 67 ) ); // Cara 104
forma.faces.push( new THREE.Face3( 65, 64, 66 ) ); // Cara 105
forma.faces.push( new THREE.Face3( 69, 71, 70 ) ); // Cara 106
forma.faces.push( new THREE.Face3( 69, 70, 68 ) ); // Cara 107

//Oreja izquierda
forma.faces.push( new THREE.Face3( 75, 78, 79 ) ); // Cara 108
forma.faces.push( new THREE.Face3( 75, 74, 78 ) ); // Cara 109
forma.faces.push( new THREE.Face3( 74, 76, 78 ) ); // Cara 110
forma.faces.push( new THREE.Face3( 74, 72, 76 ) ); // Cara 111
forma.faces.push( new THREE.Face3( 72, 77, 76 ) ); // Cara 112
forma.faces.push( new THREE.Face3( 72, 73, 77 ) ); // Cara 113
forma.faces.push( new THREE.Face3( 73, 79, 77 ) ); // Cara 114
forma.faces.push( new THREE.Face3( 73, 75, 79 ) ); // Cara 115
forma.faces.push( new THREE.Face3( 73, 74, 75 ) ); // Cara 116
forma.faces.push( new THREE.Face3( 73, 72, 74 ) ); // Cara 117
forma.faces.push( new THREE.Face3( 77, 79, 78 ) ); // Cara 118
forma.faces.push( new THREE.Face3( 77, 78, 76 ) ); // Cara 119

//Lengua
forma.faces.push( new THREE.Face3( 83, 86, 87 ) ); // Cara 120
forma.faces.push( new THREE.Face3( 83, 82, 86 ) ); // Cara 121
forma.faces.push( new THREE.Face3( 82, 84, 86 ) ); // Cara 122
forma.faces.push( new THREE.Face3( 82, 80, 84 ) ); // Cara 123
forma.faces.push( new THREE.Face3( 80, 85, 84 ) ); // Cara 124
forma.faces.push( new THREE.Face3( 80, 81, 85 ) ); // Cara 125
forma.faces.push( new THREE.Face3( 81, 87, 85 ) ); // Cara 126
forma.faces.push( new THREE.Face3( 81, 83, 87 ) ); // Cara 127
forma.faces.push( new THREE.Face3( 81, 82, 83 ) ); // Cara 128
forma.faces.push( new THREE.Face3( 81, 80, 82 ) ); // Cara 129
forma.faces.push( new THREE.Face3( 85, 87, 86 ) ); // Cara 130
forma.faces.push( new THREE.Face3( 85, 86, 84 ) ); // Cara 131

forma.computeBoundingSphere();

forma.computeFaceNormals();

//var material = new THREE.MeshNormalMaterial();

forma.rotateY(Math.PI/4);
forma.translate(120,6,0);
var malla5 = new THREE.Mesh( forma, material1 );


//Ender------------------------------------------------------------------------------------------------------------------------------
var formaE = new THREE.Geometry();

//Pie derecho
formaE.vertices.push( new THREE.Vector3(  1,  0, -3 ) ); // Vértice 0 A
formaE.vertices.push( new THREE.Vector3(  1,  0, -1 ) ); // Vértice 1 B
formaE.vertices.push( new THREE.Vector3(  1,  8, -3 ) ); // Vértice 2 C
formaE.vertices.push( new THREE.Vector3(  1,  8, -1 ) ); // Vértice 3 D
formaE.vertices.push( new THREE.Vector3( -1,  0, -3 ) ); // Vértice 4 E
formaE.vertices.push( new THREE.Vector3( -1,  0, -1 ) ); // Vértice 5 F
formaE.vertices.push( new THREE.Vector3( -1,  8, -3 ) ); // Vértice 6 G
formaE.vertices.push( new THREE.Vector3( -1,  8, -1 ) ); // Vértice 7 H

//Pie izquierdo
formaE.vertices.push( new THREE.Vector3(  1,  0,  1 ) ); // Vértice 8  A
formaE.vertices.push( new THREE.Vector3(  1,  0,  3 ) ); // Vértice 9  B
formaE.vertices.push( new THREE.Vector3(  1,  8,  1 ) ); // Vértice 10 C
formaE.vertices.push( new THREE.Vector3(  1,  8,  3 ) ); // Vértice 11 D
formaE.vertices.push( new THREE.Vector3( -1,  0,  1 ) ); // Vértice 12 E
formaE.vertices.push( new THREE.Vector3( -1,  0,  3 ) ); // Vértice 13 F
formaE.vertices.push( new THREE.Vector3( -1,  8,  1 ) ); // Vértice 14 G
formaE.vertices.push( new THREE.Vector3( -1,  8,  3 ) ); // Vértice 15 H

//Cuerpo
formaE.vertices.push( new THREE.Vector3(  2,  8, -3 ) ); // Vértice 16 A
formaE.vertices.push( new THREE.Vector3(  2,  8,  3 ) ); // Vértice 17 B
formaE.vertices.push( new THREE.Vector3(  2, 14, -3 ) ); // Vértice 18 C
formaE.vertices.push( new THREE.Vector3(  2, 14,  3 ) ); // Vértice 19 D
formaE.vertices.push( new THREE.Vector3( -2,  8, -3 ) ); // Vértice 20 E
formaE.vertices.push( new THREE.Vector3( -2,  8,  3 ) ); // Vértice 21 F
formaE.vertices.push( new THREE.Vector3( -2, 14, -3 ) ); // Vértice 22 G
formaE.vertices.push( new THREE.Vector3( -2, 14,  3 ) ); // Vértice 23 H

//Cabeza
formaE.vertices.push( new THREE.Vector3(  3, 14, -3 ) ); // Vértice 24 A
formaE.vertices.push( new THREE.Vector3(  3, 14,  3 ) ); // Vértice 25 B
formaE.vertices.push( new THREE.Vector3(  3, 21, -3 ) ); // Vértice 26 C
formaE.vertices.push( new THREE.Vector3(  3, 21,  3 ) ); // Vértice 27 D
formaE.vertices.push( new THREE.Vector3( -3, 14, -3 ) ); // Vértice 28 E
formaE.vertices.push( new THREE.Vector3( -3, 14,  3 ) ); // Vértice 29 F
formaE.vertices.push( new THREE.Vector3( -3, 21, -3 ) ); // Vértice 30 G
formaE.vertices.push( new THREE.Vector3( -3, 21,  3 ) ); // Vértice 31 H

//Brazo derecho
formaE.vertices.push( new THREE.Vector3(  7, 12, -5 ) ); // Vértice 32 A
formaE.vertices.push( new THREE.Vector3(  7, 12, -3 ) ); // Vértice 33 B
formaE.vertices.push( new THREE.Vector3(  7, 14, -5 ) ); // Vértice 34 C
formaE.vertices.push( new THREE.Vector3(  7, 14, -3 ) ); // Vértice 35 D
formaE.vertices.push( new THREE.Vector3( -1, 12, -5 ) ); // Vértice 36 E
formaE.vertices.push( new THREE.Vector3( -1, 12, -3 ) ); // Vértice 37 F
formaE.vertices.push( new THREE.Vector3( -1, 14, -5 ) ); // Vértice 38 G
formaE.vertices.push( new THREE.Vector3( -1, 14, -3 ) ); // Vértice 39 H

//Brazo izquierdo
formaE.vertices.push( new THREE.Vector3(  7, 12,  3 ) ); // Vértice 40 A
formaE.vertices.push( new THREE.Vector3(  7, 12,  5 ) ); // Vértice 41 B
formaE.vertices.push( new THREE.Vector3(  7, 14,  3 ) ); // Vértice 42 C
formaE.vertices.push( new THREE.Vector3(  7, 14,  5 ) ); // Vértice 43 D
formaE.vertices.push( new THREE.Vector3( -1, 12,  3 ) ); // Vértice 44 E
formaE.vertices.push( new THREE.Vector3( -1, 12,  5 ) ); // Vértice 45 F
formaE.vertices.push( new THREE.Vector3( -1, 14,  3 ) ); // Vértice 46 G
formaE.vertices.push( new THREE.Vector3( -1, 14,  5 ) ); // Vértice 47 H

//Pie derecho
formaE.faces.push( new THREE.Face3( 3, 1, 0 ) ); // Cara 0
formaE.faces.push( new THREE.Face3( 3, 0, 2 ) ); // Cara 1
formaE.faces.push( new THREE.Face3( 2, 0, 4 ) ); // Cara 2
formaE.faces.push( new THREE.Face3( 2, 4, 6 ) ); // Cara 3
formaE.faces.push( new THREE.Face3( 6, 4, 5 ) ); // Cara 4
formaE.faces.push( new THREE.Face3( 6, 5, 7 ) ); // Cara 5
formaE.faces.push( new THREE.Face3( 7, 5, 1 ) ); // Cara 6
formaE.faces.push( new THREE.Face3( 7, 1, 3 ) ); // Cara 7
formaE.faces.push( new THREE.Face3( 7, 3, 2 ) ); // Cara 8
formaE.faces.push( new THREE.Face3( 7, 2, 6 ) ); // Cara 9
formaE.faces.push( new THREE.Face3( 5, 0, 1 ) ); // Cara 10
formaE.faces.push( new THREE.Face3( 5, 4, 0 ) ); // Cara 11

//Pie izquierdo
formaE.faces.push( new THREE.Face3( 11,  9,  8 ) ); // Cara 12
formaE.faces.push( new THREE.Face3( 11,  8, 10 ) ); // Cara 13
formaE.faces.push( new THREE.Face3( 10,  8, 12 ) ); // Cara 14
formaE.faces.push( new THREE.Face3( 10, 12, 14 ) ); // Cara 15
formaE.faces.push( new THREE.Face3( 14, 12, 13 ) ); // Cara 16
formaE.faces.push( new THREE.Face3( 14, 13, 15 ) ); // Cara 17
formaE.faces.push( new THREE.Face3( 15, 13,  9 ) ); // Cara 18
formaE.faces.push( new THREE.Face3( 15,  9, 11 ) ); // Cara 19
formaE.faces.push( new THREE.Face3( 15, 11, 10 ) ); // Cara 20
formaE.faces.push( new THREE.Face3( 15, 10, 14 ) ); // Cara 21
formaE.faces.push( new THREE.Face3( 13,  8,  9 ) ); // Cara 22
formaE.faces.push( new THREE.Face3( 13, 12,  8 ) ); // Cara 23

//Cuerpo
formaE.faces.push( new THREE.Face3( 19, 17, 16 ) ); // Cara 24
formaE.faces.push( new THREE.Face3( 19, 16, 18 ) ); // Cara 25
formaE.faces.push( new THREE.Face3( 18, 16, 20 ) ); // Cara 26
formaE.faces.push( new THREE.Face3( 18, 20, 22 ) ); // Cara 27
formaE.faces.push( new THREE.Face3( 22, 20, 21 ) ); // Cara 28
formaE.faces.push( new THREE.Face3( 22, 21, 23 ) ); // Cara 29
formaE.faces.push( new THREE.Face3( 23, 21, 17 ) ); // Cara 30
formaE.faces.push( new THREE.Face3( 23, 17, 19 ) ); // Cara 31
formaE.faces.push( new THREE.Face3( 23, 19, 18 ) ); // Cara 32
formaE.faces.push( new THREE.Face3( 23, 18, 22 ) ); // Cara 33
formaE.faces.push( new THREE.Face3( 21, 16, 17 ) ); // Cara 34
formaE.faces.push( new THREE.Face3( 21, 20, 16 ) ); // Cara 35

//Cabeza
formaE.faces.push( new THREE.Face3( 27, 25, 24 ) ); // Cara 36
formaE.faces.push( new THREE.Face3( 27, 24, 26 ) ); // Cara 37
formaE.faces.push( new THREE.Face3( 26, 24, 28 ) ); // Cara 38
formaE.faces.push( new THREE.Face3( 26, 28, 30 ) ); // Cara 39
formaE.faces.push( new THREE.Face3( 30, 28, 29 ) ); // Cara 40
formaE.faces.push( new THREE.Face3( 30, 29, 31 ) ); // Cara 41
formaE.faces.push( new THREE.Face3( 31, 29, 25 ) ); // Cara 42
formaE.faces.push( new THREE.Face3( 31, 25, 27 ) ); // Cara 43
formaE.faces.push( new THREE.Face3( 31, 27, 26 ) ); // Cara 44
formaE.faces.push( new THREE.Face3( 31, 26, 30 ) ); // Cara 45
formaE.faces.push( new THREE.Face3( 29, 24, 25 ) ); // Cara 46
formaE.faces.push( new THREE.Face3( 29, 28, 24 ) ); // Cara 47

//Brazo derecho
formaE.faces.push( new THREE.Face3( 35, 33, 32 ) ); // Cara 48
formaE.faces.push( new THREE.Face3( 35, 32, 34 ) ); // Cara 49
formaE.faces.push( new THREE.Face3( 34, 32, 36 ) ); // Cara 50
formaE.faces.push( new THREE.Face3( 34, 36, 38 ) ); // Cara 51
formaE.faces.push( new THREE.Face3( 38, 36, 37 ) ); // Cara 52
formaE.faces.push( new THREE.Face3( 38, 37, 39 ) ); // Cara 53
formaE.faces.push( new THREE.Face3( 39, 37, 33 ) ); // Cara 54
formaE.faces.push( new THREE.Face3( 39, 33, 35 ) ); // Cara 55
formaE.faces.push( new THREE.Face3( 39, 35, 34 ) ); // Cara 56
formaE.faces.push( new THREE.Face3( 39, 34, 38 ) ); // Cara 57
formaE.faces.push( new THREE.Face3( 37, 32, 33 ) ); // Cara 58
formaE.faces.push( new THREE.Face3( 37, 36, 32 ) ); // Cara 59

//Brazo izquierdo
formaE.faces.push( new THREE.Face3( 43, 41, 40 ) ); // Cara 60
formaE.faces.push( new THREE.Face3( 43, 40, 42 ) ); // Cara 61
formaE.faces.push( new THREE.Face3( 42, 40, 44 ) ); // Cara 62
formaE.faces.push( new THREE.Face3( 42, 44, 46 ) ); // Cara 63
formaE.faces.push( new THREE.Face3( 46, 44, 45 ) ); // Cara 64
formaE.faces.push( new THREE.Face3( 46, 45, 47 ) ); // Cara 65
formaE.faces.push( new THREE.Face3( 47, 45, 41 ) ); // Cara 66
formaE.faces.push( new THREE.Face3( 47, 41, 43 ) ); // Cara 67
formaE.faces.push( new THREE.Face3( 47, 43, 42 ) ); // Cara 68
formaE.faces.push( new THREE.Face3( 47, 42, 46 ) ); // Cara 69
formaE.faces.push( new THREE.Face3( 45, 40, 41 ) ); // Cara 70
formaE.faces.push( new THREE.Face3( 45, 44, 40 ) ); // Cara 71

formaE.computeBoundingSphere();

formaE.computeFaceNormals();

//var material = new THREE.MeshNormalMaterial();

formaE.rotateY(Math.PI*7/4);
formaE.translate(150,6,0);
var mallaE = new THREE.Mesh( formaE, material1 );


//Tablero----------------------------------------------------------------------------------------------------------------------------
var tabla = new THREE.BoxGeometry(300,10,300);
//tabla.translate(0,0,-200);
//var material4 = new THREE.MeshNormalMaterial();
var malla7 = new THREE.Mesh(tabla,material2);


var escena = new THREE.Scene();
escena.add(malla1);
escena.add(malla2);
escena.add(piezaMalla);
escena.add(OrugaM);
escena.add(malla5);
escena.add(mallaE);
escena.add(malla7);


var malla12 = new THREE.Mesh( forma1, material2 );
malla12.translateX(-20);
var malla22 = new THREE.Mesh( forma2, material2 );
malla22.translateX(-60);
var piezaMalla2 = new THREE.Mesh(pieza,material2);
piezaMalla2.translateX(-120);
var OrugaM2 = new THREE.Mesh( Oruga, material2 );
OrugaM2.translateX(-180);
var malla52 = new THREE.Mesh( forma, material2 );
malla52.translateX(-240);
var mallaE2 = new THREE.Mesh(formaE,material2);
mallaE2.translateX(-300);

escena.add(malla12);
escena.add(malla22);
escena.add(piezaMalla2);
escena.add(OrugaM2);
escena.add(malla52);
escena.add(mallaE2);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 400;
//camara.position.y = 300;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
