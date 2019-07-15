var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#00F260', '#0575E6'],
                ['#e1eec3', '#f05053']
            ]
        }
    }
});

/////OTHER WAY. ONLY JS. NONE EXTERN SCRIPT.
/////BACKGROUND GRADIENT CHANGING COLOUR.
// window.setInterval(function () {
// 	var randomBgColor = '#' + ('000000' +
// 		Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
// 	$('body').css({
// 		'background-color': randomBgColor,
// 	});
// }, 2000);

// var canvas = document.getElementById('canvas-basic'),
// context = canvas.getContext('2d');

// logo();

// function logo() {
// 	logoImg = new Image();
// 	logoImg.src = 'SpeedWeed/SpeedWeedLogo.png';
// 	logoImg.onload = function(){
// 		context.drawImage(logoImg, 0, 0);
// 	}
// }