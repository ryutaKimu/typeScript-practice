
export const tappleSample = ()=>{
    let response:[number,string] = [200,'OK'];
    response = [400,'aaa'];
    console.log(response);

    const girlFriends:[string,...string[]] = ['kana','yui','mana'];
    girlFriends.push('miami');
    console.log(girlFriends);

    const commands: readonly string[] = ['git command','git add'];
    console.log(commands);

}