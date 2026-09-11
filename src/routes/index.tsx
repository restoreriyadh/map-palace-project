import { createFileRoute } from "@tanstack/react-router";
import heroFeast from "@/assets/hero-feast.jpg";
import dishBurma from "@/assets/dish-burma.jpg";
import dishLahsa from "@/assets/dish-lahsa.jpg";
import dishChapati from "@/assets/dish-chapati.jpg";
import dishMandi from "@/assets/dish-mandi.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "مطعم وشعبيات المهري | أكلات شعبية في الرياض" },
      {
        name: "description",
        content:
          "برمة لحم، مندي، لحسة وشباتي طازج. مطعم وشعبيات المهري، شارع الغرابي، حي العمل، الرياض. مفتوح يوميًا 6 ص – 12 م. للطلب 0500708445.",
      },
      { property: "og:title", content: "مطعم وشعبيات المهري للأكلات الشعبية" },
      {
        property: "og:description",
        content: "أكلات شعبية سعودية أصيلة في حي العمل بالرياض — برمة لحم، مندي، لحسة وشباتي.",
      },
    ],
  }),
  component: Index,
});

const PHONE = "0500708445";
const MAPS_URL = "https://maps.app.goo.gl/gR3fmgM17Ue2z16k8";

const dishes = [
  {
    n: "٠١",
    name: "برمة لحم",
    desc: "لحم طري في برمة فخارية مع رز بخاري.",
    img: dishBurma,
  },
  {
    n: "٠٢",
    name: "لحسة الصباح",
    desc: "فطور شعبي دسم بالسمن والعسل.",
    img: dishLahsa,
  },
  {
    n: "٠٣",
    name: "شباتي طازج",
    desc: "يُخبز على الطلب ويأتي مع الأطباق.",
    img: dishChapati,
  },
  {
    n: "٠٤",
    name: "مندي ومظبي",
    desc: "دجاج ولحم على الجمر مع رز مبخّر.",
    img: dishMandi,
  },
];

const reviews = [
  {
    stars: "★★★★☆",
    text: "طلبت برمة لحم ورز. اللحم باين نظيف والرز ممتاز.",
    by: "MOHAMMED ALMALKI",
  },
  {
    stars: "★★★★★",
    text: "مطعم شعبي لذيذ، طلبت فطور لحسة لذيذة جدًا، وعندهم الشباتي يجي مع الطلب.",
    by: "عاشق السفر",
  },
  {
    stars: "★★★★☆",
    text: "أسعار مناسبة وخدمة سريعة، والمكان معروف بين أهل الحي.",
    by: "زائر من قوقل",
  },
  {
    stars: "★★★★★",
    text: "أكل بيتي بنكهة شعبية أصيلة، من أفضل الخيارات في حي العمل.",
    by: "زائر من قوقل",
  },
];

const hours = [
  "السبت",
  "الأحد",
  "الاثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl font-bold">المهري</span>
            <span className="hidden text-[11px] tracking-widest text-muted-foreground sm:inline">
              أكلات شعبية · الرياض
            </span>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#menu" className="transition-colors hover:text-clay">
              الأطباق
            </a>
            <a href="#reviews" className="transition-colors hover:text-clay">
              آراء الزوار
            </a>
            <a href="#location" className="transition-colors hover:text-clay">
              الموقع
            </a>
          </nav>
          <a
            href={`tel:${PHONE}`}
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-clay"
          >
            050 070 8445
          </a>
        </div>
      </header>

      <section className="relative">
        <img
          src={heroFeast}
          alt="طبق لحم مع الرز على صينية نحاسية في مطعم وشعبيات المهري"
          width={1920}
          height={1088}
          className="h-[440px] w-full object-cover md:h-[580px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/10" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-5 pb-10">
            <div className="max-w-2xl text-charcoal-foreground">
              <p className="mb-4 animate-rise text-[12px] font-bold tracking-[0.25em] text-saffron">
                حي العمل · شارع الغرابي
              </p>
              <h1 className="animate-rise text-balance font-display text-4xl font-black leading-tight md:text-6xl">
                أكل شعبي على أصوله، من الفجر إلى منتصف الليل
              </h1>
              <p className="mt-4 max-w-lg animate-rise text-pretty text-charcoal-foreground/80">
                برمة لحم تُطبخ في الفخار، لحسة الصباح، وشباتي يُخبز على الطلب. مطبخ بيتي بأسعار
                معقولة، يخدم أهل الحي منذ سنوات.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`tel:${PHONE}`}
                  className="rounded-md bg-saffron px-6 py-3 font-bold text-charcoal transition-colors hover:bg-charcoal-foreground"
                >
                  اطلب الآن · 050 070 8445
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener"
                  className="rounded-md border border-charcoal-foreground/40 px-6 py-3 font-bold text-charcoal-foreground transition-colors hover:bg-charcoal-foreground/10"
                >
                  الاتجاهات إلى المطعم
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-border bg-secondary/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-x-reverse divide-border md:grid-cols-4">
          <div className="px-5 py-5">
            <div className="font-display text-2xl font-bold">4.1</div>
            <div className="mt-1 text-xs text-muted-foreground">تقييم جوجل</div>
          </div>
          <div className="px-5 py-5">
            <div className="font-display text-2xl font-bold">١٧٨٥</div>
            <div className="mt-1 text-xs text-muted-foreground">تقييم من الزوار</div>
          </div>
          <div className="px-5 py-5">
            <div className="font-display text-2xl font-bold">٦ ص – ١٢ م</div>
            <div className="mt-1 text-xs text-muted-foreground">يوميًا طوال الأسبوع</div>
          </div>
          <div className="px-5 py-5">
            <div className="font-display text-2xl font-bold">أسعار اقتصادية</div>
            <div className="mt-1 text-xs text-muted-foreground">مناسبة للعوائل والعمال</div>
          </div>
        </div>
      </div>

      <section id="menu" className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-9 flex items-end justify-between">
          <div>
            <p className="mb-2 text-[12px] font-bold tracking-[0.25em] text-clay">الأطباق</p>
            <h2 className="text-balance font-display text-3xl font-bold md:text-4xl">
              من قدور المهري
            </h2>
          </div>
          <span className="hidden text-sm text-muted-foreground sm:block">
            تُطبخ طازجة كل يوم
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {dishes.map((d) => (
            <article
              key={d.name}
              className="overflow-hidden rounded-xl border border-border bg-card transition-transform hover:-translate-y-1"
            >
              <img
                src={d.img}
                alt={d.name}
                loading="lazy"
                width={816}
                height={816}
                className="aspect-square w-full object-cover"
              />
              <div className="p-4">
                <div className="text-xs font-bold text-clay">{d.n}</div>
                <h3 className="mt-1 font-display text-lg font-bold">{d.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          للاستفسار عن الأسعار وطلبات الولائم، اتصل على 050 070 8445.
        </p>
      </section>

      <section id="reviews" className="overflow-hidden bg-charcoal py-14 text-charcoal-foreground">
        <div className="mx-auto mb-8 flex max-w-6xl items-end justify-between px-5">
          <div>
            <p className="mb-2 text-[12px] font-bold tracking-[0.25em] text-saffron">آراء الزوار</p>
            <h2 className="font-display text-3xl font-bold">قالوا عن المهري</h2>
          </div>
          <div className="text-sm text-saffron">
            4.1 <span className="text-charcoal-foreground/60">/ ١٧٨٥ تقييم</span>
          </div>
        </div>
        <div className="relative">
          <div className="flex w-max animate-marq gap-4" dir="ltr">
            {[...reviews, ...reviews].map((r, i) => (
              <figure
                key={i}
                className="w-80 shrink-0 rounded-xl border border-charcoal-foreground/15 bg-charcoal-foreground/5 p-5"
              >
                <div className="mb-3 text-saffron">{r.stars}</div>
                <blockquote dir="rtl" className="text-sm leading-relaxed text-charcoal-foreground/90">
                  {r.text}
                </blockquote>
                <figcaption dir="rtl" className="mt-4 text-xs text-charcoal-foreground/60">
                  {r.by}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-7">
          <p className="mb-5 text-[12px] font-bold tracking-[0.25em] text-clay">أوقات العمل</p>
          <ul className="divide-y divide-border text-sm">
            {hours.map((day) => (
              <li key={day} className="flex justify-between py-3">
                <span>{day}</span>
                <span className="font-bold">٦:٠٠ ص – ١٢:٠٠ م</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-border pt-6 text-sm">
            <p className="mb-1 text-muted-foreground">العنوان</p>
            <p className="font-bold">شارع الغرابي، حي العمل، الرياض ١٢٦٤٣</p>
            <p className="mt-2 text-muted-foreground">
              للطلب: <span className="font-bold text-foreground">050 070 8445</span>
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-border">
          <iframe
            title="موقع مطعم وشعبيات المهري على الخريطة"
            src="https://www.google.com/maps?q=24.6470768,46.7192753&hl=ar&z=17&output=embed"
            className="h-full min-h-[340px] w-full"
            loading="lazy"
          />
        </div>
      </section>

      <footer className="bg-charcoal text-charcoal-foreground/70">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-10 md:flex-row md:items-center">
          <span className="font-display text-xl font-bold text-charcoal-foreground">
            مطعم وشعبيات المهري
          </span>
          <p className="text-xs">شارع الغرابي، حي العمل، الرياض · مفتوح يوميًا ٦ ص – ١٢ م</p>
          <a href={`tel:${PHONE}`} className="text-sm transition-colors hover:text-saffron">
            050 070 8445
          </a>
        </div>
      </footer>

      <div className="fixed inset-x-4 bottom-4 z-50 md:hidden">
        <a
          href={`tel:${PHONE}`}
          className="flex items-center justify-center rounded-lg bg-saffron px-4 py-3 font-bold text-charcoal shadow-lg"
        >
          اتصل واطلب الآن
        </a>
      </div>
    </div>
  );
}
