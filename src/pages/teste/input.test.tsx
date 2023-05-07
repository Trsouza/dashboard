import { render, act, cleanup, fireEvent } from '@testing-library/react';
import Input from "./input";


describe("Input tests", () => {
  afterEach(cleanup);

  it("Should call prop function", () => {
    const onChange = jest.fn();
    //render(<Index />);
    const { getByTestId } = render(<Input onChange={onChange} />);

    const input = getByTestId("input");

    act(() => {
      fireEvent.change(input, { target: { value: "Q" } });
    });

    expect(onChange).toHaveBeenCalled();
  });
});
