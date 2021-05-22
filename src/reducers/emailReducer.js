export const emailState ={ 
      emails:[]
}

export const emailReducer = (state,action)=>{

      switch (action.type)
      {
            case 'ADD_EMAIL':
                  const newEmail = 
                  {
                        id: action.id,
                        name: action.name,
                  }

                  const allEmails = [...state.emails, newEmail]
                  return {emails: allEmails};

            case 'REMOVE_EMAIL': 
                  const remaining = state.emails.filter(od=>od.id!==action.id);
                  const newState = {emails:remaining};
                  return newState;

            default:
                  return state;
      }
}