/**
 * 【13-01】CANVASへ描画する（四角）: WEBGL ( Three.js )
 * 
 */
import * as THREE from 'three';

function init(){
    let scene:THREE.Scene;
    let camera:THREE.PerspectiveCamera;
    let renderer:THREE.WebGLRenderer;

    // シーンを用意
    scene = new THREE.Scene();
    // カメラを用意
    camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1000);
    // カメラの位置
    camera.position.set(0, 150, 0);
    // カメラの視点（向く位置）
    camera.lookAt(0, 0, 0);

    // 描画レンダラーの用意
    renderer = new THREE.WebGLRenderer();
    // 背景=白
    renderer.setClearColor(0xffffff);
    // サイズ
    renderer.setSize(window.innerWidth, window.innerHeight);
    // ピクセル比率
    renderer.setPixelRatio(window.devicePixelRatio);

    //環境光の用意
    let ambientLight = new THREE.AmbientLight(0x000000,0.9);
    scene.add(ambientLight);

    //平行光源の用意
    let directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(50, 100, 0);
    scene.add(directionalLight);

    //立方体を一つ描画
    let boxGeometry = new THREE.BoxGeometry(25,25,25);
    let boxMaterial = new THREE.MeshLambertMaterial({
        color:0xcc0050
    });
    let box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.set(0,0,0);
    box.rotation.x = Math.PI * 0.5
    scene.add(box);
    
    const main = document.querySelector('#main');
    main?.appendChild(renderer.domElement);

    let v_x = 0.5;
    let v_y = 1.0;
    let v_z = 0.2;
    function render(){
        renderer.render(scene, camera);
        // 回転させる
        box.rotation.x += v_x/10;
        box.rotation.y += v_y/10;
        box.rotation.z += v_z/10;
        // X方向に移動させる
        box.position.x += v_x;
        box.position.y += v_y/5;
        box.position.z += v_z;
        // 変化量の操作
        const x = box.position.x;
        const y = box.position.y;
        const z = box.position.z;
        if(Math.abs(x) > 100.0) {
            v_x = v_x*(-1);
        }
        if(Math.abs(y) > 20.0) {
            v_y = v_y*(-1);
        }
        if(Math.abs(z) > 50.0) {
            v_z = v_z*(-1);
        }
    }
    // レンダー処理の繰り返し(Generator関数)
    const renderLoop = function * (){
        for(;;){
            render();
            yield;
        }
    }
    const _renderLoop = renderLoop();
    // レンダー処理をFPS=60で繰り返す
    setInterval(()=>{
        _renderLoop.next();
    }, 1000/60 );
}

window.onload = init;