import React from "react"
import { connect } from 'react-redux'
import * as DungeonActions from '../reducers/dungeonReducer'
import PositionEditor from "./PositionEditor"
import SizeEditor from "./SizeEditor"

let StateEditor = ({ dispatch, selectedObjectId, selectedObject, dungeonSize, scrollPansViewport }) => {
    if (selectedObjectId) {
        return <React.Fragment>
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
            {selectedObjectId &&
                <div className="card bg-dark text-light border-secondary mb-3">
                    <div className="card-header border-secondary">
                        <h5>Actions</h5>
                    </div>
                    <div className="card-body">
                        <button
                            className="btn btn-outline-danger"
                            onClick={() => dispatch(DungeonActions.deleteSelectedObject())}>
                                Delete Object
                        </button>
                    </div>
                </div>
            }
        </React.Fragment>
    }
    else {
        return <React.Fragment>
            <div className="card bg-dark text-light border-secondary mb-3">
                <div className="card-header border-secondary">
                    <h5>Instructions</h5>
                </div>
                <div className="card-body">
                    <p><i>Right click</i> to pan the view.</p>
                    <p><i>Scroll</i> to zoom in and out.</p>
                    <p><i>Left click and drag</i> to create new spaces with the New Space tool.</p>
                    <p><i>Left click</i> to select spaces with the Select tool.</p>
                    <p><i>Arrow keys</i> will move the currently selected space.</p>
                    <p><i>Delete</i> will delete the currently selected space.</p>
                </div>
            </div>
            <SizeEditor
                title="Dungeon Size"
                width={dungeonSize.width}
                height={dungeonSize.height}
                onUpdate={(width, height) => dispatch(DungeonActions.setDungeonSize(width, height))} />
            <div className="card bg-dark text-light border-secondary mb-3">
                <div className="card-header border-secondary">
                    <h5>Editor Options</h5>
                </div>
                <div className="card-body">
                    <div>
                        <label>
                            <input type='checkbox' value={scrollPansViewport} onChange={(event) => dispatch(DungeonActions.setScrollMovesViewport(event.target.checked))}></input>
                            Scroll to pan
                        </label>
                    </div>
                </div>
            </div>
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
