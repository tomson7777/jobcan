"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_testing_library_1 = require("react-testing-library");
const app_1 = require("./app");
describe('App', () => {
    afterEach(react_testing_library_1.cleanup);
    it('should render successfully', () => {
        const { baseElement } = react_testing_library_1.render(<app_1.default />);
        expect(baseElement).toBeTruthy();
    });
    it('should have a greeting as the title', () => {
        const { getByText } = react_testing_library_1.render(<app_1.default />);
        expect(getByText('Welcome to jobber!')).toBeTruthy();
    });
});
//# sourceMappingURL=app.spec.js.map