
import { Outlet, useNavigation } from 'react-router-dom'
import './App.css'
import Header from './Component/Header/Header'

function App() {
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
