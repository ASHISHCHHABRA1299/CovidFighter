function load_images()
{
    //player image
    //virus,gem image
    
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
    
    box={
        x:150,
        y:50,
        w:60,
        h:60,
        speed:20,
    };
}

function draw()
{
    //clear the canvas area for the old frame
    pen.clearRect(0,0,W,H);
    pen.fillStyle="red";
    pen.fillRect(box.x,box.y,box.w,box.h);  
}

function update()
{
    //move the box downwards
    box.y+=box.speed;
    if(box.y>=H-box.h||box.y<0)
       {    
           box.speed*=-1;
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