import React from 'react'

const StateEditorCard = ({title, children}) =>
    <div className="p-4 rounded-sm shadow-md bg-gray-100 dark:bg-gray-800">
        <div className="font-light mb-6 text-3xl text-black dark:text-white">
            <h5>{title}</h5>
        </div>
        <div className="space-y-4">
            {children}
        </div>
    </div>

export default StateEditorCard
