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
import NOHITDev from "@/images/logo/NOHITDev.svg"
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'

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
                  <span>Etude de cas</span>
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
        title="On vous aide à identifier, explorer et répondre à vos nouvelles opportunités."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          {/* Notre engagement consiste à vous soutenir activement dans le processus d'identification, d'exploration approfondie et de réponse adaptée à toutes les nouvelles opportunités qui se présentent à vous." */}
          Catalysez votre succès grâce à la diversité de nos prestations.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={
                  imageLaptop
                }
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Développement Web">
              Nous offrons des services de développement web de haute qualité, personnalisés selon vos besoins spécifiques.
              Nous transformons votre vision en une réalité pour vous aider à atteindre vos objectifs en ligne.
            </ListItem>
            <ListItem title="Développement d'application">
              Excellant dans la création sur mesure d'applications web complexes,
              nous combinons une expertise technique et graphique pour transformer vos idées ambitieuses en des solutions robustes et innovantes.
            </ListItem>
            <ListItem title="Refonte et optimisation">
              Les contraintes graphiques, d'accessibilité et de performances deviennent toujours plus importantes pour garder une position majeure sur internet.
              Nous adaptons votre site internet pour répondre au mieux à l'ensemble de ces nouveaux critères.
            </ListItem>
            <ListItem title="Prototypage">
              Afin de vous permettre une première visualisation de votre concept ou obtenir des retours précoces de vos utilisateurs,
              nous concevons et intégrons simplement et rapidement votre solution.
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
            <Image src={NOHITDev} priority className='w-96 max-w-[80%] mb-6' height={1} width={1} alt="" />
            <p>Une expertise Web et graphique à votre service.</p>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-neutral-600">
           NO HIT Dev est une coopération entre deux indépendants, Théo et Bruno, travaillant en synergie afin de mettre à votre disposition efficacement et simplement leurs expertises respectives.
          </p>
        </FadeIn>
      </Container>
      <Culture />
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
