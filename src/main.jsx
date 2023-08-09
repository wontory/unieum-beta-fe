import React from "react";
import ReactDOM from "react-dom/client";

import { StepContextProvider } from "./stores/step-context.jsx";
import { AnswerContextProvider } from "./stores/answer-context.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import Main from "./pages/Main.jsx";
import FinishSurvey from "./pages/FinishSurvey.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import NotFound from "./pages/NotFound.jsx";

import "./styles/tailwind.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/done", element: <FinishSurvey /> },
      { path: "/privacy", element: <PrivacyPolicy /> },
      { path: "/*", element: <NotFound /> },
    ],
  },
]);

const AppProvider = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) => React.createElement(context, { children: prev }),
    children
  );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider contexts={[StepContextProvider, AnswerContextProvider]}>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
