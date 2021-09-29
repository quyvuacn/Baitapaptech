var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
COLOR = 'white'
diem=0
var l=0,h=[],map=[],h=[]
var x,y ,dotx=[],doty=[] 
dot=[null,null,null,null,null,null,null,null,null,null]


 

color=null;

map=[]
for (let i=0;i<20;i++){
    map[i]=[]
    for(let c=0;c<10;c++){
        map[i][c]=color
    }
}



// set khối hình
const piece = [
    [O,'red'],
    [L1,'yellow'],
    [L2,'orange'],
    [T,'purple'],
    [I,'blue'],
    [Z1,'green'],
    [Z2,'pink']
]

game();







function button(key){
    switch (key.keyCode){
        case 37 : sangtrai();
        break;
        case 38 : l++
        break;
        case 39 : sangphai();
        break;
        case 40 : y++
        break;
    }

}

// Vẽ Hình
function draw(x,y){
    
     ctx.fillStyle=piece[r][1];
     ctx.fillRect(x*40+2,y*40+2,36,36)
}
//Khung Chơi
function drawmap(){
    ctx.fillStyle='white'
    ctx.fillRect(0,0,960,960);
   
    for (let r=0;r<10;r++){
        for(let i=0;i<20;i++){
            ctx.strockeStyle='#ccc'
            ctx.strokeRect(r*40,i*40,40,40)
        }
    }
    for(let i=0;i<20;i++){
        for(let c=0;c<10;c++){
            if (map[i][c]){
                ctx.fillStyle=map[i][c];
                ctx.fillRect(c*40+2,i*40+2,36,36)
            }
            
        }
    }
}



function drawpiece(){
    
    l=0
    k=0
    x=3,y=-2
    r=Math.floor(Math.random()*7)
    
    h=piece[r][0][l]
    
   for ( let i=0;i<h[0].length;i++){
     for ( let c=0;c<h[0].length;c++){
         if(h[i][c]==1){
             dotx[k]=c
             doty[k]=i
             k++
             
         }
     }
   }
 
   

}
   function update(){
       document.querySelector('#diem').innerText=diem
    
    let k=0
    if (l==4){l=0};
    h=piece[r][0][l];
    
    for ( let i=0;i<h[0].length;i++){
    for ( let c=0;c<h[0].length;c++){
        if(h[i][c]==1){
            dotx[k]=c
            doty[k]=i
            k++
            
        }
    }
  }
       check();
       checkdiemso()
       drawmap();
   
     
     
 
    for(let i=0;i<4;i++){
        draw(x+dotx[i],y+doty[i])
    }
     

   

   }

function yy(){y++}

function check(){

    for(let i=0;i<4;i++){
        if(x+dotx[i]>9){x--}
        if(x+dotx[i]<0){x++}
        if(y+doty[i]==20){
            y--
            for (let c=0;c<4;c++){
                map[y+doty[c]][x+dotx[c]]=piece[r][1]
            }
            
            drawpiece()  
        }

    }
  
 for(let i=0;i<20;i++){
    for(let c=0;c<10;c++){
        if(map[i][c]!==null){
            if(y+doty[0]==i-1&&x+dotx[0]==c){p()}
            else{
               if(y+doty[1]==i-1&&x+dotx[1]==c){p()}
               else{
                   if(y+doty[2]==i-1&&x+dotx[2]==c){p()}
                   else{
                       if(y+doty[3]==i-1&&x+dotx[3]==c){p()}
                   }
               }
            }
                      
        }
    }
}

//check sống chết
for (let i=0;i<10;i++){
    if(map[0][i]!==null){
        if(Math.min(...doty)+y<0){clearInterval(get);clearInterval(set)}     
    }
    
}
    
}

function game(){ 
    
    
    document.addEventListener('keydown',button)
    
    drawpiece();
    get=setInterval(yy,1000)
    update();
    set =setInterval(update,10)
   
}

function p(){
    
    for (let c=0;c<4;c++){
        map[y+doty[c]][x+dotx[c]]=piece[r][1]
    }
    
    drawpiece() 
}

function sangphai(){
    let d=0 
    if(y>-1){
  for (let i=0;i<4;i++){
    if( map[y+doty[i]][x+1+dotx[i]]==null){d++}
  }
   if (d==4){x++}else{x=x}
}
}

function sangtrai(){
    let c=0
       if(y>-1){
        for (let i=0;i<4;i++){
            if( map[y+doty[i]][x-1+dotx[i]]==null){c++}
          }
       if (c==4){x--} 
  
       }
        
   }
 
function checkdiemso(){
    for (let i=0;i<20;i++){
       var  kk=0
        for(let c=0;c<10;c++){
           if(map[i][c]!==null){kk++}
        }
        if(kk==10){
            diem=diem+10
            map[i]=dot

            for(let h=i;h>0;h--){
                if(h==0){map[h]=dot}
                if (h>0){map[h]=map[h-1]}
            }
        }

        
       
    }

    
}
