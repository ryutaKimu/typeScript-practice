

export const logMessage = (message:string):void=>{
    console.log('function basic sample1:',message)
}

export function logMessage2(message:string){
    console.log('function basic sample2:',message);
}

export const logMessage3 = function(message:string):void{
    console.log('function basic sample3:',message);
}

export const logMessage4 = (message:string) => console.log('function basic sample4:',message);

export const alwaysThrowError = (message:string):never=>{
    throw new Error(message);
}

type logMessage = (message:string)=>void;

export const logMessage6:logMessage = (message)=>{
    console.log(message);
}