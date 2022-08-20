
// Introduction to Stacks (Follow up) + Implementing Stack from Scratch 

let array = new Array(5).fill(0)

let top = -1;

push(5)
push(4)
push(3)
push(2)
pop()
pop()
peek()
pop()
pop()

function push(data){
    if(top==array.length-1){
        console.log("overflow")
        return;
    }
    top++
    array[top]=data
    
}