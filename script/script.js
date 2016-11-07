
//setBackgroundImage() is used to make an inline image the background image of an element.
function setBackgroundImage(params) {
 //params is an object which will have sectionID and image src   
    var config = {
        id: '#'+ params.sectionId,
        source: params.imageSrc, 
    }
    
    
    //setting the image css property background image
    var cssAttr = {
        "background-image":'url(' + config.source + ')'
    };
 
    //using jQuery , setting the background image of section.
    $(config.id).css(cssAttr); 
} 


var imgSrc = document.getElementById("backgrnd-img-src").childNodes[1].src;
var secId = document.body.childNodes[3].id; 
var paramsFromHtml = {
    sectionId: secId,
    imageSrc: imgSrc
}
setBackgroundImage(paramsFromHtml);


//Below are the different ways to get the src attribute of <img> tag. which is essentially using different js selectors.

//1.) children will get all the child elements as a list.
var imgSrc1 = document.getElementById("backgrnd-img-src").children[0].src;
console.log("1 : "+ imgSrc1);

//2.) ChildNodes will get all child elements + comments + space as a list
var imgSrc2 = document.getElementById("backgrnd-img-src").childNodes[1].src;
console.log("2 : " + imgSrc2);

//3.) firstElementChild will get the first child element
var imgSrc3 = document.getElementById("backgrnd-img-src").firstElementChild.src; 
console.log("3 : " + imgSrc3);

//4.) firstChild will get the first child node - which can an element/text/comment
//In this case it is a space which is represented as text,so this won't work in this case.
//equal to zero th array element in the ChildNodes list - option-No:2
var imgSrc4 = document.getElementById("backgrnd-img-src").firstChild.src;
console.log("4 : " + imgSrc4);



//5.)
var imgSrc7 = document.getElementById("inline-img").src;
console.log("5 : " + imgSrc7);

//6.)
var imgSrc8 = document.getElementsByClassName("img-class")[0].src;
console.log("6 : " + imgSrc8);

//7.)
var imgSrc9 = document.getElementsByTagName('img')[0].src;
console.log("7 : " + imgSrc9);

//8.)
var imgSrc10 = document.getElementsByName("img-name")[0].src;
console.log("8 : " + imgSrc10);


//querySelector , any css selector can be used. like a combination of class or pseudo selector. 
//This will return the first matched element. a few css selector options are shown below.

//8.)
var imgSrc11 = document.querySelector("#inline-img").src;
console.log("9 : " + imgSrc11);

//9.)
var imgSrc12 = document.querySelector(".img-class").src;
console.log("10 : " + imgSrc12);

//10.)
var imgSrc13 = document.querySelector("img").src;
console.log("11 : " + imgSrc13);


//querySelectorAll , any css selector can be used. like a combination of class or pseudo selector. return a node list

//11.)
var imgSrc15 = document.querySelectorAll("#inline-img")[0].src;
console.log("12 : " + imgSrc15);

//12.)
var imgSrc16 = document.querySelectorAll(".img-class")[0].src;
console.log("13 : " + imgSrc16);

//13.)
var imgSrc17 = document.querySelectorAll("img")[0].src;
console.log("14 : " + imgSrc17);

//14.) -- Another option is using getAttribute method. This will result in just the src content, without the domain part. 
var imgSrc6 = document.getElementById("inline-img").getAttribute('src');
console.log("15 : " + imgSrc6);

