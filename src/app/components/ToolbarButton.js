import React from "react"

const ToolbarButton = ({className, toolName, toolId, selectedTool, onClick}) =>
    <button
        className={"px-4 py-2 bg-gray-200 hover:bg-gray-300 " +
            (selectedTool === toolId ? 'bg-blue-300 hover:bg-blue-300 ' : ' ') + className}
        onClick={() => onClick(toolId)}>
            {toolName}
    </button>

export default ToolbarButton;
