class Form{
    constructor(){}
    display(){
        var title=createElement("h2")
        title.html("car racing game")
        title.position(100,10)
        var button=createButton("play")
        button.position(250,200)
        var input=createInput("name")
        input.position(130,160)
        var greeting=createElement("h3")
        button.mousePressed(function(){
            input.hide()
            button.hide()
            playerCount=playerCount+1
            player.updateCount(playerCount)
            var name=input.value()
            player.update(name)
            greeting.html("hello"+name)
            greeting.position(130,160)
        })



    }
}