import React from "react";

function Main ({onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
    return (
        <main className="content">
        <section className="profile">
          <div className="profile__container">
            <div className = "profile__avatar-wrap">
              <button className = "profile__avatar-button">
            <img src="<%=require('./images/Cousteau.jpg')%>" className="profile__avatar" alt="аватар"/>
          
            </button>
          </div>
            <div className="profile__info">
              <div className="profile__wrap">
                <h1 className="profile__name">Жак-Ив Кусто</h1>
                <button type="button" className="profile__edit-button" title="Изменить профиль" aria-label="Изменить"></button>
              </div>
              <p className="profile__profession">Исследователь океана</p>
            </div>
          </div>
          <button type="button" className="profile__add-button" title="Добавить фото" aria-label="Добавить"></button>
        </section>
        <section className="photos">
            <ul className="grid-photos">
            </ul>
        </section>
      </main>
    )
}
export { Main };