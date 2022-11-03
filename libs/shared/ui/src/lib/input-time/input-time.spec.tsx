import { render } from '@testing-library/react';

import InputTime from './input-time';

describe('InputTime', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InputTime />);
    expect(baseElement).toBeTruthy();
  });
});
