import { render, screen } from '@testing-library/react';

import Button from '.';

describe('<Button />', () => {
  it('should render the heading', () => {
    render(<Button />);

    expect(
      screen.getByRole('heading', { name: /Button/i }),
    ).toBeInTheDocument();
  });
});
