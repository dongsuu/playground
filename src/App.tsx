import { Link, Outlet, Route, Routes } from "react-router-dom";
import { FocusCounterRoot } from "./use-effect-event";

function Layout() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 24 }}>
      <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <Link to="/">Home</Link>
        <Link to="/focusCounter">FocusCounter</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>React Router DOM 클라이언트 라우팅 적용 완료.</p>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>존재하지 않는 경로입니다.</p>
      <Link to="/">홈으로</Link>
    </div>
  );
}

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="focusCounter" element={<FocusCounterRoot />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
