// loop 


// for  while 

// 1 to 5 
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

// 1 to 100
// for(intialization ; conditionCheck ; increment/decrement){
//     // statments

// }

//program 1
//print 1 to 5
for (let i = 1; i <= 5; i++) { //2 /3 // 4 //5
    console.log(i) // 1 // 2 // 3 // 4 // 5
}

// print "hello"
for (let i = 0; i < 5; i++) {  // 1 // 2 // 3 // 4 //5
    console.log("hello") // "hello" , "hello" ,"hello" , "hello" , "hello"
}

// program 3
//print  5 to 1 
for (let i = 5; i >= 1; i--) { // 4 // 3 // 2 // 1 // 0
    console.log(i) // 5 // 4 // 3 // 2 // 1
}

// program 4
// table of 2
for (let i = 2; i <= 20; i = i + 2) { //4-----------//22
    console.log(i) // 2,4 ,6,8,10,12,14,16,18,20
}

// program5
// table of 3 reverse order
for(let i = 30 ; i>= 3 ; i = i - 3){
    console.log(i)
}

// program6
// breal statement with for loop

for(let i = 1 ; i <= 5 ; i++){ //2 // 3
    console.log(i) // 1 // 2 // 3
    if(i == 3){
        break
    }
}

for(let i = 1 ; i <= 5 ; i++){  // 2 // 3
    if(i == 3){
        break
    }
    console.log(i)  // 1 / 2
}

// program 7
// continue statment with for loop
for(let i = 0 ; i <= 5 ; i++){ // 1 // 2 // 3 // 4 // 5 // 6
    if(i == 3){
        continue
    }
    console.log(i) // 0 // 1 // 2 // 4 // 5
}

// while loop

// // intilization 
// while(condition){
//     // statement 
//     // increment / decrement
// }

// print 1 to 5
let q1 = 1
while(q1 <= 5){
    console.log(q1) // 1 // 2 // 3// 4 // 5
    q1 ++  // 2 // 3 // 4  // 5 // 5
}


// print "hello"

let q2 = 1
while(q2 <= 5){
    console.log("hello")
    q2 ++
}


// print 5 to 1

let q3 = 5
while(q3 >= 1){
    console.log(q3)
    q3 --
}

// table of 2


let q4 = 2
while(q4 <= 20){
    console.log(q4)
    q4 = q4 + 2
}

// table of 3 in reverse 
let q5 = 30
while(q5 >= 3){
    console.log(q5)
    q5 = q5 - 3
}

// break with while 
let q6 = 1
while(q6 <= 3){
    if(q6 == 2){
        break
    }
    console.log(q6) //1
    q6++ // 2
} 

let q7 = 1
while(q7 <= 3){
    console.log(q7) //1 // 2
    if(q7 == 2){
        break
    }
    q7++  // 2
} 

let q8 = 1
while(q8 <= 5){
    if(q8 == 3){
        q8 ++ // 4
        continue
    }
    console.log(q8) // 1 // 2 // 4 // 5
    q8 ++ // 2 // 3 // 5 // 6
}



























