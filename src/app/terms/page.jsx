import { ContactSection } from '@/components/ContactSection'
import { PageIntro } from '@/components/PageIntro'

export const metadata = {
  title: 'Mentions légales',
  description:
    "Conditions générales d'utilisation",
}

export default function Terms() {

  return (
    <>
      <PageIntro
        eyebrow="Mis à jour le 05/09/2023"
        title="Conditions générales d'utilisation"
      >
      </PageIntro>
      <div className='max-w-7xl mx-4 md:mx-auto mt-12 md:mt-20'>
      <span className="font-display text-lg font-semibold text-neutral-950">Préambule</span>
      <p className="text-justify mb-4">
        NO HIT Dev est une plate-forme web, disponible à l&apos;adresse{' '}
        <a href="/" className="text-coolerOrange font-bold">
          https://nohit.dev
        </a>{' '}
        (le «{' '}<span className="font-display text-base font-semibold text-neutral-950">Site</span>{' '}»).
      </p>
      <p className="text-justify mb-4">
        Ce Site est édité par Bruno DURAND, entrepreneur individuel domicilié au 90 rue Jaboulay, 69007 Lyon, FRANCE. Cet entrepreneur est immatriculé au registre du commerce et des
        sociétés de Lyon sous le numéro d&apos;identification 833323165, (ci-après «{' '}
        <span className="font-display text-base font-semibold text-neutral-950">l&apos;Editeur </span>{' '}»). NO HIT Dev est
        accessibles aux utilisateurs (le ou les «
        {' '}<span className="font-display text-base font-semibold text-neutral-950">Utilisateurs</span>{' '}»).
      </p>
      <p className="text-justify mb-4">
        NO HIT Dev est hébergé par OVH, dont le siège social est situé au 2 Rue Kellermann,
        59100 Roubaix, France. Cet hébergeur peut être contacté à cette adresse électronique :{' '}
        <a className="text-coolerOrange font-bold" href="mailto:contact@ovh.net">
          contact@ovh.net
        </a>
        .
      </p>
      <p className="text-justify mb-4">
        L&apos;objet des présentes Conditions Générales d&apos;Utilisation (les «{' '}
        <span className="font-display text-base font-semibold text-neutral-950">Conditions</span>{' '}» ou prises dans leur ensemble, le «{' '}
        <span className="font-display text-base font-semibold text-neutral-950">Contrat</span>{' '}») est de définir les termes et les
        conditions régissant les relations entre les Utilisateurs et l'Editeur. En cas de
        non-respect des termes des présentes Conditions, l'Editeur se réserve le droit de prendre
        toute mesure de nature à préserver ses intérêts et notamment à en assurer
        l&apos;exécution.
      </p>
      <p className="text-justify mb-4">
        L&apos;accès et l&apos;utilisation du site sont soumis à l&apos;acceptation et au
        respect des présentes Conditions Générales d&apos;Utilisation.
      </p>
      <p className="text-justify mb-4">
        L&apos;Éditeur se réserve le droit de modifier, à tout moment et sans préavis, le Site
        et des services ainsi que les présentes CGU, notamment pour s&apos;adapter aux
        évolutions du Site par la mise à disposition de nouvelles fonctionnalités ou la
        suppression ou la modification de fonctionnalités existantes.
      </p>
      <p className="text-justify mb-4">
        Il est donc conseillé à l&apos;Utilisateur de se référer avant toute navigation à la
        dernière version des Conditions Générales d&apos;Utilisation accessible à tout moment
        sur le Site.
      </p>
      <p className="text-justify mb-4">
        Les présentes Conditions Générales d&apos;Utilisation s&apos;appliquent, en tant que
        de besoin, à toute déclinaison ou extension du Site sur les réseaux sociaux et/ou
        communautaires existants ou à venir.
      </p>
      <div className="w-full mt-8">
        <span className="font-display text-lg font-semibold text-neutral-950">Article 1er : Objet du site</span>
        <p className="text-justify mb-4">
          Le Site permet à l&apos;Utilisateur d&apos;accéder notamment aux services suivants :
          Prestation de services (le ou les «
          <span className="font-display text-base font-semibold text-neutral-950"> Service(s) </span>») .
        </p>
        <p className="text-justify mb-4">
          l'Editeur, selon les présentes Conditions, accorde aux Utilisateurs un droit
          d&apos;accès limité révocable, non exclusif, non cessible aux Services à titre
          strictement personnel. Toute utilisation de la plate-forme contraire à sa finalité
          est strictement interdite et constitue un manquement aux présentes dispositions.
        </p>
      </div>
      <div className="w-full mt-8">
        <span className="font-display text-lg font-semibold text-neutral-950">Article 2 : Accès au site</span>
        <p className="text-justify mb-4">
          Pour être éligible au Service, l&apos;Utilisateur peut être une personne physique ou
          morale.
        </p>
        <p className="text-justify mb-4">
          l'Editeur se réserve le droit de suspendre ou de refuser un accès d&apos;un ou
          plusieurs Utilisateurs au Site.
        </p>
      </div>
      <div className="w-full mt-8">
        <span className="font-display text-lg font-semibold text-neutral-950">Article 3 : Gestion du site</span>
        <p className="text-justify mb-4">
          L&apos;Editeur met en œuvre des solutions techniques nécessaires afin de permettre
          un accès continu au site pour l&apos;Utilisateur. Toutefois il se réserve la
          possibilité de limiter ou suspendre l&apos;accès à tout ou partie du Site à tout
          moment, et sans préavis. Une telle interruption pourra notamment être rendue
          nécessaire pour des raisons de maintenances du site ou de son contenu, ou pour toute
          autre raison jugée nécessaire au bon fonctionnement du site par l&apos;Editeur.
        </p>
        <p className="text-justify mb-4">
          L&apos;utilisation de la Plateforme requiert une connexion et un navigateur
          internet. La plateforme est accessible à l&apos;adresse suivante :
          https://nohit.dev.
        </p>
        <p className="text-justify mb-4">
          Tous matériels et logiciels nécessaires à l&apos;accès à la Plateforme et à
          l&apos;utilisation des Services restent exclusivement à la charge de
          l&apos;Utilisateur.
        </p>
      </div>
      <div className="w-full mt-8">
        <span className="font-display text-lg font-semibold text-neutral-950">Article 4 : Contact</span>
        <p className="text-justify mb-4">
          L&apos;utilisateur a la possibilité de contacter l&apos;Editeur pour tout question
          ou demande d&apos;information concernant le Site, ou tout signalement de contenu ou
          d&apos;activités illicites par mail à l&apos;adresse{' '}
          <a className="text-coolerOrange font-bold" href="mailto:contact@nohit.dev">
            contact@nohit.dev
          </a>
          .
        </p>
      </div>
      <div className="w-full mt-8">
        <span className="font-display text-lg font-semibold text-neutral-950">
          Article 5 : Utilisation des services de la plateforme
        </span>
        <p className="text-justify mb-4">Les Utilisateurs s&apos;interdisent :</p>
        <ol className="ml-4 text-justify">
          <li className="mb-4">
            1. de transmettre, publier, distribuer, enregistrer ou détruire tout matériel, en
            particulier les contenus de NO HIT Dev, en violation des lois ou
            réglementations en vigueur concernant la collecte, le traitement ou le transfert
            d&apos;informations personnelles ;
          </li>
          <li className="mb-4">
            2. de diffuser des données, informations, ou contenus à caractère diffamatoire,
            injurieux, obscène, offensant, violent ou incitant à la violence, ou à caractère
            politique, raciste ou xénophobe et de manière générale tout contenu qui serait
            contraire aux lois et règlements en vigueur ou aux bonnes mœurs ;
          </li>
          <li className="mb-4">
            3. de référencer ou créer des liens vers tout contenu ou information disponible
            depuis les sites de NO HIT Dev, sauf accord exprès, préalable et écrit de
            l'Editeur ;
          </li>
          <li className="mb-4">
            4. d&apos;utiliser des informations, contenus ou toutes données présentes sur le
            Site afin de proposer un service considéré comme concurrentiel à NO HIT Dev ;
          </li>
          <li className="mb-4">
            5. de vendre, échanger ou monnayer des informations, contenus ou données présentes
            sur la plateforme ou des Service proposés par la Plateforme, sans l&apos;accord
            expresse et écrit de l'Editeur ;
          </li>
          <li className="mb-4">
            6. de pratiquer de l&apos;ingénierie inversée (Reverse Engineering), décompiler,
            désassembler, déchiffrer ou autrement tenter d&apos;obtenir le code source en
            relation avec toute propriété intellectuelle sous-jacente utilisée pour fournir
            tout ou partie des Services ;
          </li>
          <li className="mb-4">
            7. d&apos;utiliser des logiciels ou appareils manuels ou automates, robots de
            codage ou autres moyens pour accéder, explorer, extraire ou indexer toute page du
            Site ;
          </li>
          <li className="mb-4">
            8. de mettre en danger ou essayer de mettre en danger la sécurité numérique de NO
            HIT Studio. Cela comprend les tentatives de contrôler, scanner ou tester la
            vulnérabilité du système ou réseau ou de violer des mesures de sécurité ou
            d&apos;authentification sans une autorisation préalable expresse ;
          </li>
          <li className="mb-4">
            9. de contrefaire ou d&apos;utiliser les produits, les logos, les marques ou tout
            autre élément protégé par les droits de propriété intellectuel de l'Editeur ;
          </li>
          <li className="mb-4">
            10. de simuler l&apos;apparence ou le fonctionnement du Site, en procédant par
            exemple à un effet miroir ;
          </li>
          <li className="mb-4">
            11. de perturber ou troubler, directement ou indirectement NO HIT Dev, ou
            imposer une charge disproportionnée sur l&apos;infrastructure du Site, ou de
            tenter de transmettre ou d&apos;activer des virus informatiques via ou sur le Site
            ;
          </li>
        </ol>
        Il est rappelé que les violations de la sécurité du système ou du réseau peuvent
        conduire à des poursuites civiles et pénales. l'Editeur vérifie l&apos;absence de telle
        violation et peut faire appel aux autorités judiciaires pour poursuivre, le cas
        échéant, des Utilisateurs ayant participé à de telles violations. Les Utilisateurs
        s&apos;engagent à utiliser le Site de manière loyale, conformément à sa finalité et
        aux dispositions légales, réglementaires, aux présentes Conditions et aux usages en
        vigueur.
      </div>
      <div className="w-full mt-8">
        <span className="font-display text-lg font-semibold text-neutral-950">Article 6 : Propriété intellectuelle</span>
        <p className="text-justify mb-4">
          L&apos;ensemble du contenu du Site, notamment les designs, textes, graphiques,
          images, vidéos, informations, logos, icônes-boutons, logiciels, fichiers audio et
          autres appartient à l'Editeur, lequel est seul titulaire de l&apos;intégralité des
          droits de propriété intellectuelle y afférents.
        </p>
        <p className="text-justify mb-4">
          Toute représentation et/ou reproduction et/ou exploitation partielle ou totale des
          contenus et Services proposés par NO HIT Dev, par quelque procédé que ce soit,
          sans l&apos;autorisation préalable et écrite de l'Editeur, est strictement interdite et
          serait susceptible de donner lieu à des poursuites judiciaires.
        </p>
      </div>
      <div className="w-full mt-8">
        <span className="font-display text-lg font-semibold text-neutral-950">Article 7 : Données à caractère personnelles</span>
        <p className="text-justify mb-4">
          Toutes les données à caractère personnel dont dispose l'Editeur sont recueillies
          légalement et loyalement selon les modalités de la politique de confidentialité
          accessible à cette adresse : nohit.dev/mentions.
        </p>
        <p className="text-justify mb-4">
          Ces données sont fournies par les Utilisateurs qui acceptent de manière volontaire
          et expresse les présentes Conditions autorisant l'Editeur à traiter, divulguer ou
          transférer ces données à tout tiers cela afin de permettre (i) à l&apos;Utilisateur
          de profiter pleinement des Services et des fonctions proposés par le Site, (ii)
          prévenir toute fraude et /ou (iii) à des fins statistiques.
        </p>
        <p className="text-justify mb-4">
          Les données à caractère personnel sont stockées par l'Editeur en vue de leur traitement
          dans le cadre de l&apos;utilisation des Services. Elles sont conservées aussi
          longtemps que nécessaire pour l&apos;apport des Services et fonctions offerts par le
          Site.
        </p>
        <p className="text-justify mb-4">
          L&apos;Utilisateur reste toujours propriétaire des informations le concernant
          qu&apos;il transmet à l'Editeur. Il dispose, conformément à la loi n° 78-17 du 6
          janvier 1978 selon sa version consolidée au 24 mars 2020, d&apos;un droit
          d&apos;accès, de rectification et de suppression des données à caractère personnel
          le concernant, ainsi que du droit de s&apos;opposer à la communication de ces
          données à des tiers pour de justes motifs.
        </p>
        <p className="text-justify mb-4">
          L&apos;Utilisateur pourra exercer ses droits en écrivant à l&apos;adresse
          électronique suivante :{' '}
          <a className="text-coolerOrange font-bold" href="mailto:contact@nohit.dev">
            contact@nohit.dev
          </a>
          .
        </p>
        <p className="text-justify mb-4">
          Une réponse à la requête de l&apos;Utilisateur lui sera adressée dans un délai de 30
          jours.
        </p>
      </div>
      <div className="w-full mt-8">
        <span className="font-display text-lg font-semibold text-neutral-950">Article 8 : Responsabilité</span>
        <p className="text-justify mb-4">
          Il est rappelé que les données publiées par les Utilisateurs et les informations
          partagées par ces derniers peuvent être captées et exploitées par d&apos;autres
          Utilisateurs ou des tiers. En ce sens, l'Editeur ne garantit pas le respect de la
          propriété de ces données, il incombe à l&apos;Utilisateur de prendre l&apos;ensemble
          des dispositions nécessaires afin que soit préservée la propriété de ses données.
        </p>
        <p className="text-justify mb-4">
          l'Editeur ne garantit pas le fonctionnement sans interruption ou sans erreur de
          fonctionnement des Services, en particulier, la responsabilité de l'Editeur ne saurait
          être engagée en cas d&apos;interruption d&apos;accès à la Plateforme en raison
          d&apos;opérations de maintenance, de mises à jour ou d&apos;améliorations
          techniques.
        </p>
        <p className="text-justify mb-4">
          En tout état de cause, l'Editeur ne saurait en aucune circonstance être responsable au
          titre des pertes ou dommages indirects ou imprévisibles de l&apos;Utilisateur ou de
          tout tiers, ce qui inclut notamment tout gain manqué, tout investissement
          malheureux, inexactitude ou corruption de fichiers ou données, préjudice
          d&apos;image ou commercial, perte de chiffre d&apos;affaires ou bénéfice, perte de
          clientèle ou perte de chance lié à quelque titre et sur quelque fondement que ce
          soit.
        </p>
        <p className="text-justify mb-4">
          En outre, l'Editeur ne saurait être responsable de tout retard ou inexécution du
          présent Contrat justifié par un cas de force majeure, telle qu&apos;elle est définie
          par la jurisprudence des cours et tribunaux français.
        </p>
      </div>
      <div className="w-full mt-8">
        <span className="font-display text-lg font-semibold text-neutral-950">Article 9 : Convention de preuves</span>
        <p className="text-justify mb-4">
          Les systèmes et fichiers informatiques font foi dans les rapports entre l'Editeur et
          l&apos;Utilisateur.
        </p>
        <p className="text-justify mb-4">
          Ainsi, l'Editeur pourra valablement produire dans le cadre de toute procédure, aux fins
          de preuve les données, fichiers, programmes, enregistrements ou autres éléments,
          reçus, émis ou conservés au moyen des systèmes informatiques exploités, sur tous
          supports numériques ou analogiques, et s&apos;en prévaloir sauf erreur manifeste.
        </p>
      </div>
      <div className="w-full mt-8">
        <span className="font-display text-lg font-semibold text-neutral-950">Article 10 : Indivisibilité</span>
        <p className="text-justify mb-4">
          Le fait que l&apos;une quelconque des dispositions du Contrat soit ou devienne
          illégale ou inapplicable n&apos;affectera en aucune façon la validité ou
          l&apos;applicabilité des autres stipulations du Contrat.
        </p>
      </div>
      <div className="w-full mt-8">
        <span className="font-display text-lg font-semibold text-neutral-950">Article 11 : Règlement des différents</span>
        <p className="text-justify mb-4">
          La conclusion, l&apos;interprétation et la validité du présent Contrat sont régis
          par la loi française, quel que soit le pays d&apos;origine de l&apos;Utilisateur ou
          le pays depuis lequel l&apos;Utilisateur accède à NO HIT Dev et nonobstant les
          principes de conflits de lois.
        </p>
        <p className="text-justify mb-4">
          Dans l&apos;hypothèse où un différend portant sur la validité, l&apos;exécution ou
          l&apos;interprétation du présent Contrat et serait porté devant les juridictions
          civiles, il sera soumis à la compétence exclusive des tribunaux français auquel il
          est fait expressément attribution de compétence, même en cas de référé ou de
          pluralité de défendeurs.
        </p>
        <p className="text-justify mb-4">
          L&apos;Utilisateur est informé qu&apos;il peut en tout état de cause recourir à une
          médiation conventionnelle ou à tout mode alternatif de règlement des différends
          (conciliation par exemple) en cas de contestation.
        </p>
      </div>
      <div className="w-full mt-8">
        <span className="font-display text-lg font-semibold text-neutral-950">Article 12 : Durée des conditions générales d’utilisations</span>
        <p className="text-justify mb-4">
          Les présentes conditions générales d’utilisation sont conclues pour une durée indéterminée, l’Utilisateur est tenu de les respecter à compter du début de son utilisation des Services.
        </p>
        <p  className="text-justify mb-4">
          L’Editeur se réserve la possibilité de modifier ce document à tout moment et sans préavis. Les utilisateurs seront informés de chaque mise à jour du document.
        </p>
      </div>
      </div>
      <ContactSection />
    </>
  )
}
