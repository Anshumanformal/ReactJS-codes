// import React from 'react';
// import Card from './Cards';

// const App = () => {
//     return (
//         <>
//             <Card
//                 imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
//                 title="A Netflix Original Series"
//                 sname="DARK"
//                 link="https://www.google.com"
//             />

//             <Card
//                 imgsrc="https://wallpapercave.com/wp/wp4056411.jpg"
//                 title="A Netflix Original Series"
//                 sname="DARK"
//                 link="https://anshumanranjan.wordpress.com"
//             />
//         </>
//     )
// }

// export default App;
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//React Hooks implementation.
// import React, {useState} from 'react';

// const App = () => {
//  // Declare a new state variable, which we'll call "count".
// // The destructured variables have two things: first one is state Object(i.e. current data) and second one is updated function(i.e. updated data).
//  const [count, setCount] = useState(0);
//  return (
//      <>
//      <p>You clicked {count} times </p>
//      <button onClick={()=> setCount(count - 1)} >
//          Click Me
//      </button>
//      </>
//  )
// }


// export default App;

//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

//Get current time after clicking the button or refreshing the page.
// import React, {useState} from 'react';

// let date = new Date().toLocaleTimeString();

// const App = () => {
//   const [currDate, updatedDate] = useState(date);

//   const IncDate = ()=>{
//       date = new Date().toLocaleTimeString();
//       updatedDate(date);
//   }

//   return (<>
//    <p>{date}</p>
//    <button onClick = {IncDate} >Click Me</button>
//    </>
//   )
// };

// export default App;

//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//Create a real-time clock.

// import React, {useState} from 'react';

// const App = ()=>{
//     let time = new Date().toLocaleTimeString();
//     let [ctime, setCtime] = useState(time);

//     // const updateTime = () => {
//     //     time = new Date().toLocaleTimeString();
//     //     setCtime(time);
//     // }
//     // setInterval(updateTime,1000);
//     setInterval(() => {
//         time = new Date().toLocaleTimeString();
//         setCtime(time);
//     }, 1000);
//     return (
//     <>
//         <h1>{ctime}</h1>
//     </>
//     )
// }

// export default App;
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//Handling Events in ReactJS.
import React, { useState } from 'react';

const App = () => {
    const color = 'aqua';
    let [bg, setBg] = useState(color);
    let [name, setName] = useState('Click Me');

    const bgChange = () => {
        let newBgColor = '#34495e';
        let newName = 'Wow';
        setBg(newBgColor);
        setName(newName);
    }

    const bgChange2 = () =>{
        setBg(color);
        setName('Click Me');
    }

    return (
        <>
            <div style={{ background: bg }}>
                <button style={{ background: 'red', color: 'white' }} onMouseEnter = {bgChange} onMouseLeave = {bgChange2} /* onClick={bgChange}  onDoubleClick = {bgChange2} */ > {name} </button>
            </div>
        </>
    )
}

export default App;

//------------------------------------------------------------------------------------