import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, phone, email, message } = await req.json();

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Majburiy maydonlar yetishmaydi" },
        { status: 400 },
      );
    }

    const text = `
📩 *YANGI MUROJAAT*

👤 *Ism:* ${name}
📞 *Telefon:* ${phone}
📧 *Email:* ${email || "-"}

📝 *Xabar:*
${message}
    `;

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      },
    );

    if (!telegramRes.ok) {
      throw new Error("Telegram API error");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Server xatosi" }, { status: 500 });
  }
}
