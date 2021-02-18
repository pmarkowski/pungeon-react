import React from "react"

const ToolbarButton = ({className, toolName, toolId, selectedTool, onClick}) =>
    <button
        className={"px-4 py-2 bg-gray-200 hover:bg-gray-300  dark:bg-gray-700 dark:hover:bg-gray-600" +
            (selectedTool === toolId ? 'bg-blue-300 hover:bg-blue-300 dark:bg-blue-900 dark:hover:bg-blue-900' : ' ') + className}
        onClick={() => onClick(toolId)}>
            {toolName}
    </button>

export default ToolbarButton;
