// IIFE - Immediate Invoked Function Expression
/*
    Closure
    Calls an anonymous self executing function.
    Anything in braces is in a closure. 
    It won't go to global namespace.
*/

(function(){
    // Global Game Variables
    let canvas = document.getElementById("canvas");
    let stage: createjs.Stage;
    let helloLabel: createjs.Text;

    function Init(){
        console.log("Initialization start");
        
        Start();
    }

    function Start():void{
        console.log("Starting Application...")

        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update():void{
        helloLabel.rotation += 5;
        stage.update();
    }
    function Main():void{
        console.log("Game Start...");

        helloLabel = new createjs.Text("Hello world.","40px Consolate", "#000000");
        helloLabel.x = 100;
        helloLabel.y = 100;

        stage.addChild(helloLabel);
    }
    window.onload = Init;
})();