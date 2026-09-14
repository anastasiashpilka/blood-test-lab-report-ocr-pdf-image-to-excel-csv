import { render, screen } from '@testing-library/react';
import SummaryCards from '../../components/SummaryCards';

jest.mock('lucide-react', () => new Proxy({}, { get: () => () => null }));

const seriesMap = {
  Ferritin: [{ status: 'low' }, { status: 'normal' }], // improving
  TSH: [{ status: 'normal' }, { status: 'high' }], // attention
  Glucose: [{ status: 'normal' }, { status: 'normal' }], // stable
  Sodium: [{ status: 'normal' }, { status: 'normal' }], // stable
};

test('shows counts and lists the right biomarkers under each card', () => {
  render(<SummaryCards seriesMap={seriesMap} />);

  expect(screen.getByText('Improving / Normalized')).toBeInTheDocument();
  expect(screen.getByText('Requires Attention')).toBeInTheDocument();
  expect(screen.getByText('Stable')).toBeInTheDocument();

  expect(screen.getByText('Ferritin')).toBeInTheDocument();
  expect(screen.getByText('TSH')).toBeInTheDocument();
  expect(screen.getByText('Glucose')).toBeInTheDocument();
  expect(screen.getByText('Sodium')).toBeInTheDocument();

  expect(screen.getByTestId('count-improving')).toHaveTextContent('1');
  expect(screen.getByTestId('count-attention')).toHaveTextContent('1');
  expect(screen.getByTestId('count-stable')).toHaveTextContent('2');
});

test('renders a placeholder when a bucket is empty', () => {
  render(<SummaryCards seriesMap={{ Ferritin: [{ status: 'normal' }] }} />);
  expect(screen.getAllByText('None').length).toBe(2); // improving + attention both empty
});
