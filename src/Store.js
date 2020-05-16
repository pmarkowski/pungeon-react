import { createStore } from 'redux';

const store = createStore((state = {}, action) => {
    switch (action.type) {
      case 'TOGGLE_MOVE_Y':
        return { ...state, moveY: !state.moveY };
      case 'MOUSE_DOWN':
        return { ...state, mouseDown: true, mouseStartX: action.x, mouseStartY: action.y };
      case 'MOUSE_UP':
        return { ...state, mouseDown: false };
      case 'ADD_SPACE':
        let spaceArray = state.dungeon.spaces.slice();
        spaceArray = [...spaceArray, action.newSpace ];
        return {
          ...state,
          dungeon: {
            ...state.dungeon,
            spaces: spaceArray
          }
        };
      default:
        return state
    }
  },
  {
    id: '823cc811-9499-4f3d-abeb-941d2ee4fd98',
    moveY: false,
    mouseDown: false,
    mouseStartX: 0,
    mouseStartY: 0,
    dungeon: {
      size: {
        width: 0,
        height: 0
      },
      spaces: [
        {
          id: "01f998f7-3ad4-43c6-b498-3249ab470b05",
          position: {
            x: 1,
            y: 1
          },
          size: {
            width: 5,
            height: 5
          }
        },
        {
          id: "79178d8c-3a3e-42ee-b1ec-00dc37a045fc",
          position: {
            x: 6,
            y: 4
          },
          size: {
            width: 7,
            height: 9
          }
        },
        {
          id: "6ce25fdc-9fd4-46c0-a924-74f5f9174193",
          position: {
            x: 15,
            y: 15
          },
          size: {
            width: 6,
            height: 7
          }
        },
        {
          id: "e211fbd3-a817-47a5-bb47-481ba330e46d",
          position: {
            x: 21,
            y: 19
          },
          size: {
            width: 4,
            height: 9
          }
        }
      ],
      walls: [
        {
          start: {
            x: 1,
            y: 1
          },
          end: {
            x: 1,
            y: 6
          }
        },
        {
          start: {
            x: 6,
            y: 6
          },
          end: {
            x: 1,
            y: 6
          }
        },
        {
          start: {
            x: 6,
            y: 13
          },
          end: {
            x: 6,
            y: 6
          }
        },
        {
          start: {
            x: 13,
            y: 13
          },
          end: {
            x: 6,
            y: 13
          }
        },
        {
          start: {
            x: 13,
            y: 4
          },
          end: {
            x: 13,
            y: 13
          }
        },
        {
          start: {
            x: 6,
            y: 4
          },
          end: {
            x: 13,
            y: 4
          }
        },
        {
          start: {
            x: 6,
            y: 1
          },
          end: {
            x: 6,
            y: 4
          }
        },
        {
          start: {
            x: 1,
            y: 1
          },
          end: {
            x: 6,
            y: 1
          }
        },
        {
          start: {
            x: 15,
            y: 15
          },
          end: {
            x: 15,
            y: 22
          }
        },
        {
          start: {
            x: 21,
            y: 22
          },
          end: {
            x: 15,
            y: 22
          }
        },
        {
          start: {
            x: 21,
            y: 15
          },
          end: {
            x: 15,
            y: 15
          }
        },
        {
          start: {
            x: 21,
            y: 19
          },
          end: {
            x: 21,
            y: 15
          }
        },
        {
          start: {
            x: 25,
            y: 19
          },
          end: {
            x: 21,
            y: 19
          }
        },
        {
          start: {
            x: 21,
            y: 22
          },
          end: {
            x: 21,
            y: 28
          }
        },
        {
          start: {
            x: 21,
            y: 28
          },
          end: {
            x: 25,
            y: 28
          }
        },
        {
          start: {
            x: 25,
            y: 19
          },
          end: {
            x: 25,
            y: 28
          }
        }
      ]
    }
  },
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;