"use client";

import Link from "next/link";
import { type FormEvent, useId, useState } from "react";
import { RichText } from "@/components/ui/Placeholder";
import type { EnquiryKind, FormField } from "@/types/home";
import { CONTACT_GROUP_ERROR, forms, submitEnquiry } from "@/utils/forms";

type Status = "idle" | "sending" | "success" | "failure";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Digits with optional +, spaces, dashes, dots and brackets; 7–15 digits covers +233 and other formats.
const PHONE_RE = /^\+?[\d\s().-]+$/;

function isVisible(field: FormField, values: Record<string, string>) {
  return !field.showWhen || values[field.showWhen.field] === field.showWhen.equals;
}

function validate(fields: FormField[], values: Record<string, string>) {
  const errors: Record<string, string> = {};
  for (const field of fields) {
    if (!isVisible(field, values)) continue;
    const value = (values[field.name] ?? "").trim();
    if (field.required && !value) errors[field.name] = field.error ?? `Please complete ${field.label.toLowerCase()}.`;
  }

  const email = (values.email ?? "").trim();
  const phone = (values.phone ?? "").trim();
  if (fields.some((f) => f.group === "contact")) {
    if (!email && !phone) errors.email = CONTACT_GROUP_ERROR;
    if (email && !EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
    const digits = phone.replace(/\D/g, "");
    if (phone && (!PHONE_RE.test(phone) || digits.length < 7 || digits.length > 15)) {
      errors.phone = "Please enter a valid telephone number, for example +233 20 000 0000.";
    }
  }
  return errors;
}

const inputClass =
  "w-full rounded-xl border bg-white px-4 py-3 text-royal-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-royal-500 focus:ring-4 focus:ring-royal-100";

export default function EnquiryForm({
  kind,
  initialValues = {},
}: {
  kind: EnquiryKind;
  initialValues?: Record<string, string>;
}) {
  const config = forms[kind];
  const formId = useId();
  const [values, setValues] = useState<Record<string, string>>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  const setValue = (name: string, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors(({ [name]: _, ...rest }) => rest);
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Spam trap: real visitors never see or fill this field.
    if (new FormData(event.currentTarget).get("company")) return;

    const found = validate(config.fields, values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(`${formId}-${first}`)?.focus();
      return;
    }

    setStatus("sending");
    const data = Object.fromEntries(
      config.fields.filter((f) => isVisible(f, values)).map((f) => [f.name, (values[f.name] ?? "").trim()]),
    );
    const stored = await submitEnquiry(kind, data).catch(() => false);
    setStatus(stored ? "success" : "failure");
    if (stored) setValues({});
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-3xl bg-royal-50 p-8 text-lg leading-relaxed text-royal-900 ring-1 ring-royal-100">
        <RichText text={config.successMessage} />
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="relative space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {config.fields.map((field) => {
          if (!isVisible(field, values)) return null;
          const id = `${formId}-${field.name}`;
          const error = errors[field.name];
          const hintId = field.hint ? `${id}-hint` : undefined;
          const errorId = error ? `${id}-error` : undefined;
          const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;
          const border = error ? "border-red-500" : "border-royal-200";
          const wide = field.type === "textarea" || field.type === "checkbox" || field.name === "name";
          const optional = !field.required && !field.group;

          if (field.type === "checkbox") {
            return (
              <div key={field.name} className="sm:col-span-2">
                <label htmlFor={id} className="flex items-start gap-3 font-medium text-royal-900">
                  <input
                    id={id}
                    type="checkbox"
                    checked={values[field.name] === "yes"}
                    onChange={(e) => setValue(field.name, e.target.checked ? "yes" : "")}
                    aria-invalid={!!error}
                    aria-describedby={describedBy}
                    className="mt-1 h-5 w-5 rounded border-royal-300 accent-royal-700"
                  />
                  {field.label}
                </label>
                {field.hint && (
                  <p id={hintId} className="mt-1 pl-8 text-sm text-slate-500">
                    {field.hint}
                  </p>
                )}
                {error && (
                  <p id={errorId} className="mt-1 pl-8 text-sm font-medium text-red-600">
                    {error}
                  </p>
                )}
              </div>
            );
          }

          const common = {
            id,
            name: field.name,
            value: values[field.name] ?? "",
            "aria-invalid": !!error,
            "aria-describedby": describedBy,
            className: `${inputClass} ${border}`,
          };

          return (
            <div key={field.name} className={wide ? "sm:col-span-2" : ""}>
              <label htmlFor={id} className="mb-2 block text-sm font-semibold text-royal-900">
                {field.label}
                {optional && <span className="font-normal text-slate-500"> (optional)</span>}
                {field.required && <span className="text-red-600"> *</span>}
              </label>
              {field.type === "select" ? (
                <select {...common} onChange={(e) => setValue(field.name, e.target.value)}>
                  <option value="">Select…</option>
                  {field.options?.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              ) : field.type === "textarea" ? (
                <textarea {...common} rows={4} onChange={(e) => setValue(field.name, e.target.value)} />
              ) : (
                <input
                  {...common}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  placeholder={field.placeholder}
                  onChange={(e) => setValue(field.name, e.target.value)}
                />
              )}
              {field.hint && (
                <p id={hintId} className="mt-1.5 text-sm text-slate-500">
                  {field.hint}
                </p>
              )}
              {error && (
                <p id={errorId} className="mt-1.5 text-sm font-medium text-red-600">
                  {error}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {config.fields.some((f) => f.group === "contact") && (
        <p className="text-sm text-slate-500">Provide at least an email address or a telephone number.</p>
      )}

      {/* Honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <p className="text-sm text-slate-600">
        <Link href="/privacy" className="font-semibold text-royal-700 underline underline-offset-2 hover:text-royal-500">
          {config.privacyText}
        </Link>
      </p>

      {status === "failure" && (
        <p role="alert" className="rounded-xl bg-red-50 p-4 font-medium text-red-700 ring-1 ring-red-200">
          <RichText text={config.failureMessage} />
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center rounded-full bg-gold-400 px-8 py-4 font-bold text-royal-900 shadow-lg shadow-gold-400/25 transition hover:-translate-y-0.5 hover:bg-gold-300 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : config.submitLabel}
      </button>
    </form>
  );
}
