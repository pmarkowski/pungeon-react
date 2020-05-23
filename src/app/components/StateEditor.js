import React from "react"
import { connect } from 'react-redux'
import { deleteSelectedObject, setSelectedObjectPosition, setSelectedObjectSize, setSelectedObjectStart, setSelectedObjectEnd } from '../reducers/dungeonReducer'

let StateEditor = ({ dispatch, selectedObjectId, selectedObject }) => {
    if (selectedObjectId) {
        return <React.Fragment>
            {selectedObject.position &&
                <div className="card bg-dark text-light border-secondary mb-3">
                    <div className="card-header border-secondary">
                        <h5>Position</h5>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>
                                X:
                                <input
                                    className="form-control bg-secondary text-light"
                                    type="number"
                                    value={selectedObject.position.x}
                                    onChange={(changeEvent) => dispatch(setSelectedObjectPosition(
                                        parseInt(changeEvent.target.value),
                                        selectedObject.position.y
                                    ))}>
                                </input>
                            </label>
                            <label>
                                Y:
                                <input
                                    className="form-control bg-secondary text-light"
                                    type="number"
                                    value={selectedObject.position.y}
                                    onChange={(changeEvent) => dispatch(setSelectedObjectPosition(
                                        selectedObject.position.x,
                                        parseInt(changeEvent.target.value)
                                    ))}>
                                </input>
                            </label>
                        </div>
                    </div>
                </div>
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
                <div className="card bg-dark text-light border-secondary mb-3">
                    <div className="card-header border-secondary">
                        <h5>Start</h5>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>
                                X:
                                <input
                                    className="form-control bg-secondary text-light"
                                    type="number"
                                    value={selectedObject.start.x}
                                    onChange={(changeEvent) => dispatch(setSelectedObjectStart(
                                        parseInt(changeEvent.target.value),
                                        selectedObject.start.y
                                    ))}>
                                </input>
                            </label>
                            <label>
                                Y:
                                <input
                                    className="form-control bg-secondary text-light"
                                    type="number"
                                    value={selectedObject.start.y}
                                    onChange={(changeEvent) => dispatch(setSelectedObjectStart(
                                        selectedObject.start.x,
                                        parseInt(changeEvent.target.value)
                                    ))}>
                                </input>
                            </label>
                        </div>
                    </div>
                </div>
            }
            {selectedObject.end &&
                <div className="card bg-dark text-light border-secondary mb-3">
                    <div className="card-header border-secondary">
                        <h5>End</h5>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>
                                X:
                                <input
                                    className="form-control bg-secondary text-light"
                                    type="number"
                                    value={selectedObject.end.x}
                                    onChange={(changeEvent) => dispatch(setSelectedObjectEnd(
                                        parseInt(changeEvent.target.value),
                                        selectedObject.end.y
                                    ))}>
                                </input>
                            </label>
                            <label>
                                Y:
                                <input
                                    className="form-control bg-secondary text-light"
                                    type="number"
                                    value={selectedObject.end.y}
                                    onChange={(changeEvent) => dispatch(setSelectedObjectEnd(
                                        selectedObject.end.x,
                                        parseInt(changeEvent.target.value)
                                    ))}>
                                </input>
                            </label>
                        </div>
                    </div>
                </div>
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
