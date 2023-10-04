import renderer from "react-test-renderer";
import { Paragraph } from "./Paragraph.tsx";

describe("Paragraph", () => {
  it("should render the text", () => {
    const tree = renderer.create(<Paragraph text="test" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
