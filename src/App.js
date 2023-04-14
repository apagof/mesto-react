import logo from './logo.svg';
import './App.css';

function App() {
  return (
<body className="page">
  <header className="header">
    <img className="header__logo" alt="Логотип сайта"/>
  </header>
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
    <footer className="footer">
      <p className="footer__copyright">© 2022 Mesto Russia</p>
    </footer>
     <div className="popup popup_type_edit">
      <div className="popup__container">
      <button className="popup__button-close" type="button" title="Закрыть окно" aria-label="Закрыть"></button>
        <form className="popup__edit-form popup__form" name="Edit-profile" novalidate>
          <h3 className="popup__header">Редактировать профиль</h3>
          <input className="popup__input popup__input_type_name"
            placeholder="Имя"
            type="text"
            name="name"
            minlength="2"
            maxlength="40"
            required
            id="popup__name"
          />
          <span className="popup__input-error popup__name-error"></span>

          <input className="popup__input popup__input_type_profession"
            placeholder="О себе"
            type="text"
            name="profession"
            minlength="2"
            maxlength="200"
            required
            id="popup__prof"
          />

          <span className="popup__input-error popup__prof-error"></span>

          <button className="popup__button-save"
          type="submit"
          name="Submit"
          aria-label="Сохранить"
          >Сохранить</button>
        </form>
      </div>
    </div>
    <div className="popup popup_type_add-pic">
      <div className="popup__container">
        <button className="popup__button-close" type="button" title="Закрыть окно" aria-label="Закрыть"></button>
        <form className="popup__form-add popup__form" name="add-pic" novalidate>
          <h3 className="popup__header">Новое место</h3>
            <input type="text"
              className="popup__input popup__input_type_place popup__input_type_error"
              placeholder="Название"
              name="name"
              minlength="2"
              maxlength="30"
              required
              id="popup__pick"
            />
          <span className="popup__input-error popup__pick-error"></span>
          <input className="popup__input popup__input_type_link popup__input_type_error"
            placeholder="Ссылка на картинку"
            type="url"
            name="link"
            required
            id="popup__link"
          />
          <span className="popup__input-error popup__link-error"></span>
          <button className="popup__button-save" type="submit" name="Submit">Сохранить</button>
        </form>
      </div>
    </div>
     <div className="popup popup_type_image-big">
      <div className="popup__image-container">
          <img className="popup__card-image" src="#" alt="#"/>
          <p className="popup__image-caption"></p>
          <button className="popup__button-close" type="button" title="Закрыть окно" aria-label="Закрыть"></button>
      </div>
    </div>
    <div className="popup popup_type_avatar">
      <div className="popup__container">
        <button className="popup__button-close" type="button" title="Закрыть окно" aria-label="Закрыть"></button>
        <form className="popup__form-edit popup__form" name="edit-avatar" novalidate>
          <h3 className="popup__header">Обновить аватар</h3>
          <input type="url"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_link popup__input_type_error popup__input_name_link-avatar"
          name="link"
          required
          id="avatar-link"/>
          <span className="popup__input-error avatar-link-error"></span>
          <button className="popup__button-save" type="submit" name="Submit">Сохранить</button>
        </form>
      </div>
    </div>
    <div className="popup popup_type_confirm">
      <div className="popup__container">
        <h3 className="popup__header popup__confirm">Вы уверены?</h3>
        <form className="popup__form popup__form-confirm" name="confirm" novalidate>
          <input type="submit" className="popup__button-save popup__confirm-button" name="submit" value="Да"/>
          <button className="popup__button-close" type="button" title="Закрыть окно" aria-label="Закрыть"></button>
        </form>
      </div>
    </div>
    <template id="card-template">
      <li className="grid-item">
        <img src="#" alt="#" className="grid-item__image"/>
        <div className="grid-item__wrap">
          <h3 className="grid-item__name"></h3>
          <div className = "grid-item__like-container">
          <button type="button" className="grid-item__like" aria-label="Понравилось"></button>
          <p className ="grid-item__like-counter">1</p>
        </div>
          <button className="grid-item__delete-btn" aria-label="Удалить картинку"></button>
        </div>
        </li>
    </template>
</body>

  );
}

export default App;
