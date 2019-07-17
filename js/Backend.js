var scene = new THREE.Scene();
// the camera has 3 attributes: field of view, aspect ration, and near/far (how close to the camera)
var camera = new THREE.PerspectiveCamera(200, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );
var renderer = new THREE.WebGLRenderer();
// set size of app, set small if performance intensive
// can render at 1/2 res by renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );

var material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3( -50, 0, 0) );
geometry.vertices.push(new THREE.Vector3( 0, 10, 0) );
geometry.vertices.push(new THREE.Vector3( 10, 0, 0) );
var line = new THREE.Line( geometry, material );
scene.add( line );
renderer.render( scene, camera );

// mesh takes a geometry, then applies a material to it
scene.add( cube );
// default is coordinates (0,0,0), but causes cube and camera to be inside each other

camera.position.z = 5;

// this is where the actual rendering takes place, must have this in order to see stuff
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    requestAnimationFrame(animate);
   
    renderer.render(scene, camera);
}
animate();

// tutorial: https://threejs.org/docs/#manual/en/introduction/Drawing-lines
// https://threejsfundamentals.org/threejs/lessons/threejs-fundamentals.html
// https://threejs.org/docs/#manual/en/introduction/Useful-links