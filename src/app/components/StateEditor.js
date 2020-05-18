import React from "react"
import { connect } from 'react-redux'
import { deleteSelectedObject } from '../reducers/dungeonReducer'

let StateEditor = ({ dispatch, selectedObjectId }) => {
    return (
        <React.Fragment>
            {selectedObjectId &&
                <div className="card bg-dark text-light border-secondary">
                    <div className="card-header border-secondary">
                        <h5>Actions</h5>
                    </div>
                    <div className="card-body">

                        <button className="btn btn-outline-danger" onClick={() => dispatch(deleteSelectedObject())}>Delete Object</button>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    selectedObjectId: state.selectedObject
})

StateEditor = connect(mapStateToProps)(StateEditor)

export default StateEditor
