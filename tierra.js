var camera, scene, renderer;
var mesh;

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 8;
    camera.position.y = 1;
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    var controls = new THREE.OrbitControls( camera );

    scene = new THREE.Scene();
 
    var light = new THREE.SpotLight( 0xFFFFFF );
    light.position.set( 1, 3, 5 );
    scene.add( light );

    var geometry = new THREE.SphereBufferGeometry(1, 32, 32);
    var loader = new THREE.TextureLoader();
		loader.crossOrigin = "";
		var texture1 = loader.load('http://2.bp.blogspot.com/-Jfw4jY6vBWM/UkbwZhdKxuI/AAAAAAAAK94/QTmtnuDFlC8/s1600/2_no_clouds_4k.jpg');
    var texture2 = loader.load('http://4.bp.blogspot.com/-nVnWCcT-VkY/VC2FnM6ZOmI/AAAAAAAAA4k/bWRniM20L_s/s1600/T_Wood512_N.jpg');
        
    var material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map:texture1
    });
        
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    
    var geometry = new THREE.PlaneGeometry( 10, 10 );
    var plane = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color:0xffffff, map:texture2 } ) );
    scene.add( plane );
    plane.position.set( 0, 0, -2 );

}

function animate() {

		if( mesh.rotation.x > Math.PI ) {
    	mesh.rotation.x = 0;
    }

    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render(scene, camera);

}