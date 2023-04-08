
import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import './App.css'
import Header from './Component/Header/Header'
import { useEffect } from 'react';

function App() {
  const loc = useLocation();
  // console.log(loc);
  useEffect(() => {
    if(loc.pathname === '/'){
      document.title = 'Book-home'
    }
    else{
      document.title = `Book ${loc.pathname.replace('/', '-')}`
    }
    if(loc.state){
      document.title = loc.state
    }
  }, [loc.pathname])
  const navigation = useNavigation();
  return (
    <div className="App">
      <Header></Header>
      {
        navigation.state === 'loading' ? <div className='flex justify-center items-center h-[calc(100vh-60px)]'><h2 className='text-3xl font-normal'>Pr</h2><div className='w-6 h-6 border-4 md:w-10 md:h-10 md:border-8 border-dashed rounded-full border-blue-500 animate-spin'></div><h2 className='text-3xl font-normal'>cessing</h2></div> : ''
      }
      <Outlet></Outlet>
    </div>
  )
}

export default App
