import { useEffect, useState } from "react";
import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

const contactArray = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const localStorage = window.localStorage.getItem("contacts");
    if (localStorage) {
      return JSON.parse(localStorage);
    }
    return contactArray;
  });

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addItem = (newItem) => {
    setContacts((items) => {
      return [...items, newItem];
    });
  };

  const delItem = (id) => {
    setContacts((items) => {
      return items.filter((item) => item.id !== id);
    });
  };

  const showedItems = contacts.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addItem} />
      <SearchBox text={searchValue} onFilter={setSearchValue} />
      <ContactList
        contacts={showedItems}
        setContacts={setContacts}
        onDelete={delItem}
      />
    </div>
  );
}
