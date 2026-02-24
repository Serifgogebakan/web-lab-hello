# Web LAB-1 - Kisisel Portfolyo

## Hakkinda
Bu proje, Web Tasarimi ve Programlama dersi LAB-1 kapsaminda
Vite + React + TypeScript kullanilarak olusturulmustur.
Semantik HTML yapisi, erisilebilirlik (WCAG AA) ve performans
optimizasyonlari uygulanmistir.

## Gelistirici
- **Ad Soyad:** Şerif Miraç Gögebakan
- **Ogrenci No:** 230541126
- **Bolum:** Bilgisayar Muhendisligi

## Kullanilan Teknolojiler
- React 18
- TypeScript
- Vite

## Uygulanan Ozellikler
- Semantik HTML5 iskeleti (`header`, `nav`, `main`, `section`, `footer`)
- `aria-label`, `aria-describedby`, `role="alert"` ile ARIA destegi
- Skip-link (klavye navigasyonu)
- Dogrulamali iletisim formu (`novalidate`, `required`, `minlength`)
- WCAG AA uyumlu renk kontrastlari
- CLS onleme: gorsellere `width`/`height` atributu
- SEO: `meta description`, `lang="tr"`, anlamli `<title>`

## Kurulum
```bash
npm install
```

## Calistirma (Gelistirme)
```bash
npm run dev
```
Tarayicida http://localhost:5173 adresini ac.

## Production Build & Onizleme
```bash
npm run build
npx vite preview --port 4173
```
Tarayicida http://localhost:4173 adresini ac.

## Lighthouse Sonuclari

| Metrik | Puan |
|--------|------|
| Performance | 90+ |
| **Accessibility** | **100** ✅ |
| Best Practices | 100 |
| SEO | 100 |

### Ekran Goruntuleri
![Lighthouse Accessibility 100](public/Ekran%20görüntüsü%202026-02-24%20162650.png)