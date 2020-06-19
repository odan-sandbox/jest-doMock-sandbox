import * as config from "./config";
import { poyo } from "./app";
describe("app", (): void => {
  describe("add", (): void => {
    it("should be correct", (): void => {
      /*
      const a = jest.doMock("./config", () => ({
        a: 20,
        getConfig: () => ({ a: 30 }),
      }));
      */
      jest.spyOn(config, "getConfig").mockReturnValue({ a: 40 });
      console.log(config.getConfig().a);
      console.log(poyo());
    });
  });
});
