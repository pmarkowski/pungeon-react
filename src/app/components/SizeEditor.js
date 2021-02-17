import React from 'react'
import LabelWithInput from './LabelWithInput'
import StateEditorCard from './StateEditorCard'

const SizeEditor = ({ title, width, height, onUpdate }) =>
    <StateEditorCard title={title ?? 'Size'}>
        <LabelWithInput
            labelText="Width"
            type="number"
            value={width}
            onChange={(changeEvent) => onUpdate(
                parseInt(changeEvent.target.value),
                height
            )} />
        <LabelWithInput
            labelText="Height"
            type="number"
            value={height}
            onChange={(changeEvent) => onUpdate(
                width,
                parseInt(changeEvent.target.value),
            )} />
    </StateEditorCard>

export default SizeEditor
