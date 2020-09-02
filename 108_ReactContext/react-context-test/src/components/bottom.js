import React from 'react'
import ContextHelper from './contextHelper'
 
const Bottom =()=> {
    return (
        <ContextHelper.Consumer>
            {
                (hereValueIsName) => {
                    return (
                            <div>
                        <h5 >My name is {hereValueIsName}</h5>
                            </div>

                    )
                } 
            }
        </ContextHelper.Consumer>
   )
}
export default Bottom