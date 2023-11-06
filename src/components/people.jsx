//imports
import React, { useState } from "react";
import getData from "../utils/getData";
import { Tab } from 'semantic-ui-react'
import PeopleGroup from './peopleGroup';
import './people.css'

const People = () => {
    const [loaded, setLoaded] = useState(false);
    const [pepObj, setPepeObj] = useState();
    const panes = [
        { menuItem: 'Faculty', render: () => <Tab.Pane>
            <PeopleGroup title="Faculty" pepGroupObj={pepObj.faculty}/>
        </Tab.Pane> },
        { menuItem: 'Staff', render: () => <Tab.Pane>
            <PeopleGroup title="Faculty" pepGroupObj={pepObj.staff}/>
        </Tab.Pane> }
      ]
    React.useEffect(() => {
        getData('people/')
            .then((json) => {
                //console.log('peps:', json);
                setPepeObj(json);
                setLoaded(true);
            })
    }, [])
    if (!loaded) {
        return (
            <>
                <h1>Our People</h1>
                <h2>Loading</h2>
            </>
        );
    }
    //All the data is loaded
    return(
        <>
            <h1>{pepObj.title}</h1>
            <h2>{pepObj.subTitle}</h2>
            <Tab panes={panes}/>
        </>
    )
}

export default People
//functions
//get css
//
/*
const People = () => {
    const [loaded, setLoaded] = useState(false);
    const [pepObj, setPepeObj] = useState();

    React.useEffect(() => {
        getData('people/')
            .then((json) => {
                console.log('peps:', json);
                setPepeObj(json);
                setLoaded(true);
            })
    }, [])
    if (!loaded) {
        return (
            <>
                <h1>Our People</h1>
                <h2>Loading</h2>
            </>
        );
    }
    return (
        <>
            <h2>{pepObj.title}</h2>
            <h3>{pepObj.subTitle}</h3>
            <h3>Faculty</h3>
            {/* show them}
            <section className="peopleList">
                {pepObj.faculty.map((person) =>
                    <div className="peopleListItem">
                        <h3>{person.name}</h3>
                        <img src={person.imagePath} alt="person"></img>
                    </div>
                )}
            </section>
            <h3>Staff</h3>
            <section className="peopleList">
                {pepObj.staff.map((person) =>
                    <div className="peopleListItem">
                        <h3>{person.name}</h3>
                        <img src={person.imagePath} alt="person"></img>
                    </div>
                )}
            </section>
        </>
    )
}*/

//export default People;