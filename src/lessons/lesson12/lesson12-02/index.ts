/**
 * 【11-02】CANVASへ描画する（四角）: WEBGL ( Three.js )
 * 
 */
import * as THREE from 'three';
let scene:THREE.Scene, camera:THREE.PerspectiveCamera, renderer:THREE.WebGLRenderer;

function init(){
    // シーンを用意
    scene = new THREE.Scene();
    // カメラを用意
    camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1000);
    camera.position.set(0, 50, 0);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xffffff); // 背景=白
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    //環境光
    let ambientLight = new THREE.AmbientLight(0x000000,0.9);
    scene.add(ambientLight);

    //平行光源
    let directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(50, 100, 0);
    scene.add(directionalLight);

    //立方体を一つ描画
    let boxGeometry = new THREE.BoxGeometry(15,15,15);
    let boxMaterial = new THREE.MeshLambertMaterial({
        color:0xcc0050
    });
    let box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.set(0,0,0);
    box.rotation.x = Math.PI * 0.5
    scene.add(box);
    
    const main = document.querySelector('#main');
    main?.appendChild(renderer.domElement);

    let v = 0.5;
    function render(){
        renderer.render(scene, camera);
        // 回転させる
        box.rotation.x += v/10;
        box.rotation.y += v/10; 
        box.position.x += v;
        const x = box.position.x;
        if(x > 30.0 || x < -30.0) {
            v = v*(-1);
        }
    }
    const gen = function*(){
        for(;;){
            render();
            yield;
        }
    }
    const r = gen();
    setInterval(()=>{
        r.next();
    }, 1000/60);
}

window.onload = init;