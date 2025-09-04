# Local Maid Center

A barebone ReactJS application with a sidebar layout, built using Vite and React Router. This project serves as the foundation for a multi-page dashboard-style app.

---

## Project Setup

### 1. Create a new React project

We used **Vite** to create a new barebone React project:

```bash
npm create vite@latest local-maid-center


cd local-maid-center

npm install

npm run dev

npm install react-router-dom


#barebone structure

local-maid-center/
├─ index.html
├─ package.json
├─ vite.config.js
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ components/
│  │  └─ Sidebar.jsx
│  ├─ layout/
│  │  └─ Layout.jsx
│  └─ pages/
│     ├─ Dashboard.jsx
│     └─ Settings.jsx
