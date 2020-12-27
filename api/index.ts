import { NowRequest, NowResponse } from "@vercel/node";
import slugify from "slugify";
import { getBlogName } from "../src/random-name";

export default (_req: NowRequest, res: NowResponse) => {
  const name = getBlogName();
  const slug = slugify(name);
  res.setHeader("Access-Control-Allow-Credentials", `true`);
  res.setHeader("Access-Control-Allow-Origin", "*");
  return res.status(200).json({ name, slug });
};
