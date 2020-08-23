import React from 'react'
import { connect } from 'react-redux'
import { selectObject } from '../reducers/dungeonReducer'

let ObjectSelector = ({dispatch, selectedObjectId, dungeonObjects}) =>
    <div className="list-group">
        {dungeonObjects.map(object => {
            return <button
                className={`list-group-item list-group-item-secondary ${selectedObjectId === object.id ? " active" : ""}`}
                onClick={() => dispatch(selectObject(object.id))}>
                {object.id}
            </button>
        })}
    </div>


const mapStateToProps = state => ({
    selectedObjectId: state.selectedObject,
    dungeonObjects: state.dungeon.objects
})

ObjectSelector = connect(mapStateToProps)(ObjectSelector)

export default ObjectSelector
