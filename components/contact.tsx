 "use client";

 import * as React from "react";
 import { useForm } from "@tanstack/react-form";

 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { Textarea } from "@/components/ui/textarea";

 type ContactFormValues = {
   name: string;
   email: string;
   message: string;
 };

 const defaultValues: ContactFormValues = {
   name: "",
   email: "",
   message: "",
 };

 function ContactForm() {
   const [status, setStatus] = React.useState<
     { type: "success" | "error"; message: string } | null
   >(null);

  const form = useForm({
     defaultValues,
     onSubmit: async ({ value }) => {
       setStatus(null);
       try {
         const res = await fetch("/api/contact", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(value),
         });

         if (!res.ok) {
           const data = await res.json().catch(() => null);
           const message =
             data?.error ?? "Wystąpił błąd podczas wysyłania wiadomości.";
           throw new Error(message);
         }

         setStatus({
           type: "success",
           message: "Dziękuję! Twoja wiadomość została wysłana.",
         });
         form.reset();
       } catch (error) {
         setStatus({
           type: "error",
           message:
             error instanceof Error
               ? error.message
               : "Nie udało się wysłać wiadomości. Spróbuj ponownie później.",
         });
       }
     },
   });

   return (
     <form
       className="space-y-6"
       onSubmit={(event) => {
         event.preventDefault();
         void form.handleSubmit();
       }}
       noValidate
     >
       <div className="space-y-4">
         <form.Field
           name="name"
           validators={{
             onChange: ({ value }) =>
               !value || value.trim().length < 2
                 ? "Podaj co najmniej 2 znaki."
                 : undefined,
           }}
         >
           {(field) => (
             <div className="space-y-1.5">
               <Label htmlFor={field.name}>Imię</Label>
               <Input
                 id={field.name}
                 value={field.state.value}
                 onChange={(event) =>
                   field.handleChange(event.target.value)
                 }
                 onBlur={field.handleBlur}
                 aria-invalid={
                   field.state.meta.errors.length > 0 ? "true" : "false"
                 }
                 aria-describedby={`${field.name}-error`}
                 autoComplete="name"
               />
               {field.state.meta.errors[0] ? (
                 <p
                   id={`${field.name}-error`}
                   className="text-sm text-destructive"
                 >
                   {field.state.meta.errors[0]}
                 </p>
               ) : null}
             </div>
           )}
         </form.Field>

         <form.Field
           name="email"
           validators={{
             onChange: ({ value }) => {
               if (!value) return "E-mail jest wymagany.";
               const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
               if (!emailRegex.test(value)) {
                 return "Podaj poprawny adres e-mail.";
               }
               return undefined;
             },
           }}
         >
           {(field) => (
             <div className="space-y-1.5">
               <Label htmlFor={field.name}>E-mail</Label>
               <Input
                 id={field.name}
                 type="email"
                 value={field.state.value}
                 onChange={(event) =>
                   field.handleChange(event.target.value)
                 }
                 onBlur={field.handleBlur}
                 aria-invalid={
                   field.state.meta.errors.length > 0 ? "true" : "false"
                 }
                 aria-describedby={`${field.name}-error`}
                 autoComplete="email"
               />
               {field.state.meta.errors[0] ? (
                 <p
                   id={`${field.name}-error`}
                   className="text-sm text-destructive"
                 >
                   {field.state.meta.errors[0]}
                 </p>
               ) : null}
             </div>
           )}
         </form.Field>

         <form.Field
           name="message"
           validators={{
             onChange: ({ value }) =>
               !value || value.trim().length < 10
                 ? "Wiadomość powinna mieć co najmniej 10 znaków."
                 : undefined,
           }}
         >
           {(field) => (
             <div className="space-y-1.5">
               <Label htmlFor={field.name}>Wiadomość</Label>
               <Textarea
                 id={field.name}
                 value={field.state.value}
                 onChange={(event) =>
                   field.handleChange(event.target.value)
                 }
                 onBlur={field.handleBlur}
                 rows={5}
                 aria-invalid={
                   field.state.meta.errors.length > 0 ? "true" : "false"
                 }
                 aria-describedby={`${field.name}-error`}
               />
               {field.state.meta.errors[0] ? (
                 <p
                   id={`${field.name}-error`}
                   className="text-sm text-destructive"
                 >
                   {field.state.meta.errors[0]}
                 </p>
               ) : null}
             </div>
           )}
         </form.Field>
       </div>

       {status ? (
         <div
           className={`rounded-md border px-3 py-2 text-sm ${
             status.type === "success"
               ? "border-emerald-500/60 bg-emerald-500/5 text-emerald-700 dark:text-emerald-300"
               : "border-destructive/60 bg-destructive/5 text-destructive"
           }`}
         >
           {status.message}
         </div>
       ) : null}

       <form.Subscribe
         selector={(state) => ({
           canSubmit: state.canSubmit,
           isSubmitting: state.isSubmitting,
         })}
       >
         {({ canSubmit, isSubmitting }) => (
           <Button
             type="submit"
             disabled={!canSubmit || isSubmitting}
             className="w-full sm:w-auto"
           >
             {isSubmitting ? "Wysyłanie..." : "Wyślij"}
           </Button>
         )}
       </form.Subscribe>
     </form>
   );
 }

 function ContactDetails() {
   return (
     <div className="space-y-6 rounded-3xl border border-border/40 bg-muted/40 p-6 shadow-lg lg:p-8">
       <div className="space-y-2">
         <h3 className="text-xl font-semibold">Dane kontaktowe</h3>
         <p className="text-sm text-muted-foreground leading-relaxed">
           Masz pytania dotyczące projektu, współpracy lub wdrożenia? Napisz lub
           zadzwoń – chętnie porozmawiam o Twoich potrzebach.
         </p>
       </div>

       <div className="grid gap-4 text-sm">
         <div className="space-y-1.5">
           <p className="text-xs font-semibold uppercase tracking-wide text-[#ff5f45]">
             E-mail
           </p>
           <p className="font-medium text-foreground">
             kontakt@twojadomena.pl
           </p>
           <p className="text-xs text-muted-foreground">
             Preferowana forma kontaktu – odpowiadam zazwyczaj tego samego dnia.
           </p>
         </div>

         <div className="space-y-1.5">
           <p className="text-xs font-semibold uppercase tracking-wide text-[#ff5f45]">
             Telefon
           </p>
           <p className="font-medium text-foreground">+48 600 000 000</p>
           <p className="text-xs text-muted-foreground">
             Dostępny w dni robocze w godzinach 9:00–17:00.
           </p>
         </div>

         <div className="space-y-1.5">
           <p className="text-xs font-semibold uppercase tracking-wide text-[#ff5f45]">
             Adres
           </p>
           <p className="font-medium text-foreground">
             ul. Przykładowa 1
             <br />
             00-000 Warszawa, Polska
           </p>
           <p className="text-xs text-muted-foreground">
             Spotkania stacjonarne po wcześniejszym umówieniu terminu.
           </p>
         </div>
       </div>
     </div>
   );
 }

 export function ContactSection() {
   return (
     <section
       id="contact"
       className="flex w-full justify-center bg-background"
       aria-labelledby="contact-heading"
     >
       <div className="mx-auto w-full max-w-[1200px] px-4 py-16 lg:py-20">
         <div className="mb-12 space-y-4 text-center">
           <h2
             id="contact-heading"
             className="text-2xl font-semibold tracking-tight md:text-3xl"
           >
             Kontakt
           </h2>
           <p className="mx-auto max-w-[640px] text-sm text-muted-foreground md:text-base leading-relaxed">
             Opowiedz krótko o swoim projekcie lub potrzebie – przygotuję
             propozycję dalszych kroków i możliwe scenariusze współpracy.
           </p>
         </div>

         <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
           <div className="space-y-6">
             <div className="space-y-2">
               <h3 className="text-xl font-semibold md:text-2xl">
                 Formularz kontaktowy
               </h3>
               <p className="text-sm text-muted-foreground leading-relaxed">
                 Wypełnij krótkie pola poniżej – im więcej szczegółów podasz,
                 tym lepiej będę mógł przygotować odpowiedź.
               </p>
             </div>
             <ContactForm />
           </div>

           <div className="flex items-stretch">
             <ContactDetails />
           </div>
         </div>
       </div>
     </section>
   );
 }


