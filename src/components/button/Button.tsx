
import React, { ReactElement } from 'react'

export interface IButton {
  msg: string
}

const Button = ({ msg }: IButton): ReactElement => {
  return (
    <div>
      this is button!{msg}
    </div>
  )
};

export default Button