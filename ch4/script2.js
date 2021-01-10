
//1급 객체(변수에 저장, 함수의 파라메터 전달, 최상단위치)
function start(){
    
    console.log(1,this);
    hello(); 
    

    function hello(){
        var num = 10;
        console.log(this.num);
    }

}

//window.start(); window는 생략가능 모두 window가 붙어있음
start();

//자바스크립트에서의 this는 호출한 놈의 this.