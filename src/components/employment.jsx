import React, { useState } from 'react'
import getData from '../utils/getData'
import CoopTable from './coopTable'
import EmploymentTable from './employmentTable'
import './employment.css'

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
          <CoopTable coopInfo={peopleObj.coopTable.coopInformation} title={peopleObj.coopTable.title}/>
          <div className='spacer'></div>
          <EmploymentTable employmentInfo = {peopleObj.employmentTable.professionalEmploymentInformation} title={peopleObj.employmentTable.title}/>
          <div className='spacer'></div>
          <h2>{peopleObj.degreeStatistics.title}</h2>
            <section className='statistics'>
                <div id="stat-holder">
                    {peopleObj.degreeStatistics.statistics.map((statObj) =>
                        <div>
                            <h3>{statObj.value}</h3>
                            <h3>{statObj.description}</h3>
                        </div>
                    )}
                </div>
            </section>
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