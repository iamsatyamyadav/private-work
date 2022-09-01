
// // Introduction to Stacks (Follow up) + Implementing Stack from Scratch 

// let array = new Array(5).fill(0)

// let top = -1;

// push(5)
// push(4)
// push(3)
// push(2)
// pop()
// pop()
// peek()
// pop()
// pop()

// function push(data){
//     if(top==array.length-1){
//         console.log("overflow")
//         return;
//     }
//     top++
//     array[top]=data
    
// }



let arr = [0,0,0,0,0];

let top = -1;
let size = 5;


push(5);
push(2);
push(1);
push(4);
push(9);
push(9);
pop();
pop();
pop();
pop();
pop();
push(2);
peek();

function push(data){
    
    if(top == size-1){
        console.log("Stack Overflow")
        return
    }
    top++
    arr[top] = data
    // console.log(arr[top])
    return;
}

function pop(){
    if(top == -1){
        console.log("Stack Underflow")
        return;
    }
    console.log(arr[top])
    top--
    return;
}

function peek(){
     if(top == -1){
        console.log("Stack Underflow")
        return;
    }
   
      console.log(arr[top])
    return;   
}






