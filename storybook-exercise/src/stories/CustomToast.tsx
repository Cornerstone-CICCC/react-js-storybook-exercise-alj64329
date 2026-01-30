import React from 'react'
import { background } from 'storybook/theming'

export type State ="success"|"warning"|"error"

type Props = {
    state:State
    text:string,
    hasIcon:boolean
}

const CustomToast = ({state,text, hasIcon}: Props) => {
    const style={
        backgroundColor:state==="error"?"red":state==="success"?"#76f5a2":"#f29844",
        text:"white",
        padding:"4px 12px",
        borderRadius:"10px",
        maxWidth:"220px",
    }

    const icon=(state==="success")?"✅"
    :(state==="error")?"❌"
    :(state==="warning")?"⚠️":""

  return (
    <div style={style}>
        <span>{hasIcon&&icon}</span>
        <span>{text}</span>
    </div>
  )
}

export default CustomToast