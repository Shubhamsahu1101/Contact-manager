import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { HiUserCircle } from 'react-icons/hi'
import { v4 as uuidv4 } from 'uuid';

const List = (props) => {

  const handleDelete = (id) => {
    const newList = props.contacts.filter((item) => {
      return (item.id !== id);
    });
    props.setContacts(newList);
    localStorage.setItem('currentList', JSON.stringify(newList));
  }

  const [newItem, setNewItem] = useState({ name: '', email: '', id: uuidv4() })

  const handleAdd = () => {
    const newList = [...props.contacts, newItem];
    props.setContacts(newList);
    localStorage.setItem("currentList", JSON.stringify(newList));
  }

  return (
    <main>

      <div className="contactlistlayer">

        <div className="contacts">
          <h3>Your Contacts</h3>
        </div>

        {props.length ? (
          <ul className='contactlist'>
            {props.contacts.map((contact) => {

              return <li key={contact.id} className="item" >

                <div className='usericon_input'>
                  <HiUserCircle tabIndex={"0"} />
                  <div className="contacttext">
                    <div className="name"><p>Name: {contact.name}</p></div>
                    <div className="email"><p>Email: {contact.email}</p></div>
                  </div>
                </div>

                <div className='deleteicon'>
                  <FaTrashAlt role='button' tabIndex={"0"} onClick={() => handleDelete(contact.id)} />
                </div>

              </li>

            })}
          </ul>
        ) : (
          <p>List is Empty</p>
        )}
      </div>

      <div className="addnewcontactlayer">

        <div className="contacts">
          <h3>Add New Contact</h3>
        </div>

        <form className="newcontactform" onSubmit={() => handleAdd()}>

          <div className="newcontacttext">
            <input type="text" value={newItem.item} onChange={(e) => setNewItem({ name: e.target.value, email: newItem.email, id: newItem.id })} placeholder='Name' />
            <input type="text" value={newItem.item} onChange={(e) => setNewItem({ name: newItem.name, email: e.target.value, id: newItem.id })} placeholder='Email' />
          </div>
          <div className="newcontactbutton">
            <button type='submit'>+</button>
          </div>


        </form>
      </div>

    </main>
  )
}

export default List