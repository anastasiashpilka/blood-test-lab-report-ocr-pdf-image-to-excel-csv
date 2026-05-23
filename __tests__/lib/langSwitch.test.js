import { render, screen, fireEvent } from '@testing-library/react';
import Layout from '../../components/Layout';
import { LanguageProvider } from '../../contexts/LanguageContext';

jest.mock('lucide-react', () => new Proxy({}, { get: () => () => null }));
jest.mock('next/router', () => ({
  useRouter: () => ({ pathname: '/', asPath: '/', locale: 'en', push: jest.fn(), events: { on: jest.fn(), off: jest.fn() } }),
}));
jest.mock('../../contexts/AuthContext', () => ({ useAuth: () => ({ currentUser: null }) }));
jest.mock('../../firebase/auth', () => ({ signOut: jest.fn() }));

function renderLayout() {
  return render(
    <LanguageProvider defaultLang="en">
      <Layout>content</Layout>
    </LanguageProvider>
  );
}

test('clicking a language in the globe menu switches the displayed language in place', () => {
  renderLayout();

  // Globe label starts as English (desktop menu shows the current language label)
  expect(screen.getAllByText('English').length).toBeGreaterThan(0);

  // Open the language dropdown (the globe toggle button shows "English")
  fireEvent.click(screen.getAllByText('English')[0]);

  // Pick Ukrainian from the dropdown (shown in English while current lang is en)
  fireEvent.click(screen.getAllByText('Ukrainian')[0]);

  // The globe label now shows Ukrainian's own name — switch happened in place
  expect(screen.getAllByText('Українська').length).toBeGreaterThan(0);
});
