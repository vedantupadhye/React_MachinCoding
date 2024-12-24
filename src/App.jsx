// import React, { useState } from 'react';

// export default function Home(){

// const [isOpen,setIsOpen] = useState("false");

// const renderContent = () => {
//     return(
//       <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
//         Itaque sint incidunt nam autem fugit, laudantium eveniet soluta 
//         numquam, consectetur corrupti sunt similique! Nobis aperiam unde, 
//         sint et doloribus facilis facere at ducimus repellendus eaque blanditiis!</div>
//     )
// }

//   return(
//     <div className="h-screen bg-black text-white items-center">
//       <div className= "p-9" onClick={()=>setIsOpen(true)}>
//         <h1 className="text-2xl">DropDown Heading</h1>
//       </div>
     
//     </div>
//   )
// }

import React, { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTextVisibility = () => {
    setIsOpen(!isOpen);
// !isOpen is a logical operator that returns the opposite of the current value of isOpen.
//  true -> false, false ->true
  };

  return (
    <div>
      <h1 onClick={toggleTextVisibility}>DropDown Heading</h1>
      {/* using conditional if else  */}
        {/* {
          isOpen ? (
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          ) : null
        } */}
        {/* using conditional && operator, When isOpen is true, the expression after the && (<p>...</p>) will be rendered in the output. */}
       {
        isOpen && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       }
    </div>
  );
}

export default App;