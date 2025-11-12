import React from "react";

const FarmerStorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            The Heart Behind Every Drop — A Naidu Naturals Story
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Meet Lakshmi, one of the incredible women who make it possible for
            us to deliver pure, single-source buffalo milk to your home.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-background p-8 md:p-12 rounded-xl shadow-lg border border-muted">
          <p className="text-text-primary mb-6">
            In a small village near Nelakondapalli, Khammam, Telangana, there
            lives Lakshmi, a mother of two — her daughter dreams of becoming a
            teacher, and her son loves fixing old radios. Lakshmi owns three
            buffaloes, and every morning before sunrise, she tends to them with
            care and love.
          </p>
          <p className="text-text-primary mb-6">
            Two of her buffaloes give around four liters of milk each — rich,
            creamy, and full of natural goodness. Earlier, she had to sell it to
            middlemen at low prices, barely earning enough to support her
            children’s education.
          </p>
          <p className="text-text-primary mb-6">
            Then came Naidu Naturals. We partnered directly with Lakshmi,
            ensuring she receives fair pay for her pure, single-sourced buffalo
            milk. No mixing, no powder, no compromise — just the same milk that
            her family drinks every day.
          </p>
          <p className="text-text-primary mb-6">
            When you choose Naidu Naturals, you’re not just buying milk — you’re
            empowering women like Lakshmi, helping educate her children, and
            bringing home authentic, single-source buffalo milk — untouched,
            unblended, and naturally rich in taste and nutrition.
          </p>
          <p className="text-text-primary font-semibold text-lg text-center italic">
            Because every sip you take tells a story — a story of purity,
            honesty, and hope.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-xl border border-muted shadow-md">
              <img
                src="/curd-1.jpeg"
                alt="Naidu Naturals curd pot with branding illustration"
                className="w-full h-full object-cover"
              />
            </figure>
            <figure className="overflow-hidden rounded-xl border border-muted shadow-md">
              <img
                src="/curd-2.jpeg"
                alt="Naidu Naturals curd pot with embossed logo branding"
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
        </div>

        <div className="text-center mt-10">
          <span className="inline-flex items-center gap-2 px-6 py-3 bg-natural-green text-background rounded-full text-base font-semibold shadow-md">
            <span role="img" aria-label="heart">
              🖤
            </span>
            Naidu Naturals — From Her Hands to Your Home
          </span>
        </div>
      </div>
    </section>
  );
};

export default FarmerStorySection;

