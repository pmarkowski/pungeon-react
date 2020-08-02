import React from "react"
import { connect } from 'react-redux'
import { selectTool } from '../reducers/dungeonReducer'
import ToolbarButton from "./ToolbarButton"
import TOOLTYPE from "../utils/toolTypes"

let Toolbar = ({ dispatch, selectedTool }) => {
    const dispatchSelectedTool = (toolId) => dispatch(selectTool(toolId))

    return (
        <div className="btn-group" role="group">
            <ToolbarButton
                toolName='Select'
                toolId={TOOLTYPE.SELECT}
                selectedTool={selectedTool}
                onClick={dispatchSelectedTool} />
            <ToolbarButton
                toolName='New Space'
                toolId={TOOLTYPE.NEW_SPACE}
                selectedTool={selectedTool}
                onClick={dispatchSelectedTool} />
            <ToolbarButton
                toolName='New Wall'
                toolId={TOOLTYPE.NEW_WALL}
                selectedTool={selectedTool}
                onClick={dispatchSelectedTool} />
            <ToolbarButton
                toolName='New Door'
                toolId={TOOLTYPE.NEW_DOOR}
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
