import React, { useState } from 'react'
import getData from '../utils/getData'

const Degrees = () => {
    //boiler plate data code
    const [loaded, setLoaded] = useState(false)
    const [degreeObj, setDegreeObj] = useState()
    React.useEffect(() => {
        getData('degrees/')
            .then((returnedJSON) => {
                console.log('degrees:', returnedJSON);
                setDegreeObj(returnedJSON);
                setLoaded(true);
            });
    }, [])
    if (!loaded) {
        return (
            <>
                <h1>Degrees</h1>
                <h3>Loading</h3>
            </>
        )
    }
    return (
        <>
            <div>
                <h1>Undergraduate</h1>
                {degreeObj.undergraduate.map((degreeProgram) => {
                    return (
                        <div>
                            <h1>{`${degreeProgram.title} (${degreeProgram.degreeName})`}</h1>
                            <h2>{degreeProgram.description}</h2>
                            {degreeProgram.concentrations.map((concentration) => {
                                return (
                                    <h4>{concentration}</h4>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <div>
                <h1>Graduate</h1>
                {
                    degreeObj.graduate.map((degreeProgram) => {
                        if (degreeProgram.title) {
                            return (
                                <>
                                    <div>
                                        <h1>{`${degreeProgram.title} (${degreeProgram.degreeName})`}</h1>
                                        <h2>{degreeProgram.description}</h2>
                                        {degreeProgram.concentrations.map((concentration) => {
                                            return (
                                                <h4>{concentration}</h4>
                                            )
                                        })}
                                    </div>
                                </>
                            )
                        }else{
                            return(
                                <div>
                                    <h1>{degreeProgram.degreeName}</h1>
                                    {degreeProgram.availableCertificates.map((certificate)=>{
                                        return(
                                            <h4>{certificate}</h4>
                                        )
                                    })}
                                </div>
                            )
                        }
                    })
                }
            </div>
        </>
    )
}

export default Degrees