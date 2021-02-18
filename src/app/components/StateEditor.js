import React from "react"
import { connect } from 'react-redux'
import * as DungeonActions from '../reducers/dungeonActions'
import * as EditorActions from '../reducers/editorActions'
import Button from "./Button"
import LabelWithInput from "./LabelWithInput"
import PositionEditor from "./PositionEditor"
import SizeEditor from "./SizeEditor"
import StateEditorCard from "./StateEditorCard"

let StateEditor = ({ dispatch, selectedObjectId, selectedObject, dungeonName, dungeonSize, scrollPansViewport, darkMode }) => {
    let stateEditor;
    if (selectedObjectId) {
        stateEditor = <React.Fragment>
            {selectedObject.label !== undefined &&
                <StateEditorCard title='Label'>
                    <LabelWithInput
                        labelText="Label"
                        value={selectedObject.label}
                        onChange={(changeEvent) => dispatch(DungeonActions.setSelectedObjectLabel(selectedObjectId, changeEvent.target.value))} />
                </StateEditorCard>}
            {selectedObject.textureUrl !== undefined &&
                <StateEditorCard title="Texture Path">
                    <LabelWithInput
                        labelText="Path"
                        value={selectedObject.textureUrl}
                        onChange={(changeEvent) => dispatch(DungeonActions.setSelectedObjectTextureUrl(selectedObjectId, changeEvent.target.value))} />
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
                    <LabelWithInput
                        labelText="Angle"
                        type="number"
                        value={selectedObject.angle}
                        onChange={(changeEvent) => dispatch(DungeonActions.setSelectedObjectAngle(selectedObjectId, changeEvent.target.value))} />
                    <input
                        className="w-full"
                        type="range"
                        step="45"
                        min="-360"
                        max="360"
                        style={{direction: "rtl"}}
                        value={selectedObject.angle}
                        onChange={(changeEvent) => {dispatch(DungeonActions.setSelectedObjectAngle(selectedObjectId, changeEvent.target.value))}}></input>
                </StateEditorCard>
            }
            {selectedObjectId &&
                <StateEditorCard title="Actions">
                    <Button
                        className="border-2 text-red-600 border-red-600 hover:bg-red-600 hover:text-gray-50"
                        onClick={() => dispatch(DungeonActions.deleteObjects([selectedObjectId]))}>
                            Delete Object
                    </Button>
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
            <StateEditorCard title="Dungeon Properties">
                <LabelWithInput
                    labelText="Dungeon Name"
                    value={dungeonName}
                    onChange={(changeEvent) => dispatch(DungeonActions.setDungeonName(changeEvent.target.value))} />
            </StateEditorCard>
            <SizeEditor
                title="Dungeon Size"
                width={dungeonSize.width}
                height={dungeonSize.height}
                onUpdate={(width, height) => dispatch(DungeonActions.setDungeonSize(width, height))} />
            <StateEditorCard title="Actions">
                <Button
                    className="bg-gray-200 hover:bg-gray-300 w-full"
                    onClick={() => dispatch(EditorActions.exportToPngClicked())}>
                        Download Dungeon as PNG
                </Button>
                <Button
                    className="border-2 border-gray-200 hover:bg-gray-200 w-full"
                    onClick={() => dispatch(DungeonActions.clearDungeon())}>
                        New Dungeon
                </Button>
            </StateEditorCard>
            <StateEditorCard title="Editor Options">
                <label className="block">
                    <input
                        type='checkbox'
                        value={scrollPansViewport}
                        onChange={(event) => dispatch(EditorActions.setScrollMovesViewport(event.target.checked))}
                    /> Scroll to pan
                </label>
                <label className="block">
                    <input
                        type='checkbox'
                        value={darkMode}
                        onChange={(event) => dispatch(EditorActions.setDarkMode(event.target.checked))}
                    /> Dark mode
                </label>
            </StateEditorCard>
        </React.Fragment>
    }

    return <div className="space-y-6">
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
        scrollMovesViewport: state.editor.scrollMovesViewport,
        darkMode: state.editor.darkMode
    }
}

StateEditor = connect(mapStateToProps)(StateEditor)

export default StateEditor
