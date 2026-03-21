# Papaya International Web

Modern marketing site built with Vite + React + Tailwind. Includes animated sections, reusable UI primitives (shadcn/ui), routing via React Router, and a production-ready contact flow that emails the Papaya International team via Resend.

## Getting started

1. Install deps: `npm install`
2. Start dev server: `npm run dev`
3. Run checks: `npm run lint` and `npm test`

## Contact form delivery

The `Contact` section sends submissions to your inbox through a serverless API at `/api/contact` and Resend. The endpoint lives in `api/contact.ts` (Vercel-style function) and expects JSON `{ name, email, message }`.

### Configure environment

Create a `.env` (or configure project env vars in your hosting provider) with:

```
RESEND_API_KEY=your_resend_api_key
CONTACT_FROM_EMAIL="Papaya International <onboarding@resend.dev>"
CONTACT_TO_EMAIL=papayainternational.bratislava@gmail.com
```

- `CONTACT_FROM_EMAIL` must be a sender verified in Resend.
- `CONTACT_TO_EMAIL` supports a comma-separated list if multiple teammates should receive the email.

### Deploy notes

- Vercel will automatically detect the `/api` directory and ship `api/contact.ts` as a Node function.
- Ensure the env vars above are defined in the deployment environment before promoting to production.
- The frontend handles optimistic UI, disables inputs during submission, and displays toasts for success/error states.

With the env vars set, every submission in the Contact section will land in your company mailbox immediately, allowing you to reply from your mail client.
