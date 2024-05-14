interface Bread {
    calories:number
}

interface Bread{
    type: string
}

const FransPan:Bread = {
    calories:30,
    type:'hard'
}

type MaboDoFu = {
    calories:number,
    spacyLevel:number
}

type Rice = {
    calories:number,
    gram:number
}

type MaboDon = MaboDoFu & Rice;

const maboDon:MaboDon = {
    calories:500,
    spacyLevel:4,
    gram:600
}

interface Book{
    page:number,
    title:string
}

interface Magazine extends Book{
    cycle: 'daily'|'weekly'|'monthly'|'yearly'
}

const jump:Magazine = {
    page:300,
    title: '週刊少年ジャンプ',
    cycle: 'weekly'
}

type BookType ={
    page:number,
    title:string
}

interface HandBook extends BookType{
    theme:string
}

const cotrip:HandBook = {
    page:230,
    title:'コトリップ',
    theme:'旅行'
}

interface sakaIdol{
    name:string,
    allMember:number
}

class Sakurazaka implements sakaIdol{
    name:string;
    allMember: number;

    constructor(name:string,allMember:number){
        this.name = name;
        this.allMember = allMember;
    }
}