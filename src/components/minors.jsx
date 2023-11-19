import React, { useState } from 'react'
import getData from '../utils/getData'
import MinorModal from './minorsModal'
import './minors.css'

const Minors = () => {
    //boilerplate for getting the data
    const [loaded, setLoaded] = useState(false)
    const [minorsObj, setMinorsObj] = useState()
    React.useEffect(() => {
        getData('minors/')
            .then((returnedJSON) => {
                console.log('Minors:', returnedJSON);
                setMinorsObj(returnedJSON);
                setLoaded(true);
            });
    }, [])
    if (!loaded) {
        return (
            <>
                <h1>Minors</h1>
                <h3>Loading</h3>
            </>
        )
    }

    return (
        <>
            <h1>
                Explore Our Minors
            </h1>
            <div id='minor-holder'>
                {/* Make the minors into a row or something */}
                {minorsObj.UgMinors.map((minor) => {
                    return (
                        <div>
                            <h1>{minor.title}</h1>
                            <h3>{minor.name}</h3>
                            <MinorModal {...minor}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Minors;