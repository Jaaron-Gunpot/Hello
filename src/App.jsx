import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import getData from './utils/getData'
import './App.css'
//components
import People from './components/people'
import Employment from './components/employment'
import Minors from './components/minors'
import Degrees from './components/degrees'
import Navbar from './components/navbar';
import Error from './components/Error';

function App() {
  //var
  //const [getter(variable),setter(function to change the variable)]=useState(init(initial value of the variable))
  const [loaded, setLoaded] = useState(false)
  const [aboutObj, setAboutObj] = useState()
  //functions
  React.useEffect(() => {
    getData('about/')
      .then((returnedJSON) => {
        //console.log(returnedJSON);
        setAboutObj(returnedJSON);
        setLoaded(true);
      });
  }, [])
  //render
  if (!loaded) return (
    <>
      <h1>Hi friend</h1>
      <h2>Loading...</h2>
    </>
  );


  return (
    <>
      <section className='stick'>
        <h1>Welcome to TIR</h1>
        {/*menu maybe*/}
      </section>
      <section className='App'>
      <section className='About'>
                  <h1>{aboutObj.title}</h1>
                  <h3>{aboutObj.description}</h3>
                  <div className='aboutQuote'>
                    <h5 className='quote'>{aboutObj.quote}</h5>
                    <h5>-{aboutObj.quoteAuthor}</h5>
                  </div>
                </section>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navbar/>}>
              <Route index element={<People/>}/>
              <Route path='/people' element={<People />} />
              <Route path='/employment' element={<Employment />} />
              <Route path='/minors' element={<Minors />} />
              <Route path='/degrees' element={<Degrees />} />
              <Route path='*' element={<Error/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>

      </section>
    </>

  )
}

export default App
