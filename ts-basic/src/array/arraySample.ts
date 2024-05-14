
export const arraySample = ():void=>{
    const colors:string[] = ['red','blue','yellow'];
    colors.push('green');
    console.log(colors);

    const even:Array<number> = [1,2,3,4,5];
    even.push(8);
    // even.push("a");
    console.log(even);
}

const ids:(string | number)[] = [1,2,3,"www"];
ids.push('ABC');
console.log(ids);
