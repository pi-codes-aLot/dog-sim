class Bell{
    constructor(buttonName, x, y, type){
        this.button = createButton(buttonName);
        this.button.position(x, y);
        this.button.mousePressed(() =>{
            if(type == 1){
                console.log("Dog has been fed")
                foodInSight = 1
                amtMilk = amtMilk - 1;
                
            }
            if(type == 2){
                if (amtMilk < 24){

                
                console.log("Food has been made")
                amtMilk += 1;
                foodInSight = 0
                console.log(amtMilk)
                }
            }
        })
        }
}