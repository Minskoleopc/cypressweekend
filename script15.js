console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)


// for 
// for(intialization , conditionCheck , increment/decrement){
//     // statment

// }

for(let i = 1 ; i <=3 ; i++){ // 2 // 3 // 4
    console.log(i) // 1 , 2 // 3
}

for(let i = 1 ; i <= 3 ; i++){ // 2 // 3 // 4
    console.log("hello") // "hello" "hello" "hello"
}

for(let i = 0 ; i < 6 ; i++){
    console.log(i)
}

for(let i  = 5 ; i>=1 ; i--){ // 4 // 3 //2 // 1 // 0
    console.log(i) // 5 // 4 // 3 // 2 // 1
}

for(let i = 2 ; i <= 20 ; i = i+2){
    console.log(i)
}

for(let i = 30 ; i >= 3 ; i = i-3){ // 27 // 24 ------ 3 -- 0
    console.log(i) // 30 // 27 // 24 ----- 3
}

// break with for loop


for(let i = 1 ; i <= 5 ; i++){ // 2 // 3
    if(i == 3){
        break
    }
    console.log(i) // 1 // 2
}


for(let i = 1 ; i <= 5 ; i++){  // 2 // 3
    console.log(i)  // 1 //2 // 3
    if(i == 3){
        break
    }
   
}

for(let i = 1 ; i <= 5 ; i++){ // 2 //3 // 4 // 5 // 6
    if(i == 3){
        continue
    }
    console.log(i) // 1 //2 // 4 // 5
}


// while loop 

// intilization 

// while(conditionCheck){
//     // statement 
//     // incrememt/ decrememt
// }


let q1 =1
while(q1 <=3){ 
    console.log("hello") // hello // hello // hello
    q1++ //2 // 3 // 4
}

let q2 = 1
while(q2 <= 5){
    console.log(q2)
    q2 ++
}

let q3 = 5
while(q3 >= 1){
    console.log(q3) // 5 // 4 // 3 // 2 //1
    q3 -- // 4 // 3 // 2 // 1 // 0
}


let q4 = 2 
while(q4 <= 20){
    console.log(q4)
    q4 = q4 + 2
}


let q5 = 30 
while(q5 >= 3){
    console.log(q5)
    q5 = q5 - 3
}

let q6 = 1
while(q6 <= 5){
    if(q6 == 3){
        break
    }
    console.log(q6) // 1 // 2
    q6 ++ //2 // 3
}


let q7 = 1
while(q7 <= 5){
    console.log(q7)
    if(q7 == 3){
        break
    }
    q7 ++
    
}

let q8 = 1
while(q8 <= 5){
    if(q8 == 3){
        q8 ++ // 4
        continue
    }
    console.log(q8) //1 // 2 // 4 // 5
    q8 ++ //1 // 3 // 5 // 6
    
}












// while 