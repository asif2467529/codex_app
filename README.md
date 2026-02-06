# AI for Super Students Platform (MERN)

## High-Level Architecture

- **Frontend (React + Tailwind + Context):** UI, feature tabs, auth flow, dashboard, file selectors.
- **Backend (Node + Express):** REST APIs, JWT auth, subscription middleware, AI feature endpoints.
- **Database (MongoDB + Mongoose):** Users, Plans, Study Logs, optional AI usage logs.
- **AI Layer (Generic Abstraction):** `services/aiService.js` exposes `callFeature()`; integrate Grok/Gemini later.
- **File Upload Flow:** Frontend picks file → `POST /api/files/upload` → returns `fileUrl` → AI endpoints use URL.

```
[React UI] → [Express API] → [AI Service Abstraction]
      ↘ [File Upload API] → [Storage Placeholder]
           ↘ [MongoDB]
```

## Backend Folder Structure

```
backend/src
├── app.js
├── server.js
├── controllers
│   └── authController.js
├── middlewares
│   ├── authMiddleware.js
│   ├── errorHandler.js
│   ├── rateLimiter.js
│   └── subscriptionCheck.js
├── models
│   ├── Plan.js
│   ├── StudyLog.js
│   └── User.js
├── routes
│   ├── aiRoutes.js
│   ├── authRoutes.js
│   ├── fileRoutes.js
│   ├── studyLogRoutes.js
│   └── subscriptionRoutes.js
└── services
    └── aiService.js
```

## Frontend Folder Structure

```
frontend/src
├── App.jsx
├── components
│   ├── FeatureCard.jsx
│   ├── FeatureForm.jsx
│   └── FeatureResult.jsx
├── context
│   └── AuthContext.jsx
├── pages
│   ├── Dashboard.jsx
│   └── LandingPage.jsx
├── utils
│   └── apiClient.js
└── hooks
```

## Notes

- JWT is stored in `localStorage` for demo; switch to **httpOnly cookies** in production.
- File upload endpoint is a placeholder with a TODO for S3/Cloudinary integration.
- AI routes use `callFeature(featureKey, payload)`; integrate provider SDK later.
