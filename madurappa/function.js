//const name_ ="Para";
//console.log(name_);

const math  = (number1, number2,number3, number4)=>{
    let a =number1+number2;
    if(number3){
            a+= number3-5;//
    }
    else if(number4){
        a+=number4*7;
    }
    return a;
};
const aaa=()=>{};
const bbb=()=>{};

const main={
    aaa,bbb
}

export default main ;
console.log(math(1,5,45,78)); 
export{aaa,bbb};