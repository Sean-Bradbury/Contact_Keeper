import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    display: flex;
    justify-content: space-between;
  }
`;

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  return (
    <Card className='card bg-light' id={id}>
        <h3 className="text-primary text-left">
            {name}{' '} <span className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}>{type.charAt(0).toUpperCase() + type.slice(1)}</span> 
        </h3>
        <ul className="list">
          {email && (
            <li>
              <i className='fas fa-envelope' /> {email}
            </li>
          )}
          {phone && (
            <li>
              <i className='fas fa-phone' /> {phone}
            </li>
          )}
        </ul>
        <div>
          <button className="btn btn-dark btn-sm">Edit</button>
          <button className="btn btn-danger btn-sm">Delete</button>
        </div>
    </Card>
  )
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default ContactItem;
