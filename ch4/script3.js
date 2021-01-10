var user = {
    hello: function(){
        console.log(1,this);
    },
    start: function(){
        console.log(2,this);
    },

};

user.hello();
user.start();

//this는 호출하는 위치에 따라 달라진다.



var a  = ()=>{
    console.log(this);
    console.log(2+3);
}

a();

var b =()=> 10; //한줄만 있을 때, return과 중괄호 생략가능 

var num = b();
console.log(num);

// var check = function(n){
//     if(n>10){
//         return 100;
//     }else{
//         return -100;
//     }
// };

//화살표 함수 가독성
var check = (n)=>(n>10 ? 100: -100);
var result  = check(5);

console.log(result);