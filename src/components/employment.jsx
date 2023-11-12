import React, { useState } from 'react'
import getData from '../utils/getData'
import EmploymentTable from './employmentTable'

const Employment = () => {
    const [loaded, setLoaded] = useState(false)
    const [peopleObj, setPeopleObj] = useState()
    React.useEffect(() => {
        getData('employment/')
            .then((returnedJSON) => {
                console.log('employment:', returnedJSON);
                setPeopleObj(returnedJSON);
                setLoaded(true);
            });
    }, [])
    if (!loaded) {
        return (
            <>
                <h1>Employment</h1>
                <h3>Loading</h3>
            </>
        )
    }

    return (
        <>
            <section className='intro'>
                <h2>{peopleObj.introduction.title}</h2>
                <div>{peopleObj.introduction.content.map((contentObj) =>
                    <div>
                        <h3>{contentObj.title}</h3>
                        <hr />
                        {contentObj.description}
                    </div>
                )}</div>
            </section>
            <h2>{peopleObj.degreeStatistics.title}</h2>
            <section className='statistics'>
                <div>
                    {peopleObj.degreeStatistics.statistics.map((statObj) =>
                        <div>
                            <h3>{statObj.value}</h3>
                            <h3>{statObj.description}</h3>
                        </div>
                    )}
                </div>
            </section>
          {/* <EmploymentTable coopInfo={peopleObj.coopTable.coopInformation} title={peopleObj.coopTable.title}/> */}
        </>
    )
}

export default Employment
{/* <h1>{peopleObj.coopTable.coopInformation.map((infoObj)=>
                    <div>
                        {infoObj.employer}
                        {infoObj.degree}
                        {infoObj.city}
                        {infoObj.term}
                    </div>
                )}</h1> */}