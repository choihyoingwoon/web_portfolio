export default function handler(req, res) {
  res.setHeader("Permissions-Policy", "your-policy-here");
  res.status(200).end();
}
