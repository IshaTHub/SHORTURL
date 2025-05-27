# 🔗 Short URL Generator

A clean and efficient **Short URL Generator** built with **Next.js App Router**, **TailwindCSS**, **Prisma**, **PostgreSQL (Neon.tech)**, and **Shadcn UI**.  
Generate short, shareable links for long URLs—like Bitly, but open-source!

---

## 🌐 Live Demo

> [🔗 Click here to try it out](https://vercel.com/isha-tiwaris-projects/shorturl)

---

## 🚀 Features

- 🔒 Validates and shortens long URLs
- 🧠 Slug generation with collision handling
- 🔁 Redirects using server-side logic
- 🗂 Stores data in PostgreSQL via Prisma ORM
- 🎨 Styled with TailwindCSS and Shadcn UI
- ✅ Client-side and API-side error handling
- 🔔 Toast notifications for user feedback
- ⌛ Option to add expiration logic

---

## 🛠️ Tech Stack

| Tech           | Description                            |
|----------------|----------------------------------------|
| **Next.js 14** | React framework with App Router        |
| **Prisma**     | ORM to interact with PostgreSQL        |
| **PostgreSQL** | Relational DB hosted on Neon.tech      |
| **TailwindCSS**| Utility-first CSS framework            |
| **Shadcn UI**  | Accessible component library           |
| **Sonner**     | For toast notifications                |
| **Lucide**     | Icon library used in UI (e.g., Loader2)|

---

## 📦 Installation

```bash
# 1. Clone the repo
git clone https://github.com/your-username/short-url.git
cd short-url

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Add your DATABASE_URL inside .env

# 4. Push Prisma schema to DB and generate client
npx prisma db push
npx prisma generate

# 5. Start development server
npm run dev


🧠 How It Works
User enters a long URL in the form on the homepage.

On clicking "Shorten", a POST request is sent to /api/shorten.

The backend:

Validates the URL.

Generates a unique slug.

Stores the slug and original URL in the database.

The short URL is returned and displayed.

When a user visits http://localhost:3000/abc123, it:

Uses [slug]/page.tsx to look up the original URL.

Redirects the user using a server-side redirect.

✅ Validation
Ensures the URL is valid using URL constructor

Client and server checks

Handles invalid inputs gracefully with toast messages

💡 Future Enhancements
⌛ Auto-expire URLs after X days

📊 Click analytics & dashboard

⛔ Rate limiting to prevent abuse

🔐 Authenticated users with custom slugs


🤝 Contributing
Pull requests are welcome!
Please open an issue first to discuss what you would like to change.

📄 License
MIT © Isha Tiwari
