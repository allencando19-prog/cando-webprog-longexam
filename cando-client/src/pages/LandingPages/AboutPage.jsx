import Button from "../../components/Button";
import banner from "../../assets/img/nu_bulldogex_banner.jpg";
import bomberJacket from "../../assets/img/nubomberjacket.webp";
import cap from "../../assets/img/nucap.webp";
import collaredShirt from "../../assets/img/nucollaredshirt.webp";
import emblemShirt from "../../assets/img/nuemblemshirt.webp";

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-3xl border-2 border-zinc-900">
            <img
              src={banner}
              alt="BulldogEx"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-zinc-900/60 px-5 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-300">
                Official Campus Merch
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                National University · BulldogEx Shop
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              About Store
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              A campus shop focused on useful products and simple ordering.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              BulldogEx Shop is the official campus marketplace of National
              University — your go-to place for NU merch, apparel, and school
              essentials delivered straight to your hands.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/products">Open Products</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Quick store blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Items
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">06</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Categories
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Pickup Slots
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Orders
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Store Flow
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              Core Features:
            </h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Official NU Merch
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Every item is part of the official National University
                  merchandise lineup — from apparel to accessories.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Built for Students
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Prices, stock availability, and product details are kept
                  straightforward so you can order without the hassle.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Campus Pickup
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Orders are fulfilled on campus so Bulldogs can grab their
                  items without waiting for delivery.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Category Grid
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-200">
                <img
                  src={bomberJacket}
                  alt="NU Bomber Jacket"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-200">
                <img
                  src={cap}
                  alt="NU Cap"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-200">
                <img
                  src={collaredShirt}
                  alt="NU Collared Shirt"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-200">
                <img
                  src={emblemShirt}
                  alt="NU Emblem Shirt"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <Button to="/products" className="mt-5">
              View Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
