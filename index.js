// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300)

// have the NPC start walking east immediately




//  I WRAPPED THIS ALL IN A FUCNTION IN AN ATTEMPT TO GET THE BONUS FOR -->
//  MAKING THE CHARACTER LOOP AGAIN THROUGH THE SAME PATTERN BUT WAS UNSECSESSFUL
function moveCharacter() {

    npc.walkNorth(400).then(message => {
        console.log("done walking north")
    })
    .then(() => npc.walkEast(500)).then(message => {
        console.log("done walking east")
    })
    .then(() => npc.walkSouth(1000)).then(message => {
        console.log("done walking south")
    })
    .then(() => npc.walkEast(1400)).then(message => {
        console.log("done walking east")
    })  
    .then(() => npc.walkNorth(1200)).then(message => {
        console.log("done walking north")
    })
    .then(() => npc.walkWest(1900)).then(message => {
        console.log("done walking west")
    })
    .then(() => npc.walkSouth(400)).then(message => {
        console.log("done walking south and I'm back home!")
    })

}

moveCharacter()




// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// Create everything else
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)