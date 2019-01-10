var table = [
	
	"<meta>", "<div class='miniatura'><img src='https://s2.gifyu.com/images/metadd8b62c73e5abe4d.gif' alt='metadd8b62c73e5abe4d.gif' border='0' /></div>", "1.1", 5, 1,

	
	"<head>", "<div class='miniatura'><img src='https://s2.gifyu.com/images/head_1.gif' alt='head_1.gif' border='0'/></div>", "", 2, 2,
	"<head>", "<div class='miniatura'><img src='https://s2.gifyu.com/images/loading_1.gif' alt='loading_1.gif' border='0' /></div>", "", 4, 2,
	"<head>", "<div class='miniatura'><img src='https://s2.gifyu.com/images/head_2.gif' alt='head_2.gif' border='0' /></div>", "", 5, 2,
	"", "<div class='miniatura'><img src='https://s2.gifyu.com/images/loading_2.gif' alt='loading_2.gif' border='0' /></div>", "", 6, 2,
	"<head>",  "<div class='miniatura'><img src='https://s2.gifyu.com/images/loading_3.gif' alt='loading_3.gif' border='0' /></div>", "", 7, 2,
	
	
	"", "<div class='miniatura'><img src='https://s2.gifyu.com/images/loading_4.gif' alt='loading_4.gif' border='0' /></div>", "", 1, 3,
	"", "<div class='miniatura'><img src='https://s2.gifyu.com/images/loading_5.gif' alt='loading_5.gif' border='0' /></div>", "", 2, 3,
	"<body>", "<div class='miniatura'><img src='https://s2.gifyu.com/images/loading_6.gif' alt='loading_6.gif' border='0' /></div>", "", 3, 3,
	"", "<div class='miniatura'><img src='https://s2.gifyu.com/images/head_3.gif' alt='head_3.gif' border='0' /></div>", "", 4, 3,
	"<body>", "<div class='miniatura'><img src='https://s2.gifyu.com/images/head_3a.gif' alt='head_3a.gif' border='0' /></div>", "", 5, 3,
    "<body>", "<div class='miniatura'><img src='https://s2.gifyu.com/images/head_4.gif' alt='head_4.gif' border='0' /></div>", "", 6, 3,
	"", "<div class='miniatura'><img src='https://s2.gifyu.com/images/loading_7.gif' alt='loading_7.gif' border='0' /></div>", "", 7, 3,
	"<body>", "<div class='miniatura'><img src='https://s2.gifyu.com/images/head_5.gif' alt='head_5.gif' border='0' /></div>", "", 8, 3,
	
	"", "<div class='miniatura'><img src='https://s2.gifyu.com/images/loading_8.gif' alt='loading_8.gif' border='0' /></div>", "", 2, 4,
	"<shell>",  "<div class='miniatura'><img src='https://s2.gifyu.com/images/body_1.gif' alt='body_1.gif' border='0'/></div>", "", 3, 4,
	"<shell>", "<div class='miniatura'><img src='https://s2.gifyu.com/images/body_2.gif' alt='body_2.gif' border='0'/></div>", "", 4, 4,
	"", "<div class='miniatura'><img src='https://s2.gifyu.com/images/loading_9.gif' alt='loading_9.gif' border='0' /></div>", "", 5, 4,
	"<shell>", "<div class='miniatura'><img src='https://s2.gifyu.com/images/body_3.gif' alt='body_3.gif' border='0'/></div>", "", 6, 4,
	"", "<div class='miniatura'><img src='https://s2.gifyu.com/images/loading_10.gif' alt='loading_10.gif' border='0' /></div>", "", 7, 4,
	"<shell>", "<div class='miniatura'><img src='https://s2.gifyu.com/images/loading_11.gif' alt='loading_11.gif' border='0' /></div>", "", 8, 4,
	"", "<div class='miniatura'><img src='https://s2.gifyu.com/images/loading_12.gif' alt='loading_12.gif' border='0' /></div>", "", 9, 4,

	"", "<div class='miniatura'><img src='https://s2.gifyu.com/images/body_4.gif' alt='body_4.gif' border='0'/></div>", "", 4, 5,
	"", "<div class='miniatura'><img src='https://s2.gifyu.com/images/body_5.gif' alt='body_5.gif' border='0'/></div>", "", 6, 5,
	"<core>", "<div class='miniatura'><img src='https://s2.gifyu.com/images/body_6.gif' alt='body_6.gif' border='0'/></div>", "", 7, 5,
	
	
];


var camera;
var controls;
var css3dScene, css3dRenderer;
var webGlScene, webGlRenderer;

var objects = [];
var targets = { table: [], sphere: [], grid: [] };

var mouse = { x: 0, y: 0 };
var targetList = [ ];


init();
animate();


function init() {

	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 3500;

	css3dScene = new THREE.Scene();
    webGlScene = new THREE.Scene();


	// table

	for ( var i = 0; i < table.length; i += 5 ) {

		var element = document.createElement( 'div' );
		element.className = 'element';
		element.style.backgroundColor = 'rgba(0,0,0,' + ( Math.random() * 0.01 + 0.01 ) + ')';
		element.id = i;
		console.log(element.id);


		var symbol = document.createElement( 'div' );
		symbol.className = 'symbol';
		symbol.textContent = table[ i ];
		element.appendChild( symbol );

		var details = document.createElement( 'div' );
		details.className = 'details';
		details.innerHTML = table[ i + 1 ] + '<br>' + table[ i ];
		element.appendChild( details );

		var object = new THREE.CSS3DObject( element );
		object.position.x = Math.random() * 400 - 200;
		object.position.y = Math.random() * 400 - 200;
		object.position.z = Math.random() * 400 - 200;

		css3dScene.add( object );

		objects.push( object );

		//

		var object = new THREE.Object3D();
		object.position.x = ( table[ i + 3 ] * 350 ) - 1860;
		object.position.y = - ( table[ i + 4 ] * 350 ) + 1000;

		targets.table.push( object );
	}


	// sphere

	var vector = new THREE.Vector3();

	for ( var i = 0, l = objects.length; i < l; i ++ ) {

		var phi = Math.acos( -1 + ( 2 * i ) / l );
		var theta = Math.sqrt( l/2 * Math.PI ) * phi;

		var object = new THREE.Object3D();

		object.position.x = 900 * Math.cos( theta ) * Math.sin( phi );
		object.position.y = 900 * Math.sin( theta ) * Math.sin( phi );
		object.position.z = 900 * Math.cos( phi );

		vector.copy( object.position ).multiplyScalar( 2 );

		object.lookAt( vector );

		targets.sphere.push( object );
		

	}


	// grid

	for ( var i = 0; i < objects.length; i ++ ) {

		var object = new THREE.Object3D();

		object.position.x = ( ( i % 1 ) * 400 ) + 10;
		object.position.y = ( - ( Math.floor( i / 1 ) % 1 ) * 1000 ) + 10;
		object.position.z = ( Math.floor( i / 1 ) ) * 130 - 100;

		targets.grid.push( object );

	}

	//

	webGlRenderer = new THREE.WebGLRenderer();
    webGlRenderer.setSize( window.innerWidth, window.innerHeight );
    webGlRenderer.domElement.style.position = 'absolute';
	document.getElementById( 'container' ).appendChild( webGlRenderer.domElement );

	//

	css3dRenderer = new THREE.CSS3DRenderer();
	css3dRenderer.setSize( window.innerWidth, window.innerHeight );
	css3dRenderer.domElement.style.position = 'absolute';
	document.getElementById( 'container' ).appendChild( css3dRenderer.domElement );

	//

	controls = new THREE.TrackballControls( camera, css3dRenderer.domElement );
	controls.rotateSpeed = 2.9;
	controls.minDistance = 100;
	controls.maxDistance = 6000;
	controls.addEventListener( 'change', render );

	var button = document.getElementById( 'table' );
	button.addEventListener( 'click', function ( event ) {

		transform( targets.table, 2000 );

		hidePages( );

	}, false );

	var button = document.getElementById( 'sphere' );
	button.addEventListener( 'click', function ( event ) {

		transform( targets.sphere, 2000 );

		hidePages( );
	}, false );

	

	var button = document.getElementById( 'grid' );
	button.addEventListener( 'click', function ( event ) {

		transform( targets.grid, 2000 );

		hidePages( );

	}, false );

	transform( targets.table, 2000 );


	//////////SKYBOX////////////////////////////

    webGlScene.background = new THREE.CubeTextureLoader()
        .setPath("css/skybox/")
        .load([
            "px.png",
            "nx.png",
            "py.png",
            "ny.png",
            "pz.png",
            "nz.png"
        ]);

    ////////////////////////////////////////

	window.addEventListener( 'resize', onWindowResize, false );
}

function transform( targets, duration ) {

	TWEEN.removeAll();

	for ( var i = 0; i < objects.length; i ++ ) {

		var object = objects[ i ];
		var target = targets[ i ];

		new TWEEN.Tween( object.position )
			.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
			.easing( TWEEN.Easing.Exponential.InOut )
			.start();

		new TWEEN.Tween( object.rotation )
			.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
			.easing( TWEEN.Easing.Exponential.InOut )
			.start();

	}

	new TWEEN.Tween( this )
		.to( {}, duration * 2 )
		.onUpdate( render )
		.start();

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

    webGlRenderer.setSize( window.innerWidth, window.innerHeight );
	css3dRenderer.setSize( window.innerWidth, window.innerHeight );

	render();

}

function animate() {

	requestAnimationFrame( animate );

	TWEEN.update();

	controls.update();

}

function render() {

	webGlRenderer.render( webGlScene, camera );
	css3dRenderer.render( css3dScene, camera );

}








var elements = document.getElementsByClassName( 'element' );

for ( var i=0; i<elements.length; i++ ) {
	elements[ i ].onclick = function( ) {
		showPage( this.id );
	}
};

var pages = document.getElementsByClassName( 'page' );
for ( var i=0; i<pages.length; i++ ) {
	var closeBtn = document.createElement( 'span' );
	closeBtn.setAttribute( 'class', 'btn-close' );
	closeBtn.addEventListener( 'click', hidePage );

	pages[ i ].appendChild( closeBtn );
}

function showPage( index ) {
	console.log( 'show page-' + index );
	for ( var i=0; i<pages.length; i++ ) {
		if ( pages[ i ].id == 'page-' + index ) {
			pages[ i ].style[ 'display' ] = 'inline-block';
		} else {
			pages[ i ].style[ 'display' ] = 'none';
		}
	}
}
function hidePage( ) {
	this.parentNode.style[ 'display' ] = 'none';
}
function hidePages( ) {
	for ( var i=0; i<pages.length; i++ ) {
		pages[ i ].style[ 'display' ] = 'none';
	}
}