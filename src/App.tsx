function App() {
  return (
    <>
      {/* ====== SKIP LİNK: Klavye / ekran okuyucu kullanıcıları için ====== */}
      {/* Tab tuşuna basınca ilk odaklanan eleman — nav'ı atlayıp direkt içeriğe gider */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      {/* ===== HEADER & NAVİGASYON ===== */}
      <header>
        <h1>Şerif Miraç Gögebakan — Kişisel Portfolyo</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      {/* ===== ANA İÇERİK ===== */}
      {/* id="main-content" → skip-link'in hedefi */}
      <main id="main-content">

        {/* --- HAKKIMDA BÖLÜMÜ --- */}
        <section id="hakkimda">
          <h2>Hakkimda</h2>

          {/* Profil fotoğrafı — fetchpriority=high: LCP adayı, erken yükle */}
          <figure>
            <img
              src="/profil.jpg"
              alt="Şerif Miraç Gögebakan logo"
              width="200"
              height="200"
              fetchPriority="high"
            />
            <figcaption>SMG</figcaption>
          </figure>

        </section>

        {/* --- PROJELERİM BÖLÜMÜ --- */}
        <section id="projeler">
          <h2>Projelerim</h2>

          {/* Proje 1 — loading=lazy: görünüm alanı dışındaysa beklet */}
          <figure>
            <img
              src="/proje1.png"
              alt="Analitik dashboard web uygulaması — koyu tema, grafik ve yan menü içeren modern arayüz"
              width="600"
              height="400"
              loading="lazy"
            />
            <figcaption>Proje 1: Analitik Dashboard</figcaption>
          </figure>

          {/* Proje 2 — loading=lazy: görünüm alanı dışındaysa beklet */}
          <figure>
            <img
              src="/proje2.png"
              alt="Görev yönetim mobil uygulaması — kart tabanlı arayüz ve ilerleme çubukları"
              width="600"
              height="400"
              loading="lazy"
            />
            <figcaption>Proje 2: Görev Yönetim Uygulaması</figcaption>
          </figure>

        </section>

        {/* --- İLETİŞİM BÖLÜMÜ --- */}
        <section id="iletisim">
          <h2>Iletisim</h2>

          {/*
            novalidate → Tarayıcının varsayılan balonlarını kapatır,
            kendi aria-describedby hata mesajlarımızı kullanırız.
            action="#" → Şimdilik sayfa yenilemeyi engeller.
          */}
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              {/* AD SOYAD */}
              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                  placeholder="Örn: Ad Soyad"
                />
                {/* role="alert" → hata eklenince ekran okuyucu hemen okur */}
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              {/* E-POSTA */}
              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                  placeholder="Örn: smg@example.com"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              {/* KONU (SELECT) */}
              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                  defaultValue=""
                >
                  <option value="" disabled>-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              {/* MESAJ (TEXTAREA) */}
              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                  placeholder="En az 10 karakter yazınız..."
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gonder</button>

            </fieldset>
          </form>

        </section>

      </main>

      {/* ===== FOOTER ===== */}
      <footer>
        <p>&copy; 2026 Şerif Miraç Gögebakan. Tum haklari saklidir.</p>
      </footer>
    </>
  );
}

export default App;