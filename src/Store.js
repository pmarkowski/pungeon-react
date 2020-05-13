import { createStore } from 'redux';

const store = createStore((state = {}, action) => {
    switch (action.type) {
      case 'TOGGLE_MOVE_Y':
        return { ...state, moveY: !state.moveY };
      case 'TOGGLE_SELECT':
        return { ...state, selected: !state.selected }
      default:
        return state
    }
  },
  {
    id: '823cc811-9499-4f3d-abeb-941d2ee4fd98',
    moveY: false,
    selected: false,
    dungeon: {
      "Size": {
        "Width": 0,
        "Height": 0
      },
      "Spaces": [
        {
          "Id": "01f998f7-3ad4-43c6-b498-3249ab470b05",
          "Position": {
            "X": 1,
            "Y": 1
          },
          "Size": {
            "Width": 5,
            "Height": 5
          }
        },
        {
          "Id": "79178d8c-3a3e-42ee-b1ec-00dc37a045fc",
          "Position": {
            "X": 6,
            "Y": 4
          },
          "Size": {
            "Width": 7,
            "Height": 9
          }
        },
        {
          "Id": "6ce25fdc-9fd4-46c0-a924-74f5f9174193",
          "Position": {
            "X": 15,
            "Y": 15
          },
          "Size": {
            "Width": 6,
            "Height": 7
          }
        },
        {
          "Id": "e211fbd3-a817-47a5-bb47-481ba330e46d",
          "Position": {
            "X": 21,
            "Y": 19
          },
          "Size": {
            "Width": 4,
            "Height": 9
          }
        }
      ],
      "Walls": [
        {
          "Start": {
            "X": 1,
            "Y": 1
          },
          "End": {
            "X": 1,
            "Y": 6
          }
        },
        {
          "Start": {
            "X": 6,
            "Y": 6
          },
          "End": {
            "X": 1,
            "Y": 6
          }
        },
        {
          "Start": {
            "X": 6,
            "Y": 13
          },
          "End": {
            "X": 6,
            "Y": 6
          }
        },
        {
          "Start": {
            "X": 13,
            "Y": 13
          },
          "End": {
            "X": 6,
            "Y": 13
          }
        },
        {
          "Start": {
            "X": 13,
            "Y": 4
          },
          "End": {
            "X": 13,
            "Y": 13
          }
        },
        {
          "Start": {
            "X": 6,
            "Y": 4
          },
          "End": {
            "X": 13,
            "Y": 4
          }
        },
        {
          "Start": {
            "X": 6,
            "Y": 1
          },
          "End": {
            "X": 6,
            "Y": 4
          }
        },
        {
          "Start": {
            "X": 1,
            "Y": 1
          },
          "End": {
            "X": 6,
            "Y": 1
          }
        },
        {
          "Start": {
            "X": 15,
            "Y": 15
          },
          "End": {
            "X": 15,
            "Y": 22
          }
        },
        {
          "Start": {
            "X": 21,
            "Y": 22
          },
          "End": {
            "X": 15,
            "Y": 22
          }
        },
        {
          "Start": {
            "X": 21,
            "Y": 15
          },
          "End": {
            "X": 15,
            "Y": 15
          }
        },
        {
          "Start": {
            "X": 21,
            "Y": 19
          },
          "End": {
            "X": 21,
            "Y": 15
          }
        },
        {
          "Start": {
            "X": 25,
            "Y": 19
          },
          "End": {
            "X": 21,
            "Y": 19
          }
        },
        {
          "Start": {
            "X": 21,
            "Y": 22
          },
          "End": {
            "X": 21,
            "Y": 28
          }
        },
        {
          "Start": {
            "X": 21,
            "Y": 28
          },
          "End": {
            "X": 25,
            "Y": 28
          }
        },
        {
          "Start": {
            "X": 25,
            "Y": 19
          },
          "End": {
            "X": 25,
            "Y": 28
          }
        }
      ]
    }
  },
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;