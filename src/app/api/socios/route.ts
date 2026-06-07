import { NextRequest, NextResponse } from "next/server";

interface SocioRequest {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  cuota: string;
  dni: string;
}

function validateBody(body: Partial<SocioRequest>): string | null {
  const { nombre, apellidos, email, telefono, cuota, dni } = body;
  if (!nombre?.trim()) return "El camp nom es obligatori";
  if (!apellidos?.trim()) return "El camp cognoms es obligatori";
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return "El format del correu no es valid";
  if (!telefono?.trim()) return "El camp telefon es obligatori";
  if (!cuota?.trim()) return "La modalitat de soci es obligatoria";
  if (!dni?.trim() || !/^[0-9]{8}[A-Z]$/.test(dni))
    return "El format del DNI no es valid";
  return null;
}

export async function POST(req: NextRequest) {
  let body: Partial<SocioRequest>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Format de la peticio no valid" },
      { status: 400 }
    );
  }

  const validationError = validateBody(body);
  if (validationError) {
    return NextResponse.json(
      { success: false, message: validationError },
      { status: 400 }
    );
  }

  const { nombre, apellidos, email, cuota } = body as SocioRequest;

  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    // Development mode - log and return success
    console.log("[SOCIOS] Development mode - no RESEND_API_KEY set");
    console.log("[SOCIOS] New member request:", { nombre, apellidos, email, cuota });
    return NextResponse.json(
      { success: true, message: "Sol·licitud rebuda correctament" },
      { status: 200 }
    );
  }

  // Production: send confirmation email via Resend
  try {
    const { Resend } = await import("resend");
    const resend = new Resend(RESEND_API_KEY);

    await resend.emails.send({
      from: "Sporting de Benimaclet <noreply@sportingbenimaclet.es>",
      to: email,
      subject: "Confirmacio sol·licitud de soci - Sporting de Benimaclet C.F.",
      html: `
        <!DOCTYPE html>
        <html lang="ca">
        <head><meta charset="UTF-8"><title>Confirmacio de soci</title></head>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #F8F8F6; color: #111827;">
          <div style="background: #016531; padding: 32px 24px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="font-size: 28px; color: white; margin: 0; letter-spacing: 2px;">SPORTING DE BENIMACLET C.F.</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0; font-style: italic; font-size: 14px;">No som un club, som un barri</p>
          </div>
          <div style="background: white; padding: 32px 24px; border-radius: 0 0 8px 8px; border: 1px solid #D0E4D8; border-top: none;">
            <h2 style="color: #016531; font-size: 22px; margin: 0 0 16px;">Gracies per fer-te soci, ${nombre}!</h2>
            <p style="color: #374151; line-height: 1.6; font-size: 15px;">
              Hem rebut la teua sol·licitud per a unir-te a la familia del Sporting de Benimaclet com a soci de la modalitat <strong>${cuota}</strong>.
            </p>
            <p style="color: #374151; line-height: 1.6; font-size: 15px;">
              Ens posarem en contacte amb tu aviat per a completar el proces d&apos;alta i donar-te la benvinguda com es mereis.
            </p>
            <div style="background: #EDF5F0; border-radius: 8px; padding: 16px; margin: 24px 0;">
              <p style="color: #6B7280; font-size: 13px; margin: 0;">Si tens qualsevol dubte, pots contactar amb nosaltres a traves del nostre correu o xarxes socials.</p>
            </div>
            <p style="color: #374151; font-size: 15px;">Fins prompte al camp!</p>
            <p style="color: #016531; font-weight: bold; font-size: 15px;">L'equip del Sporting de Benimaclet</p>
          </div>
        </body>
        </html>
      `,
    });
  } catch (emailError) {
    console.error("[SOCIOS] Error sending email:", emailError);
    // Don't fail the request if email fails - log it and continue
  }

  return NextResponse.json(
    { success: true, message: "Sol·licitud rebuda correctament" },
    { status: 200 }
  );
}
