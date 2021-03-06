var puntos = [];

for ( var i = 0; i < 10; i ++ ) {
    puntos.push( new THREE.Vector2( (7/9)*i , i ) );
}
for ( var i = 10; i < 19; i ++ ) {
    puntos.push( new THREE.Vector2( 12-(1/3)*i , i ) );
}
for ( var i = 19; i < 23; i ++ ) {
    puntos.push( new THREE.Vector2( 2, i ) );
}
for ( var i = 23; i < 30; i ++ ) {
    puntos.push( new THREE.Vector2( Math.sqrt(16-(i-25)*(i-25)) , i ) );
}
//puntos.push( new THREE.Vector2( 0 , 28 ) );

var forma = new THREE.LatheGeometry(puntos);

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/8 );

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
