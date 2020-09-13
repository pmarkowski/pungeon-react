import React from "react"
import { connect } from 'react-redux'
import * as DungeonActions from '../reducers/dungeonReducer'
import PositionEditor from "./PositionEditor"
import SizeEditor from "./SizeEditor"
import StateEditorCard from "./StateEditorCard"

let StateEditor = ({ dispatch, selectedObjectId, selectedObject, dungeonSize, scrollPansViewport }) => {
    if (selectedObjectId) {
        return <React.Fragment>
            {selectedObject.label !== undefined &&
                <StateEditorCard title='Label'>
                    <label>
                        Label:
                        <input
                            className="form-control bg-secondary text-light"
                            type="text"
                            value={selectedObject.label}
                            onChange={(changeEvent) => dispatch(DungeonActions.setSelectedObjectLabel(changeEvent.target.value))}>
                        </input>
                    </label>
                </StateEditorCard>}
            {selectedObject.position &&
                <PositionEditor
                    x={selectedObject.position.x}
                    y={selectedObject.position.y}
                    onUpdate={(x, y) => dispatch(DungeonActions.setSelectedObjectPosition(x, y))} />
            }
            {selectedObject.size &&
                <SizeEditor
                    width={selectedObject.size.width}
                    height={selectedObject.size.height}
                    onUpdate={(width, height) => dispatch(DungeonActions.setSelectedObjectSize(width, height))} />
            }
            {selectedObject.start &&
                <PositionEditor
                    title="Start"
                    x={selectedObject.start.x}
                    y={selectedObject.start.y}
                    onUpdate={(x,y) => dispatch(DungeonActions.setSelectedObjectStart(x, y))} />
            }
            {selectedObject.end &&
                <PositionEditor
                    title="End"
                    x={selectedObject.end.x}
                    y={selectedObject.end.y}
                    onUpdate={(x,y) => dispatch(DungeonActions.setSelectedObjectEnd(x, y))} />
            }
            {selectedObject.angle !== undefined &&
                <StateEditorCard title="Angle">
                    <label>
                        Angle
                        <input
                            className="form-control bg-secondary text-light"
                            type="number"
                            step="45"
                            value={selectedObject.angle}
                            onChange={(changeEvent) => {dispatch(DungeonActions.setSelectedObjectAngle(changeEvent.target.value))}}></input>
                    </label>
                </StateEditorCard>
            }
            {selectedObjectId &&
                <StateEditorCard title="Actions">
                    <button
                        className="btn btn-outline-danger"
                        onClick={() => dispatch(DungeonActions.deleteSelectedObject())}>
                            Delete Object
                    </button>
                </StateEditorCard>
            }
        </React.Fragment>
    }
    else {
        return <React.Fragment>
            <StateEditorCard title="Instructions">
                <p><i>Right click</i> to pan the view.</p>
                <p><i>Scroll</i> to zoom in and out.</p>
                <p><i>Left click and drag</i> to create new spaces with the New Space tool.</p>
                <p><i>Left click</i> to select spaces with the Select tool.</p>
                <p><i>Arrow keys</i> will move the currently selected space.</p>
                <p><i>Delete</i> will delete the currently selected space.</p>
            </StateEditorCard>
            <SizeEditor
                title="Dungeon Size"
                width={dungeonSize.width}
                height={dungeonSize.height}
                onUpdate={(width, height) => dispatch(DungeonActions.setDungeonSize(width, height))} />
            <StateEditorCard title="Editor Options">
                <label>
                    <input type='checkbox' value={scrollPansViewport} onChange={(event) => dispatch(DungeonActions.setScrollMovesViewport(event.target.checked))}></input>
                    Scroll to pan
                </label>
            </StateEditorCard>
        </React.Fragment>
    }
}

const mapStateToProps = state => ({
    selectedObjectId: state.selectedObject,
    selectedObject: state.dungeon.objects.find(object => object.id === state.selectedObject),
    dungeonSize: state.dungeon.size,
    scrollPansViewport: state.scrollPansViewport
})

StateEditor = connect(mapStateToProps)(StateEditor)

export default StateEditor
