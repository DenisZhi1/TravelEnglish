import React from "react";

function App() {
  const handleScrollToCTA = () => {
    const el = document.getElementById("cta-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="page">
      <header className="hero">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <div className="hero-text">
            <p className="hero-tag">Онлайн-курс для детей</p>
            <h1 className="hero-title">Английский для путешествий</h1>
            <p className="hero-subtitle">
              Мечтаете, чтобы ваш ребёнок уверенно говорил по-английски в поездках — от заказа кофе до поиска
              утраченного чемодана? На этом курсе дети отрабатывают живые фразы для реальных ситуаций в
              путешествиях.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={handleScrollToCTA}>
                Записаться на курс
              </button>
              <span className="hero-note">
                Формат: онлайн · Уровень: A2–B1 (Pre-Intermediate)
              </span>
            </div>
          </div>
          <div className="hero-card">
            <p className="hero-card-title">Ближайший старт</p>
            <p className="hero-card-date">Набор открыт — места ограничены</p>
            <p className="hero-card-text">
              Маленькие группы до 6 человек, интерактивный формат и ситуации из настоящих путешествий.
            </p>
          </div>
        </div>
        <div className="runway" aria-hidden="true">
          <div className="runway-line" />
          <div className="runway-lights">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="runway-light" />
            ))}
          </div>
        </div>
      </header>

      <main className="container main">
        {/* Для кого курс */}
        <section className="section" id="audience">
          <h2 className="section-title">Для кого курс</h2>
          <p className="section-intro">
            Курс подойдёт школьникам, которые уже знают базовый английский и хотят использовать его в реальных
            поездках.
          </p>
          <div className="cards-grid two">
            <div className="card">
              <p className="card-label">Первая группа</p>
              <p className="card-title">4–5 класс</p>
              <p className="card-text">
                Мягкое погружение в разговорный английский для путешествий: много игр, сценок и понятных диалогов.
              </p>
            </div>
            <div className="card">
              <p className="card-label">Вторая группа</p>
              <p className="card-title">6–8 класс</p>
              <p className="card-text">
                Больше самостоятельной речи, уверенность в общении и подготовка к реальным зарубежным поездкам.
              </p>
            </div>
          </div>
        </section>

        {/* Программа курса */}
        <section className="section" id="program">
          <h2 className="section-title">Программа курса</h2>
          <p className="section-intro">
            10 тематических занятий, каждое — как маленькое путешествие: от аэропорта до идеального отпуска.
          </p>
          <div className="cards-grid">
            <article className="card">
              <h3 className="card-title">1. Аэропорт без стресса</h3>
              <p className="card-text">
                Регистрация, паспортный контроль, вопросы на таможне — всё на английском.
              </p>
              <p className="card-note">👉 Уверенность уже в первые часы за границей.</p>
            </article>
            <article className="card">
              <h3 className="card-title">2. В отеле: заселение и помощь</h3>
              <p className="card-text">
                Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.
              </p>
              <p className="card-note">👉 Практика вежливых фраз и повседневной лексики.</p>
            </article>
            <article className="card">
              <h3 className="card-title">3. Кафе и рестораны</h3>
              <p className="card-text">
                Заказ еды, вопросы про аллергены, счёт и чаевые.
              </p>
              <p className="card-note">
                👉 Развитие гастрономического словаря и уверенности в общении.
              </p>
            </article>
            <article className="card">
              <h3 className="card-title">4. На улице: ориентирование и просьбы</h3>
              <p className="card-text">
                Как спросить дорогу, вызвать такси или найти аптеку.
              </p>
              <p className="card-note">
                👉 Понимание устной речи и произношения в реальных ситуациях.
              </p>
            </article>
            <article className="card">
              <h3 className="card-title">5. Экстренные случаи</h3>
              <p className="card-text">
                Потеря вещей, болезнь, помощь полиции — всё это на английском.
              </p>
              <p className="card-note">
                👉 Важные фразы, которые могут спасти отпуск.
              </p>
            </article>
            <article className="card">
              <h3 className="card-title">6–8. Туризм и развлечения</h3>
              <p className="card-text">
                Покупка билетов, экскурсии, общение с гидами, музеи и парки.
              </p>
              <p className="card-note">
                👉 Погружение в культурный контекст через язык.
              </p>
            </article>
            <article className="card">
              <h3 className="card-title">9. Дружба в путешествиях</h3>
              <p className="card-text">
                Как познакомиться с другими детьми или подростками за границей.
              </p>
              <p className="card-note">
                👉 Игровая практика диалогов и неформального общения.
              </p>
            </article>
            <article className="card card-highlight">
              <h3 className="card-title">10. Дипломный проект: «Мой идеальный отпуск»</h3>
              <p className="card-text">
                Ребёнок планирует воображаемое путешествие и представляет его на английском.
              </p>
              <p className="card-note">
                👉 Развитие связной речи и творческого самовыражения.
              </p>
            </article>
          </div>
        </section>

        {/* Почему курс особенный */}
        <section className="section" id="features">
          <h2 className="section-title">Почему этот курс особенный?</h2>
          <div className="cards-grid two">
            <ul className="list-card">
              <li>Акцент на практическую, живую речь, а не на грамматику ради грамматики.</li>
              <li>Все ситуации — из реальной жизни путешественника.</li>
              <li>Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты.</li>
            </ul>
            <div className="level-card">
              <p className="level-label">Результат курса</p>
              <p className="level-value">A2–B1</p>
              <p className="level-text">
                Ребёнок выходит на уровень Pre-Intermediate и чувствует себя увереннее в поездках.
              </p>
            </div>
          </div>
        </section>

        {/* Что потребуется и расписание */}
        <section className="section two-column" id="details">
          <div>
            <h2 className="section-title">Что потребуется</h2>
            <div className="card">
              <ul className="list">
                <li>Стационарный компьютер или ноутбук с наушниками и микрофоном</li>
                <li>Стабильный интернет и Zoom</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="section-title">Расписание</h2>
            <div className="card">
              <p className="schedule-item">
                <span className="schedule-label">Четверг, 15:00 (МСК)</span>
                <span className="schedule-note">группа 4–5 класс</span>
              </p>
              <p className="schedule-item">
                <span className="schedule-label">Пятница, 15:30 (МСК)</span>
                <span className="schedule-note">группа 6–8 класс</span>
              </p>
            </div>
          </div>
        </section>

        {/* Стоимость */}
        <section className="section" id="pricing">
          <h2 className="section-title">Стоимость</h2>
          <div className="cards-grid two">
            <div className="card">
              <p className="card-label">Полный курс</p>
              <p className="price">12 000 ₽</p>
              <p className="card-text">
                10 уроков с прогрессией сложности, обратной связью и финальным проектом.
              </p>
            </div>
            <div className="card">
              <p className="card-label">Абонемент</p>
              <p className="price">1 300 ₽ / урок</p>
              <p className="card-text">
                Гибкий формат оплаты, если хотите попробовать или подключаться по мере возможностей.
              </p>
            </div>
          </div>
        </section>

        {/* Набор открыт + CTA внизу */}
        <section className="section cta-section" id="cta-section">
          <h2 className="section-title">Набор открыт!</h2>
          <p className="section-intro">
            Группы маленькие — максимум 6 детей, чтобы каждый получил внимание. 
            Места ограничены.
          </p>
          <p className="section-intro">
            👉 Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
          </p>
          <button className="btn-primary btn-large">
            Записаться на курс
          </button>
          <p className="cta-note">После нажатия можно вести на форму записи, чат или лендинг-опрос.</p>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p className="footer-text">
            © {new Date().getFullYear()} · Курс «Английский для путешествий»
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
