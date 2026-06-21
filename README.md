# Maestralić

Bilingual (Croatian / English) website for **Maestralić**, an adventure tourism
agency in Omiš, Croatia. Visitors can browse tours (rafting, boat rental,
kayaking, canyoning, quad/ATV safari), book and pay online via Stripe, or send a
booking/contact request by email.

Built with [Next.js](https://nextjs.org/) (Pages Router).

## Stack

- **Next.js 12** + **React 18**
- **MUI v5** (`@mui/material`) with Emotion for styling
- **Stripe** for checkout (`@stripe/stripe-js` + `stripe`)
- **Nodemailer** (Gmail) for contact / booking emails
- Language state via React Context + cookies (`ctx/`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

| Variable                             | Purpose                                      |
| ------------------------------------ | -------------------------------------------- |
| `GMAIL_USER`                         | Gmail address used to send emails            |
| `GMAIL_APP_PASSWORD`                 | Gmail [App Password](https://myaccount.google.com/apppasswords) |
| `STRIPE_SECRET_KEY`                  | Stripe secret key (server-side)              |
| `STRIPE_WEBHOOK_SECRET`              | Stripe webhook signing secret                |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key (client-side)         |

> Never commit real secrets. `.env*` files (except `.env.example`) are gitignored.

## Scripts

| Command                | Description                          |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Start the dev server                 |
| `npm run build`        | Production build                     |
| `npm start`            | Run the production build             |
| `npm run lint`         | Lint with `next lint`                |
| `npm run format`       | Format the codebase with Prettier    |
| `npm run format:check` | Check formatting without writing     |

## Stripe webhooks (local)

To test the booking confirmation emails locally, forward Stripe events to the
webhook route:

```bash
stripe listen --forward-to localhost:3000/api/webhook
```

Use the signing secret it prints as `STRIPE_WEBHOOK_SECRET`.

## Deployment

Deployed on [Vercel](https://vercel.com/). Set all environment variables above
in the Vercel project settings.
