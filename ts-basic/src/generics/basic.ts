
export const genericsBasicSample = ()=>{

    const stringReduce =(array:string[],initialValue:string):string =>{
        let result = initialValue;
        for(let i = 0; i <array.length; i++){
            result += array[i];
        }
        return result;
    }

    const numberReduce =(array:number[],initialValue:number):number =>{
        let result = initialValue;
        for(let i = 0; i <array.length; i++){
            result += array[i];
        }
        return result;
    }

    console.log(stringReduce(["this","is","a","pen"],""));
    console.log(numberReduce([2,30,40,50,600],0));

    type GenericReduce<T> ={
        (array:T[],initialValue:T):T
    }

    const genericReduce:GenericReduce<string> = (array,initialValue)=>{
        let result = initialValue;
        for(let i = 0; i <array.length; i++){
            result += array[i];
        }
        return result;
    }

    console.log(genericReduce(["a","b","c"],""));

    const genericReduce2:GenericReduce<number> = (array,initialValue)=>{
        let result = initialValue;
        for(let i = 0; i <array.length; i++){
            result += array[i];
        }
        return result;
    }

    console.log(genericReduce2([1,2,3],0));
}