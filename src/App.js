import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/navigation.template";

import HomePage from "./pages/HomePage/home.template";
import PostsPage from "./pages/PostsPage/posts.template";
import WorksPage from "./pages/WorksPage/works.template";
import ContactsPage from "./pages/ContactsPage/contacts.template";

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route path="" element={<HomePage />} />
      <Route path="posts" element={<PostsPage />} />
      <Route path="works" element={<WorksPage />} />
      <Route path="contacts" element={<ContactsPage />} />
    </Route>
  </Routes>
);

export default App;
