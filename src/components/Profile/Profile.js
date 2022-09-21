import './Profile.css';

function Profile () {

  return (
    <section className='profile'>
      <h2 className='profile__title'>Привет, ревьюер!</h2>

      <form className='profile-form'>

        <div className='profile-form__container'>
          <label className='profile-form__label' for='name'>Имя</label>
          <input
            className='profile-form__input'
            type='text'
            name='name'
            value='Господин уважаемый ревьюер'
            required
          />
        </div>

        <div className='profile-form__container'>
          <label className='profile-form__label' for='email'>E-mail</label>
          <input
            className='profile-form__input'
            type='email'
            name='email'
            value='pochta@uvazhaemogo.reviewera'
            required
          />
        </div>

        <button
          className='profile-form__submit-btn link'
          type='submit'
        >Редактировать
        </button>

      </form>

      <button
          className='profile-form__exit-btn link'
          type='submit'
        >Выйти из аккаунта
      </button>

    </section>
  );
};

export default Profile;