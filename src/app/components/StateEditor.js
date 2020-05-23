import React from "react"
import { connect } from 'react-redux'
import { deleteSelectedObject, setSelectedObjectPosition, setSelectedObjectSize, setSelectedObjectStart, setSelectedObjectEnd } from '../reducers/dungeonReducer'
import PositionEditor from "./PositionEditor"

let StateEditor = ({ dispatch, selectedObjectId, selectedObject }) => {
    if (selectedObjectId) {
        return <React.Fragment>
            {selectedObject.position &&
                <PositionEditor
                    x={selectedObject.position.x}
                    y={selectedObject.position.y}
                    onUpdate={(x, y) => dispatch(setSelectedObjectPosition(x, y))} />
            }
            {selectedObject.size &&
                <div className="card bg-dark text-light border-secondary mb-3">
                    <div className="card-header border-secondary">
                        <h5>Size</h5>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>
                                Width:
                                <input
                                    className="form-control bg-secondary text-light"
                                    type="number"
                                    value={selectedObject.size.width}
                                    onChange={(changeEvent) => dispatch(setSelectedObjectSize(
                                        parseInt(changeEvent.target.value),
                                        selectedObject.size.height
                                    ))}>
                                </input>
                            </label>
                            <label>
                                Height:
                                <input
                                    className="form-control bg-secondary text-light"
                                    type="number"
                                    value={selectedObject.size.height}
                                    onChange={(changeEvent) => dispatch(setSelectedObjectSize(
                                        selectedObject.size.width,
                                        parseInt(changeEvent.target.value)
                                    ))}>
                                </input>
                            </label>
                        </div>
                    </div>
                </div>
            }
            {selectedObject.start &&
                <PositionEditor
                    title="Start"
                    x={selectedObject.start.x}
                    y={selectedObject.start.y}
                    onUpdate={(x,y) => dispatch(setSelectedObjectStart(x, y))} />
            }
            {selectedObject.end &&
                <PositionEditor
                    title="End"
                    x={selectedObject.end.x}
                    y={selectedObject.end.y}
                    onUpdate={(x,y) => dispatch(setSelectedObjectEnd(x, y))} />
            }
            {selectedObjectId &&
                <div className="card bg-dark text-light border-secondary mb-3">
                    <div className="card-header border-secondary">
                        <h5>Actions</h5>
                    </div>
                    <div className="card-body">
                        <button
                            className="btn btn-outline-danger"
                            onClick={() => dispatch(deleteSelectedObject())}>
                                Delete Object
                        </button>
                    </div>
                </div>
            }
        </React.Fragment>
    }
    else {
        return <div className="card bg-dark text-light border-secondary mb-3">
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
    }
}

const mapStateToProps = state => ({
    selectedObjectId: state.selectedObject,
    selectedObject: state.dungeon.spaces.filter(space => space.id === state.selectedObject)[0] ||
        state.dungeon.walls.filter(wall => wall.id === state.selectedObject)[0]
})

StateEditor = connect(mapStateToProps)(StateEditor)

export default StateEditor
