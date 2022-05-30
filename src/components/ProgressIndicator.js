import React, { useEffect, useState } from 'react';
import { BOX_STATUS } from '../globals';
import '../styles.css';

export const ProgressIndicator = (
    ProgressIndicatorProps,
) => {
    const { steps } = ProgressIndicatorProps;
    const [status, setStatus] = useState(steps[0]);
    const [stepCount, setStepCount] = useState(2);
    const [boxes, setBoxes] = useState([]);

    const updateState = () => {
        updateBoxes();
        setStepCount(stepCount+1);
        setStatus(steps[stepCount-1]);
    };

    //iterates through all boxes as the state updates, if a state was missed then will fill in that space
    const updateBoxes = () => {
        let boxesTemp = boxes;
        for (let i = 0; i < steps.length; i++) {
            boxesTemp[i].status = i < stepCount ? BOX_STATUS.COMPLETE : BOX_STATUS.INCOMPLETE;
        }
        setBoxes(boxesTemp);
    }

    const errorBoxes = () => {
        let boxesTemp = boxes;
        for (let i = 0; i < steps.length; i++) {
            boxesTemp[i].status = BOX_STATUS.ERROR; 
        }
        setBoxes(boxesTemp);
        setStatus('Error!');
    }

    useEffect(() => {
        const boxDictionary = steps.map ((box) => {
            return {text: box, status: BOX_STATUS.INCOMPLETE};
        });
        boxDictionary[0].status = BOX_STATUS.COMPLETE;
        setBoxes(boxDictionary);
    }, [steps]);

    let key = 0; //error for no keys fix
    return (
        <div className='card'>
            <div className='boxContainer'>
                {boxes.map((e) => { return ( <div key={key++} className={`box ${e.status}`}></div>)})}
            </div>
            <p className='statusText'>{status}</p>
            <button onClick={updateState}>Update Progress</button>
            <button onClick={errorBoxes}>Error</button>
        </div>
    );
}