import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario
 from './components/Formulario';
function App() {


  return (
    <>
    <h1 className='text-center'>Informacion del clima de tu ubicacion</h1>
     <section className='container'>
      <div></div>
      <div>
      <Formulario></Formulario>
      </div>
     </section>
    </>
  )
}

export default App
