import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { ThemeProvider } from '@/context/ThemeContext';
import { About } from '@/pages/About';
import { Article } from '@/pages/Article';
import { Home } from '@/pages/Home';
import { NotFound } from '@/pages/NotFound';
import { Timeline } from '@/pages/Timeline';

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="docs/:slug" element={<Article />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
