# 🏋️ FitLog — Workout Library

A dark, no-nonsense gym companion built with Next.js. Pick a lift, lock it into today's plan, and watch the week's work add up. Browse 12 curated workouts, view detailed instructions, save favorites, and track your daily minutes and calories in real time.

**🔗 Live Demo:** https://fitlog-mu-blush.vercel.app/  
**📦 Repository:** https://github.com/Adil-Uzzaman-Adil/fitlog.git
---

## 🛠️ Technologies Used

- **Next.js 15** (App Router) — React framework & routing
- **React 19** — UI library
- **Tailwind CSS** — Styling & responsive design
- **React Context API** — Global state management
- **localStorage** — Persist plan & saved data across reloads
- **react-hot-toast** — Toast notifications
- **react-icons** — Icon library
- **Google Fonts (Oswald + Inter)** — Typography
- **Vercel** — Deployment

---

## ✨ Key Features

1. **🗂️ Workout Library** — Browse 12 lifts in a responsive 3-column grid with images, muscle-group tags, equipment, and stats (duration / calories / rating). Includes live search and sort by duration, calories, or rating.

2. **📋 Workout Details Page** — Full breakdown of each lift: large image, description, complete specs table (equipment, difficulty, sets, reps, duration, calories, rating), and a numbered step-by-step instruction list.

3. **📅 Today's Plan** — Add any workout to your daily plan (capped at 5 lifts). Mark lifts as done, remove them, and watch live metrics — exercises, minutes, and calories — update instantly.

4. **🔖 Save for Later** — Bookmark workouts in a separate "Saved" tab. Manage your list, view details, or remove them anytime.

5. **💾 Persistent Data + Toast Feedback** — Your plan and saved workouts survive page reloads via localStorage. Every action (add, remove, save, mark done) gives instant visual feedback with a toast notification.

---

## 🚀 Run Locally

```bash
git clone https://github.com/Adil-Uzzaman-Adil/fitlog.git
cd fitlog
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 🌐 API

- **All workouts:** `GET https://api.abcz.workers.dev/api/fitlog`
- **Single workout:** `GET https://api.abcz.workers.dev/api/fitlog/:id`

---

## 📱 Responsive

Optimized for mobile (375px), tablet (768px), and desktop (1440px+).

---

## 👤 Author

Adil Uzzaman Adil 
GitHub: https://github.com/Adil-Uzzaman-Adil

---

## 📄 License

MIT License — free to use and modify.