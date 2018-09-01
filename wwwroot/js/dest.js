"use strict";var MoveObj=function(e){var n=void 0,a={mesh:null,init:function(){a.mesh=new THREE.Object3D,a.mesh.add(e.camera);var t=new THREE.BoxBufferGeometry(2,2,2);t.applyMatrix((new THREE.Matrix4).makeRotationX(Math.PI/4)),t.applyMatrix((new THREE.Matrix4).makeRotationZ(Math.PI/4));var r=e.skyMap,i=new THREE.MeshLambertMaterial({color:16777215,envMap:r,reflectivity:.83});(n=new THREE.Mesh(t,i)).position.z=10,n.position.y=-10,a.mesh.add(n)},update:function(){a.mesh.rotation.y-=3e-4,n&&(n.rotation.y-=.002)}};return a.init(),a},Scene=function(e,n){var a=void 0,t=void 0,r=void 0,i={};function o(){var a=e||window.innerWidth,o=n||window.innerHeight;i.renderer.setSize(a,o),t.aspect=a/o,t.updateProjectionMatrix(),r&&r.onWindowResize()}function d(e){switch(e.keyCode){case 38:if(!i.cameraEffect)return;i.cameraEffect.shake.set(3,.3);break;case 37:if(!i.cameraEffect)return;i.cameraEffect.slow.set(10,3);break;case 39:if(!i.cameraEffect)return;i.cameraEffect.sleep.set(5);break;case 66:i.worldEffect.spawn();break;case 78:i.worldEffect.decal.reset();break;case 32:i.gunEffect.spawn()}}return i.renderer=null,i.dom=null,i.ctx=null,i.stats=null,i.scene=null,i.camera=null,i.worldEffect=null,i.gunEffect=null,i.cameraEffect=null,i.skyMap=null,i.addScene=function(){var r=e||window.innerWidth,c=n||window.innerHeight;a=new THREE.Scene,i.scene=a,i.skyMap=(new THREE.CubeTextureLoader).setPath("../img/skybox/").load(["pano_r.jpg","pano_l.jpg","pano_u.jpg","pano_d.jpg","pano_f.jpg","pano_b.jpg"]),a.background=i.skyMap,t=new THREE.PerspectiveCamera(60,r/c,.1,1e3),i.camera=t;i.renderer=new THREE.WebGLRenderer({alpha:!0}),i.renderer.setClearColor(5592405,1),i.renderer.shadowMap.enabled=!0,i.renderer.shadowMap.type=THREE.PCFSoftShadowMap,i.renderer.setSize(r,c),ZOribit(t,i.renderer),t.position.z=.01,window.addEventListener("resize",o,!1),document.onkeydown=d},i.init=function(){i.addScene(),function(){var e=new THREE.HemisphereLight(16775930,4539717,.9);a.add(e);var n=new THREE.DirectionalLight(13484485,.9);n.position.set(12,60,7),n.castShadow=!0,a.add(n),n.shadow.mapSize.width=256,n.shadow.mapSize.height=256,n.shadow.camera.near=.5,n.shadow.camera.far=50}()},i.update=function(){i.stats&&i.stats.update(),r?r.render():i.renderer.render(a,t)},i.add=function(e){a.add(e)},i.init(),i},ZOribit=function(e,n){var a=new THREE.OrbitControls(e,n.domElement);a.noKeys=!0,a.noPan=!0},Main=function(){var e=void 0,n=void 0,a=void 0,t=void 0,r=[],i={};function o(){i.rend(),requestAnimationFrame(o)}return i.init=function(){var a=document.getElementById("scene"),i=a.offsetWidth,d=a.offsetHeight;e=new Scene(i,d),a.appendChild(e.renderer.domElement),n=new THREE.Clock,t=new MoveObj(e),e.add(t.mesh),r.push(t.update),o()},i.rend=function(){if(e.cameraEffect){if(e.cameraEffect.slow.isStopUpdate())return;if(e.cameraEffect.sleep.isStopUpdate())return;e.cameraEffect.shake.update()}a=n.getDelta();for(var t=0;t<r.length;t++)r[t](a);e&&e.update()},i.init(),i};Main();