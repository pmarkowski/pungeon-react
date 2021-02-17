import React from 'react'
import LabelWithInput from './LabelWithInput'
import StateEditorCard from './StateEditorCard'

const PositionEditor = ({ title, x, y, onUpdate }) =>
    <StateEditorCard title={title ?? 'Position'}>
        <LabelWithInput
            labelText="X"
            type="number"
            value={x}
            onChange={(changeEvent) => onUpdate(
                parseInt(changeEvent.target.value),
                y
            )} />
        <LabelWithInput
            labelText="Y"
            type="number"
            value={y}
            onChange={(changeEvent) => onUpdate(
                x,
                parseInt(changeEvent.target.value)
            )} />
    </StateEditorCard>

export default PositionEditor
