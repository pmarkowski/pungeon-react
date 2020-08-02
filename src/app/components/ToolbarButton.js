import React from "react"

const ToolbarButton = ({toolName, toolId, selectedTool, onClick}) =>
    <button
        className={"btn btn-secondary" +
            (selectedTool === toolId ? ' active' : '')}
        onClick={() => onClick(toolId)}>
            {toolName}
    </button>

export default ToolbarButton;