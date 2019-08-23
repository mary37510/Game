background(255, 242, 0);
fill (0, 0, 0);
textSize(16);
text ("Управляйте Хупером своим курсором мыши ", 33, 150, 350, 18);
textSize(12);
text ("Постарйтесь собрать как можно больше помидорок за игру ", 33, 168, 350, 18);
textSize(9);
text ("Кликните в любое место, чтобы начать", 113, 340, 350, 18);

var wasPressed;

mousePressed = function() {
    if (!wasPressed) {
    
    var xPositions = [];
    var yPositions = [];
    var Plit=7;
    
    for (var i=0; i<Plit; i++){
        xPositions.push(i*80); 
        yPositions.push(random(-400, 400));
    }
    draw = function() {
        background(255, 251, 242);
        
        for (var i = 0; i < xPositions.length; i++) {
            fill(122, 96, 114);
            ellipse (xPositions[i], yPositions[i], 70, 4);
            
            yPositions[i] += 1;
            if (floor(random(1,10))===1){
                image(getImage("avatars/spunky-sam-red"), xPositions[i], yPositions[i]-20, 14,15);
            }
            if (yPositions[i] > 400){
             yPositions[i] -= 401;
            }}
        };}

    wasPressed = true;
};
 
