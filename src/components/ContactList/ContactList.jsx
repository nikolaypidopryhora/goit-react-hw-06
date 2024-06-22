import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.listEl}>
      {contacts.map((item) => (
        <li className={css.listItem} key={item.id}>
          <Contact contactItem={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
