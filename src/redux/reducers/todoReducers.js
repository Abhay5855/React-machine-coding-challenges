import { ADDTODO, DELETETODO } from '../action_constants/actionConstants'

const initialState = {
  todos: [

        {
            "id": 1658845842950,
            "completed": false,
            "text": "heena raj"
        },
        {
            "id": 1658845852921,
            "completed": false,
            "text": "rutkar verma"
        }
    ],
  
}

export const TodoReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO:
      const { id, completed, text } = action.payload

      return {
        ...state,

        todos: [
          ...state.todos,

          {
            id: id,

            completed: completed,

            text: text,
          },
        ],
      }

    case DELETETODO:
      const filtered = state.todos.filter(
        (itemId) => itemId.id !== action.payload,
      )

      return {
        ...state,

        todos: filtered,
      }

    default:
      return state
  }
}
