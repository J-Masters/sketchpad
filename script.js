var gridSize = 65;
var blockSize = 600 / gridSize;
var drawColor = "black";


$(document).ready(function(){
	createGrid();

	//button to clear grid, keep settings the same
	$('#clear').click(function() {
		clear();
		createGrid();
		draw();
	})

	//button to resize the grid
	$('#size').click(function() {
		size();
		clear();
		createGrid();
		draw();
	})

	//button to prompt to change drawing color
	$('#color').click(function () {
		color();
		draw();
	})

	//function to highlight boxes as mouse enters
	draw();
});


function createGrid() {
	//add rows to grid
	for (i = 0; i < gridSize; i++) {
		$('#grid').append('<div class="singleRow"></div>');
	}
	//add boxes to each row
	for (j = 0; j < gridSize; j++) {
		$('.singleRow').append('<div class="singleBox"></div>');
	}

	//resize rows and boxes
	$('.singleRow').height(blockSize + "px");
	$('.singleBox').css({"height": blockSize + "px", "width": blockSize + "px"});
}

function draw() {
	$('.singleBox').on('mouseenter', function() {
		$(this).css("background-color", drawColor);
	})
}

function clear() {
	$('.singleRow').remove();
}

function size() {
	gridSize = prompt("Please enter a grid size (up to 65).");
	blockSize = 600 / gridSize;
}

function color() {
	drawColor = prompt("Please type in a color.");
}
