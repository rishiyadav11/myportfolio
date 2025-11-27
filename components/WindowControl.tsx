import useWindowStore from '@/store/window';
import React from 'react'

const WindowControl = ({target}: {target: string}) => {
    const {CloseWindow} = useWindowStore();
  return (
    <div id='window-controls'>
        <div className="close" onClick={() => CloseWindow(target)}/>
        <div className="minimize" onClick={() => CloseWindow(target)}/>
        <div className="maximize" onClick={() => CloseWindow(target)}/>

    </div>
  )
}

export default WindowControl