import React from 'react'

const PositionEditor = ({ title, x, y, onUpdate }) =>
    <div className="card bg-dark text-light border-secondary mb-3">
        <div className="card-header border-secondary">
            <h5> {title ? title : "Position"}</h5>
        </div>
        <div className="card-body">
            <div className="form-group">
                <label>
                    X:
                    <input
                        className="form-control bg-secondary text-light"
                        type="number"
                        value={x}
                        onChange={(changeEvent) => onUpdate(
                            parseInt(changeEvent.target.value),
                            y
                        )}>
                    </input>
                </label>
                <label>
                    Y:
                    <input
                        className="form-control bg-secondary text-light"
                        type="number"
                        value={y}
                        onChange={(changeEvent) => onUpdate(
                            x,
                            parseInt(changeEvent.target.value)
                        )}>
                    </input>
                </label>
            </div>
        </div>
    </div>

export default PositionEditor