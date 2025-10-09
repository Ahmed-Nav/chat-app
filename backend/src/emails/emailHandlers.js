import { resendClient, sender } from "../lib/resend.js"
import { createWelcomeEmailTemplate } from "../emails/emailTemplate.js"


export const sendWelcomeEmail = async (email, name, clientURL) => {
  const {data,error} = await resendClient.emails.send({
    from: `${sender.name}<${sender.email}>`,
    to: email,
    subject: "Welcome to Messenger!",
    html: createWelcomeEmailTemplate(name, clientURL),
  });

  if(error) {
    console.error("Error Sending Welcome Email", error);
    throw new Error("Error Sending Welcome Email");
  } 

  console.log("Welcome Email Sent", data);
};