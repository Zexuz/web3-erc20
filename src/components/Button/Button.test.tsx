import renderer from "react-test-renderer";
import { Button } from "./index.tsx";

describe("Button", () => {
  it("should render", () => {
    const tree = renderer
      .create(<Button text={"Test"} onClick={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
