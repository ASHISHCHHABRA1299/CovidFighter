function load_images()
{
    //player image
    //virus,gem image
    enemy_image=new Image();
    enemy_image.src="Assets/v2.png";
    enemy_image1=new Image();
    enemy_image1.src="Assets/v1.png";
    
}
function init()
{
    //objects that will have in the game
    canvas=document.getElementById("mycanvas");
    W=canvas.width=700;
    H=canvas.height=400;
    game_over=false;
    //create a context object to render something on canvas
    //requires a string it is 2d canvas on which we render something(pen to draw)
    pen =canvas.getContext('2d');
    
    e1 = {
		x : 150,
		y : 50,
		w : 60,
		h : 60,
		speed : 20,
	};
	e2 = {
		x : 300,
		y : 150,
		w : 60,
		h : 60,
		speed : 30,
	};
	e3 = {
		x : 450,
		y : 20,
		w : 60,
		h : 60,
		speed : 40,
	};
    
    enemy = [e1,e2,e3];
}

function draw()
{
    //clear the canvas area for the old frame
    pen.clearRect(0,0,W,H);
    for(let i=0;i<enemy.length;i++){
       if(i%2==0)
           pen.drawImage(enemy_image,enemy[i].x,enemy[i].y,enemy[i].w,enemy[i].h);
       else
           pen.drawImage(enemy_image1,enemy[i].x,enemy[i].y,enemy[i].w,enemy[i].h);
    } 
}

function update()
{
    //move the box downwards
     //update each enemy by same logic
    for(let i=0;i<enemy.length;i++){
        enemy[i].y += enemy[i].speed;
        if(enemy[i].y>H-enemy[i].h || enemy[i].y <0){
            enemy[i].speed *= -1;
        }   
    }
}

function gameloop()
{
    if(game_over==true){
        clearInterval(f);
    }
    draw();
    update();
}
load_images();
init();
var f=setInterval(gameloop,100);