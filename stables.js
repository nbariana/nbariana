                                                                                                    
//                                %                                                                   
//                                @%  @@                                                                  
//                                 @*%#@*#%%****+==--                                                     
//                                 @@@@%%-:-==*%@%#*+*-::                                                 
//                                -#+@++-+==--===+#@@@#+-=--                                              
//                               @%+%@+#+++=%#*+=-+*#@@@%*+*                                              
//                               *#+**+-++++*%@%#+=-+*@@@@#=**=+                                          
//                              :---==-+==++#*#@@%#*==*%@@@@**+-=+#:=                                     
//                             --=+*#%%*+++*@**+*#%#*+=+#@@@%**#*##                                       
//                            :=--*+*=%@#**+%@#+#**##*+=+%@@@@#*%*:.  -:                                  
//                           ###---+#@@%     @%*=#+*#**++*@@%%####=  ==-:-                                
//                           %#%*=#@*        @@*=#**+*#*#*@@#%%@@%#*#====--                               
//                            @%*++          %@#+#****#####@@@%#**#*==--::--                              
//                                           @@###*+****##*#@@@@@@%+*#*+-:                                
//                                          @@@#%*FRESA**=*#@@@@@@@#***+-:.                               
//                                       %@@@@%*==++**++-=+*#@@*%##***+-.-                                
//                                      %##**#**+=--+=--==+#%**%#*++== -                                  
//                                     @%+-=@#+::.:=****-+=-=##                                           
//                                     %+:+@@#=:===-=+++*##*-=#*                                          
//                          +#=      #@@@@%@@#==+***##**+++-:--*+                                         
//                       %#*@@**-::+@@@@@@@@@%++-:==++*****----**                                         
//                       @@%@#*#=-#@@+%=-===-:::=:--=+*#*+=::::+**+                                       
//                     **#%  %#==%*+%@*+*#***##+*+=-+#*+===++=::++**+=                                    
//                   ####*  @%%@@@@@  @%%@%%*=+=**=*+--=+***++=::=++*+=+*+                                
//                  .-+*    @@@ @@@        @@@#%@#%#---=++++*++=::=+++=-*#+=+                             
//                 -:-%     @@@ #%@          %@@@#=+=====+******+-:-=+=--*+*=*+                           
//                :..:      @@%@%****         #%@@#%*+++++**+++++=:-===::+-=+=**=                         
//               #*-:=     @@@@ @@::-           #%%@@@#*++*******=::==+--+*+=+**+=                        
//                          @@@#%@@@@%             #%@@@@#*+=-+=+++=+++=-=+*=****=%%*=                    
//                           @@%#*#                  #%%@@@@@@%%##**+**--**+=+#**+=%*+*#=                 
//                              #%#                     #%%%@@@@@@@%*%+:+*+=-+*+**=#@@%#%*                
//                                                           %#%%%%#%##+#++-=+-+**++@@@@%%+               
//                                                            %@%@@@@@-+*=--+:=*#**=@@@@@%#               
//                                                            %%%#@@@@%#+::+==*#**++@%@@%##:              
//                                                            %%@@@%%@@@#+*==#%##*.:%##%#+*-              
//                                                             %%%%%%@@@@@#+%@%%#:.-@*#**#**              
//                                                              %%%%@@@%@@%=-*##:..#%##*%%**-             
//                                                              %@%%@@@  @@+-++=..-@@@#*%%#%=             
//                                                               @@%%@@    @#***-.-#@@@%*%#%*             
//                                                                %@@@@@    @%#%#*:*%@%*@@%%+-            
//                                                                 @@@@@%    %@%%@%*-%@#+@@@*             
//                                                                 @#=%@@      @%*@% %@%#+%@#             
//                                                                 @@++@       @@#@@:#@@@%%##+ -   --     
//                                                                 #@@@         %@@@-*#@@@%*#*#%%%        
//                                                                *#%%           @%% ==%%@@%%##**+=       
//                                                               ***%            @%@  =+%%@@@%#***++=-    
//                                                              *#*%             @%@     +%*@%%%%%#*+:    
//                                                            :=#*#              %**       +=--=--:       
//                                                          -..-@@               @@%@          -          
//                                                         :..=                 .-%@                      
//                                                        +--=                 ::                         
//                                                                            +=                          
                                                                                                        
                                                                                                
let horses = []
const stableIntroduction = "Welcome to my Stable";
const latePayment = 20
let stableStalls = 10

console.log(stableIntroduction)

function Horse(
    name, nickname, favoriteTreat, 
    age, monthlyRent, location, 
    colour, gender, hunger
){
    this.name = name
    this.nickname = nickname
    this.favoriteTreat = favoriteTreat
    this.age = age
    this.monthlyRent = monthlyRent
    this.location = location
    this.colour = colour
    this.gender = gender
    this.hunger = hunger

    this.introduction = function(){
        console.log(`This horses' name is ${this.name}. ${this.name} is ${this.colour} and likes to eat ${this.favoriteTreat}.`) 
    }
    this.ride = function(){
        console.log (`Taking ${this.name} for a ride.`)
        if (this.location === true){
            this.location = false
        }
    }    
        
    this.changeLocation = function(){
        if (this.location === true){
            this.location = false
            console.log(`${this.name} was taken outside.`)
        }
        else {
            this.location = true
            console.log(`${this.name} was taken inside.`)
        }
    }
    
}

const fresita = new Horse("Fresita", "Fresa", "Strawberries", 2, 300, true, "White", "Girl", true)
const mano = new Horse("Mano", "Mano", "Carrots", 3, 300, false, "Brown", "Boy", false)
const bubs = new Horse("Bubs", "Bubs", "Kale", 5, 300, true, "Black", "Girl", true)
horses.push(fresita, mano, bubs)

const candy = {
    name: "Candy",
    nickname: "Candy",
    favoriteTreat: "Cucumber",
    age: 4,
    monthlyRent: 300,
    location: false,
    colour: "Orange",
    gender: "Girl",
    hunger: false,
    introduction: function(){
        console.log(`This horses' name is ${this.name}. ${this.name} is ${this.colour} and likes to eat ${this.favoriteTreat}.`)
    }, 
    changeLocation: function(){
        if (this.location === true){
            this.location = false
            console.log(`${this.name} was taken outside.`)
        }
        else {
            this.location = true
            console.log(`${this.name} was taken inside.`)
        }
    }
}
horses.push(candy)
console.log (horses)

stableStalls -= horses.length
if (stableStalls < 2){
    console.log("We need to build more stalls")
}
else {
    console.log(`We have ${stableStalls} stalls available!`)
}

function calculateFine(horse){
    cost = horse.monthlyRent + latePayment 
    console.log(`You owe $${cost} for ${horse.name}`)
}

calculateFine(bubs)


function findTreat(treat){
    for (let i=0; i < horses.length; i++) {
        if (horses[i].favoriteTreat === treat) {
            console.log (`${horses[i].name} likes this treat`)
            break
        } 
        else {
            console.log (`${horses[i].name} doesn't like this treat`)

        }
    }
}

findTreat("Carrots")

function retrieveNickname(horse){
    return horse.nickname
}


console.log (retrieveNickname(fresita))

function findColour(colour){
    for (let i=0; i < horses.length; i++) {
        if (horses[i].colour.toLowerCase() === colour.toLowerCase()) {
            console.log (`${horses[i].name} is ${colour}`)
        } 
    } 
}       

findColour("black")

function moveHorsesOutside(dark = false){
    for (let i=0; i < horses.length; i++) {
        if (dark === true && horses[i].location === false){
            horses[i].changeLocation()
        }
        else {
            if (horses[i].location === true){
                horses[i].changeLocation()
            }
        }
        

    }
    if (dark === true){
        console.log ("It's bedtime for the horses")
    }
    else {
        console.log("The horses were taken outside to spend time in the sun")
    }
}
moveHorsesOutside()

fresita.ride()

moveHorsesOutside(true)

function feedHorses(){
    for (let i=0; i < horses.length; i++) {
        if (horses[i].location === false){
            horses[i].changeLocation()
        }

    }
    for (let i=0; i < horses.length; i++) {
        console.log(`${horses[i].name} was given ${horses[i].favoriteTreat}`)
        

    }
}

feedHorses()
