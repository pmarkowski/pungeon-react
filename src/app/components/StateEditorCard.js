import React from 'react'

const StateEditorCard = ({title, children}) =>
    <div className="card bg-dark text-light border-secondary mb-3">
        <div className="card-header border-secondary">
            <h5>{title}</h5>
        </div>
        <div className="card-body">
            <div className="form-group">
                {children}
            </div>
        </div>
    </div>

export default StateEditorCard
