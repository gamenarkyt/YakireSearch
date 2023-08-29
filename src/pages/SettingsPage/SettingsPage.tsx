import { Link } from "react-router-dom";
import styles from "./SettingsPage.module.scss";

import { AiOutlineInfoCircle } from "react-icons/ai";
import { ChangeEvent, useState } from "react";

const SettingsPage = () => {
  const [instance, setInstance] = useState(
    localStorage.getItem("instance") || ""
  );
  const onInstanceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInstance(e.target.value);
  };

  const onInstanceSaveHandler = () => {
    localStorage.setItem("instance", instance);
  };

  return (
    <div className={styles.settingspage}>
      <Link to="/" className={styles.homelink}>
        Home
      </Link>
      <span>Select instance:</span>
      <div className={styles.instancecontainer}>
        <input
          value={instance}
          onChange={onInstanceChangeHandler}
          type="text"
        />
        <button className={styles.savebutton} onClick={onInstanceSaveHandler}>
          save
        </button>
        <Link target="_blank" to="https://searx.space/#">
          <AiOutlineInfoCircle className={styles.infoicon} />
          <span>Get instances</span>
        </Link>
      </div>
    </div>
  );
};

export { SettingsPage };
