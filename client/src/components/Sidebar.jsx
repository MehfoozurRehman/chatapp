import React, { useState } from "react";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  Circle,
  Menu,
  MessageSquare,
  Search,
} from "react-feather";
import { getText } from "../utils/getText";

export default function Sidebar() {
  return (
    <div className="container__sidebar">
      <SidebarHeader />
      <SidebarSearch />
      <SidebarList />
    </div>
  );
}

function SidebarHeader({}) {
  return (
    <div className="container__sidebar__header">
      <button className="container__sidebar__header__avatar">
        <img
          src="https://pps.whatsapp.net/v/t61.24694-24/245227693_702756124181740_640416741522230386_n.jpg?ccb=11-4&oh=01_AVwrE1GHnnWSEEA4LeQUx9wzXzCwQO_wzod87vJ9OTgQmQ&oe=6269D1D6"
          alt="avatar"
          className="container__sidebar__header__avatar__img"
        />
      </button>
      <div className="container__sidebar__header__actions">
        <button
          className="container__sidebar__header__actions__entry"
          title="status"
        >
          <Circle size={16} color="currentColor" />
        </button>
        <button
          className="container__sidebar__header__actions__entry"
          title="new chat"
        >
          <MessageSquare size={16} color="currentColor" />
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

function SidebarSearch({}) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="container__sidebar__search">
      <form className="container__sidebar__search__form">
        <button className="container__sidebar__search__form__btn">
          {isFocused ? (
            <ArrowLeft size={16} color="currentColor" />
          ) : (
            <Search size={16} color="currentColor" />
          )}
        </button>
        <input
          type="search"
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          placeholder="Search"
          className="container__sidebar__search__form__input"
        />
      </form>
    </div>
  );
}

function SidebarList({}) {
  return (
    <div className="container__sidebar__list">
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
      <SidebarListEntry />
    </div>
  );
}

function SidebarListEntry({}) {
  return (
    <div className="container__sidebar__list__entry">
      <input
        type="radio"
        className="container__sidebar__list__entry__input"
        name="container__sidebar__list__entry__input"
      />
      <div className="container__sidebar__list__entry__wrapper">
        <img
          src="https://pps.whatsapp.net/v/t61.24694-24/245227693_702756124181740_640416741522230386_n.jpg?ccb=11-4&oh=01_AVwrE1GHnnWSEEA4LeQUx9wzXzCwQO_wzod87vJ9OTgQmQ&oe=6269D1D6"
          alt="avatar"
          className="container__sidebar__list__entry__img"
        />
        <div className="container__sidebar__list__entry__content">
          <div className="container__sidebar__list__entry__content__top">
            <div className="container__sidebar__list__entry__content__top__heading">
              Group name
            </div>
            <div className="container__sidebar__list__entry__content__top__sub__heading">
              12:42 AM
            </div>
          </div>
          <div className="container__sidebar__list__entry__content__bottom">
            <div className="container__sidebar__list__entry__content__bottom__heading">
              <Check size={12} color="currentColor" />
              {getText(
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quam dicta, officia perferendis magni delectus distinctio possimus corrupti maiores architecto.",
                30
              )}
            </div>
            <button
              onClick={() => {
                console.log("hey");
              }}
              className="container__sidebar__list__entry__content__bottom__btn"
            >
              <ChevronDown size={16} color="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
