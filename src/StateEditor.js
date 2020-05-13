import React from "react"
import { connect } from 'react-redux'

let StateEditor = ({ dispatch }) => {
    return (
        <div>
            <button onClick={() => dispatch({type: 'TOGGLE_MOVE_Y'})}>Toggle Y Movement</button>
        </div>
    )
}

StateEditor = connect()(StateEditor)

export default StateEditor
