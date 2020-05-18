import React from "react"
import { connect } from 'react-redux'
import { deleteSelectedObject } from '../reducers/dungeonReducer'

let StateEditor = ({ dispatch, selectedObjectId }) => {
    return (
        <div>
            {selectedObjectId &&
                <button className="btn btn-outline-danger" onClick={() => dispatch(deleteSelectedObject())}>Delete Object</button>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    selectedObjectId: state.selectedObject
})

StateEditor = connect(mapStateToProps)(StateEditor)

export default StateEditor
