import Button from "../../components/Button";
import banner from "../../assets/img/nu_bulldogex_banner.jpg";
import essentialsImg from "../../assets/img/nushirt1.png";
import suppliesImg from "../../assets/img/nushirt2.jpg";
import apparelImg from "../../assets/img/nuwristband.webp";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      {/* HERO */}
      <section className="relative min-h-[28rem] overflow-hidden border-y-2 border-zinc-900 bg-zinc-900 px-4 py-10 sm:px-6 lg:px-8">
        <img
          src={banner}
          alt="banner"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-zinc-900/45" />

        <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right sm:min-h-[24rem]">
          <div className="max-w-xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-200">
              Campus Marketplace
            </p>

            <h1 className="text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl">
              Welcome to BulldogEx Shop
            </h1>

            <p className="mt-4 text-sm leading-7 text-zinc-100 sm:text-base">
              Explore campus uniforms, student essentials, and school merch in
              one quick storefront.
            </p>

            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <Button to="/products">Shop Now</Button>
              <Button to="/about" variant="primary">
                About Store
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Quick shopping blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["08", "Products"],
            ["06", "Categories"],
            ["24", "Orders"],
            ["03", "Pickup Slots"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5"
            >
              <p className="text-2xl font-bold text-zinc-900">{num}</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Shop Sections
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Featured Products
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {/* CARD 1 */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <img
              src={essentialsImg}
              alt="NU Emblem Shirt"
              className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              NU Emblem Shirt
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              A clean black tee with the official National University emblem —
              simple, sharp, and school-ready.
            </p>
            <Button to="/products" className="mt-4" variant="secondary">
              View Products
            </Button>
          </article>

          {/* CARD 2 */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <img
              src={suppliesImg}
              alt="NU Bulldogs Shirt"
              className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              NU Bulldogs Shirt
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              A bold white shirt featuring the NU Bulldogs mascot — perfect for
              game days, org events, and campus pride.
            </p>
            <Button to="/products" className="mt-4" variant="secondary">
              View Products
            </Button>
          </article>

          {/* CARD 3 */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <img
              src={apparelImg}
              alt="NU Bulldogs Wristband"
              className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              NU Bulldogs Wristband
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Official UAAP silicone wristbands in NU blue and gold — a small
              but solid way to show school spirit daily.
            </p>
            <Button to="/products" className="mt-4" variant="secondary">
              View Products
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
