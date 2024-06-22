import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

export default function Contact({
  contactItem: { id, name, number },
  onDelete,
}) {
  return (
    <div className={css.listItem}>
      <div>
        <div className={css.dataLine}>
          <BsFillPersonFill />
          <p>{name}</p>
        </div>
        <div className={css.dataLine}>
          <BsFillTelephoneFill />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}
