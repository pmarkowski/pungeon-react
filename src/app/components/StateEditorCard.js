import React from 'react'

const StateEditorCard = ({title, children}) =>
    <div className="p-4 bg-gray-100 rounded-sm shadow-md">
        <div className="font-light mb-6 text-3xl text-black">
            <h5>{title}</h5>
        </div>
        <div className="space-y-4">
            {children}
        </div>
    </div>

export default StateEditorCard
