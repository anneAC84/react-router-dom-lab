import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
   
    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find(
      (mailbox) => mailbox._id === Number(mailboxId)
    );

    return (
        <>
        
        <h2>Mailbox {mailboxId}</h2>

        <h3>Details</h3>
        <dl>
      <dt>Boxholder:</dt>
      <dd>{selectedBox.boxHolder}</dd>
      <dt>Box size:</dt>
      <dd>{selectedBox.boxSize}</dd>
    </dl> 
    </>
    )
  };
  

export default MailboxDetails;