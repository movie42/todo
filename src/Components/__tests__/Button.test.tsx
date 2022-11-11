import MockingProvider from "@/Components/MockingProvider/MockingProvider";
import { render, screen } from "@testing-library/react";

import Button from "../Button/Button";

it("children이 입력된다.", () => {
  render(
    <MockingProvider>
      <Button>버튼</Button>
    </MockingProvider>
  );

  const button = screen.getByRole("button", { name: "버튼" });

  expect(button.textContent).toBe("버튼");
});
