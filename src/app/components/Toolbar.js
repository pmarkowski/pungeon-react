import React from "react"
import { connect } from 'react-redux'
import { selectTool } from '../reducers/dungeonReducer'

let Toolbar = ({ dispatch, selectedTool }) => {
    return (
        <div className="btn-group" role="group">
            <button
                className={"btn btn-secondary" +
                    (selectedTool === 'Select' ? ' active' : '')}
                onClick={() => dispatch(selectTool('Select'))}>
                    Select
            </button>
            <button
                className={"btn btn-secondary" +
                    (selectedTool === 'NewSpace' ? ' active' : '')}
                onClick={() => dispatch(selectTool('NewSpace'))}>
                    New Space
            </button>
        </div>
    )
}

const mapStateToProps = state => ({
    selectedTool: state.selectedTool
})

Toolbar = connect(mapStateToProps)(Toolbar)

export default Toolbar
