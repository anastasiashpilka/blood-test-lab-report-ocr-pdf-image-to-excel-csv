import { render, screen } from '@testing-library/react';
import TrendChart, { TrendTooltip } from '../../components/TrendChart';

jest.mock('lucide-react', () => new Proxy({}, { get: () => () => null }));

const points = [
  {
    date: new Date('2025-01-10'),
    value: 15,
    range: { min: 20, max: 250 },
    rawRange: '20 - 250',
    status: 'low',
    testLabel: 'Jan panel',
    deltaPct: null,
  },
  {
    date: new Date('2025-06-10'),
    value: 60,
    range: { min: 20, max: 250 },
    rawRange: '20 - 250',
    status: 'normal',
    testLabel: 'Jun panel',
    deltaPct: 300,
  },
];

describe('TrendChart', () => {
  test('renders the biomarker title', () => {
    render(<TrendChart title="Ferritin" unit="ng/mL" points={points} />);
    expect(screen.getByText('Ferritin')).toBeInTheDocument();
  });

  test('renders a no-data message when there are no points', () => {
    render(<TrendChart title="Ferritin" unit="ng/mL" points={[]} />);
    expect(screen.getByText(/no data/i)).toBeInTheDocument();
  });
});

describe('TrendTooltip', () => {
  test('shows nothing when inactive', () => {
    const { container } = render(<TrendTooltip active={false} payload={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  test('shows date, value, range and a positive delta with an up arrow when active', () => {
    render(<TrendTooltip active payload={[{ payload: points[1] }]} unit="ng/mL" />);

    expect(screen.getByText(/Jun panel/i)).toBeInTheDocument();
    expect(screen.getByText(/60/)).toBeInTheDocument();
    expect(screen.getByText(/20 - 250/)).toBeInTheDocument();
    expect(screen.getByText(/▲/)).toBeInTheDocument();
    expect(screen.getByText(/\+300%/)).toBeInTheDocument();
  });

  test('shows a down arrow for a negative delta', () => {
    const dropPoint = { ...points[1], deltaPct: -20 };
    render(<TrendTooltip active payload={[{ payload: dropPoint }]} unit="ng/mL" />);
    expect(screen.getByText(/▼/)).toBeInTheDocument();
    expect(screen.getByText(/-20%/)).toBeInTheDocument();
  });

  test('omits the delta line for the first data point', () => {
    render(<TrendTooltip active payload={[{ payload: points[0] }]} unit="ng/mL" />);
    expect(screen.queryByText(/▲|▼/)).not.toBeInTheDocument();
  });
});
