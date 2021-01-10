
//자료형(x) - 원시자료형(x)
//크기가 정해져있는 타입이 없음(동적)
//모든 변수는 래퍼런스
//동적 언어
 
//자료형 => 객체(인터프리터)
//데이터 타입이 없음

var a1 =10;
var a2 =10;
var a3 ="문자열";
var a4 ='문자열'
var a5 = true; //false
var a6 =[1,2,"문자"];  //컬렉션
console.log(a6);
console.log(a6[0]);
var a7 = {
	username :"ssar",
	age:10,
	point:10.5,
	hobby:["농구","축구"]
};

console.log(a7);
console.log(a7.hobby[1]);

function hello(n){
    console.log("hello");
    return 1;
}
 
var num = hello(10);
console.log(num);


var a8 = hello;
a8(); //변수 안 넣어도 되고 넣어도 됨. 자유분방

var a9 = function start(){
    console.log("a9 실행됨");
};

a9();

var a9 = function(){ //익명함수
    console.log("a9 실행됨");
};

//ECMA 2016버전부터 
var a9 = ()=>{ //익명함수
    console.log("a9 실행됨");
};

//typescript는 데이터타입이 있음.