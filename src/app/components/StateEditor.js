import React from "react"
import { connect } from 'react-redux'
import { deleteSelectedObject } from '../reducers/dungeonReducer'

let StateEditor = ({ dispatch, selectedObjectId }) => {
    if (selectedObjectId) {
        return <React.Fragment>
            {selectedObjectId &&
                <div className="card bg-dark text-light border-secondary">
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
        return <div className="card bg-dark text-light border-secondary">
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
    selectedObjectId: state.selectedObject
})

StateEditor = connect(mapStateToProps)(StateEditor)

export default StateEditor
