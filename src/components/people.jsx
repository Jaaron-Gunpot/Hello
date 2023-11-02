//imports
import React, { useState } from "react";
import getData from "../utils/getData";
//get css
import './people.css'
//functions
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
            {/* show them*/}
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
}

export default People;