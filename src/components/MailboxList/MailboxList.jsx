import { Link } from 'react-router-dom';
import React from 'react'

const MailboxList = (props) => {
    
    
    
    return (
        <>
        
        <h2>Mailbox List</h2>
        <ul>

          
          
          {props.mailboxes.map((currentMailbox) => (
            <li key={currentMailbox.name}>
        <Link to={`/mailboxes/${currentMailbox._id}`}>
        Mailbox {currentMailbox._id}
        </Link>
        </li>
            ))}
        </ul>
       
      </>
     
    )
  };



export default MailboxList;