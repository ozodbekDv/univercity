"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    <section className="py-16 bg-linear-to-br from-[#704FE6] to-indigo-700">
      <div className="custom-container grid md:grid-cols-2 gap-12">
        {/* LEFT */}
        <div className="text-white space-y-6">
          <h2 className="text-4xl font-bold">Bizga qo‘shiling</h2>
          <p className="text-white/80">
            Savollaringiz bormi? Quyidagi forma orqali yozing.
          </p>

          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-4 flex gap-4 items-center">
              <Phone className="text-white" />
              <span>+998 73 244-17-85</span>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-4 flex gap-4 items-center">
              <Mail className="text-white" />
              <span>iqtisodiyot@fdu.uz</span>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-4 flex gap-4 items-center">
              <MapPin className="text-white" />
              <span>Farg‘ona, Murabbiylar 19</span>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT */}
        <Card className="bg-white dark:bg-[#101828] shadow-2xl">
          <CardContent className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="text-[#704FE6]" />
              <h3 className="text-2xl font-bold">Savol yo‘llash</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label>Ism *</Label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label>Telefon *</Label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label>Email</Label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label>Xabar *</Label>
                <Textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#704FE6] hover:bg-[#5a3ec7]"
              >
                <Send className="w-4 h-4 mr-2" />
                {loading ? "Yuborilmoqda..." : "Yuborish"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
