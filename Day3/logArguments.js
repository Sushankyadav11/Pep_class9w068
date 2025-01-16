// Write a function logArguments that takes any number of arguments and logs them to
// the console. Use rest parameters to collect the arguments.

function logArguments(a,b,...args){
    console.log(a,b,args);
}

logArguments(1,2,3,4,5);
