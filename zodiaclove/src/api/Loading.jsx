import React from "react";

export default function Loading(props) {
  if (props.userForm) {
    return (
      <div>
        <h1>Adding user</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Loading something</h1>
      </div>
    );
  }
}
