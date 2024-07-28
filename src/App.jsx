import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import MailboxList from './components/MailboxList/MailboxList'
import NavBar from './components/NavBar/NavBar'
import MailboxDetails from './components/MailboxDetails/MailboxDetails'
import MailboxForm from './components/MailboxForm/MailboxForm'





const initialState = [
   {_id: 1 ,name: "Mailbox 1", boxHolder: "John Doe",boxSize: "Small" },
  
];

const App = () => {

  const [mailboxes, setMailboxes] = useState(initialState)

const addBox = (newMailbox) => {
  newMailbox._id = mailboxes.length + 1;
  setMailboxes([...mailboxes, newMailbox])
  
}

return(
    <>
  <NavBar />
  
  <Routes>
  <Route path="/" element={<main><h1>Post Office</h1></main>} />
  <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
  <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
  <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
  <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
  
  </Routes>
  </>




)


};



export default App;
