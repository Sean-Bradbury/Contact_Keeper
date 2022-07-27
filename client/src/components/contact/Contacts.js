import React, {useContext, Fragment} from 'react'
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const {contacts} = contactContext;
    
  return (
        <Fragment>
            <div className='grid-2'>
                <div></div>
                <div>
                    {contacts.map(contact => {
                        return <ContactItem key={contact.id} contact={contact} />
                    })}
                </div>
            </div>
        </Fragment>
  )
};

export default Contacts
