import { useEffect, useState } from "react";
import problems from '../data/problems.js'
import Box from '../components/Box.jsx'

export default function Practice() {
    
 
  const[hide,setHide] = useState(false);
  const[hide2,setHide2] = useState(false);
  const[id,setId] = useState(4);
  const[ref,setRef] = useState(false);

  const handleListing1 = ((e)=>{
    // setId(e.target.id)
    console.log(e.target.id);
    setId(e.target.id);
     setRef(!ref);
     setHide(!hide)
   })
  const handleListing2 = ((e)=>{
    // setId(e.target.id)
    console.log(e.target.id);
    setId(e.target.id);
     setRef(!ref);
     setHide2(!hide2)
   })

  useEffect(()=>{
    // toggle1();
  },[ref])
  
  const toggle1 = ()=>{
     setHide(!hide);
  }


  const toggle2 = ()=>{
      setHide2(!hide2)
  }



  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-gray-200 p-4 space-y-3 h-screen overflow-y-auto sticky top-0">
    <h2 className="text-xl font-bold mb-4">Problems</h2>
    <ul className="space-y-2">
      <li>
        <div
          onClick={toggle1}
          className="hover:text-white cursor-pointer border rounded border-gray-500 text-red-100 flex pl-5"
        >
          DSA Problems
        </div>
      </li>
      <div
        className={`min-h-32 w-48 flex flex-col pl-5 gap-y-1 text-sm ${
          !hide && "hidden"
        }`}
      >
          {/* <div className="text-white cursor-pointer " id="0"  
           onClick={handleListing}
          >
             School
          </div> */}

          <div className="text-white cursor-pointer hover:bg-yellow-100 hover:text-black rounded-xl max-w-32 pl-8" id="1"
          onClick={handleListing1}
          >
              Easy
          </div>

          <div className="text-white cursor-pointer hover:bg-yellow-100 hover:text-black rounded-xl max-w-32 pl-8" id="2"
          onClick={handleListing1}
          >
              medium
          </div>

          <div className="text-white cursor-pointer hover:bg-yellow-100 hover:text-black rounded-xl max-w-32 pl-8" id="3"
          onClick={handleListing1}
          >
              hard
          </div>
          <div className="text-white cursor-pointer hover:bg-yellow-100 hover:text-black rounded-xl max-w-32 pl-8" id="4"
          onClick={handleListing1}
          >
              All
          </div>
          

        </div>

         <li>
        <div
          onClick={toggle2}
          className="hover:text-white cursor-pointer border rounded border-gray-500 text-red-100 flex pl-5"
        >
          SQL Problems
        </div>
      </li>

       <div
        className={`min-h-32 w-48 flex flex-col pl-5 gap-y-1 text-sm ${
          !hide2 && "hidden"
        }`}
      >
          {/* <div className="text-white cursor-pointer " id="0"  
           onClick={handleListing}
          >
             School
          </div> */}

          <div className="text-white cursor-pointer hover:bg-yellow-100 hover:text-black rounded-xl max-w-32 pl-8" id="1"
          onClick={handleListing2}
          >
              Easy
          </div>

          <div className="text-white cursor-pointer hover:bg-yellow-100 hover:text-black rounded-xl max-w-32 pl-8" id="2"
          onClick={handleListing2}
          >
              medium
          </div>

          <div className="text-white cursor-pointer hover:bg-yellow-100 hover:text-black rounded-xl max-w-32 pl-8" id="3"
          onClick={handleListing2}
          >
              hard
          </div>
          <div className="text-white cursor-pointer hover:bg-yellow-100 hover:text-black rounded-xl max-w-32 pl-8" id="4"
          onClick={handleListing2}
          >
              All
          </div>
          

        </div>

        </ul>
        
      </aside>

      <main className="flex-1 bg-gray-900 text-white p-6 flex flex-col gap-y-2 ">
        {problems.map((item, index) => (
    (id == 4 || id == item.id) &&  (<div key={index}>
      <Box
        content={item.content}
        difc={item.difc}
        link={item.link}
      />
    </div>)
  ))}
      </main>
    </div>
  );
}
