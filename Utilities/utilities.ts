// utilities.ts
export function generateRandomEmail(domain: string = "example.com"): string {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  const randomString = Array.from({ length: 8 }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join("");

  return `${randomString}@${domain}`;
}
