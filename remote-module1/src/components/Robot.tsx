/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function App() {
  const contact = {
    first: "Next Module",
    last: "1",
    avatar: "https://robohash.org/1.png?size=200x200",
    notes: "Some notes",
  };

  return (
    <div className="wrapper">
      <div>
        <img alt="avatar" key={contact.avatar} src={contact.avatar} />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
        </h1>
        {contact.notes && <p>{contact.notes}</p>}
      </div>
    </div>
  );
}
