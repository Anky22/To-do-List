import React from 'react';
import Radio from './radio';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

 export default function Example() {
    return (
        <Accordion>
            <AccordionItem className='acc'>
                <AccordionItemHeading>
                    <AccordionItemButton >
                      <h4>Label</h4>   
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>

    
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        
            
           
             
        </Accordion>
    );
}

