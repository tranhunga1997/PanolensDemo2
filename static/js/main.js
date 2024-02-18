const panorama = document.querySelector('.container>#panorama');
var viewer = pannellum.viewer(panorama, {
    "default": {
        "firstScene": "circle",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
        "autoRotate": -2,
        "mouseZoom": false
    },

    "scenes": {
        "circle": {
            "type": "equirectangular",
            "panorama": "https://pannellum.org/images/bma-1.jpg",
            "hotSpots": [
                {
                    "pitch": -2.1,
                    "yaw": 132.9,
                    "type": "scene",
                    "text": "Spring House or Dairy",
                    "sceneId": "house"
                }
            ]
        },

        "house": {
            "type": "equirectangular",
            "panorama": "static/imgs/pano1.jpeg",
            "hotSpots": [
                {
                    "pitch": 1.8,
                    "yaw": -111.2,
                    "type": "scene",
                    "text": "Mason Circle",
                    "sceneId": "circle",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        }
    }
});

/**
 * *Event get pitch and yaw
 */
viewer.on('mousedown', e => {
    var coords = viewer.mouseEventToCoords(e);
    console.log(`pitch: ${coords[0]}, yaw: ${coords[1]}`);
})

// var upMove = function () {
//     try {
//         viewer.setPitch(viewer.getPitch() + 5);
//     }
//     catch (e) {
//         console.log(e);
//     }
// }

// var rightMove = function () {
//     try {
//         viewer.setYaw(viewer.getYaw() + 5);
//     }
//     catch (e) {
//         console.log(e);
//     }
// }

// var downMove = function () {
//     try {
//         viewer.setPitch(viewer.getPitch() - 5);
//     }
//     catch (e) {
//         console.log(e);
//     }
// }

// var leftMove = function () {
//     try {
//         viewer.setYaw(viewer.getYaw() - 5);
//     }
//     catch (e) {
//         console.log(e);
//     }
// }

// var swapImage = function () {
//     try {
//         var inv_Pitch = viewer.getPitch();
//         var inv_Yaw = viewer.getYaw();
//         var inv_Hfov = viewer.getHfov();

//         if (viewer.getScene() == 'circle') {
//             viewer.loadScene('house', inv_Pitch, inv_Yaw, inv_Hfov)
//         }
//         else {
//             viewer.loadScene('circle', inv_Pitch, inv_Yaw, inv_Hfov)
//         }
//     }
//     catch (e) {

//     }
// }
