import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: process.env.EMAIL_TO_ADDRESS, // TODO: Set this environment variable in Vercel
      from: EMAIL_FROM_ADDRESS, // TODO: Set this environment variable in Vercel
      subject: `${req.body.subject}`,
      html: `<div>You have received a new subscriber! ${req.body.email}</div>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
