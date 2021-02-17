import React from "react"
import { connect } from 'react-redux'
import * as DungeonActions from '../reducers/dungeonActions'
import * as EditorActions from '../reducers/editorActions'
import PositionEditor from "./PositionEditor"
import SizeEditor from "./SizeEditor"
import StateEditorCard from "./StateEditorCard"

let StateEditor = ({ dispatch, selectedObjectId, selectedObject, dungeonName, dungeonSize, scrollPansViewport }) => {
    let stateEditor;
    if (selectedObjectId) {
        stateEditor = <React.Fragment>
            {selectedObject.label !== undefined &&
                <StateEditorCard title='Label'>
                    <label>
                        Label:
                        <input
                            className="form-control bg-secondary text-light"
                            type="text"
                            value={selectedObject.label}
                            onChange={(changeEvent) => dispatch(DungeonActions.setSelectedObjectLabel(selectedObjectId, changeEvent.target.value))}>
                        </input>
                    </label>
                </StateEditorCard>}
            {selectedObject.textureUrl !== undefined &&
                <StateEditorCard title="Texture Path">
                    <label>
                        Path:
                        <input
                            className="form-control bg-secondary text-light"
                            value={selectedObject.textureUrl}
                            onChange={(changeEvent) => {dispatch(DungeonActions.setSelectedObjectTextureUrl(selectedObjectId, changeEvent.target.value))}}></input>
                    </label>
                </StateEditorCard>
            }
            {selectedObject.position &&
                <PositionEditor
                    x={selectedObject.position.x}
                    y={selectedObject.position.y}
                    onUpdate={(x, y) => dispatch(DungeonActions.setSelectedObjectPosition(selectedObjectId, x, y))} />
            }
            {selectedObject.size &&
                <SizeEditor
                    width={selectedObject.size.width}
                    height={selectedObject.size.height}
                    onUpdate={(width, height) => dispatch(DungeonActions.setSelectedObjectSize(selectedObjectId, width, height))} />
            }
            {selectedObject.start &&
                <PositionEditor
                    title="Start"
                    x={selectedObject.start.x}
                    y={selectedObject.start.y}
                    onUpdate={(x,y) => dispatch(DungeonActions.setSelectedObjectStart(selectedObjectId, x, y))} />
            }
            {selectedObject.end &&
                <PositionEditor
                    title="End"
                    x={selectedObject.end.x}
                    y={selectedObject.end.y}
                    onUpdate={(x,y) => dispatch(DungeonActions.setSelectedObjectEnd(selectedObjectId, x, y))} />
            }
            {selectedObject.angle !== undefined &&
                <StateEditorCard title="Angle">
                    <label>
                        Angle:
                        <input
                            className="form-control bg-secondary text-light"
                            type="number"
                            step="45"
                            min="-360"
                            max="360"
                            value={selectedObject.angle}
                            onChange={(changeEvent) => {dispatch(DungeonActions.setSelectedObjectAngle(selectedObjectId, changeEvent.target.value))}}></input>
                        <input
                            className="form-control bg-secondary text-light"
                            type="range"
                            step="45"
                            min="-360"
                            max="360"
                            style={{direction: "rtl"}}
                            value={selectedObject.angle}
                            onChange={(changeEvent) => {dispatch(DungeonActions.setSelectedObjectAngle(selectedObjectId, changeEvent.target.value))}}></input>
                    </label>
                </StateEditorCard>
            }
            {selectedObjectId &&
                <StateEditorCard title="Actions">
                    <button
                        className="btn btn-outline-danger"
                        onClick={() => dispatch(DungeonActions.deleteObjects([selectedObjectId]))}>
                            Delete Object
                    </button>
                </StateEditorCard>
            }
        </React.Fragment>
    }
    else {
        stateEditor = <React.Fragment>
            <StateEditorCard title="Instructions">
                <p><i>Right click</i> to pan the view.</p>
                <p><i>Scroll</i> to zoom in and out.</p>
                <p><i>Left click and drag</i> to create new spaces with the New Space tool.</p>
                <p><i>Left click</i> to select spaces with the Select tool.</p>
                <p><i>Arrow keys</i> will move the currently selected space.</p>
                <p><i>Delete</i> will delete the currently selected space.</p>
            </StateEditorCard>
            <StateEditorCard title="Actions">
                <button
                    className="btn btn-primary form-control mb-2"
                    onClick={() => dispatch(EditorActions.exportToPngClicked())}>
                        Download Dungeon as PNG
                </button>
                <button
                    className="btn btn-outline-danger form-control mb-2"
                    onClick={() => dispatch(DungeonActions.clearDungeon())}>
                        New Dungeon
                </button>
            </StateEditorCard>
            <StateEditorCard title="Dungeon Properties">
                <label>
                    Dungeon Name:
                    <input
                        className="form-control bg-secondary text-light"
                        value={dungeonName}
                        onChange={(changeEvent) => dispatch(DungeonActions.setDungeonName(changeEvent.target.value)) } />
                </label>
            </StateEditorCard>
            <SizeEditor
                title="Dungeon Size"
                width={dungeonSize.width}
                height={dungeonSize.height}
                onUpdate={(width, height) => dispatch(DungeonActions.setDungeonSize(width, height))} />
            <StateEditorCard title="Editor Options">
                <div className="form-check">
                    <label className="form-check-label">
                        <input
                            className="form-check-input"
                            type='checkbox'
                            value={scrollPansViewport}
                            onChange={(event) => dispatch(EditorActions.setScrollMovesViewport(event.target.checked))} />
                        Scroll to pan
                    </label>
                </div>
            </StateEditorCard>
        </React.Fragment>
    }

    return <div className="px-2">
        {stateEditor}
    </div>;
}

const mapStateToProps = state => {
    let selectedObjectId = state.editor.selectedObjectIds.length === 1 ? state.editor.selectedObjectIds[0] : null;
    let selectedObject = selectedObjectId ? state.dungeon.objects.find(object => object.id === selectedObjectId) : null;
    return {
        selectedObjectId: selectedObjectId,
        selectedObject: selectedObject,
        dungeonName: state.dungeon.name,
        dungeonSize: state.dungeon.size,
        scrollMovesViewport: state.editor.scrollMovesViewport
    }
}

StateEditor = connect(mapStateToProps)(StateEditor)

export default StateEditor
