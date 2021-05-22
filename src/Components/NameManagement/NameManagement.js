import React, { useReducer, useRef } from 'react';
import { nameReducer, nameState } from '../../reducers/nameReducer';

const NameManagement = () => {
      const nameRef = useRef();
      const [state, dispatch] = useReducer(nameReducer, nameState);

      const handleSubmit = event => {
            event.preventDefault();

            dispatch(
                  {
                        type: 'ADD_NAME',
                        name: nameRef.current.value,
                        id: state.names.length + 1
                  })
            nameRef.current.value = "";
      }

      return (
            <div className='container mt-5'>

                  <form onSubmit={handleSubmit}>
                        <input ref={nameRef} class="form-control" placeholder='Name' required />
                  </form>

                  <table class="table table-striped">
                        <thead>
                              <tr>
                                    <th className='text-white'>Name</th>
                              </tr>
                        </thead>
                        {
                              state.names.length? 
                              <tbody>
                              {
                                    state.names.map(od =>

                                          <tr className="table-light">
                                                <td className="table-light">{od.name}</td>
                                                <button onClick={()=>dispatch({type:'REMOVE_NAME',id:od.id})} className='btn ms-3 btn-danger text-danger'>Remove</button>
                                          </tr>


                                    )

                              }
                        </tbody>
                        : <h3 className='text-danger mt-3'>No Names Added</h3>
                        }
                  </table>
            </div>
      );
};

export default NameManagement;