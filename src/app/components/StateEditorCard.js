import React from 'react'

const StateEditorCard = ({title, children}) =>
    <div className="p-4 bg-gray-100 rounded-sm shadow-md">
        <div className="font-light mb-4 text-2xl">
            <h5>{title}</h5>
        </div>
        <div className="space-y-4">
            {children}
        </div>
    </div>

export default StateEditorCard
