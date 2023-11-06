import React, { useState } from 'react'
import getData from './utils/getData'
import './App.css'
//components
import People from './components/people'
import Employment from './components/employment'

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
        <h1>Welcome friend</h1>
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
        <People/>
        <Employment/>
      </section>
    </>
  )
}

export default App
