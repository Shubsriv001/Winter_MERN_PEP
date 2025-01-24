// ---------------------------------------------------------------------------------------------
// window.console.log("hello");
// window.console.log(window);
// window.console.log(document);

// document.body.children[0].innerText;
// console.log(document.body.children[0].innerText);
// // DOM Manipulation :: Changing something in DOM using Javascript (document keyword : DOM API)
// document.body.children[0].innerText = "Done for the first half!";
// console.log(document.body.children[0].innerText);

// THIS is very tough and messy way to handle things
// document.body.children[1].children[0].children[0].innerText = "Blog 3";

// ---------------------------------------------------------------------------------------------
// document.body.style.backgroundColor = "red";
// ------------------------------------

// 1. getElementsByTagName --> returns a iterable (NOT ARRAY but iterable)
// event if that tag is not present, you will get iterable of 0 length --> []

// const titles = window.document.getElementsByTagName("h4");
// console.log(titles);

// titles[0].style.backgroundColor = "yellow";
// titles[1].style.backgroundColor = "lime";

// -------------------------------------------
// const headings = window.document.getElementsByTagName("h1");
// console.log(headings);

// headings[1].style.backgroundColor = "red";
// undefined is a placeholder for upcoming value
// or refers that this value is not present currently
// -------------------------------------------

// -------------------------------------------
// window is a global object (so, even if we don't explicitly mention is, it will be handled properly)
// const paras = document.getElementsByTagName("p");
// // window.console.log(paras[1]);
// console.dir(paras[0]);
// paras[0].style.border = "1px solid red";
// paras[0].style.padding = "10px";

// --------------------------------------------
// 2. getElementById --> return a SINGLE element or NULL
// const singlePara = document.getElementById("text-1");
// console.log(singlePara);
// singlePara.innerHTML = "Hello, I am custom text <b><u>coming from JS</u></b>";

// ----------------------------------------------

// 3. getElementsByClassName --> returns a iterable(HTMLCollection) (NOT ARRAY but iterable)
// event if that tag is not present, you will get iterable of 0 length --> []

// const elements = document.getElementsByClassName("blog-text");
// console.log(elements);

// elements[0].innerHTML = "Hello, I am custom text <b><u>coming from JS</u></b>";
