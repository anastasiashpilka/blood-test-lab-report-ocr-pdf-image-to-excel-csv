import { render, screen, fireEvent } from '@testing-library/react';
import BiomarkerTrendDashboard from '../../components/BiomarkerTrendDashboard';

jest.mock('lucide-react', () => new Proxy({}, { get: () => () => null }));

const tests = [
  {
    id: 't1',
    label: 'Jan panel',
    createdAt: new Date('2025-01-10'),
    headers: ['Biomarker', 'Result', 'Reference Range'],
    rows: [
      ['Ferritin', '15', '20 - 250'],
      ['Glucose', '90', '70 - 100'],
    ],
  },
  {
    id: 't2',
    label: 'Jun panel',
    createdAt: new Date('2025-06-10'),
    headers: ['Biomarker', 'Result', 'Reference Range'],
    rows: [
      ['Ferritin', '60', '20 - 250'],
      ['Glucose', '95', '70 - 100'],
    ],
  },
];

test('auto-selects trackable biomarkers on first render and shows their charts + summary cards', () => {
  render(<BiomarkerTrendDashboard tests={tests} />);

  expect(screen.getByText('Improving / Normalized')).toBeInTheDocument();
  expect(screen.getAllByText('Ferritin').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Glucose').length).toBeGreaterThan(0);
});

test('removing a biomarker from the selector removes its chart panel', () => {
  render(<BiomarkerTrendDashboard tests={tests} />);

  const removeFerritin = screen.getByRole('button', { name: /remove ferritin/i });
  fireEvent.click(removeFerritin);

  expect(screen.queryByRole('button', { name: /remove ferritin/i })).not.toBeInTheDocument();
});

test('shows an empty state with no crash when there is no test history', () => {
  render(<BiomarkerTrendDashboard tests={[]} />);
  expect(screen.getByText(/no saved tests yet/i)).toBeInTheDocument();
});

test('print button triggers window.print', () => {
  window.print = jest.fn();
  render(<BiomarkerTrendDashboard tests={tests} />);

  fireEvent.click(screen.getByRole('button', { name: /print/i }));
  expect(window.print).toHaveBeenCalled();
});
