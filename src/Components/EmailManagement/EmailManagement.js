import React, { useReducer, useRef } from 'react';
import {emailReducer, emailState} from '../../reducers/emailReducer';

const EmailManagement = () => {

      const emailRef = useRef();
      const [state, dispatch] = useReducer(emailReducer, emailState);

      const handleSubmit = event => {
            event.preventDefault();

            dispatch(
                  {
                        type: 'ADD_EMAIL',
                        name: emailRef.current.value,
                        id: state.emails.length + 1
                  })
            emailRef.current.value = "";
      }

      return (
            <div className='container mt-5'>
                  {/* <h1>Orders Management: {state.orders.length}</h1> */}
                  <form onSubmit={handleSubmit}>
                        <input ref={emailRef} class="form-control" placeholder='Email' required />
                  </form>
                  <table class="table table-striped">
                        <thead>
                              <tr>
                                    <th className='text-white'>Email</th>
                              </tr>
                        </thead>
                        {
                              state.emails.length ? 
                              <tbody>
                                    {
                                          state.emails.map(od =>

                                                <tr className="table-light">
                                                      <td className="table-light">{od.name}</td>
                                                      <button onClick={()=>dispatch({type:'REMOVE_EMAIL',id:od.id})} className='btn ms-3 btn-danger text-danger'>Remove</button>
                                                </tr>


                                          )

                                    }
                              </tbody>
                              : <h3 className='text-danger mt-3'>No Emails Added</h3>
                        }
                  </table>
            </div>
      );
};

export default EmailManagement;