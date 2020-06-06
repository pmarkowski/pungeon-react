import React from 'react'

const SizeEditor = ({ title, width, height, onUpdate }) =>
    <div className="card bg-dark text-light border-secondary mb-3">
        <div className="card-header border-secondary">
            <h5> {title ? title : "Size"}</h5>
        </div>
        <div className="card-body">
            <div className="form-group">
                <label>
                    Width:
                    <input
                        className="form-control bg-secondary text-light"
                        type="number"
                        value={width}
                        onChange={(changeEvent) => onUpdate(
                            parseInt(changeEvent.target.value),
                            height
                        )}>
                    </input>
                </label>
                <label>
                    Height:
                    <input
                        className="form-control bg-secondary text-light"
                        type="number"
                        value={height}
                        onChange={(changeEvent) => onUpdate(
                            width,
                            parseInt(changeEvent.target.value)
                        )}>
                    </input>
                </label>
            </div>
        </div>
    </div>

export default SizeEditor