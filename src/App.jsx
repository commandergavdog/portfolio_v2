import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import CardsContainer from './components/CardsContainer';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className='flex flex-col justify-center items-center lg:hidden'>
        <Nav />
        <Hero />
        <CardsContainer />
        <Footer />
      </div>






      <div className='hidden lg:flex h-screen w-screen flex-row'>

        <div className='flex flex-col w-1/2 h-full justify-between items-center'>
          <Nav />
          <Hero />
          <Footer />
        </div>

        <div className='flex flex-col w-1/2 items-center box-shadow'>
          <div className="py-10 sticky top-0 bg-white z-10 w-full text-center box-shadow no-left-shadow">
            <h3 className='text-2xl'>Work & Projects</h3>
          </div>

          <div className='overflow-y-auto h-full w-full'>
            <CardsContainer />
          </div>

        </div>
      </div>
    </>
  )
}

export default App;
