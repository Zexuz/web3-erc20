import renderer from "react-test-renderer";
import { Input } from "./input.tsx";

describe("Input", () => {
  it("should render", () => {
    const tree = renderer
      .create(<Input placeholder="test" label="test" onChange={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
