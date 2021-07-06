 
import React, { ReactElement } from 'react'

export interface IAlert {
    msg:string
}

 const Alert =  ({msg}: IAlert): ReactElement  =>{
    return (
        <div>
           dsafds This is Alert:{msg}
        </div>
    )
}

export default Alert