https://v0-next-js-website-taupe.vercel.app/

## Contact Form Email Setup

To enable email notifications for contact form submissions, set the following environment variables in your `.env.local` file:

```
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
SMTP_FROM=your_from_email@example.com
```

- `SMTP_HOST`: Your SMTP server host (e.g., smtp.gmail.com)
- `SMTP_PORT`: SMTP port (usually 465 for SSL, 587 for TLS)
- `SMTP_SECURE`: `true` for SSL, `false` for TLS
- `SMTP_USER`: Your SMTP username (often your email address)
- `SMTP_PASS`: Your SMTP password or app password
- `SMTP_FROM`: (Optional) The email address to show as the sender

The contact form will send submissions to `trionex.services@gmail.com`.
The error “Failed to send message. Please try again.” means the backend (API route) could not send the email. This is almost always due to one of the following:

1. **Missing or incorrect SMTP credentials** in your `.env.local` file.
2. **SMTP provider blocking the connection** (e.g., Gmail requires an App Password and “less secure apps” is not supported).
3. **Nodemailer not working in your environment** (e.g., Vercel serverless functions have limitations).

### How to Fix

#### 1. Check your `.env.local` file
You must have these variables set (with your real SMTP info):
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your_gmail_address@gmail.com
SMTP_PASS=your_gmail_app_password
SMTP_FROM=your_gmail_address@gmail.com
```
- If you use Gmail, you **must** use an App Password (not your normal password).  
  [How to get a Gmail App Password](https://support.google.com/accounts/answer/185833?hl=en)

#### 2. Restart your dev server
After editing `.env.local`, restart your Next.js server so the new variables are loaded.

#### 3. Check for errors in your terminal
If you’re running locally, check your terminal for any error logs from the API route. They will tell you exactly what went wrong (e.g., “Invalid login”, “ENOTFOUND”, etc.).

#### 4. (Optional) Add error logging to your API route
To help debug, you can log the error in `app/api/contact/route.ts`:
```ts
catch (error) {
  console.error('Email send error:', error);
  return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
}
```

---

### Next Steps

1. **Update your `.env.local` with correct SMTP credentials.**
2. **Restart your dev server.**
3. **Test the form again.**
4. If it still fails, check your terminal for the error message and share it here for more help.

---

#### If you want, I can add extra error logging to your API route to help you debug. Would you like me to do that? Or do you want to share your current `.env.local` (without passwords) so I can check for mistakes?

---

## 1. Create/Edit `.env.local` in your project root

Create a file named `.env.local` in the root of your project (same folder as `package.json`).  
If it already exists, just add the following lines to it.

**Copy and paste this:**
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=trionex.services@gmail.com
SMTP_PASS=YOUR_APP_PASSWORD_HERE
SMTP_FROM=trionex.services@gmail.com
```

---

## 2. Get a Gmail App Password

You **cannot** use your normal Gmail password.  
You must use a special “App Password” from Google.

**How to get it:**
1. Go to your Google Account: https://myaccount.google.com/security
2. Make sure 2-Step Verification is ON.
3. Click “App Passwords” (under “Signing in to Google”).
4. Generate a new app password (choose “Mail” and “Other”).
5. Copy the 16-character password Google gives you.
6. Replace `YOUR_APP_PASSWORD_HERE` in the `.env.local` above

---

### What This Means

- **ECONNREFUSED** means your server tried to connect to an SMTP server on port 587 at address `::1` (which is IPv6 for `localhost`), but nothing is listening there.
- This means your `.env.local` is either missing, or the SMTP settings are not correct, so Nodemailer is defaulting to `localhost:587` (which will not work).

---

## How to Fix

1. **Set up your `.env.local` file with real SMTP credentials.**
   - You must use a real SMTP provider (like Gmail, Outlook, Zoho, etc.), not localhost.
   - Example for Gmail (with App Password):

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=trionex.services@gmail.com
SMTP_PASS=YOUR_APP_PASSWORD_HERE
SMTP_FROM=trionex.services@gmail.com
```

2. **Restart your dev server** after saving `.env.local`.

3. **Test again.**

---

### Why This Happened

- If you leave any of the SMTP variables blank or unset, Nodemailer tries to connect to `localhost:587` by default, which will always fail unless you have a mail server running locally (which you do not).

---

## Next Steps

1. **Create or update your `.env.local` file** with the correct values (see above).
2. **Get a Gmail App Password** if you use Gmail (not your normal password).
3. **Restart your server.**
4. **Try the form again.**

If you do these steps and still get an error, copy the new error message here and I’ll help you further!

---

**If you want to use a different email provider, let me know which one and I’ll give you the correct settings.**

---

**This is a configuration issue, not a code issue.**

---

## Step-by-Step Solution

### 1. Open/Create `.env.local` in your project root

It must be in the root of your project (same folder as `package.json`).

### 2. Copy and paste this (for Gmail):

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=trionex.services@gmail.com
SMTP_PASS=YOUR_APP_PASSWORD_HERE
SMTP_FROM=trionex.services@gmail.com
```
- Replace `YOUR_APP_PASSWORD_HERE` with your Gmail App Password (not your normal password).
- [How to get a Gmail App Password](https://support.google.com/accounts/answer/185833?hl=en)

### 3. Save the file.

### 4. **Restart your Next.js server**  
This is required for changes to take effect.

```sh
npm run dev
```
or
```sh
pnpm dev
```

### 5. Try the form again.

---

## If it still fails:

- **Double-check for typos** in `.env.local`.
- **Make sure you are using an App Password** (not your normal Gmail password).
- **Make sure you restarted your server after editing `.env.local`.**
- **Check your terminal for a new error message** and share it here.

---

### If you want, copy-paste your `.env.local` here (remove your password) and I’ll check it for mistakes.

---

**If you are not using Gmail, tell me your email provider and I’ll give you the correct settings.**

Let me know if you want step-by-step help with the Gmail App Password process!

---

The cause of your blank/white screen on first load is likely due to the animation logic in your `HeroSection` component:

- The `HeroSection` uses `useEffect` to set `isLoaded` to `true` after the component mounts.
- All the main content (headings, subtitle, buttons, stats, etc.) are wrapped in elements that use `isLoaded` to control their opacity and transform (for entrance animations).
- If, for any reason, the initial render or hydration is delayed or fails, the content will remain invisible (`opacity-0`), resulting in a blank screen.

**Why it works after reload:**  
On reload, the client-side JavaScript is already loaded, so the `useEffect` runs and sets `isLoaded` to `true`, making the content visible.

---

## How to Fix

You can make the content visible by default (no blank screen), and still keep the animation for users who have JavaScript enabled:

### Solution: Set `isLoaded` to `true` by default, and only animate if JavaScript is enabled

**Change this:**
```js
const [isLoaded, setIsLoaded] = useState(false)
```
**To this:**
```js
const [isLoaded, setIsLoaded] = useState(typeof window === "undefined" ? true : false)
```

This way, on the server (first load), `isLoaded` is `true` so content is visible. On the client, it animates in as before.

---

Would you like me to make this change for you?

