import React from "react";
import PeopleModal from './peopleModal'
//props.attribute for attribute to be captured
//named parameters also work eg. {title, pepGroupObj}
const peopleGroup = ({ title, pepGroupObj }) => {

    return (
        <>
            <h4>{title}</h4>
            <section className="peopleList">
                {
                    pepGroupObj.map((person) =>
                        <section className="peopleListItem" key={person.username}>
                            <img src={person.imagePath}></img>
                            <div>{person.name}</div>
                            <PeopleModal {...person}/>
                        </section>
                    )
                }
            </section>
        </>
    )
}

export default peopleGroup