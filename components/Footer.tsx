import Link from "next/link";
import {
  FacebookLogo,
  InstagramLogo,
  TiktokLogo,
} from "@phosphor-icons/react/dist/ssr";
import {
  company,
  ctaMessages,
  mailtoHref,
  navLinks,
  openingHours,
  whatsappHref,
} from "@/lib/content";

const socials = [
  { href: company.instagram, label: "Instagram", Icon: InstagramLogo },
  { href: company.facebook, label: "Facebook", Icon: FacebookLogo },
  { href: company.tiktok, label: "TikTok", Icon: TiktokLogo },
];

export default function Footer() {
  const weekdays = openingHours[0];
  const saturday = openingHours[5];
  const sunday = openingHours[6];

  return (
    <footer className="border-t border-line bg-paper pb-24 md:pb-0">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-14 sm:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <p className="font-display text-[20px] font-extrabold tracking-tight text-ink">
              THEHOMEGYM<span className="text-signal">.</span>
            </p>
            <address className="mt-4 text-[15px] leading-relaxed text-muted not-italic">
              {company.street}
              <br />
              <span className="tnum">
                {company.postalCode} {company.city}
              </span>
              <br />
              {company.region}
            </address>
            <p className="mt-4 text-[14px] text-muted tnum">
              KVK {company.kvk}
            </p>
          </div>

          <nav aria-label="Footermenu">
            <h2 className="font-display text-[15px] font-bold text-ink">
              Op deze site
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] text-muted underline-offset-4 transition-colors duration-200 hover:text-ink hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/algemene-voorwaarden"
                  className="text-[15px] text-muted underline-offset-4 transition-colors duration-200 hover:text-ink hover:underline"
                >
                  Algemene voorwaarden
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-[15px] font-bold text-ink">
              Contact en openingstijden
            </h2>
            <ul className="mt-4 space-y-2.5 text-[15px] text-muted">
              <li>
                <a
                  href={whatsappHref(ctaMessages.vraag)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 transition-colors duration-200 hover:text-ink hover:underline tnum"
                >
                  {company.whatsappDisplay} (WhatsApp)
                </a>
              </li>
              <li>
                <a
                  href={mailtoHref("Vraag via de website")}
                  className="break-all underline-offset-4 transition-colors duration-200 hover:text-ink hover:underline"
                >
                  {company.email}
                </a>
              </li>
              <li className="pt-2 tnum">
                Ma t/m vr {weekdays.open} - {weekdays.close}
              </li>
              <li className="tnum">
                Za {saturday.open} - {saturday.close}
              </li>
              <li className="tnum">
                Zo {sunday.open} - {sunday.close}
              </li>
            </ul>

            <ul className="mt-6 flex gap-2">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink transition-colors duration-200 hover:border-ink hover:bg-paper-deep"
                  >
                    <Icon size={18} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {company.name}, {company.city}
          </p>
          <p>Fitness vanaf 18 jaar</p>
        </div>
      </div>
    </footer>
  );
}
