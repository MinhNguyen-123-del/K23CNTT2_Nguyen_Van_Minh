var x=100;//global
function varDemo(){
    console.log("x ben trong ham:",x);

}
//
console.log("x ben ngoai ham:",x);
//Thuc thi ham
varDemo();
//y ben ngoai ham
function fn_demo(){
    var y=200;
    console.log("y ben trong ham:",y);
}
//y ben ngoai ham
console.log("y ben ngoai ham:",y);//error