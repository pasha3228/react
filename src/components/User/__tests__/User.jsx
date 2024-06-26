import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { User } from "../User";

const USER_NAME = "Artem";

describe("test User component", () => {
  it("should render component correct", function () {
    render(<User userName={USER_NAME} />);

    expect(screen.getByText(USER_NAME)).toBeInTheDocument();
  });

  it("should invoke callback", function () {
    const callback = jest.fn();
    render(<User userName={USER_NAME} onCLick={callback} />);

    const button = screen.getByText("sendName");

    fireEvent(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(callback).toHaveBeenCalled();
  });

  it("should change count", function () {
    const callback = () => {};
    render(<User userName={USER_NAME} onCLick={callback} />);

    const button = screen.getByText("sendName");

    fireEvent(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
