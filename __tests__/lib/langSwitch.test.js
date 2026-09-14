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

beforeEach(() => {
  localStorage.clear();
});

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

test('selecting a language in the desktop navbar dropdown works with real browser event order (mousedown before click)', () => {
  renderLayout();

  // Real browser clicks fire mousedown (which the outside-click listener reacts
  // to) before the click event that React's onClick handles. fireEvent.click
  // alone skips mousedown, so it can't catch a listener that closes the menu
  // prematurely on mousedown.
  const toggle = screen.getAllByText('English')[0];
  fireEvent.mouseDown(toggle);
  fireEvent.click(toggle);

  const ukrainianOption = screen.getAllByText('Ukrainian')[0];
  fireEvent.mouseDown(ukrainianOption);
  fireEvent.click(ukrainianOption);

  expect(screen.getAllByText('Українська').length).toBeGreaterThan(0);
});
