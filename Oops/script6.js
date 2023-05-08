

class Calculator {

    // static addition(x,y){
    //     console.log(x+y)
    // }

    // static addition(x,y,z){
    //     console.log(x+y+z)
    // }

    // static addition(x,y,z,a){
    //     console.log(x+y+z+a)
    // }
    static addition(x,y,z,a){
        if(x != undefined && y != undefined && z != undefined && a != undefined){
            console.log(x+y+z+a)
        }
        else if(x != undefined && y != undefined && z != undefined){
            console.log(x+y+z)
        }
        else if( x != undefined && y != undefined){
            console.log(x+y)
        }
    }
}

Calculator.addition(12,4)
Calculator.addition(12,4,5)
Calculator.addition(12,4,5,66)



// program  2 

//Different class  , same method name , same signature (inheritance)

class WorldBank {

    save(){
        console.log('I am from save method from worldBank')
    }

    loan(){
        console.log('I am loan method from worldBank')
    }
}
class SBI extends  WorldBank{
    save(){
        console.log('I am from save method from sbi')
        console.log('overriding')
        super.save()
    }

    loan(){
        console.log('I am loan method from sbi')
        console.log('overiding')
        super.loan()
    }

}

let sbiA = new SBI()

sbiA.save()
sbiA.loan()




