import { selectNameFilter, selectContacts } from "../../redux/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList() {
  const items = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const visibleContacts = items.filter((item) => {
    return item.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul className={css.listEl}>
      {visibleContacts.map((item) => (
        <li className={css.listItem} key={item.id}>
          <Contact id={item.id} name={item.name} phone={item.phone} />
        </li>
      ))}
    </ul>
  );
}
