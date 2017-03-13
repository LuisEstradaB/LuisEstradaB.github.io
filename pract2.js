var geometry = new THREE.BoxGeometry( 2, 1, 2 );

var material01 = new THREE.MeshBasicMaterial( {color: 0xffffff} );
var material02 = new THREE.MeshBasicMaterial( {color: 0xf55555} );
var material03 = new THREE.MeshBasicMaterial( {color: 0xeaaaab} );
var material04 = new THREE.MeshBasicMaterial( {color: 0xe00001} );
var material05 = new THREE.MeshBasicMaterial( {color: 0xd55557} );

var material06 = new THREE.MeshBasicMaterial( {color: 0xcaaaad} );
var material07 = new THREE.MeshBasicMaterial( {color: 0xc00003} );
var material08 = new THREE.MeshBasicMaterial( {color: 0xb55559} );
var material09 = new THREE.MeshBasicMaterial( {color: 0xaaaaaf} );
var material10 = new THREE.MeshBasicMaterial( {color: 0xa00005} );

var material11 = new THREE.MeshBasicMaterial( {color: 0x95555b} );
var material12 = new THREE.MeshBasicMaterial( {color: 0x8aaab1} );
var material13 = new THREE.MeshBasicMaterial( {color: 0x800007} );
var material14 = new THREE.MeshBasicMaterial( {color: 0x75555d} );
var material15 = new THREE.MeshBasicMaterial( {color: 0x6aaab3} );

var material16 = new THREE.MeshBasicMaterial( {color: 0x600009} );
var material17 = new THREE.MeshBasicMaterial( {color: 0x55555f} );
var material18 = new THREE.MeshBasicMaterial( {color: 0x4aaab5} );
var material19 = new THREE.MeshBasicMaterial( {color: 0x40000b} );
var material20 = new THREE.MeshBasicMaterial( {color: 0x355561} );

var material21 = new THREE.MeshBasicMaterial( {color: 0x2aaab7} );
var material22 = new THREE.MeshBasicMaterial( {color: 0x20000d} );
var material23 = new THREE.MeshBasicMaterial( {color: 0x155563} );
var material24 = new THREE.MeshBasicMaterial( {color: 0x0aaab9} );
var material25 = new THREE.MeshBasicMaterial( {color: 0x00000f} );

var cubo01 = new THREE.Mesh( geometry, material01 );
cubo01.translateX(-5);
cubo01.translateZ(-5);
var cubo02 = new THREE.Mesh( geometry, material02 );
cubo02.translateX(-3);
cubo02.translateZ(-5);
var cubo03 = new THREE.Mesh( geometry, material03 );
cubo03.translateX(-1);
cubo03.translateZ(-5);
var cubo04 = new THREE.Mesh( geometry, material04 );
cubo04.translateX(1);
cubo04.translateZ(-5);
var cubo05 = new THREE.Mesh( geometry, material05 );
cubo05.translateX(3);
cubo05.translateZ(-5);

var cubo06 = new THREE.Mesh( geometry, material06 );
cubo06.translateX(-5);
cubo06.translateZ(-3);
var cubo07 = new THREE.Mesh( geometry, material07 );
cubo07.translateX(-3);
cubo07.translateZ(-3);
var cubo08 = new THREE.Mesh( geometry, material08 );
cubo08.translateX(-1);
cubo08.translateZ(-3);
var cubo09 = new THREE.Mesh( geometry, material09 );
cubo09.translateX(1);
cubo09.translateZ(-3);
var cubo10 = new THREE.Mesh( geometry, material10 );
cubo10.translateX(3);
cubo01.translateZ(-3);

var cubo11 = new THREE.Mesh( geometry, material11 );
cubo11.translateX(-5);
cubo11.translateZ(-1);
var cubo12 = new THREE.Mesh( geometry, material12 );
cubo12.translateX(-3);
cubo12.translateZ(-1);
var cubo13 = new THREE.Mesh( geometry, material13 );
cubo13.translateX(-1);
cubo13.translateZ(-1);
var cubo14 = new THREE.Mesh( geometry, material14 );
cubo14.translateX(1);
cubo14.translateZ(-1);
var cubo15 = new THREE.Mesh( geometry, material15 );
cubo15.translateX(3);
cubo15.translateZ(-1);

var cubo16 = new THREE.Mesh( geometry, material16 );
cubo16.translateX(-5);
cubo16.translateZ(1);
var cubo17 = new THREE.Mesh( geometry, material17 );
cubo17.translateX(-3);
cubo17.translateZ(1);
var cubo18 = new THREE.Mesh( geometry, material18 );
cubo18.translateX(-1);
cubo18.translateZ(1);
var cubo19 = new THREE.Mesh( geometry, material19 );
cubo19.translateX(1);
cubo19.translateZ(1);
var cubo20 = new THREE.Mesh( geometry, material20 );
cubo20.translateX(3);
cubo20.translateZ(1);

var cubo21 = new THREE.Mesh( geometry, material21 );
cubo21.translateX(-5);
cubo21.translateZ(3);
var cubo22 = new THREE.Mesh( geometry, material22 );
cubo22.translateX(-3);
cubo22.translateZ(3);
var cubo23 = new THREE.Mesh( geometry, material23 );
cubo23.translateX(-1);
cubo23.translateZ(3);
var cubo24 = new THREE.Mesh( geometry, material24 );
cubo24.translateX(1);
cubo24.translateZ(3);
var cubo25 = new THREE.Mesh( geometry, material25 );
cubo25.translateX(3);
cubo25.translateZ(3);

var escena = new THREE.Scene();

escena.add( cubo01 );
escena.add( cubo02 );
escena.add( cubo03 );
escena.add( cubo04 );
escena.add( cubo05 );

escena.add( cubo06 );
escena.add( cubo07 );
escena.add( cubo08 );
escena.add( cubo09 );
escena.add( cubo10 );

escena.add( cubo11 );
escena.add( cubo12 );
escena.add( cubo13 );
escena.add( cubo14 );
escena.add( cubo15 );

escena.add( cubo16 );
escena.add( cubo17 );
escena.add( cubo18 );
escena.add( cubo19 );
escena.add( cubo20 );

escena.add( cubo21 );
escena.add( cubo22 );
escena.add( cubo23 );
escena.add( cubo24 );
escena.add( cubo25 );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 25;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
