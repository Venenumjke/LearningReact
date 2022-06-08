import React, { useState } from 'react'
import Counter from '../src/components/Counter'
import ClassCounter from '../src/components/ClassCounter'
function App() {
  const [value, setValue] = useState('Текст в инпуте')

  return (
   <div className='app'>
     <div className='post'>
       <div className='post__content'>
         <stropng>1. Javascript</stropng>
         <div>
           Javascript - язык програмированния
         </div>
       </div>
       <div className='post__btns'>
         <button>Удалить</button>
       </div>
     </div>
     <Counter/>
   </div>
  );
}

export default App;
