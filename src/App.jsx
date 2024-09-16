import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';
import Navmenu from './components/Navmenu';

function App() {


  return (
    <>
    <Navmenu></Navmenu>
    <img className='baner' src="https://images.pexels.com/photos/164175/pexels-photo-164175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="foto del cielo" />
    <h1 className='text-center fjalla-one-regular'>Consulta el clima de cualquier parte del mundo</h1>
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
