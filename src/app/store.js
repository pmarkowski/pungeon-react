import { createStore } from 'redux';
import dungeonReducer from './reducers/dungeonReducer.js'
import TOOLTYPE from './utils/toolTypes.js';

const store = createStore(dungeonReducer,
  {
    scrollMovesViewport: false,
    mouseDown: false,
    mouseStartX: 0,
    mouseStartY: 0,
    selectedTool: TOOLTYPE.NEW_SPACE,
    dungeon: {
      size: {
        width: 28,
        height: 32
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
          id: '4abe3330-4a95-4c29-b71d-8ea768da1ee6',
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
          id: 'ad3c6f9b-f3f0-4025-8073-daacc68483ec',
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
          id: '68365136-d12f-4e54-8f7b-4cbd3ab424eb',
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
          id: '3d6435e5-8d67-4405-87d0-72c4e8f4dfaa',
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
          id: '384ac23d-f5fc-4cd1-9ad7-b528b62fa732',
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
          id: '161e3147-ca11-4dc4-a26b-ca8295c5abaa',
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
          id: 'e8092d63-e7e2-4cd2-8c80-8cd6030980f1',
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
          id: '71ed94d3-177b-428b-a8e5-fe25eb79a4ea',
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
          id: '0ea47a6f-af9f-4ec6-a7f3-881332643e2a',
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
          id: 'f7ec5579-7966-4ba4-b8ee-fdaad6372842',
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
          id: '1e587060-37cc-4b87-a88a-852c8055cabb',
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
          id: '79e1f702-6d60-435b-ba1e-584077a7d479',
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
          id: '231997d1-1453-4573-a2c0-0571428d7ac9',
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
          id: '85033454-8145-4d36-9b58-5e891f731f25',
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
          id: '2c6b4f88-4163-4847-ba05-c4ce865dfd87',
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
          id: '57013c9b-609f-4e59-ae1a-fd94a49bac80',
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