import React from "react";
import { useTranslation } from "react-i18next";
import TestimonialsCarousel from "./TestimonialsCarousel";
import { Link } from "react-router-dom";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="pt-[100px] px-6 max-w-7xl mx-auto space-y-32 text-gray-800 dark:text-gray-100">
      <section className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            {t("welcome_to_jobfinder")}
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            {t("find_your_dream_job")}
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="/jobs"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
            >
              {t("browse_jobs")}
            </a>
            <a
              href="/jobs"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              {t("post_a_job")}
            </a>
          </div>
        </div>

        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            alt="Job search illustration"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">
          {t("why_choose_jobfinder")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["easy_to_use", "trusted_by_thousands", "support_24_7"].map(
            (key) => (
              <div
                key={key}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-3">{t(key)}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t(`${key}_desc`)}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">{t("how_it_works")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div className="mb-4 text-blue-600 text-5xl font-bold">
                {step}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t(`step_${step}_title`)}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-xs">
                {t(`step_${step}_desc`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div>
        <TestimonialsCarousel />
      </div>

      <section className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">{t("latest_job_listings")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Frontend Developer",
              company: "Softclub",
              location: "Dushanbe, DU",
            },
            {
              title: "Marketing Specialist",
              company: "Marketify",
              location: "New York, NY",
            },
            {
              title: "UX Designer",
              company: "DesignPro",
              location: "Where you want",
            },
          ].map(({ title, company, location }, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-1">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {location}
              </p>
              <Link to="jobs">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                  {t("contract")}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 py-12 rounded-lg text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">
          {t("ready_to_find")}
        </h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">{t("join_today")}</p>
        <a
          href="jobs"
          className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          {t("getstarted")}
        </a>
      </section>
    </div>
  );
}

export default Home;