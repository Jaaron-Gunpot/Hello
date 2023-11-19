import React, { useState } from 'react'
import getData from '../utils/getData'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>{`${degreeProgram.title} (${degreeProgram.degreeName})`}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <h2>{degreeProgram.description}</h2>
                                <h3>Concentrations:</h3>
                                {degreeProgram.concentrations.map((concentration) => {
                                    return (
                                        <h4>{concentration}</h4>
                                    )
                                })}
                            </AccordionDetails>
                        </Accordion>
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
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>{`${degreeProgram.title} (${degreeProgram.degreeName})`}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <h2>{degreeProgram.description}</h2>
                                            <h3>Concentrations:</h3>
                                            {degreeProgram.concentrations.map((concentration) => {
                                                return (
                                                    <h4>{concentration}</h4>
                                                )
                                            })}
                                        </AccordionDetails>
                                    </Accordion>
                                </>
                            )
                        } else {
                            return (
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>{degreeProgram.degreeName}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {degreeProgram.availableCertificates.map((certificate) => {
                                            return (
                                                <h4>{certificate}</h4>
                                            )
                                        })}
                                    </AccordionDetails>
                                </Accordion>
                            )
                        }
                    })
                }
            </div>
        </>
    )
}

export default Degrees