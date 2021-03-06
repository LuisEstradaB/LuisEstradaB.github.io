function Pelota(r, x=0, y=0, material) {
	Agent.call(this,x,y);
  
	var malla = new THREE.Mesh( new THREE.SphereGeometry( r ),
				new THREE.MeshBasicMaterial() );
	var loader = new THREE.TextureLoader();	
	loader.load( 'balon.jpg', function ( texture ) {
		//var geometry = new THREE.SphereGeometry( 1, 20, 20 );
		//var mesh = new THREE.Mesh( geometry, material );
		malla.material.map = texture;
		//entorno.add( mesh );
	} );
	this.add(malla);
	this.step = 0.1;
	this.colision = 0;
	this.radius = r;
	this.sensor = new THREE.Raycaster( this.position,
					  new THREE.Vector3( 1,0,0) );
}
  
Pelota.prototype = new Agent();
  
Pelota.prototype.sense = function(environment) {
	this.sensor.set( this.position, new THREE.Vector3( 1,0,0 ) );
	var obstaculo1 = this.sensor.intersectObjects(environment.children,
						      true);
  
	this.sensor.set( this.position, new THREE.Vector3( -1,0,0 ) );
	var obstaculo2 = this.sensor.intersectObjects(environment.children,
						      true);
  
	if ((obstaculo1.length > 0 &&
	     (obstaculo1[0].distance <= this.radius)) ||
	    (obstaculo2.length > 0 &&
	     (obstaculo2[0].distance <= this.radius) ))
		this.colision = 1;
	else
		this.colision = 0;
};

Pelota.prototype.act = function(environment) {
	if(this.colision === 1)
		this.step = -this.step;
	this.position.x += this.step;
};

function Pared(size, x=0, y=0) {
	THREE.Object3D.call(this,x,y);
  
	this.add(new THREE.Mesh(  new THREE.BoxGeometry( size,size,size ),
				new THREE.MeshNormalMaterial() ));
	this.size = size;
	this.position.x = x;
	this.position.y = y;
}

Pared.prototype =new THREE.Object3D();

function setup() {
	entorno = new Environment();
	camara = new THREE.PerspectiveCamera();
	camara.position.z = 30;
  
	entorno.add( new Pared(1,7,0) );
	entorno.add( new Pared(1,-7,0) );
	entorno.add( new Pared(1,7,1) );
	entorno.add( new Pared(1,-7,1) );
	entorno.add( new Pared(1,7,-1) );
	entorno.add( new Pared(1,-7,-1) );
	entorno.add( new Pelota(1,0,0) );
	entorno.add( camara );
  
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerHeight*0.95, window.innerHeight*0.95 );
	document.body.appendChild( renderer.domElement );
}

function loop() {
	requestAnimationFrame( loop );
  
	entorno.sense();
	entorno.plan();
	entorno.act();
	renderer.render( entorno, camara );
}

var entorno, camara, renderer;

setup();
loop();
