import './App.css';
import { Routes , Route } from 'react-router-dom'
import Headre from './components/Headre/Headre'
import { Middle } from './components/avtorizasy/Middle';
import { Registrations }  from './components/registration/Registrations';
import { Reestablish } from './components/reestablish/Reestablish'
import { Section } from './components/Section/Section';


function App() {
  return (
     <div>
      <Headre/>
      {/* <Reestablish/> */}

      {/* <Section/>
      <Footer/> */}
      {/* <Middle/>  */}
      {/* <Registrations/> */}
 

      <Routes>
        <Route path='/' element={<Registrations/>} /> 
        <Route path='/registrations/:sectionId/' element={<Registrations/>} />  
        <Route path='/registrations' element={<Registrations/>}/>    
        <Route path="/middle" element={<Middle/>} />
        <Route path='/section' element={<Section/>} />
        <Route path='middle/:reestablishId/' element={<Reestablish />}/> 
        <Route path='/reestablish' element={<Reestablish/>}/>
      </Routes>
     </div>
  );
}

export default App;
