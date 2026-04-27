"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ShoppingBag,
  Truck,
  MapPin,
  CreditCard,
  CheckCircle2,
  Tag,
  Plus,
  Minus,
  Trash2,
  ShoppingCart,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toBn } from "@/lib/utils";
import { useCart } from "@/lib/cart";
import { useToast } from "@/lib/toast";

const DELIVERY_OPTIONS = [
  { id: "office", label: "i Education অফিস থেকে সংগ্রহ করবো", fee: 0 },
  { id: "inside", label: "Home Delivery (Inside Dhaka, ৭০ ৳)", fee: 70 },
  { id: "outside", label: "Home Delivery (Outside Dhaka, ১৩০ ৳)", fee: 130 },
];

const DISTRICTS = [
  "ঢাকা",
  "চট্টগ্রাম",
  "রাজশাহী",
  "খুলনা",
  "বরিশাল",
  "সিলেট",
  "রংপুর",
  "ময়মনসিংহ",
];

const PAYMENT_METHODS = [
  { id: "bkash", label: "Bkash", color: "bg-rose-500" },
  { id: "surjopay", label: "SurjoPay", color: "bg-purple-500" },
];

export default function CheckoutPage() {
  const router = useRouter();
  const { items, setQty, remove, subtotal, clear } = useCart();
  const toast = useToast();

  const [delivery, setDelivery] = useState("office");
  const [payment, setPayment] = useState("bkash");
  const [promo, setPromo] = useState("");
  const [form, setForm] = useState({
    name: "",
    district: "",
    upazila: "",
    address: "",
    phone: "",
    note: "",
  });

  const shipping = DELIVERY_OPTIONS.find((d) => d.id === delivery)?.fee ?? 0;
  const total = subtotal + shipping;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      toast.error("কার্ট খালি!");
      return;
    }
    if (!form.name || !form.district || !form.address || !form.phone) {
      toast.error("সব প্রয়োজনীয় তথ্য পূরণ করুন");
      return;
    }
    clear();
    toast.success("অর্ডার সফলভাবে কনফার্ম হয়েছে! ধন্যবাদ।");
    router.push("/");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-paper-100/40 pb-16">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          <Link
            href="/#books"
            className="inline-flex items-center gap-1.5 rounded-lg bg-ink-900 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-ink-800"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Cart
          </Link>

          <h1 className="mt-6 font-display text-2xl font-extrabold text-body sm:text-3xl">
            Checkout
          </h1>

          <form
            onSubmit={onSubmit}
            className="mt-6 grid gap-6 lg:grid-cols-2"
          >
            {/* LEFT column */}
            <div className="space-y-6">
              {/* Order Summary */}
              <Card title="Order Summary" icon={<ShoppingBag className="h-4 w-4" />}>
                {items.length === 0 ? (
                  <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-paper-300 bg-paper-50 px-4 py-8 text-center">
                    <ShoppingCart className="h-8 w-8 text-body-muted" />
                    <div className="text-sm font-bold text-body">কার্ট খালি</div>
                    <Link
                      href="/#books"
                      className="rounded-lg bg-ink-900 px-4 py-2 text-xs font-bold text-white hover:bg-ink-800"
                    >
                      বই দেখুন
                    </Link>
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {items.map((item, i) => (
                      <li
                        key={item.id}
                        className="flex items-center justify-between gap-3"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          {item.cover && (
                            <div
                              className={`grid h-14 w-12 shrink-0 place-items-center rounded-md bg-gradient-to-br text-2xl ${item.cover}`}
                            >
                              {item.emoji}
                            </div>
                          )}
                          <div className="min-w-0">
                            <div className="truncate font-bold text-body">
                              {toBn(i + 1)}. {item.title}
                            </div>
                            <div className="text-xs text-body-muted">
                              ৳ {toBn(item.price)}
                            </div>
                            <div className="mt-1.5 inline-flex items-center gap-1">
                              <button
                                type="button"
                                onClick={() => setQty(item.id, item.qty - 1)}
                                className="grid h-6 w-6 place-items-center rounded border border-paper-300 hover:bg-paper-100"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="w-7 text-center text-xs font-bold">
                                {toBn(item.qty)}
                              </span>
                              <button
                                type="button"
                                onClick={() => setQty(item.id, item.qty + 1)}
                                className="grid h-6 w-6 place-items-center rounded border border-paper-300 hover:bg-paper-100"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                              <button
                                type="button"
                                onClick={() => remove(item.id)}
                                className="ml-2 grid h-6 w-6 place-items-center rounded text-rose-500 hover:bg-rose-50"
                                aria-label="Remove"
                              >
                                <Trash2 className="h-3 w-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <span className="shrink-0 rounded-full bg-blue-500 px-3 py-1 text-xs font-extrabold text-white">
                          Tk. {toBn(item.price * item.qty)}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-4 space-y-2 border-t border-paper-300 pt-3 text-sm">
                  <Row
                    label="Shipping Charge"
                    value={
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-extrabold text-ink-900 ${shipping === 0 ? "bg-gold-500" : "bg-amber-400"}`}
                      >
                        Tk. {toBn(shipping)}
                      </span>
                    }
                  />
                  <Row
                    label={<span className="font-bold text-body">Total</span>}
                    value={
                      <span className="rounded-full bg-rose-500 px-3 py-1 text-xs font-extrabold text-white">
                        Tk. {toBn(total)}
                      </span>
                    }
                  />
                </div>

                <div className="mt-4 flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-body-muted" />
                    <input
                      type="text"
                      value={promo}
                      onChange={(e) => setPromo(e.target.value)}
                      placeholder="Apply promo code"
                      className="w-full rounded-lg border border-paper-300 bg-white py-2.5 pl-9 pr-3 text-sm text-body placeholder:text-body-muted focus:border-ink-500/40 focus:outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-700"
                  >
                    Apply
                  </button>
                </div>
              </Card>

              {/* Delivery Method */}
              <Card title="Delivery Method" icon={<Truck className="h-4 w-4" />}>
                <div className="space-y-2">
                  {DELIVERY_OPTIONS.map((d) => (
                    <label
                      key={d.id}
                      className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition ${
                        delivery === d.id
                          ? "border-ink-500 bg-ink-50"
                          : "border-paper-300 bg-white hover:border-paper-300/80"
                      }`}
                    >
                      <input
                        type="radio"
                        name="delivery"
                        value={d.id}
                        checked={delivery === d.id}
                        onChange={() => setDelivery(d.id)}
                        className="h-4 w-4 text-ink-500 focus:ring-ink-500"
                      />
                      <span className="font-semibold text-body">{d.label}</span>
                    </label>
                  ))}
                </div>
              </Card>
            </div>

            {/* RIGHT column */}
            <div className="space-y-6">
              {/* Delivery Address */}
              <Card title="Delivery Address" icon={<MapPin className="h-4 w-4" />}>
                <div className="space-y-3">
                  <Field label="আপনার নাম" required>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Enter your full name"
                      className="input"
                      required
                    />
                  </Field>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <Field label="জেলা" required>
                      <select
                        value={form.district}
                        onChange={(e) =>
                          setForm({ ...form, district: e.target.value })
                        }
                        className="input"
                        required
                      >
                        <option value="">জেলা নির্বাচন করুন</option>
                        {DISTRICTS.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field label="উপজেলা" required>
                      <select
                        value={form.upazila}
                        onChange={(e) =>
                          setForm({ ...form, upazila: e.target.value })
                        }
                        className="input"
                        required
                      >
                        <option value="">প্রথমে জেলা নির্বাচন করুন</option>
                      </select>
                    </Field>
                  </div>

                  <Field label="বাসার ঠিকানা (বিস্তারিত)" required>
                    <textarea
                      rows={3}
                      value={form.address}
                      onChange={(e) =>
                        setForm({ ...form, address: e.target.value })
                      }
                      placeholder="Enter your detailed address"
                      className="input resize-none"
                      required
                    />
                  </Field>

                  <Field label="মোবাইল নাম্বার" required>
                    <input
                      type="tel"
                      inputMode="numeric"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          phone: e.target.value.replace(/\D/g, "").slice(0, 11),
                        })
                      }
                      maxLength={11}
                      placeholder="Enter your mobile number"
                      className="input"
                      required
                    />
                  </Field>

                  <Field label="বিশেষ নোট">
                    <textarea
                      rows={2}
                      value={form.note}
                      onChange={(e) =>
                        setForm({ ...form, note: e.target.value })
                      }
                      placeholder="Any special instructions (optional)"
                      className="input resize-none"
                    />
                  </Field>
                </div>
              </Card>

              {/* Payment */}
              <Card
                title="Payment Details"
                icon={<CreditCard className="h-4 w-4" />}
              >
                <div className="text-xs font-bold uppercase tracking-wider text-rose-500">
                  Select Any Payment Method
                </div>
                <div className="mt-3 space-y-2">
                  {PAYMENT_METHODS.map((m) => (
                    <label
                      key={m.id}
                      className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition ${
                        payment === m.id
                          ? "border-ink-500 bg-ink-50"
                          : "border-paper-300 bg-white"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={m.id}
                        checked={payment === m.id}
                        onChange={() => setPayment(m.id)}
                        className="h-4 w-4 text-ink-500 focus:ring-ink-500"
                      />
                      <span
                        className={`rounded-md px-3 py-1 text-xs font-extrabold text-white ${m.color}`}
                      >
                        {m.label}
                      </span>
                    </label>
                  ))}
                </div>

                <button
                  type="submit"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-extrabold text-white shadow-card transition hover:bg-blue-700"
                >
                  <CheckCircle2 className="h-4 w-4" /> Confirm Order
                </button>
              </Card>
            </div>
          </form>
        </div>
      </main>
      <Footer />

      <style jsx global>{`
        .input {
          width: 100%;
          border-radius: 8px;
          border: 1px solid #e6e0f0;
          background: #fff;
          padding: 0.625rem 0.875rem;
          font-size: 0.875rem;
          color: #1a0b47;
        }
        .input::placeholder {
          color: #9988b3;
        }
        .input:focus {
          outline: none;
          border-color: rgba(70, 35, 166, 0.4);
          box-shadow: 0 0 0 3px rgba(70, 35, 166, 0.08);
        }
      `}</style>
    </>
  );
}

function Card({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-paper-300 bg-white p-5 shadow-card sm:p-6">
      <div className="mb-4 flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-gold-500/15 text-gold-600">
          {icon}
        </span>
        <h2 className="font-display text-base font-extrabold text-body">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function Row({
  label,
  value,
}: {
  label: React.ReactNode;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between text-body-soft">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-bold text-body">
        {label}
        {required && <span className="ml-0.5 text-rose-500">*</span>}
      </span>
      {children}
    </label>
  );
}
