import React from "react"
import { connect } from 'react-redux'
import { selectTool } from '../reducers/dungeonReducer'
import ToolbarButton from "./ToolbarButton"
import TOOL_TYPE from "../utils/toolType"

let Toolbar = ({ dispatch, selectedTool }) => {
    const dispatchSelectedTool = (toolId) => dispatch(selectTool(toolId))

    return (
        <div className="btn-group" role="group">
            <ToolbarButton
                toolName='Select'
                toolId={TOOL_TYPE.SELECT}
                selectedTool={selectedTool}
                onClick={dispatchSelectedTool} />
            <ToolbarButton
                toolName='New Space'
                toolId={TOOL_TYPE.NEW_SPACE}
                selectedTool={selectedTool}
                onClick={dispatchSelectedTool} />
            <ToolbarButton
                toolName='New Wall'
                toolId={TOOL_TYPE.NEW_WALL}
                selectedTool={selectedTool}
                onClick={dispatchSelectedTool} />
            <ToolbarButton
                toolName='New Door'
                toolId={TOOL_TYPE.NEW_DOOR}
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
