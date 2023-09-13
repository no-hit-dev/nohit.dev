'use client'

import { useId } from 'react'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import emailjs from '@emailjs/browser'
import { Toaster, toast } from 'react-hot-toast'

function TextInput({ label, as, ...props }) {
  let id = useId()
  const Component = as ?? "input"

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <Component
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 py-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-6 ${Component === "textarea" ? 'top-6' : 'top-1/2'} -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950`}
      >
        {label}
      </label>
    </div>
  )
}


function ContactForm() {
  const submitForm = async (event) => {
    event.preventDefault();
    const rawData = new FormData(document.getElementById('contactForm'));
    const data = {};
    for (const [name, value] of rawData)
      data[name] = value

    const fetchEMailjs = async (data) => {
      try {
        await emailjs.send(
          "service_8x2epv9",
          "template_qmmbr3g",
          data,
          "BqVIlSzqdQlYkdMPU"
        );
      } catch (err) {
        console.log(err)
        throw err;
      }
    }

    toast.promise(fetchEMailjs(data), {
      loading: 'Envoi en cours...',
      success: 'Nous avons bien reçu votre demande !',
      error: 'Une erreur est survenue.',
    });
    event.target.reset()
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={e => submitForm(e)} id='contactForm'>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" required />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
            required
          />
          <TextInput as="textarea" rows={6} label="Message" name="message" required />
        </div>
        <Button
          type="submit"
          className="mt-10"
        >
          Let’s work together
        </Button>
      </form>
      <Toaster
        position="bottom-right"
      />
    </FadeIn>
  )
}

function ContactDetails() {
  const EMAILS = [
    ['contact', 'contact@nohit.dev'],
  ];

  return (
    <FadeIn>
      <title>Nous contacter - NO HIT Dev</title>
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Nous envoyer un email
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {EMAILS.map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

    </FadeIn>
  )
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Nous contacter" title="Let’s work together">
        <p>We can’t wait to hear from you.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
