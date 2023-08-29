import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { SearchPage } from "./SearchPage/SearchPage";
import { GlobalLayout } from "../components/Layouts/GlobalLayout";
import { SettingsPage } from "./SettingsPage/SettingsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<SearchPage />} />
      <Route path="settings" element={<SettingsPage />} />
    </Route>
  )
);
export { router };
