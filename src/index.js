// let react = require('react');
// let ReactDOM = require('react-dom');

//ES6 way of importing React.
// import React from 'react';
// import ReactDOM from 'react-dom'

//1st method.
// ReactDOM.render(
//   <h1>Hello World</h1>,
//   document.getElementById("root")
// );

//Second Method.
// ReactDOM.render(
//   React.createElement("h1",null, "Hello World How are you"),
//   document.getElementById("root")
// );


//Third method. Using pure JS.
// let h1 = document.createElement("h1");
// h1.innerHTML = "I am fine, Thank you";
// document.getElementById("root").appendChild(h1);

//Returning multiple JSX elements from React.render method.
// ReactDOM.render(
//   <>
//     <h1>Hello World how are you</h1>
//     <p> This is a paragraph.</p>
//     <h2>I am fine, thank you</h2>
//   </>,
//   document.getElementById("root")  
// );

// ---------------------------------------------------------------------------------------

//Video 9
// Web application to display list of 5 Netflix series using JSX.
// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <>
//     <p>This is a list of 5 netlix series</p>
//       <ol>
//         <li>Dark</li>
//         <li>Ozark</li>
//         <li>Mr. Robot</li>
//         <li>Extra Curricular</li>
//         <li>My Holo Love</li>
//       </ol>
//   </>    
//   ,document.getElementById("root")
// );

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

//Video 10
//Javascript Expressions in JSX.
// import React from 'react';
// import ReactDOM from 'react-dom';

// const name = "Hello WOW"
// const firstName = "Hello"
// const lastName = "WOW"
/*Pair of curly braces only return a value, as they accept only an expression.*/
// const firstNumber = 2;
// const secondNumber = 5;
// const sum = firstNumber + secondNumber;
// const difference = Math.abs(firstNumber - secondNumber);
// const product = firstNumber * secondNumber;
// const quotient = firstNumber / secondNumber;

// ReactDOM.render(
//   <>
//     <h1>The fullname of this person is {name}</h1>
//     <h1>{`The firstName is ${firstName} and lastName is ${lastName}`}</h1>
//     <h2>The sum of {firstNumber} and {secondNumber} is {sum} </h2>
//     <h2>The absolute difference of {firstNumber} and {secondNumber} is {difference} </h2>
//     <h2>The product of {firstNumber} and {secondNumber} is {product} </h2>
//     <h2>The quotient of {firstNumber} and {secondNumber} is {quotient} </h2>
//   </>
//   ,document.getElementById("root")
// );

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

//ReactJS challenge: Display current date and time in JSX in ReactJS.
//Tasks:
// 1. Create a react app and add 1 sample h1 element.
// 2. Add a paragraph element with current date.
// 2. Add a paragraph element with current time.

// import React from 'react';
// import ReactDOM from 'react-dom';

// const currDateinISOString = new Date().toISOString();
// const currDateinUTCString = new Date().toUTCString();
// const currDateinDateString = new Date().toDateString();
// const currDateinTimeString = new Date().toTimeString();
// const currTime = new Date().toLocaleTimeString();


// ReactDOM.render(
//   <>
//   <h1>This is a sample H1 element.</h1>
//   <p>{`The currDateinISOString is: ${currDateinISOString}`}</p>
//   <p>{`The currDateinUTCString is: ${currDateinUTCString}`}</p>
//   <p>{`The currDateinDateString is: ${currDateinDateString}`}</p>
//   <p>{`The currTimeinTimeString is: ${currDateinTimeString}`}</p>
//   <p>{`The currTime is: ${currTime}`}</p>
//   </>
//   ,document.getElementById("root"));

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

// JSX attributes in ReactJS. //HTML attributes vs JSX attribute in ReactJS.
// import React from 'react';
// import ReactDOM from 'react-dom';

// const name  = "WOW";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/500/300";
// const img3 = "https://picsum.photos/600/300";
// const myWebsiteLink = "https://anshumanranjan.wordpress.com";

// ReactDOM.render(
//   <>
//   <h1>My name is {name} </h1>
//   <img src = {img1} alt = "Random images" />
//   <img src = {img2} alt = "Random images" />
//   <a href = {myWebsiteLink} target = "__anshu"/*We can write "anshu" also. This will also open the link in the new tab. But if we omit the target part then the link will be open in the same tab.*/ >
//     <img src = {img3} alt = "Random images" />

//   </a>
//   </>,
// document.getElementById("root"));

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

//CSS styling & importing CSS files in ReactJS | Class Vs ClassName in ReactJS.
//Class is a reserved keyword in ReactJS. Instead of that, we use className.

// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";

// const name  = "WOW";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/500/300";
// const img3 = "https://picsum.photos/600/300";
// const myWebsiteLink = "https://anshumanranjan.wordpress.com";

// ReactDOM.render(
//   <>
//   <h1 className = "heading">My name is {name} </h1>
//   <div className = "img_div">
//   <img src = {img1} alt = "Random images" />
//   <img src = {img2} alt = "Random images" />
//   <a href = {myWebsiteLink} target = "__anshu"/*We can write "anshu" also. This will also open the link in the new tab. But if we omit the target part then the link will open in the same tab.*/ >
//     <img src = {img3} alt = "Random images" />
//   </a>
//   </div>
//   </>,
// document.getElementById("root"));

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

//Inline CSS in ReactJS.
//Here, we need to use the keyword style whether we are using HTML styling or JSX styling.

// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";

// const name  = "WOW";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/500/300";
// const img3 = "https://picsum.photos/600/300";
// const myWebsiteLink = "https://anshumanranjan.wordpress.com";

// //Here, the same CSS styling is copied from the ./index.css file but here camelCase convention is used. Then the complete object is passed wherever required.
// //We can also write this inline CSS in the CSS folder and then import export that here.
// const heading = {
//   color : '#df1b35',
//   textAlign : 'center',
//   textTransform: 'capitalize',
//   fontWeight: 'bold',
//   textShadow: '0px 2px 4px #ffe9c5',
//   margin : '70px 0',
//   /* Using the google font specified in the index.html file.*/
//   fontFamily: "'Nunito', sans-serif"
// }

// ReactDOM.render(
//   <>
//   <h1 style = {heading} >My name is {name} </h1>
//   <div className = "img_div">
//   <img src = {img1} alt = "Random images" />
//   <img src = {img2} alt = "Random images" />
//   <a href = {myWebsiteLink} target = "__anshu"/*We can write "anshu" also. This will also open the link in the new tab. But if we omit the target part then the link will open in the same tab.*/ >
//     <img src = {img3} alt = "Random images" />
//   </a>
//   </div>
//   </>,
// document.getElementById("root"));

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

/*
ReactJS mini-project 1.
1. Create a react app from scratch.
2. Show heading with greeting as 'Hello Sir ' and based on time of the day dynamically assign values.
3. Apply CSS in the greeting.
4. Dynamically only change the color of greeting parts. 
*/

// import React from 'react';
// import ReactDOM from 'react-dom';

// let greeting = "";
// const hourOfDay = new Date().getHours();
// // const hourOfDay = new Date(new Date().setHours(7)).getHours();

// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/500/300";
// const img3 = "https://picsum.photos/600/300";
// const myWebsiteLink = "https://anshumanranjan.wordpress.com";

// const greetingCSS = {
//   textAlign : 'center',
//   textTransform: 'capitalize',
//   fontWeight: 'bold',
//   textShadow: '0px 2px 4px #ffe9c5',
//   margin : '70px 0',
//   fontFamily: "'Nunito', sans-serif"
// }

// if(hourOfDay < 12){
//   greeting += "Good Morning";
//   greetingCSS.color = '#df1b35'; 
// }
// else if(hourOfDay <= 15){
//   greeting += "Good Afternoon";
//   greetingCSS.color = '#df1b21'; 
// }
// else if(hourOfDay <= 17){
//   greeting += "Good Evening";
//   greetingCSS.color = '#df1b90'; 
// }
// else if((hourOfDay >= 19) && (hourOfDay <= 24)){
//   greeting += "Good Night";
//   greetingCSS.color = '#df1b85'; 
// }
// ReactDOM.render(
//   <>
//    <h1>Hello Sir, <span style = {greetingCSS}>{greeting}</span>  </h1>

//     <img src = {img1} alt = "Random images" />
//     <img src = {img2} alt = "Random images" />
//     <a href = {myWebsiteLink} target = "__anshu"/*We can write "anshu" also. This will also open the link in the new tab. But if we omit the target part then the link will open in the same tab.*/ >
//       <img src = {img3} alt = "Random images" />
//     </a>
//   </>,
// document.getElementById('root'));

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

//React Components.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />,document.getElementById("root"));

// ---------------------------------------------------------------------------------------