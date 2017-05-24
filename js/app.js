const world = new WHS.World({
  stats: 'fps',
  autoresize: "window",

  rendering: {
    background: {
      color: 0x92c1e9
    }
  },

  gravity: { // Physic gravity.
    x: 0,
    y: -100,
    z: 0
  },

  camera: {
    position: [10, 50, 20]
  }
}); 


const mainLight = new WHS.AmbientLight({
  light: {
    color: 0xffffff,
    intensity: 0.5
  }
});

const bulb = new WHS.DirectionalLight( {
  light: {
    color: 0xffffff,
    intensity: 1,
    distance: 5000
  },

  position: [30, 100, 20]
});

const floor = new WHS.Box({
  geometry: {
    width: 200, 
    height: 220,
    depth: 0.1
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/floor.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[0,-30,0],
  rotation:[Math.PI/2,0,0]

});

const wall = new WHS.Box({
  geometry: {
    width: 200,
    height: 150,
    depth: 1
  }, 

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wall.jpg'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[0,45,-110]
});

const wall2 = new WHS.Box({
  geometry: {
    width: 1,
    height: 150,
    depth: 220
  }, 

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wall.jpg'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[-100,45,0]
});

// OBJECTS
const tableLeg1 = new WHS.Box({
  geometry: {
    width: 3,
    height: 23,
    depth: 3
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood.jpg'),
    normalMap: WHS.texture('./img/wood-normal.png'),
    displacementMap: WHS.texture('./img/wood-displacement.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[-90,-19,-80]

});

const tableLeg2 = new WHS.Box({
  geometry: {
    width: 3,
    height: 23,
    depth: 3
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood.jpg'),
    normalMap: WHS.texture('./img/wood-normal.png'),
    displacementMap: WHS.texture('./img/wood-displacement.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[-30,-19,-80]

});

const tableLeg3 = new WHS.Box({
  geometry: {
    width: 3,
    height: 23,
    depth: 3
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood.jpg'),
    normalMap: WHS.texture('./img/wood-normal.png'),
    displacementMap: WHS.texture('./img/wood-displacement.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[-30,-19,-60]

});

const tableLeg4 = new WHS.Box({
  geometry: {
    width: 3,
    height: 23,
    depth: 3
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood.jpg'),
    normalMap: WHS.texture('./img/wood-normal.png'),
    displacementMap: WHS.texture('./img/wood-displacement.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[-90,-19,-60]

});

const table = new WHS.Box({
  geometry: {
    width: 70,
    height: 5,
    depth: 30
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood.jpg'),
    normalMap: WHS.texture('./img/wood-normal.png'),
    displacementMap: WHS.texture('./img/wood-displacement.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[-58,-5,-70]

});

const shelfBottom = new WHS.Box({
  geometry: {
    width: 70,
    height: 3,
    depth: 40
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood2.jpg'),
    normalMap: WHS.texture('./img/wood2-normal.png'),
    displacementMap: WHS.texture('./img/wood2-displacement.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[58,-28,-80]
});

const shelfSide1 = new WHS.Box({ 
  geometry: {
    width: 4,
    height: 20,
    depth: 40
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood2.jpg'),
    normalMap: WHS.texture('./img/wood2-normal.png'),
    displacementMap: WHS.texture('./img/wood2-displacement.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[28,-16.5,-80]
});

const shelfSide2 = new WHS.Box({ 
  geometry: {
    width: 4,
    height: 20,
    depth: 40
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood2.jpg'),
    normalMap: WHS.texture('./img/wood2-normal.png'),
    displacementMap: WHS.texture('./img/wood2-displacement.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[87,-16.5,-80]
});

const shelfMid = new WHS.Box({
  geometry: {
    width: 70,
    height: 3,
    depth: 40
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood2.jpg'),
    normalMap: WHS.texture('./img/wood2-normal.png'),
    displacementMap: WHS.texture('./img/wood2-displacement.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[58,-5,-80]
});

const shelfSide3 = new WHS.Box({ 
  geometry: {
    width: 4,
    height: 20,
    depth: 40
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood2.jpg'),
    normalMap: WHS.texture('./img/wood2-normal.png'),
    displacementMap: WHS.texture('./img/wood2-displacement.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[28,5,-80]
});

const shelfSide4 = new WHS.Box({ 
  geometry: {
    width: 4,
    height: 20,
    depth: 40
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood2.jpg'),
    normalMap: WHS.texture('./img/wood2-normal.png'),
    displacementMap: WHS.texture('./img/wood2-displacement.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[87,5,-80]
});

const shelfTop = new WHS.Box({
  geometry: {
    width: 70,
    height: 3,
    depth: 40
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood2.jpg'),
    normalMap: WHS.texture('./img/wood2-normal.png'),
    displacementMap: WHS.texture('./img/wood2-displacement.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[58,16,-80]
});

const bin = new WHS.Cylinder({
  geometry: {
    radiusTop: 12,
    radiusBottom: 9,
    height: 20,
    openEnded: true
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/net.png'),
    normalMap: WHS.texture('./img/net-normal.png'),
    displacementMap: WHS.texture('./img/net-displacement.png'),
    normalScale: new THREE.Vector2(0.5, 0.5),
    transparent: true,
    opacity: 0.7,
    depthWrite: false
  },

  position:[-10,-17,-80]
});

const bin2 = new WHS.Cylinder({
  geometry: {
    radiusTop: 9,
    radiusBottom: 9,
    height: 1
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/net.png'),
    normalMap: WHS.texture('./img/net-normal.png'),
    displacementMap: WHS.texture('./img/net-displacement.png'),
    normalScale: new THREE.Vector2(0.5, 0.5),
    transparent: true,
    opacity: 0.7,
    depthWrite: false
  },

  position:[-10,-28,-80]
});

const chairLeg1 = new WHS.Box({
  geometry: {
    width: 2,
    height: 12,
    depth: 2
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood.jpg'),
    normalMap: WHS.texture('./img/wood-normal.png'),
    displacementMap: WHS.texture('./img/wood-displacement.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[-90,-25,-40]

});

const chairLeg2 = new WHS.Box({
  geometry: {
    width: 2,
    height: 12,
    depth: 2
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood.jpg'),
    normalMap: WHS.texture('./img/wood-normal.png'),
    displacementMap: WHS.texture('./img/wood-displacement.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[-75,-25,-40]
});

const chairLeg3 = new WHS.Box({
  geometry: {
    width: 2,
    height: 12,
    depth: 2
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood.jpg'),
    normalMap: WHS.texture('./img/wood-normal.png'),
    displacementMap: WHS.texture('./img/wood-displacement.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[-75,-25,-25]
});

const chairLeg4 = new WHS.Box({
  geometry: {
    width: 2,
    height: 12,
    depth: 2
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood.jpg'),
    normalMap: WHS.texture('./img/wood-normal.png'),
    displacementMap: WHS.texture('./img/wood-displacement.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[-90,-25,-25]
});

const chairBase = new WHS.Box({
  geometry: {
    width: 20,
    height: 3,
    depth: 20
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood.jpg'),
    normalMap: WHS.texture('./img/wood-normal.png'),
    displacementMap: WHS.texture('./img/wood-displacement.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[-80,-17,-32]  
});

const chairBack = new WHS.Box({
  geometry: {
    width: 3,
    height: 15,
    depth: 20
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood.jpg'),
    normalMap: WHS.texture('./img/wood-normal.png'),
    displacementMap: WHS.texture('./img/wood-displacement.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[-88,-8,-32]  
});

const poster = new WHS.Box({
  geometry: {
    width: 1,
    height: 40,
    depth: 55
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/poster.jpg'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[-99.5,50,-70]
});

const poster2 = new WHS.Box({
  geometry: {
    width: 1,
    height: 50,
    depth: 40
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/poster2.jpg'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[-99.5,30,-20]
});

const poster3 = new WHS.Box({
  geometry: {
    width: 50,
    height: 40,
    depth: 1
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/poster3.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[66,50,-99]
});

const door = new WHS.Box({
  geometry: {
    width: 2,
    height: 85,
    depth: 50
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/door.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[-99.5,13,60]
});

const ball = new WHS.Sphere({
  geometry: {
    radius: 8
  },

  mass: 10,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/ball.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[70,5,-70]

});

const globe = new WHS.Sphere({
  geometry: {
    radius: 13
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/globe.jpg'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[50,37,-80]
});

const stand = new WHS.Cylinder({
  geometry: {
    radiusTop: 1,
    radiusBottom: 3,
    height: 15
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/metal.jpg'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[50,25,-80]

});

const book = new WHS.Box({
  geometry: {
    width: 35,
    height: 15,
    depth: 10
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/book.jpg'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[67,-19,-70]
});

const mat = new WHS.Box({
  geometry: {
    width: 30, 
    height: 50,
    depth: 0.1
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/mat.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[-70,-29.5,60],
  rotation:[Math.PI/2,0,0]

});

const lampBase = new WHS.Cylinder({
  geometry: {
    radiusTop: 10,
    radiusBottom: 10,
    height: 2
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/metal.jpg'),
    normalScale: new THREE.Vector2(0.5, 0.5),
    transparent: true
  },

  position:[10,-29,90]
});

const lampPole = new WHS.Cylinder({
  geometry: {
    radiusTop: 1,
    radiusBottom: 1,
    height: 65
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/metal.jpg'),
    normalScale: new THREE.Vector2(0.5, 0.5),
    transparent: true
  },

  position:[10,3,90]
});

const lampShade = new WHS.Cylinder({
  geometry: {
    radiusTop: 8,
    radiusBottom: 15,
    height: 20,
    openEnded: true
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/lamp.jpg'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[10,25,90]
});

const keyboard = new WHS.Box({
  geometry: {
    width: 25,
    height: 1,
    depth: 10
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/keyboard.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[-58,-2,-65]
});

const monitor = new WHS.Box({
  geometry: {
    width: 33,
    height: 18,
    depth: 1
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/monitor.jpg'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[-58,7,-75]
});


const bedLeg1 = new WHS.Box({
  geometry: {
    width: 6,
    height: 10,
    depth: 6,
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood3.jpg'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[93,-25,90]
});

const bedLeg2 = new WHS.Box({
  geometry: {
    width: 6,
    height: 10,
    depth: 6,
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood3.jpg'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[40,-25,90]
});

const bedLeg3 = new WHS.Box({
  geometry: {
    width: 6,
    height: 10,
    depth: 6,
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood3.jpg'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[40,-25,0]
});

const bedLeg4 = new WHS.Box({
  geometry: {
    width: 6,
    height: 10,
    depth: 6,
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood3.jpg'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[93,-25,0]
});

const bedBase = new WHS.Box({
  geometry: {
    width: 59,
    height: 3,
    depth: 96
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood3.jpg'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[66.5,-20,45]
});

const headRestPole1 = new WHS.Box({
  geometry: {
    width: 3,
    height: 23,
    depth: 5
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood3.jpg'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[93,-10,90]
});

const headRestPole2 = new WHS.Box({
  geometry: {
    width: 3,
    height: 23,
    depth: 5
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood3.jpg'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[40,-10,90]
});

const headRest = new WHS.Box({
  geometry: {
    width: 50,
    height: 20,
    depth: 3
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/wood3.jpg'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[66.5,-10,90]
});

const mattress = new WHS.Box({
  geometry: {
    width: 57,
    height: 6,
    depth: 90
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/mattress.jpg'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[66.5,-15,42.5]
});


const phone = new WHS.Box({
  geometry: {
    width: 4,
    height: 0.7,
    depth: 8
  },

  mass: 10,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/phone.jpg'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[-35,-2,-65]
});

const clock = new WHS.Cylinder({
  geometry: {
    radiusTop: 12,
    radiusBottom: 12,
    height: 3
  },

  mass: 0,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/clock.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[-60,60,-108],
  rotation:[80,-80,0]
});

const domino1 = new WHS.Box({
  geometry: {
    width: 3,
    height: 5,
    depth: 0.5
  },

  mass: 20,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/dom1.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[0,-27,0],
});

const domino2 = new WHS.Box({
  geometry: {
    width: 3,
    height: 5,
    depth: 0.5
  },

  mass: 20,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/dom2.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[0,-27,-3],
});

const domino3 = new WHS.Box({
  geometry: {
    width: 3,
    height: 5,
    depth: 0.5
  },

  mass: 20,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/dom3.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[0,-27,-6],
});

const domino4 = new WHS.Box({
  geometry: {
    width: 3,
    height: 5,
    depth: 0.5
  },

  mass: 20,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/dom4.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[0,-27,-9],
});

const domino5 = new WHS.Box({
  geometry: {
    width: 3,
    height: 5,
    depth: 0.5
  },

  mass: 20,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/dom5.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[0,-27,-12],
});

const domino6 = new WHS.Box({
  geometry: {
    width: 3,
    height: 5,
    depth: 0.5
  },

  mass: 20,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/dom6.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[0,-27,-15],
});

const domino7 = new WHS.Box({
  geometry: {
    width: 3,
    height: 5,
    depth: 0.5
  },

  mass: 20,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/dom7.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[0,-27,-18],
});

const domino8 = new WHS.Box({
  geometry: {
    width: 3,
    height: 5,
    depth: 0.5
  },

  mass: 20,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/dom8.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[0,-27,-21],
});

const domino9 = new WHS.Box({
  geometry: {
    width: 3,
    height: 5,
    depth: 0.5
  },

  mass: 20,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/dom9.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[0,-27,-24],
});

const domino10 = new WHS.Box({
  geometry: {
    width: 3,
    height: 5,
    depth: 0.5
  },

  mass: 20,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/dom10.jpg'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[0,-27,-27],
});

const domino11 = new WHS.Box({
  geometry: {
    width: 3,
    height: 5,
    depth: 0.5
  },

  mass: 20,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/dom11.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[0,-27,-30],
});

const domino12 = new WHS.Box({
  geometry: {
    width: 3,
    height: 5,
    depth: 0.5
  },

  mass: 20,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/dom12.jpg'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[0,-27,-33],
});

const domino13 = new WHS.Box({
  geometry: {
    width: 3,
    height: 5,
    depth: 0.5
  },

  mass: 20,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/dom1.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[0,-27,-36]
});

const domino14 = new WHS.Box({
  geometry: {
    width: 3,
    height: 5,
    depth: 0.5
  },

  mass: 20,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/dom2.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[0,-27,-39],
});

const domino15 = new WHS.Box({
  geometry: {
    width: 3,
    height: 5,
    depth: 0.5
  },

  mass: 20,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/dom3.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[0,-27,-42],
});

const domino16 = new WHS.Box({
  geometry: {
    width: 3,
    height: 5,
    depth: 0.5
  },

  mass: 20,

  material: {
    kind: 'lambert',
    map: WHS.texture('./img/dom4.png'),
    normalScale: new THREE.Vector2(0.5, 0.5)
  },

  position:[0,-27,-45],
});

// ANIMATIONS AND INTERACTIONS
const globeAnimate = new WHS.Loop(() => {
  globe.rotation.y += 0.02;
}).start(world);

const mouse = new WHS.VirtualMouse(world);
mouse.track(clock);

clock.on('click', () => {
  var currDate = new Date();
  var datetime =
  currDate.getDate() + "/" + (currDate.getMonth()+1) + "/" + currDate.getFullYear() + "\n" + currDate.getHours() + ":" + currDate.getMinutes() + ":" + currDate.getSeconds();
  alert(datetime);
});

  // mouse.on('move', () => {
  //   ball.setLinearVelocity(mouse.project().sub(ball.position));
  // });

mouse.track(domino1);
domino1.on('mousemove', () => {
  mouse.on('move', () => {
   domino1.setLinearVelocity(mouse.project().sub(domino1.position));
  });
});

domino1.on('mouseout', () => {
  mouse.on('move', () => {
    domino1.setLinearVelocity(domino1.position);
  });
});

mainLight.addTo(world);
bulb.addTo(world)
floor.addTo(world);
wall.addTo(world);
wall2.addTo(world);

//desktop
keyboard.addTo(world);
monitor.addTo(world);

//table
tableLeg1.addTo(world);
tableLeg2.addTo(world);
tableLeg3.addTo(world);
tableLeg4.addTo(world);
table.addTo(world);

//bookshelf
shelfBottom.addTo(world);
shelfSide1.addTo(world);
shelfSide2.addTo(world);
shelfMid.addTo(world);
shelfSide3.addTo(world);
shelfSide4.addTo(world);
shelfTop.addTo(world);

//chair
chairLeg1.addTo(world);
chairLeg2.addTo(world);
chairLeg3.addTo(world);
chairLeg4.addTo(world);
chairBase.addTo(world);
chairBack.addTo(world);

//trashcan
bin2.addTo(world);
bin.addTo(world);

//poster
poster.addTo(world);
poster2.addTo(world);
poster3.addTo(world);

//globe
stand.addTo(world);
globe.addTo(world);

//lamp
lampBase.addTo(world);
lampPole.addTo(world);
lampShade.addTo(world);

//bed
bedLeg1.addTo(world);
bedLeg2.addTo(world);
bedLeg3.addTo(world);
bedLeg4.addTo(world);
bedBase.addTo(world);
headRestPole1.addTo(world);
headRestPole2.addTo(world);
headRest.addTo(world);
mattress.addTo(world);

//dominos
domino1.addTo(world);
domino2.addTo(world);
domino3.addTo(world);
domino4.addTo(world);
domino5.addTo(world);
domino6.addTo(world);
domino7.addTo(world);
domino8.addTo(world);
domino9.addTo(world);
domino10.addTo(world);
domino11.addTo(world);
domino12.addTo(world);
domino13.addTo(world);
domino14.addTo(world);
domino15.addTo(world);
domino16.addTo(world);

door.addTo(world);
ball.addTo(world);
mat.addTo(world);
book.addTo(world);
phone.addTo(world);
clock.addTo(world);
world.start();
world.setControls(new WHS.OrbitControls());