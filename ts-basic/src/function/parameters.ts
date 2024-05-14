
export const isUserSignedIn = (userId:string,userName?:string):boolean=>{
    if(userId === 'ABC'){
        console.log('Function parameters sample 1: User is signed in',userName);
        return true;
    }else{
        console.log('User is not signed in');
        return false;
    }
}

export const sumProductPrice = (...productPrice:number[]):number=>{
    return productPrice.reduce((prevTotal:number,productPrice:number)=>{
        return prevTotal + productPrice;
    },0)
}