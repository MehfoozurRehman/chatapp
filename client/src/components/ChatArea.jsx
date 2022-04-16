import React from "react";
import {
  Camera,
  Circle,
  Menu,
  MessageSquare,
  Paperclip,
  Search,
  Send,
} from "react-feather";
import { getText } from "../utils/getText";

export default function ChatArea({ setIsDetails }) {
  return (
    <div className="container__chat__wrapper">
      <ChatHeader setIsDetails={setIsDetails} />
      <div className="container__chat__wrapper__chat">chat</div>
      <ChatFooter />
    </div>
  );
}

function ChatHeader({ setIsDetails }) {
  return (
    <div
      className="container__sidebar__header"
      style={{
        padding: "0em 1em",
      }}
    >
      <button
        onClick={() => {
          setIsDetails(true);
        }}
        className="container__sidebar__header__btn"
      >
        <div className="container__sidebar__header__avatar">
          <img
            src="https://pps.whatsapp.net/v/t61.24694-24/245227693_702756124181740_640416741522230386_n.jpg?ccb=11-4&oh=01_AVwrE1GHnnWSEEA4LeQUx9wzXzCwQO_wzod87vJ9OTgQmQ&oe=6269D1D6"
            alt="avatar"
            className="container__sidebar__header__avatar__img"
          />
        </div>
        <div className="container__sidebar__header__btn__content">
          <div className="container__sidebar__header__btn__content__heading">
            Group name
          </div>
          <div className="container__sidebar__header__btn__content__sub__heading">
            {getText(
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos est, consequatur nostrum qui repudiandae voluptatibus facere cum dicta exercitationem fugit.",
              120
            )}
          </div>
        </div>
      </button>
      <div className="container__sidebar__header__actions">
        <button
          className="container__sidebar__header__actions__entry"
          title="menu"
        >
          <Search size={16} color="currentColor" />
        </button>
        <button
          className="container__sidebar__header__actions__entry"
          title="menu"
        >
          <Menu size={16} color="currentColor" />
        </button>
      </div>
    </div>
  );
}

function ChatFooter({}) {
  return (
    <div
      className="container__sidebar__header"
      style={{
        padding: "0em 1em",
      }}
    >
      <div className="container__sidebar__header__actions">
        <button
          className="container__sidebar__header__actions__entry"
          title="menu"
        >
          <Camera size={16} color="currentColor" />
        </button>
        <button
          className="container__sidebar__header__actions__entry"
          title="menu"
        >
          <Paperclip size={16} color="currentColor" />
        </button>
      </div>
      <input
        type="text"
        placeholder="Write message"
        className="container__sidebar__header__input"
      />
      <div className="container__sidebar__header__actions">
        <button
          className="container__sidebar__header__actions__entry"
          title="menu"
        >
          <Send size={16} color="currentColor" />
        </button>
      </div>
    </div>
  );
}
