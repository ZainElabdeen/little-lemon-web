# Little Lemon — Web App

A React web app for the Little Lemon Mediterranean restaurant in Chicago. It
presents the restaurant's homepage and lets customers reserve a table through a
validated booking form backed by a booking API.

This project was built for the Meta Front-End Developer Capstone, following the
Little Lemon Figma design system (Markazi Text for headings, Karla for body
text, and the brand palette below).

## Features

- **Homepage** — hero banner, weekly specials, customer testimonials, and an
  about section, built with semantic HTML and CSS Grid/Flexbox.
- **Booking page** (`/booking`) — choose a date, a time, the number of guests,
  and an occasion. Available times are fetched from the booking API and update
  when the date changes.
- **Booking confirmation** (`/confirmed`) — shown after the booking API accepts
  a reservation.
- **Validation** — two layers: HTML5 attributes (`required`, `min`, `max`) plus
  React state validation that keeps the submit button disabled until the form is
  valid.
- **Accessibility** — labelled form fields, `alt` text on images, ARIA labels on
  navigation and buttons, semantic landmarks, and a logical heading hierarchy.
- **Responsive layout** — grid columns stack into a single column at 768px and
  below.
- **Unit tests** — booking times, form validation (valid and invalid states),
  submission behaviour, and the confirmation page.

## Tech Stack

- React 19 (Create React App)
- React Router
- React Testing Library / Jest

## Getting Started

Requirements: **Node.js 18+** and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm test              # run the unit tests in watch mode
CI=true npm test      # run the unit tests once (CI mode)
npm run build         # create a production build in build/
```

## Project Structure

```
public/
  api.js                 Booking API (window.fetchAPI / window.submitAPI)
  images/                Logo, photos and style-guide assets
  index.html             Metadata, Open Graph tags, fonts, API script
  manifest.json          Web app manifest (name, icons, theme colors)
src/
  App.js                 App shell wrapped in BrowserRouter
  App.css                All layout, typography and component styles
  components/
    Header.js, Nav.js, Footer.js      Page chrome
    Main.js                           Routes and app-level state (useReducer)
    Homepage.js                       Homepage composition
    CallToAction.js, Specials.js,
    CustomersSay.js, Chicago.js       Homepage sections
    BookingPage.js, BookingForm.js    Booking flow
    ConfirmedBooking.js               Confirmation page
    bookingTimes.js                   initializeTimes / updateTimes (API-backed)
    *.test.js                         Unit tests
  index.js, index.css    Entry point and base styles
```

## Design Tokens

Defined as CSS variables in `src/App.css`, taken from the Little Lemon style
guide:

| Token              | Value     |
| ------------------ | --------- |
| `--color-primary`  | `#495E57` |
| `--color-secondary`| `#F4CE14` |
| `--color-light`    | `#EDEFEE` |
| `--color-dark`     | `#333333` |
| `--color-peach`    | `#FBDABB` |

## The Booking API

The app talks to two global functions exposed by `public/api.js`:

- `fetchAPI(date)` — returns an array of available reservation times for a date.
- `submitAPI(formData)` — returns `true` when a reservation is accepted.

The API is vendored into `public/api.js` rather than loaded from the URL given in
the course material (`raw.githubusercontent.com`), because GitHub serves raw
files as `text/plain` and browsers refuse to execute those as scripts. The file
also assigns both functions to `window` explicitly, since top-level `const`
declarations in a classic script do not become `window` properties. If the
script fails to load, the app falls back to a default set of times and shows an
error message if a booking cannot be submitted.

## Accessibility Notes

- Every form field has a `<label>` tied to it with `htmlFor`/`id`.
- Images have meaningful `alt` text; decorative elements are `aria-hidden`.
- Navigation landmarks carry `aria-label` attributes, and the booking error
  message uses `role="alert"` so screen readers announce it.
