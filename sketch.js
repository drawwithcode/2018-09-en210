var mylon=7.7345104
var mylat=45.8466149
var ns
var eo


watchOptions = {
   enableHighAccuracy: true,
   timeout: 5000,
   maximumAge: 5
 }

function preload(){
  // put preload code here
  loc=getCurrentPosition()

}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight)


            watchPosition(pp,watchOptions)

            function pp(position){
            background(0)
              fill(255,0,0)
              textSize(width/25)
              textAlign(CENTER)
            //  text(position.latitude,300,100)

              //text(position.longitude,300,200)

              dist=calcGeoDistance(loc.latitude,loc.longitude,mylat,mylon,'km')

                dist_x=calcGeoDistance(loc.latitude,0,mylat,0,'km')

                  dist_y=calcGeoDistance(0,loc.longitude,0,mylon,'km')

                  print(position.latitude)
                  print(position.longitude)

            if(loc.latitude<mylat){ns='NORTH: '}
            else{ns='SOUTH: '}

            if(loc.longitude<mylon){eo='EAST: '}
            else{eo='WEST: '}

            text('SAFE_PLACE:',width/2,height/2-100,100)
              text(ns+dist_x,width/2,height/2,100)

                text(eo+dist_y,width/2,100+height/2,100)

            }



}

function draw() {
  // put drawing code here
//background(100)


}
