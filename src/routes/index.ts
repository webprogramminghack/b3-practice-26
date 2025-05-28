import { type ComponentType, lazy } from "react";

interface Route {
  path: string;
  component: ComponentType;
}

export const routes: Route[] = [
  {
    path: "/",
    component: lazy(() => import("../components/pages/homepage")),
  },
  {
    path: "/qna",
    component: lazy(() => import("../components/pages/qnapage")),
  },
  {
    path: "/usereducer",
    component: lazy(() => import("../components/pages/usereducer")),
  },
  {
    path: "/usecontext",
    component: lazy(() => import("../components/pages/usecontext")),
  },
];
