import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);

    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const message =
      typeof body?.message === "string" ? body.message.trim() : "";

    if (!name || name.length < 2 || !email || !message || message.length < 10) {
      return NextResponse.json(
        {
          error:
            "Podaj poprawne dane formularza (imię, poprawny e-mail i dłuższą wiadomość).",
        },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const targetEmail = process.env.CONTACT_TARGET_EMAIL || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPass || !targetEmail) {
      console.error(
        "[contact] Brak wymaganych zmiennych środowiskowych SMTP."
      );
      return NextResponse.json(
        {
          error:
            "Formularz kontaktowy nie jest poprawnie skonfigurowany po stronie serwera.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const textContent = [
      "Nowa wiadomość z formularza kontaktowego:",
      "",
      `Imię: ${name}`,
      `E-mail: ${email}`,
      "",
      "Treść wiadomości:",
      message,
    ].join("\n");

    const htmlContent = `
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.5; color: #0f172a;">
        <h2>Nowa wiadomość z formularza kontaktowego</h2>
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Treść wiadomości:</strong></p>
        <p style="white-space: pre-line;">${message}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Formularz kontaktowy" <${smtpUser}>`,
      replyTo: email,
      to: targetEmail,
      subject: `Nowa wiadomość z formularza – ${name || "bez imienia"}`,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Błąd wysyłki wiadomości:", error);
    return NextResponse.json(
      { error: "Wystąpił błąd podczas wysyłania wiadomości." },
      { status: 500 }
    );
  }
}


