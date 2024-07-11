const arr=[1,2]

const [x,y,z] = arr;

console.log(y);
console.log(z);


const arrr={
    name: "mubashir",
    class:"5c",
    move: function(x){
        return [this.name, x];
    }
}


const {name:named,class:classed} = arrr;
console.log(named,classed);

console.log(arrr.move(5));
