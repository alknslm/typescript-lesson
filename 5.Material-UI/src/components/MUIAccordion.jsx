import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MUIAccordion() {
    const [expanded, setExpended] = useState(false);

    const handleChange = (panelName) => (event, expanded) => {
        setExpended(expanded ? panelName : false)
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Bölüm1</AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum neque ab sunt veniam illum, voluptatem quae! Voluptate ipsam sunt
                    repellat dolorem earum, iusto magnam consectetur facilis, voluptatem
                    consequatur ex veritatis.
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Bölüm2</AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum neque ab sunt veniam illum, voluptatem quae! Voluptate ipsam sunt
                    repellat dolorem earum, iusto magnam consectetur facilis, voluptatem
                    consequatur ex veritatis.
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Bölüm3</AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum neque ab sunt veniam illum, voluptatem quae! Voluptate ipsam sunt
                    repellat dolorem earum, iusto magnam consectetur facilis, voluptatem
                    consequatur ex veritatis.
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default MUIAccordion