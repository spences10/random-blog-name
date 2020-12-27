import { NowRequest, NowResponse } from "@vercel/node";
import slugify from "slugify";
import { getBlogName } from "../src/random-name";

export default (req: NowRequest, res: NowResponse) => {
  const name = getBlogName();
  return res.status(200).json({ name, slugified: slugify(name) });
};
