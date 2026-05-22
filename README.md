# MP Technology Consulting Support Request Site

A customer-facing support request website for MP Technology Consulting.

## What this site does

- Presents a professional support intake landing page.
- Embeds your client assessment/support request Google Form.
- Provides a direct "Open Form" link if the embedded form does not load.
- Deploys easily to Vercel.

## Quick deploy to Vercel

1. Upload these files to a GitHub repository.
2. In Vercel, click **Add New → Project**.
3. Import the GitHub repo.
4. Add this environment variable if you want to change the form URL:

```env
NEXT_PUBLIC_FORM_URL=https://docs.google.com/forms/d/14n9F31A4VvkCQ-pDCredXkQeXV3z45VTiIMhBCkA5Dk/viewform?embedded=true
```

5. Click **Deploy**.

## Local development

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Important Google Forms setting

Your Google Form must be published and available to the customers who will fill it out.

In Google Forms, check:

- The form accepts responses.
- The form is not limited to only your organization unless that is intended.
- The public fill-out link works in an incognito/private browser window.

## Change the form URL

Update the `NEXT_PUBLIC_FORM_URL` environment variable in Vercel:

```env
NEXT_PUBLIC_FORM_URL=https://your-public-google-form-link
```

Then redeploy the site.
