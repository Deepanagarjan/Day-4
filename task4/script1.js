// day 3 task:

// 2.use the rest countries of API URL and display all the countries of flag in console

var request=new XMLHttpRequest();                                    //CREATE XHR object
request.open("GET","https://restcountries.com/v3.1/all",true)       //opening connection to server
request.send();                                                    //intiating a bridge to server/sending request
 request.onload=function(){
var data=request.response;
// console.log(data);
var result=JSON.parse(data)
// console.log(result)
for(var i=0;i<result.length;i++){
console.log("flag:","+"+result[i].name.common)       //flags


3.// console.log("Countryname:"+""+result[i].name.common,"Region:"+" "+result[i].region,"Subregion: "+" "+result[i].subregion,"Population:"+" "+result[i].population);


}                                                                //server response
}




