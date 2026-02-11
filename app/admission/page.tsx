"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AdmissionPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Yuborilmadi");

      toast.success("Murojaatingiz yuborildi!");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      toast.warning("Xatolik yuz berdi. Qayta urinib ko‘ring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="space-y-32">
      {/* Hero Section */}
      <section className="relative py-28 bg-linear-to-r from-indigo-800 to-purple-700 text-white text-center overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 relative z-10">
          2026-yil Qabul Boshlanmoqda!
        </h1>
        <p className="text-lg md:text-xl mb-8 relative z-10">
          Bakalavr va Magistratura dasturlariga arizalarni topshiring.
        </p>
        <Button className="bg-yellow-400 text-black hover:bg-yellow-300 z-10 relative">
          Ariza topshirish
        </Button>
        {/* Decorative Circles */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-28 -right-16 w-72 h-72 bg-indigo-500 rounded-full opacity-30 animate-pulse"></div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 dark:bg-black dark:text-indigo-700 bg-gray-50">
        <div className="custom-container grid md:grid-cols-3 gap-12 text-center">
          <div className="p-6 border rounded-xl shadow hover:scale-105 transition-transform duration-300 dark:bg-[#121212] bg-white">
            <CheckCircle className="mx-auto mb-4 w-12 h-12 text-indigo-700" />
            <h3 className="text-2xl font-bold mb-2">Xalqaro Akkreditatsiya</h3>
            <p>Universitetimiz xalqaro standartlarga mos keladi.</p>
          </div>
          <div className="p-6 border rounded-xl shadow hover:scale-105 transition-transform duration-300 dark:bg-[#121212] bg-white">
            <CheckCircle className="mx-auto mb-4 w-12 h-12 text-indigo-700" />
            <h3 className="text-2xl font-bold mb-2">Ish bilan ta’minlanish</h3>
            <p>Bitiruvchilarimiz 90% ishga joylashadi.</p>
          </div>
          <div className="p-6 border rounded-xl shadow hover:scale-105 transition-transform duration-300 dark:bg-[#121212] bg-white">
            <CheckCircle className="mx-auto mb-4 w-12 h-12 text-indigo-700" />
            <h3 className="text-2xl font-bold mb-2">Grant va Stipendiya</h3>
            <p>Moliyaviy qo‘llab-quvvatlash imkoniyatlari mavjud.</p>
          </div>
        </div>
      </section>

      {/* Admission Steps Section */}
      <section className="relative py-32 dark:bg-[#121212] bg-gray-100 overflow-hidden">
        {/* Steps Background Text */}
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-gray-200 opacity-10 select-none pointer-events-none">
          STEPS
        </h1>

        <div className="custom-container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Qabul Jarayoni
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              "Ro‘yxatdan o‘tish",
              "Hujjat topshirish",
              "Imtihon / Suhbat",
              "Natija",
              "Shartnoma",
            ].map((step, i) => (
              <div
                key={i}
                className="p-6 border rounded-2xl shadow-lg bg-white dark:bg-[#121212] hover:scale-105 transition-transform duration-300 relative"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-indigo-700 text-white rounded-full flex items-center justify-center text-lg font-bold shadow">
                  {i + 1}
                </div>
                <p className="mt-8 font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Form */}
      <section className="relative py-28 overflow-hidden bg-linear-to-br from-[#5B3FD4] via-[#6D4AE6] to-indigo-700">
        {/* Decorative Blur Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 opacity-30 blur-3xl rounded-full"></div>

        <div className="custom-container relative z-10 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-5xl font-extrabold leading-tight mb-4">
                Savolingiz bormi?
              </h2>
              <p className="text-white/80 text-lg">
                Qabul, grant yoki hujjatlar bo‘yicha savollaringizni yuboring.
                24 soat ichida javob beramiz.
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition">
                <Phone className="text-white w-5 h-5" />
                <span className="font-medium">+998 73 244-17-85</span>
              </div>

              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition">
                <Mail className="text-white w-5 h-5" />
                <span className="font-medium">iqtisodiyot@fdu.uz</span>
              </div>

              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition">
                <MapPin className="text-white w-5 h-5" />
                <span className="font-medium">Farg‘ona, Murabbiylar 19</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="relative">
            <div className="absolute -inset-1 bg-linear-to-r from-purple-500 to-indigo-500 rounded-3xl blur opacity-40"></div>

            <Card className="relative bg-white dark:bg-[#131313] rounded-3xl shadow-2xl border-0">
              <CardContent className="p-10">
                <div className="flex items-center gap-3 mb-8">
                  <MessageSquare className="text-[#5B3FD4]" />
                  <h3 className="text-3xl font-bold">Murojaat yuborish</h3>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 text-gray-700 dark:text-amber-100"
                >
                  <div>
                    <Label className="mb-2">Ism *</Label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div>
                    <Label className="mb-2">Telefon *</Label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div>
                    <Label className="mb-2">Email</Label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div>
                    <Label className="mb-2">Xabar *</Label>
                    <Textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="rounded-xl"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 rounded-xl bg-linear-to-r from-[#5B3FD4] to-indigo-600 hover:opacity-90 text-white text-base font-semibold"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {loading ? "Yuborilmoqda..." : "Yuborish"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-linear-to-b bg-white dark:bg-[#121212]">
        <div className="custom-container max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">
            Eng ko‘p beriladigan savollar
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className="border rounded-2xl px-6 bg-white dark:bg-[#131313] shadow-sm"
            >
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Imtihon qanday o‘tadi?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                Imtihon onlayn yoki oflayn tarzda, tanlangan dasturga qarab
                o‘tkaziladi.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border rounded-2xl px-6 bg-white dark:bg-[#131313] shadow-sm"
            >
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Hujjat topshirish onlaynmi?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                Ha, barcha hujjatlarni shaxsiy kabinet orqali yuklab
                topshirishingiz mumkin.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border rounded-2xl px-6 bg-white dark:bg-[#131313] shadow-sm"
            >
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Chet el fuqarolari topshira oladimi?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                Ha, xorijiy fuqarolar uchun alohida ariza va hujjat talablari
                mavjud.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  );
}
