

import './App.css'
import './output.css'
import Buttons from './components/Buttons'

function App() {


  return (
    <>
      <div className="Container">
        <nav className="text-6xl ml-28 mt-2 bg-slate-400 flex w-5/6 rounded-3xl">
          <img className="ImgText" src="TeXTurn.jpg" alt="" />
          <div className="font-pressstart2p">
            TeXTurn
          </div>
          
          {/* <div className="text-2xl mt-5 ml-10 ">About</div> */}
        </nav>


        <Buttons />
      </div>
    </>
  )
}

export default App
