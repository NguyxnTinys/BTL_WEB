import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Define models: title, content and modelPath
const models = [
    { 
        title: "Thuốc Boganic Traphaco bổ gan", 
        content: "<strong>Thuốc Boganic được chỉ định dùng trong các trường hợp sau:</strong><br><br>&nbsp;&nbsp;+ Bổ gan và hỗ trợ điều trị suy giảm chức năng gan do bia, rượu, viêm gan do thuốc, hóa chất.<br>&nbsp;&nbsp;+ Giảm triệu chứng bệnh viêm gan như mệt mỏi, vàng da, ăn kém, khó tiêu, bí đại tiểu tiện, táo bón.<br>&nbsp;&nbsp;+ Điều trị dị ứng, mụn nhọt, lở ngứa, nổi mề đay do bệnh gan.<br>&nbsp;&nbsp;+ Phòng và hỗ trợ điều trị xơ vữa động mạch, mỡ trong máu cao.",
        modelPath: "../../assets/model/Boganic.glb" 
    },
    { 
        title: "Thuốc Bổ Mắt Doppelherz Augen Extra", 
        content: "<strong>Thuốc bổ mắt Augen Extra Doppelherz được chỉ định trong các trường hợp sau:</strong> <br><br>&nbsp;&nbsp;+ Thuốc bổ mắt Augen Extra Tag+Nacht Doppelherz giàu thành phần vitamin A, C, E, B, cùng các nguyên tố vi lượng kẽm và đồng giúp nuôi dưỡng đôi mắt khỏe mạnh.<br>&nbsp;&nbsp;+ Sản phẩm phù hợp cho những người phải làm việc với máy tính thường xuyên, những công việc đòi hỏi thị lực tốt, hay những bạn mắc bệnh về mắt. <br>&nbsp;&nbsp;+ Giúp đôi mắt luôn khỏe mạnh, giữ cho chức năng thị lực của bạn luôn ổn định suốt ngày đêm.", 
        modelPath: "../../assets/model/AugenExtra.glb" 
    },
    { 
        title: "Bột sủi Efferalgan 80mg giảm đau, hạ sốt", 
        content: "<strong>Thuốc Efferalgan được chỉ định dùng trong các trường hợp sau:</strong><br><br>&nbsp;&nbsp+ Thuốc Efferalgal 80mg dùng điều trị các chứng đau và/hoặc sốt như đau đầu, tình trạng như cúm, đau răng, nhức mỏi cơ.<br>&nbsp;&nbsp+ Thuốc dùng điều trị cho trẻ em cân nặng từ 6 - 20 kg.", 
        modelPath: "../../assets/model/Efferalgan.glb" 
    }
];

let currentIndex = 0;
// new THREE.TextGeometry( text, parameters );
//  Create the scene, camera and renderer
let scene, camera, renderer, modelObject; 
// If hover => rotation Speed = rotationHover else rotation Speed =  rotationDefault
let rotationHover = 0.01;  
let rotationDefault = 0.007  
let rotationSpeed =  rotationDefault;
let isClicked = false;  // If click => hiden content of model

let defaultZCam = 3;
let currZ = defaultZCam;


document.addEventListener("DOMContentLoaded", init);

function init() {
    const container = document.getElementById('model-display');
    initThreeJS(container);
    loadModel(models[currentIndex]);
    animate();

    setupZoomControls();
}

function initThreeJS(container) {
    createRenderer(container);
    createCamera(container);
    addLights();
    createOrbitControls();
    setupResizeListener(container);
    setupHoverListener(container);
    setupClickListeners(container);
}

function createRenderer(container) {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    scene = new THREE.Scene();
}

function createCamera(container) {
    camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, defaultZCam); // Đặt vị trí camera xa hơn
    // camera.position.z = 2;
}

function addLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight1.position.set(1, 1, 1);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight2.position.set(-1, 1, -1);
    scene.add(directionalLight2);

    const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight3.position.set(-1, -1, 1);
    scene.add(directionalLight3);

    const directionalLight4 = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight4.position.set(1, -1, -1);
    scene.add(directionalLight4);
}

function createOrbitControls() {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;  // Kích hoạt làm mượt khi xoay
    controls.dampingFactor = 0.25;  // Đặt hệ số làm mượt
    controls.enableZoom = false;    // Vô hiệu hóa tính năng phóng to
}


function setupResizeListener(container) {
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
        adjustCameraPosition(container);
    });
}

function adjustCameraPosition(container) {
    const minZ = 2;
    const maxZ = 5;
    const minWidth = 500;
    const maxWidth = window.innerWidth;

    let width = Math.max(container.clientWidth, minWidth);  // Ensure at least 500px

    // Calculate the new camera z position, limiting between minZ and maxZ
    const newZ = maxZ - ((width - minWidth) / (maxWidth - minWidth)) * (maxZ - minZ);

    // Set the camera's z position within the defined limits
    camera.position.z = Math.max(minZ, Math.min(newZ, maxZ));
}

function setupClickListeners(container) {
    container.addEventListener('click', () => {
        const contentDiv = document.querySelector('.model-content');
        
        if (isClicked) {
            // Nếu nội dung đang hiển thị, ẩn nó đi
            contentDiv.style.display = 'none';
            rotationSpeed = rotationHover;
        } else {
            // Nếu nội dung đang ẩn, hiển thị nó
            contentDiv.style.display = 'block';
            rotationSpeed = rotationDefault;
        }

        // Đổi trạng thái isClicked
        isClicked = !isClicked;
    });
}

function setupHoverListener(container){
    // Hover event to slow down rotation
    document.getElementById('model-display').addEventListener('mouseover', () => {
        rotationSpeed = rotationHover;
    });

    document.getElementById('model-display').addEventListener('mouseout', () => {
        rotationSpeed = rotationDefault;
});   
}

function loadModel(model) {
    const loader = new GLTFLoader();
    loader.load(model.modelPath, (gltf) => {
        if (modelObject) {
            scene.remove(modelObject);  // Remove the current model
        }
        modelObject = gltf.scene;
        modelObject.position.set(0, -0.5, 0); // Adjust model position if needed
        scene.add(modelObject);
        
        // Update title and content
        document.querySelector('.model-title h2').innerHTML = model.title;
        document.querySelector('.model-content p').innerHTML = model.content;
        
    }, undefined, (error) => {
        console.error('An error occurred while loading the model', error);
    });
}

// Animate the scene
function animate() {
    requestAnimationFrame(animate);
    if (modelObject) {
        modelObject.rotation.y += rotationSpeed;  // Rotate the model
    }
    renderer.render(scene, camera);
}

function increaseCameraZoom() {
    currZ += 0.3;  // Move closer, limit z to 2
    defaultZCam  = currZ;

    camera.position.set(0, 0, defaultZCam);
}

// Function to handle zoom out
function decreaseCameraZoom() {
    currZ -= 0.3;
    defaultZCam  = currZ;

    camera.position.set(0, 0, defaultZCam);
}

// Function to set up zoom controls
function setupZoomControls() {
    document.getElementById('inc').addEventListener('click', increaseCameraZoom);
    document.getElementById('dec').addEventListener('click', decreaseCameraZoom);
}

// Function to handle showing the previous model
function showPreviousModel() {
    currentIndex = (currentIndex - 1 + models.length) % models.length;
    loadModel(models[currentIndex]);
}

// Function to handle showing the next model
function showNextModel() {
    currentIndex = (currentIndex + 1) % models.length;
    loadModel(models[currentIndex]);
}



// Setup previous and next button functionality
function setupNavigationButtons() {
    document.getElementById('prev').addEventListener('click', showPreviousModel);
    document.getElementById('next').addEventListener('click', showNextModel);
}

// Initialize the event listeners for navigation and navbar
document.addEventListener("DOMContentLoaded", () => {
    setupNavigationButtons();
});