import React from 'react'
import StateEditorCard from './StateEditorCard'

const PositionEditor = ({ title, x, y, onUpdate }) =>
    <StateEditorCard title={title ?? 'Position'}>
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
    </StateEditorCard>

export default PositionEditor