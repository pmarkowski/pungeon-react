import React from "react"

const ToolbarButton = ({toolName, toolId, selectedTool, onClick}) =>
    <button
        className={"p-2 bg-gray-200 hover:bg-gray-300" +
            (selectedTool === toolId ? ' bg-blue-300' : '')}
        onClick={() => onClick(toolId)}>
            {toolName}
    </button>

export default ToolbarButton;
