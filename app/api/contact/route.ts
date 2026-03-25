import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";
import type { Database } from "@/lib/supabase/types";
import { SupabaseClient } from "@supabase/supabase-js";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Ism, email va xabar majburiy" },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email manzil noto'g'ri" },
        { status: 400 }
      );
    }

    const supabase: SupabaseClient<Database, "public"> = await createClient();

    const insertData: Database["public"]["Tables"]["contacts"]["Insert"] = {
      name,
      email,
      phone: (phone as string) || null,
      message,
      status: "new",
    };

    const { data, error } = await supabase
      .schema("public")
      .from("contacts")
      .insert(insertData)
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Xabar yuborishda xatolik yuz berdi" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Xabaringiz muvaffaqiyatli yuborildi", data },
      { status: 201 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Server xatosi" },
      { status: 500 }
    );
  }
}
