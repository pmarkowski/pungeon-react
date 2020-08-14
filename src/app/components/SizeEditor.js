import React from 'react'
import StateEditorCard from './StateEditorCard'

const SizeEditor = ({ title, width, height, onUpdate }) =>
    <StateEditorCard title={title ?? 'Size'}>
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
    </StateEditorCard>

export default SizeEditor