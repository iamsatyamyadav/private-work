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


/*Summer internship Ended
Description

You want to apply for internships for the upcoming summer but for that you need show some experience in your resume.

So for that you decided to do a startup. This startup is about selling muffins.

You sell muffins at 5$ a piece, and people are loving your muffins and are standing in a long queue to purchase it.

Every customer purchases a single muffin and pays you in either5$,10$or20$bills, your task now is to find out if you are able to provide change to everybody in the queue.

If you can provide change to everyone they will be happy and give you a good referral.

Initially you have no money i.e. no bills of any kind.

Output YES if you can provide change to everyone, else NO.


Input
Input Format
The first line of the input gives the number of test cases, T. T test cases follow. Each test case consists of two lines.

The first line of each test case contains an integer n, representing the number of people in a queue.

The second line of each test case contains n space separated integer, the ith (1<=i<=n) of which denotes the kind of bill the ith person gives you.

Constraints
1 ≤ t ≤ 10

1 ≤ n ≤ 10^5

bills[i] is either 5,10 or 20


Output
Output Format
For each testcase output YES if you can provide change to everyone, else NO.


Sample Input 1 

2
5
5 5 5 10 20
5
5 5 10 10 20
Sample Output 1

YES
NO
Hint

First testcase
From the first 3 customers, we collect three5$bills in order.From the fourth customer, we collect a10$bill and give back a5$.From the fifth customer, we give a10$bill and a5$bill.Since all customers got correct change, we output YES.

Second testcase
From the first two customers in order, we collect two5$bills.For the next two customers in order, we collect a10$bill and give back a5$bill.For the last customer, we can not give the change of15$back because we only have two10$bills.Since not every customer received the correct change, the answer is NO. */

function  Summerinternship(n,arr){

  let n5=0;
  let n10=0;
  let n20=0;
  for(let i=0;i<n;i++)
  {
      switch(arr[i])
      {
          case 5:
              n5++;
              break;
          case 10:
              n10++;
              break;
          case 20:
              n20++;
              break;
      }
  }
  
  
  for(let i=0;i<n;i++)
  {
      if(arr[i]==10)
      {
          if(n5==0)
          {
              console.log("NO");
              return;
          }
          else
          {
              n5--;
          }
      }
      else if(arr[i]==20)
      {
          if(n5==0 || n10==0)
          {
              console.log("NO");
              return;
          }
          else
          {
              n5--;
              n10--;
          }
      }
  }
  console.log("YES");
}


function runProgram(input) {
 input = input.trim().split("\n")
 
 let T = +input[0]
 let p = 1;
 
 for(let i = 0; i<T; i++)
 {
     let n = +input[p++];
     let arr = input[p++].split(" ").map(Number)
     
     Summerinternship(n,arr)
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



/*Push, Pop and Top Ended
Description

There is a stack of integers which is currently empty. You are given an integer n and there are n operations that you need to perform on the stack.

The next n line contains one of the following 3 operations:

1 x : Push x to the top of the stack.

2 : Pop an element from the top of the stack. If the stack is empty, do nothing.

3 : Print the top element of the stack (if stack is empty, print "Empty!" (without quotes)).

For better understanding, read sample test case explanation


Input
Input Format:

First line of test case contains n.

In the next n lines there can be one of the following three possible inputs:

1 separated by an integer: In that case, you have to push that integer to stack

2 : Pop an element from the top of the stack. If the stack is empty, do nothing.

3 : Print the top element of the stack (see Output Format).

Constraints :

N<1000


Output
Whenever the query (out of the n queries) is 3, print top element of stack.


Sample Input 1 

6
1 15
1 20
2
3
2
3
Sample Output 1

15
Empty!
Hint

Sample Test Case Explanation :

There are 6 different operations to be performed on the stack.

In first operation, we are pushing 15 to the stack

In second operation, we are pushing 20 to the stack

In third operation, we are popping (removing) 20 from the stack.

In fourth operation, we have to print the top element and since stack is not empty and has 15 at the top. Print 15.

In fifth operation, we are popping the top element from the stack and since there is just one element present in the stack, the stack will become empty after performing this operation.

In sixth operation, you have to print the top element and since the stack is already empty, output "Empty!" */


// function  PushPopTop(n,v){
//     console.log(n,v)
// let stack = []
// let top = -1;
// let size = 5;



// }



function runProgram(input) {
  input = input.trim().split("\n");
  
  let T = +input[0];
  let p = 1;
  
  let stack = [];
   for(let i = 0; i<T; i++)
   {
        let o=input[p++].trim().split(" ").map(Number);
        
       //  switch(o[0])
       //  {
       //      case 1: 
       //          stack.push(o[1]);
       //          break;
       //      case 2:
       //         if(stack.length!=0){
       //             stack.pop();
       //         }
       //         break;
       //     case 3:
       //         if(stack.length==0)
       //         {
       //             console.log("Empty!");
       //         }
       //         else
       //         {
       //             let d=stack[stack.length-1];
       //             console.log(d);
       //         }
               
       //  }
       console.log(o);

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

/*Reduce String Ended
Description

Given a string of lowercase characters in range ascii[‘a’..’z’].

You can perform one operation on this string in which you can selects a pair of adjacent lowercase letters that match, and delete them.

For instance, the string aab could be shortened to b in one operation.

Your task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, print "Empty String" (without quotes).

Please note that characters can be deleted only if they form a pair and are same(i.e from aaa we can only delete 2 a's and will be left with a single a).

I know there exists a simple implemented Stringentation based solution of this question, but please try to come up with an approach that uses stack data structure to solve the purpose


Input
Input Format

First and the only line contains string

Constraints

Length of string < 1000






Output
Output Format

If the final string is empty, print Empty String; otherwise, print the final non-reducible string.


Sample Input 1 

aaabccddd
Sample Output 1

abd
Hint

Sample 1 Explanation

You can perform the following sequence of operations to get the final string:

aaabccddd -> abccddd -> abddd -> abd */