export default function handler(req: any, res: any) {
  res.setHeader("Permissions-Policy", "your-policy-here");
  res.status(200).end();
}
