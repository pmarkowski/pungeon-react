import React from 'react'

const StateEditorCard = ({title, children}) =>
    <div className="p-2 mb-6 bg-gray-100 rounded-sm shadow-md">
        <div className="font-light mb-4 text-2xl">
            <h5>{title}</h5>
        </div>
        <div className="card-body">
            <div className="form-group">
                {children}
            </div>
        </div>
    </div>

export default StateEditorCard
