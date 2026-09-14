import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BiomarkerSelector from '../../components/BiomarkerSelector';

jest.mock('lucide-react', () => new Proxy({}, { get: () => () => null }));

const availableBiomarkers = [
  'Ferritin',
  'Glucose',
  'Thyroid Stimulating Hormone',
  'Vitamin D (25-OH)',
  'Sodium',
  'Potassium',
];

function setup(props = {}) {
  const onChange = jest.fn();
  render(
    <BiomarkerSelector
      availableBiomarkers={availableBiomarkers}
      selected={[]}
      onChange={onChange}
      {...props}
    />
  );
  return { onChange };
}

test('typing filters the option list by search text', () => {
  setup();
  fireEvent.click(screen.getByRole('combobox'));
  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'gluc' } });

  expect(screen.getByText('Glucose')).toBeInTheDocument();
  expect(screen.queryByText('Ferritin')).not.toBeInTheDocument();
});

test('clicking an option adds it to the selection', () => {
  const { onChange } = setup();
  fireEvent.click(screen.getByRole('combobox'));
  fireEvent.click(screen.getByText('Ferritin'));

  expect(onChange).toHaveBeenCalledWith(['Ferritin']);
});

test('clicking a selected chip removes it from the selection', () => {
  const { onChange } = setup({ selected: ['Ferritin', 'Glucose'] });

  fireEvent.click(screen.getByRole('button', { name: /remove ferritin/i }));

  expect(onChange).toHaveBeenCalledWith(['Glucose']);
});

test('disables further selection once 5 biomarkers are picked', () => {
  const { onChange } = setup({
    selected: ['Ferritin', 'Glucose', 'Thyroid Stimulating Hormone', 'Vitamin D (25-OH)', 'Sodium'],
  });

  expect(screen.getByRole('combobox')).toBeDisabled();
  fireEvent.click(screen.getByRole('combobox'));
  expect(screen.queryByText('Potassium')).not.toBeInTheDocument();
  expect(onChange).not.toHaveBeenCalled();
});

test('preset button selects the matching biomarkers from availableBiomarkers', async () => {
  const { onChange } = setup();
  fireEvent.click(screen.getByRole('button', { name: 'Thyroid Profile' }));

  // Preset matching is lazy-loaded (dynamic import) to keep it out of the
  // component's initial bundle, so the update lands asynchronously.
  await waitFor(() => expect(onChange).toHaveBeenCalledWith(['Thyroid Stimulating Hormone']));
});
