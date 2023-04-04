import React from "react";

import { Button } from "../../button";

import styles from "./styles.module.scss";

function Header() {
  return (
    <div>
      <div className="image-wrapper">
        <img src="https://picsum.photos/200/300" alt="img" />
      </div>
      <h3>username</h3>
      <span>you</span>
      <div className="created-at">2 days ago</div>
      <div className="action-buttons">
        <Button variant="warning">
          <img src="./images/icon-delete.svg" alt="img" />
          Delete
        </Button>
        <Button>
          <img src="./images/icon-delete.svg" alt="img" />
          Edit
        </Button>
        <Button>
          <img src="./images/icon-delete.svg" alt="img" />
          Reply
        </Button>
      </div>
    </div>
  );
}

export { Header };
