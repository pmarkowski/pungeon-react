import React from "react"
import { connect } from 'react-redux'
import { selectTool } from '../reducers/editorActions'
import ToolbarButton from "./ToolbarButton"
import TOOL_TYPE from "../tools/toolType"

let Toolbar = ({ dispatch, selectedTool }) => {
    const dispatchSelectedTool = (toolId) => dispatch(selectTool(toolId))

    return (
        <div className="divide-x divide-gray-300" role="group">
            <ToolbarButton
                className="rounded-l-sm"
                toolName='Select'
                toolId={TOOL_TYPE.SELECT}
                selectedTool={selectedTool}
                onClick={dispatchSelectedTool} />
            <ToolbarButton
                toolName='New Rectangular Space'
                toolId={TOOL_TYPE.NEW_SPACE_RECTANGLE}
                selectedTool={selectedTool}
                onClick={dispatchSelectedTool} />
            <ToolbarButton
                toolName='New Polygonal Space'
                toolId={TOOL_TYPE.NEW_SPACE_POLYGON}
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
            <ToolbarButton
                toolName='New Label'
                toolId={TOOL_TYPE.NEW_LABEL}
                selectedTool={selectedTool}
                onClick={dispatchSelectedTool} />
            <ToolbarButton
                className="rounded-r-sm"
                toolName='New Token'
                toolId={TOOL_TYPE.NEW_TOKEN}
                selectedTool={selectedTool}
                onClick={dispatchSelectedTool} />
        </div>
    )
}

const mapStateToProps = state => ({
    selectedTool: state.editor.selectedTool
})

Toolbar = connect(mapStateToProps)(Toolbar)

export default Toolbar
