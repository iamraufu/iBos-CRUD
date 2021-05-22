export const nameState ={ 
      names:[]
}

export const nameReducer = (state,action)=>{

      switch (action.type)
      {
            case 'ADD_NAME':
                  const newName = 
                  {
                        id: action.id,
                        name: action.name,
                  }

                  const allNames = [...state.names, newName]
                  return {names: allNames};

            case 'REMOVE_NAME': 
                  const remaining = state.names.filter(od=>od.id!==action.id);
                  const newState = {names:remaining};
                  return newState;

            default:
                  return state;
      }
}