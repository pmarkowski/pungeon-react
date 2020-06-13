import React from "react"
import { connect } from 'react-redux'
import { selectTool } from '../reducers/dungeonReducer'
import ToolbarButton from "./ToolbarButton"

let Toolbar = ({ dispatch, selectedTool }) => {
    const dispatchSelectedTool = (toolId) => dispatch(selectTool(toolId))

    return (
        <div className="btn-group" role="group">
            <ToolbarButton
                toolName='Select'
                toolId='Select'
                selectedTool={selectedTool}
                onClick={dispatchSelectedTool} />
            <ToolbarButton
                toolName='New Space'
                toolId='NewSpace'
                selectedTool={selectedTool}
                onClick={dispatchSelectedTool} />
            <ToolbarButton
                toolName='New Wall'
                toolId='NewWall'
                selectedTool={selectedTool}
                onClick={dispatchSelectedTool} />
        </div>
    )
}

const mapStateToProps = state => ({
    selectedTool: state.selectedTool
})

Toolbar = connect(mapStateToProps)(Toolbar)

export default Toolbar
