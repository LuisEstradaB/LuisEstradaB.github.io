function listener(){
  camara.aspect = window.innerWidth / window.innerHeight;
  camara.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function pushar(e){
  if(e.keyCode === 113)
    camara.position.z++;
  else if(e.keyCode === 97)
    camara.position.z--;
}

function setup() {
  escena = new THREE.Scene();
  camara = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
  
  camara.position.z = 5;
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight )
  document.body.appendChild(renderer.domElement);
  
  malla = new THREE.Mesh( new THREE.BoxGeometry( 1, 1, 1 ), new THREE.MeshNormalMaterial() );
  escena.add(malla);
  
  var tipoEvento = 'resize';
  var capturar = false;
  window.addEventListener( tipoEvento, listener, capturar );
  window.addEventListener( 'keypress', pushar, capturar );
  
}

function loop(){
  requestAnimationFrame( loop );
  
  malla.rotation.x += 0.01;
  malla.rotation.y += 0.01;
  renderer.render( escena, camara );
}

var malla, camara, renderer, escena;

setup();
loop();
