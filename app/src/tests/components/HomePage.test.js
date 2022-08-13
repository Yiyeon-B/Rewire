import {render} from "@testing-library/react";
import HomePage from "../../components/HomePage/HomePage";

describe("HomePage", ()=> {
    it('should render the home page', ()=> {
        render(<HomePage/>);
    });
});