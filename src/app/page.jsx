import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { GridList, GridListItem } from '@/components/GridList'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg' // testimonials
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'

function Culture() {
  return (
    <div className="rounded-4xl bg-neutral-950 py-20 mx-2 md:mx-8">
      <SectionIntro
        eyebrow="Nos expertises"
        title={"L'équilibre entre \ncompétences graphiques \net compétences techniques."}
        invert
      >
        <p>
          Le rendu graphique de votre site à tout autant d'importance pour nous que sa réalisation technique.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Définition" invert>
            Nous définissons vos besoins tout en vous accompagnant sur la façon la plus adéquate pour les réaliser.
          </GridListItem>
          <GridListItem title="Création graphique" invert>
            Afin que votre projet vous ressemble, nous créons ou adaptons votre charte graphique pour votre site.
          </GridListItem>
          <GridListItem title="Conception technique" invert>
            Une fois votre design idéal réalisé, nous intégrons et donnons vie à votre projet.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Exploiter la technologie pour un avenir meilleur"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Nous sommes convaincus que la technologie est la réponse aux plus grands défis du monde.
          du monde. Elle en est aussi la cause, et nous nous trouvons donc dans une situation un peu
          un peu dans une situation de `catch 22`.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere.
            </ListItem>
            <ListItem title="Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like Angular 1 and Google Web Toolkit.
            </ListItem>
            <ListItem title="E-commerce">
              We are at the forefront of modern e-commerce development. Which
              mainly means adding your logo to the Shopify store template we’ve
              used for the past six years.
            </ListItem>
            <ListItem title="Custom content management">
              At NO HIT Dev we understand the importance of having a robust and
              customised CMS. That’s why we run all of our client projects out
              of a single, enormous Joomla instance.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="my-24 sm:my-32 md:my-56">
        <FadeIn className="max-w-5xl">
          <h1 className="font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl whitespace-pre-line">
            {/* <Image src={NOHITDev} priority className='w-96' height={1} width={1} alt="" /> */}
            <svg id="Calque_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 443.26 61.37" className='w-96 max-w-[80%] mb-6' aria-label="NO HIT Dev">
              <g id="Calque_1-2">
                <path className="cls-1" d="m201.63,2.64v56.09h-18.91v-20.67h-17.47v20.67h-18.91V2.64h18.91v19.87h17.47V2.64h18.91Z" />
                <path className="cls-1" d="m210.77,2.64h18.91v56.09h-18.91V2.64Z" />
                <path className="cls-1" d="m250.99,17.31h-16.42V2.64h51.76v14.66h-16.43v41.42h-18.91V17.31Z" />
                <path className="cls-1" d="m55.28,2.64v56.09h-15.54l-21.31-25.48v25.48H0V2.64h15.54l21.31,25.48V2.64h18.43Z" />
                <path className="cls-1" d="m93.23,0c-17.52,0-31.72,13.74-31.72,30.69,0,6.36,2,12.26,5.42,17.16l-2.94,10.99,11.11-2.98c5.14,3.47,11.39,5.52,18.14,5.52,17.52,0,31.72-13.74,31.72-30.69S110.75,0,93.23,0Zm.34,45.31c-8.39,0-15.18-6.58-15.18-14.69s6.8-14.69,15.18-14.69,15.18,6.58,15.18,14.69-6.8,14.69-15.18,14.69Z" />
                <path className="cls-1" d="m311.79,2.64h22.42c15.96,0,25.08,11.1,25.08,27.74s-9.12,27.66-25.08,27.66h-22.42V2.64Zm21.2,48.26c10.72,0,17.78-6.61,17.78-20.67s-7.14-20.44-17.78-20.44h-12.92v41.11h12.92Z" />
                <path className="cls-1" d="m365.59,38.13c0-12.69,7.37-20.9,19.15-20.9,13.22,0,19.61,9.65,18.39,22.27h-29.79c.15,8.28,4.71,13,11.7,13,5.4,0,9.42-2.66,10.41-6.84h7.45c-1.06,7.9-8.36,13.07-17.86,13.07-12.08,0-19.46-8.21-19.46-20.6Zm7.9-4.18h21.96c-.23-7.45-4.86-10.56-10.79-10.56-6.31,0-10.56,4.03-11.17,10.56Z" />
                <path className="cls-1" d="m404.96,17.84h8.44l8.06,24.77,2.58,8.66h.3l2.43-8.66,8.06-24.77h8.44l-14.29,40.2h-9.58l-14.44-40.2Z" />
              </g>
            </svg>
            {'Une expertise Web et graphique à votre service.'}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-justify text-neutral-600">
           NO HIT Dev est une coopération entre deux indépendants travaillant en synergie afin de mettre à votre disposition efficacement et simplement leurs expertises respectives.
          </p>
        </FadeIn>
      </Container>
      < Culture />
      <Services />
      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at NO HIT Dev went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial>
      <CaseStudies caseStudies={caseStudies} />
      <ContactSection />
    </>
  )
}
