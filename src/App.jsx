// import { useState, useCallback, useEffect, useRef } from 'react'

// function App() {
//   const [length, setlength] = useState(8)
//   const [number, setnumber] = useState(false)
//   const [character, setcharacter] = useState(true)
//   const [password, setpassword] = useState("")

//   // Using Useref hook for the purpose of copying the password 
//   const passwordref = useRef(null)

//   const passwordgenerator = useCallback(() => {
//     let pass = ""
//     let str = "ABCDERFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if (number) str += "0123456789"
//     if (character) str += "! # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } `"

//     for (let i = 1; i <= length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1)
//       pass += str.charAt(char)
//     }

//     setpassword(pass)
//   }, [length, number, character, setpassword])

//   const copypasswordtoclip = useCallback(() => {
//     passwordref.current?.select() // this piece of code is to show that the the current password is selected 
//     passwordref.current?.setSelectionRange(0, 4); // this piece fo code is used to select the range of the code like 3 char.,4 char. etc.
//     window.navigator.clipboard.writeText(password)
//   }, [password])

//   useEffect(() => {
//     passwordgenerator()
//   }, [length, number, character, passwordgenerator])

//   return (
//     <>
//       <div className='flex justify-center items-center h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black'>
//         <div className='w-full max-w-lg mx-auto shadow-lg rounded-xl border-2 border-gray-700 bg-gray-800 text-white px-8 py-6'>
//           <h1 className='text-center text-2xl font-bold mb-6'>
//             Password Generator
//           </h1>

//           <div className='bg-gray-900 rounded-lg p-4 shadow-inner flex items-center'>
//             <input
//               type='text'
//               value={password}
//               className='outline-none w-full py-2 px-4 bg-gray-800 text-gray-300 rounded-l-lg text-center flex-grow'
//               placeholder='Generated Password'
//               readOnly
//               ref={passwordref}
//             />  

//             <button
//               onClick={copypasswordtoclip}
//               className='bg-slate-600 hover:bg-green-400 text-white font-medium py-2 px-4 rounded-r-lg shadow-md transition duration-200 ease-in-out'>
//               Copy
//             </button>

//           </div>
//           <div className='flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:gap-x-4 items-center justify-between'>
//             <div className='w-full'>
//               <input
//                 type='range'
//                 min={6}
//                 max={100}
//                 value={length}
//                 className='w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500'
//                 onChange={(e) => { setlength(e.target.value) }}
//               />
//               <label className='block text-sm font-medium text-gray-300 mb-2'>Length: {length}

//               </label>
//             </div>

            
//             <div className='flex items-center gap-x-1'>
//               <input
//                 type='checkbox'
//                 defaultChecked={number}
//                 id='numberInput'
//                 onChange={() => {
//                   setnumber((prev) => !prev);
//                 }}
//               />
//               <label htmlFor="numberInput" className='ml-2 text-sm text-gray-300'>
//                 Numbers
//               </label>
//             </div>
//             <input
//               type='checkbox'
//               defaultChecked={number}
//               id='numberInput'
//               onChange={() => {
//                 setnumber((prev) => !prev);
//               }}
//             />
//             <label htmlFor="numberInput" >
//               Characters
//             </label>


//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App


// This part of the code has some modifications in css from chatgpt i repeat only css modifications 
import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [number, setnumber] = useState(false)
  const [character, setcharacter] = useState(true)
  const [password, setpassword] = useState("")

  // Using Useref hook for the purpose of copying the password 
  const passwordref = useRef(null)

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDERFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (character) str += "! # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } `"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)
  }, [length, number, character, setpassword])

  const copypasswordtoclip = useCallback(() => {
    passwordref.current?.select() // this piece of code is to show that the the current password is selected 
    passwordref.current?.setSelectionRange(0, 4) // this piece fo code is used to select the range of the code like 3 char.,4 char. etc.
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordgenerator()
  }, [length, number, character, passwordgenerator])

  return (
    <>
      <div className='flex justify-center items-center h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black'>
        <div className='w-full max-w-lg mx-auto shadow-lg rounded-xl border-2 border-gray-700 bg-gray-800 text-white px-8 py-6'>
          <h1 className='text-center text-2xl font-bold mb-6'>
            Password Generator
          </h1>

          {/* Password input and copy button */}
          <div className='bg-gray-900 rounded-lg p-4 shadow-inner flex items-center'>
            <input
              type='text'
              value={password}
              className='outline-none w-full py-2 px-4 bg-gray-800 text-gray-300 rounded-l-lg text-center flex-grow'
              placeholder='Generated Password'
              readOnly
              ref={passwordref}
            />
            <button
              onClick={copypasswordtoclip}
              className='bg-green-700 hover:bg-green-400 text-white font-medium py-2 px-4 rounded-r-lg shadow-md transition duration-200 ease-in-out'>
              Copy
            </button>
          </div>

          {/* Length slider and checkboxes */}
          <div className='mt-4'>
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
              {/* Length Slider */}
              <div className='flex flex-col w-full sm:w-1/2'>
                <input
                  type='range'
                  min={6}
                  max={100}
                  value={length}
                  className='w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500'
                  onChange={(e) => setlength(e.target.value)}
                />
                <label className='block text-sm font-medium text-gray-300'>
                  Length: {length}
                </label>
              </div>

              {/* Checkboxes for Numbers and Characters */}
              <div className='flex gap-4 sm:ml-4'>
                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    defaultChecked={number}
                    id='numberInput'
                    onChange={() => setnumber(prev => !prev)}
                    className='cursor-pointer'
                  />
                  <label htmlFor="numberInput" className='ml-2 text-sm text-gray-300'>
                    Numbers
                  </label>
                </div>

                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    defaultChecked={character}
                    id='characterInput'
                    onChange={() => setcharacter(prev => !prev)}
                    className='cursor-pointer'
                  />
                  <label htmlFor="characterInput" className='ml-2 text-sm text-gray-300'>
                    Characters
                  </label>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

