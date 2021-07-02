import * as bcrypt from "bcrypt";
export async function comparePassword(
  pass: string,
  hash: string
): Promise<boolean> {
  return await bcrypt.compare(pass, hash);
}

export async function makePassword(pass: string): Promise<string> {
  return bcrypt.hash(pass, 20);
}

export async function randomPassword(len = 6): Promise<string> {
  let result: string;
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = len; i > 0; --i) {
    result = result + chars[Math.floor(Math.random() * chars.length)];
  }
  return result.replace("undefined", "");
}
