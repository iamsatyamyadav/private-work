// Funny pair -96:35:27
// Description

// You have an arrayarrof n integers and you want to change the way it is stored in your database.

// You are going to store the integers as pairs. There are many duplicates of each integer. So instead of storing each element you store the integer and its count in a pair.

// Let's call a pair funny if both the numbers in it are same, in other words a pair is called a funny pair if the first and second number on it is same.

// In this case a funny pair would be where the count of an integer is same as the integer itself.

// Output the largest number which is in a funny pair (its count is same as itself) or -1 otherwise.


// Input
// Input Format
// The first line contains an integer t - the number of testcases.

// The next 2*t lines contains the description of the t testcases.

// The first line of each testcase contains an integer n - the size of the array.

// The second line of each testcase contains n space-separated integers - arr[0],arr[1]...arr[n-1].

// Constraints
// 1 ≤ t ≤ 10^5

// 1 ≤ n ≤ 500

// 1 ≤ arr[i] ≤ 500


// Output
// Output Format
// For each testcase print the largest integer in a funny pair else -1


// Sample Input 1 

// 3
// 4
// 2 2 3 4
// 6
// 1 2 2 3 3 3
// 5
// 2 2 2 3 3
// Sample Output 1

// 2
// 3
// -1
// Hint

// First testcase
// The only number in the array which makes a funny pair is 2 because frequency[2] == 2.

// Second testcase
// 1,2 and 3 all make a funny pair, out of which 3 is the largest.

// Third testcase
// The are no integers which make a funny pair


function FunnyPair(N,arr){
    
    let obj = {}

    for(let i = 0; i<N; i++)
    {
        if(obj[arr[i]]==undefined)
        {
            obj[arr[i]]=1
        }else
        {
            obj[arr[i]]++
        }
    }
    
    let flag = -1 ;
    for(let key in obj)
    {
        if(key==obj[key])
        {
            
            flag = obj[key];
           
        }
    }
    console.log(flag)
}




function runProgram(input) {
   input = input.trim().split("\n")
   
   let T = +input[0]
   let p = 1; 
   
   for(let i = 0; i<T; i++)
   {
       let N = +input[p++]
       let arr = input[p++].trim().split(" ").map(Number)
       
       FunnyPair(N,arr)
   }
 }
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}


/*Negation Matrix -96:34:11
Description

You are given a matrix A, you have to find the negation matrix A' whose elements are given by the following rule

A'[i][j] = Sum - A[i][j], Where Sum is the total sum of all the elements of matrix A.


Input
Input Format

First-line contains 2 integers n and m representing the number of rows and columns respectively of 2D array arr.

Following n lines contains m-integers.

Constraints

1 <= n <= 100

1 <= m <= 100

1 <= arr[i][j] <= 10^4


Output
Print the negation matrix.


Sample Input 1 

2 2
1 2
3 4
Sample Output 1

9 8
7 6
Hint

See the total sum of the given matrix, Sum = 1+2+3+4 = 10

Resultant matrix elements A'[1][1] = Sum - A[1][1] = 10 - 1 = 9

Similarly, A'[1][2] = 10-2 = 8

A'[2][1] = 10-3 = 7

A'[2][2] = 10-4 = 6 */

function  NegationMatrix(R,C,mat){
    
    let sum = 0
    for(let i = 0; i <R; i++)
    {
        for(let j = 0; j <C; j++)
        {
             sum+= mat[i][j]
             
             
        }
    }
    
    
    // console.log(sum)
    for(let k = 0; k <R; k++)
    {
        let x = ""
        for(let l = 0; l <C; l++)
        {
            x+= sum - mat[k][l]+" "
             
             
        }
        console.log(x)
    }    
    
}




function runProgram(input) {
    input = input.trim().split("\n")
    
    let [R,C] = input[0].split(" ").map(Number)
    
    let p = 1;
       let mat = []
    for(let i = 0 ; i<R; i++)
    {
        let arr = input[p++].split(" ").map(Number)
        mat.push(arr)
        
        
    }  NegationMatrix(R,C,mat)
 }
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

/**Mark and toys -96:33:2
Description

Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money. Given a list of toy prices and an amount to spend, determine the maximum number of gifts he can buy.

Note: Each toy can be purchased only once.


Input
Input Format
The first line contains two integers, n and k, the number of priced toys and the amount Mark has to spend.

The next line contains n space-separated integers prices[i]

Constraints
1 <= n <= 10^5

1 <= k <= 10^9

1 <= prices[i] <= 10^9


Output
Output Format
Print the maximum number of toys


Sample Input 1 

7 50
1 12 5 111 200 1000 10
Sample Output 1

4
Hint

 */
function  MarkandToys(N,K,arr){
    
    for (let i = 0; i <N; i++)
    {
     for (let j = i + 1; j <N; j++)
     {
       if (arr[i] > arr[j])
       {
         temp = arr[i];
         arr[i] = arr[j];
         arr[j] = temp;
       }
     }
   }  
   let sum = 0
   let count = 0
   for(let k = 0; k<N; k++)
   {
       sum+=arr[k]
       if(sum<=K){
          count++
       }
   }
   console.log(count)
   
}





function runProgram(input) {
   
   input = input.trim().split("\n")
   
   let [N,K] = input[0].split(" ").map(Number)
   let arr = input[1].split(" ").map(Number)
   
   MarkandToys(N,K,arr)
   
}
if (process.env.USER === "") {
 runProgram(``);
} else {
 process.stdin.resume();
 process.stdin.setEncoding("ascii");
 let read = "";
 process.stdin.on("data", function (input) {
   read += input;
 });
 process.stdin.on("end", function () {
   read = read.replace(/\n$/, "");
   read = read.replace(/\n$/, "");
   runProgram(read);
 });
 process.on("SIGINT", function () {
   read = read.replace(/\n$/, "");
   runProgram(read);
   process.exit(0);
 });
}