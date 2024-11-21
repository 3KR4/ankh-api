import { Resend } from "resend";
import CustomPlanTemplate from '../../_components/CustomPlanTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, state, message, agents, dataTeam } = await request.json();

    const dataForCompany = await resend.emails.send({
      from: "Ankhcallcenter@ankhcallcenter.com",
      to: ["info@ankhcallcenter.com"],
      subject: "New Custom Order",
      react: CustomPlanTemplate({
        name,
        email,
        state,
        message,
        agents,
        dataTeam,
        recipientType: "company",
      }),
    });

    const dataForClient = await resend.emails.send({
      from: "Ankhcallcenter@ankhcallcenter.com",
      to: [email],
      subject: "Your request has reached us",
      react: CustomPlanTemplate({
        name,
        agents,
        dataTeam,
        recipientType: "client",
      }),
    });

    return new Response(JSON.stringify({ dataForCompany, dataForClient }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
