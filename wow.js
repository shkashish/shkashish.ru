const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);
let jaja
let ground




var createScene = function () {
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = BABYLON.Color3.White();



    var mesh;

    var assetsManager = new BABYLON.AssetsManager(scene);
    var meshTask = assetsManager.addMeshTask("./models/dada/", "dada.gltf");
    
	meshTask.onSuccess = function (task) {
	
        task.loadedMeshes[0].position = BABYLON.Vector3.Zero();
		
		
	};
	
    assetsManager.onTaskErrorObservable.add(function(task) {
        console.log('task failed', task.errorObject.message, task.errorObject.exception);
    });

    assetsManager.load();
    
    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FlyCamera("FlyCamera", new BABYLON.Vector3(0, 5, -10), scene);

    // Airplane like rotation, with faster roll correction and banked-turns.
    // Default is 100. A higher number means slower correction.
    camera.rollCorrect = 10;
    // Default is false.
    camera.bankedTurn = true;
    // Defaults to 90° in radians in how far banking will roll the camera.
    camera.bankedTurnLimit = Math.PI / 2;
    // How much of the Yawing (turning) will affect the Rolling (banked-turn.)
    // Less than 1 will reduce the Rolling, and more than 1 will increase it.
    camera.bankedTurnMultiplier = 1;
    
    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    //Adding a light
	// var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 40, 0), scene);
	var light = new BABYLON.HemisphericLight("Hemi", new BABYLON.Vector3(0, 1, 0), scene);
	light.diffuse = new BABYLON.Color3(1, 1, 1);
	// light.specular = new BABYLON.Color3(1, 1, 1);
	light.intensity = .15

    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    // var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);

    // Move the sphere upward 1/2 its height
    // sphere.position.y = 1;
  /*  var gizmoManager = new BABYLON.GizmoManager(scene);
    gizmoManager.positionGizmoEnabled = true;
gizmoManager.rotationGizmoEnabled = true;
gizmoManager.scaleGizmoEnabled = true;
gizmoManager.boundingBoxGizmoEnabled = true; */
    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene

    //var jaja = BABYLON.SceneLoader.ImportMesh("", "./models/jaja/", "jaja.gltf", scene);

    BABYLON.SceneLoader.LoadAssetContainer("./models/dada/", "dada.gltf", scene, function (container) {
        var meshes = container.meshes;
        
        meshes[0].position.set(14,-312,35)
      
   


        
        
      
        container.addAllToScene();
    });

    BABYLON.SceneLoader.LoadAssetContainer("./models/", "ona.gltf", scene, function (container) {
        var meshes = container.meshes;
        meshes[0].position.set(5,0,68)

   

        
        
      
        container.addAllToScene();
    });

    BABYLON.SceneLoader.LoadAssetContainer("./models/", "me.gltf", scene, function (container) {
        var meshes = container.meshes;
        meshes[0].position.set(0,0,0)
       

   

        
        
      
        container.addAllToScene();
    });
    
 /*   BABYLON.SceneLoader.LoadAssetContainer("https://cdn.rawgit.com/marshall-hunts/game-assets/master/", "newalex.gltf", scene, function (container) {
        var meshes = container.meshes;
        var materials = container.materials;
        
        for(i = 0; i < materials.length; i++) {
            materials[i].albedoColor = new BABYLON.Color3(0, 0, 1); //blue
        }                
        meshes[0].position.set(5,0,5)
        container.addAllToScene();           
    }); */
    
    return scene;
    
};



// n o v a    Ф   У   Н   К  ЦИ  Я            //////////////////////////////////////////////////////



const scene = createScene(); //Call the createScene function

engine.runRenderLoop(function(){
    scene.render();
    //scene.debugLayer.show();
   // scene.debugLayer.show();

          // Resize
        
});

window.addEventListener("resize", function () {
    engine.resize();
  });


















