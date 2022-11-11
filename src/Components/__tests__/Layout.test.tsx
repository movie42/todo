import { render, screen } from "@testing-library/react";
import Header from "../Layout/Header";
import MockingProvider from "../MockingProvider/MockingProvider";

describe("레이아웃 테스트", () => {
  it("헤더 컴포넌트에 지금 당장이라는 제목이 출력되어야합니다.", () => {
    render(
      <MockingProvider>
        <Header />
      </MockingProvider>
    );

    const heading = screen.getByRole("heading", { name: "지금당장" });

    expect(heading).toHaveTextContent("지금당장");
  });

  it("로그인 상태에 따라 로그아웃이라는 글자 출력 여부가 결정되어야 합니다.", () => {
    render(
      <MockingProvider>
        <Header />
      </MockingProvider>
    );
  });
});
