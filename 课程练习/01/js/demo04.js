
//基本语法回顾
var x;//变量声明 区分声明与定义（对比其他语言 JS的语言特点，动态类型、弱类型）语句
x = 23;//表达式作为语句时（赋值表达式语句）

//条件语句
if(x>22){
    x+=2;
}else{
    console.log("x 不大于 22");
}

var xx = 234;
if(234 == xx){ //为什么要反写？？？？  类似于赋值，不反写的话，可能造成判断错误
    console.log("相等");
}

//思考
console.log(a);//2
if(true){
    var a = 2;
}
console.log(a);//2

console.log(b);//underfined
if(false){
    var b = 3;
}
console.log(b);//underfined


//循环语句
for(var i=0;i<3;i++){
    console.log("i:",i);
}
console.log(i);// i:0  i:1  i:2    3

//函数定义及调用   
//提问：函数有几种定义方式？？？？？
/*
1.function语句（声明函数）
2.函数表达式（函数字面量）
3.Function构造函数：
*/
function max(x,y) {
    return x>y?x:y;
}
console.log(max(2,3));