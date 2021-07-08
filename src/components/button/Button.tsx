
import React, { ReactElement } from 'react'

export interface IButton {
  msg: string
  size: Number
}

const Button = ({ msg,size }: IButton): ReactElement => {
  return (
    <div>
      this is button!{msg}
     size is: {size}
    </div>
  )
};

export default Button