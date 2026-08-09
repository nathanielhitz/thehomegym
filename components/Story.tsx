import Image from "next/image";
import Reveal from "@/components/Reveal";
import { company, equipmentBrands, images, team } from "@/lib/content";

export default function Story() {
  return (
    <section id="team" className="bg-paper-deep">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
        {/* Het verhaal */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-display text-[32px] leading-[1.08] font-extrabold text-ink sm:text-[40px] lg:text-[46px]">
              Het begon op zolder.
            </h2>
            <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-muted sm:text-[17px]">
              <p>
                In {company.trainingSince} was er bij ons in de buurt geen
                sportschool, dus kochten we zelf wat fitnessmateriaal en
                zetten dat op zolder. Jaar na jaar kwam er iets beters bij en
                begon het steeds meer vorm te krijgen. We noemden het
                Thehomegym.
              </p>
              <p>
                Toen we in {company.foundedGym} een echte gym gingen opzetten,
                hebben we lang over de naam gebrainstormd. Uiteindelijk hebben
                we die nostalgische naam gewoon gehouden. Hier trainen we zelf,
                maar bovenal helpen we anderen hun doelen te halen.
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={images.coaching.src}
                alt={images.coaching.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Het team */}
        <div className="mt-20 md:mt-28">
          <Reveal>
            <h3 className="font-display text-[26px] leading-tight font-extrabold text-ink sm:text-[30px]">
              De trainers
            </h3>
          </Reveal>

          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.id} delay={(i + 1) as 1 | 2 | 3}>
                <article>
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={member.image.src}
                      alt={member.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <h4 className="mt-5 font-display text-[21px] leading-tight font-bold text-ink">
                    {member.name}
                  </h4>
                  <p className="mt-1 text-[14px] text-brick">{member.role}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {member.bio}
                  </p>
                  {member.certifications.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {member.certifications.map((cert) => (
                        <li
                          key={cert}
                          className="rounded-full border border-line-strong px-2.5 py-1 text-[12px] text-muted"
                        >
                          {cert}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* De zaal */}
        <Reveal className="mt-16 overflow-hidden rounded-2xl border border-line bg-paper md:mt-20">
          <div className="grid lg:grid-cols-[1fr_0.85fr]">
            <div className="p-7 sm:p-9 lg:p-11">
              <h3 className="font-display text-[24px] leading-tight font-extrabold text-ink sm:text-[28px]">
                Onze sportschool
              </h3>
              <p className="mt-4 max-w-[54ch] text-[16px] leading-relaxed text-muted">
                De zaal bestaat uit twee delen: één deel voor vrij fitnessen en
                één deel voor de personal trainingen. Verder is er een lounge om
                even te zitten en zijn er kleedkamers.
              </p>
              <p className="mt-4 max-w-[54ch] text-[16px] leading-relaxed text-muted">
                Voor je krachttraining staan er cable stations, squatrekken, een
                deadliftplatform, pin loaded en plate loaded machines en een
                dumbbellrek tot en met 50 kilo.
              </p>

              <ul className="mt-7 flex flex-wrap gap-2">
                {equipmentBrands.map((brand) => (
                  <li
                    key={brand}
                    className="rounded-full bg-paper-deep px-3.5 py-1.5 text-[13px] font-medium text-ink"
                  >
                    {brand}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative min-h-[240px] lg:min-h-full">
              <Image
                src={images.equipmentDetail.src}
                alt={images.equipmentDetail.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
