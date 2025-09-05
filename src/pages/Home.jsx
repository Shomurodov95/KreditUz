import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-[calc(100vh-120px)] flex flex-col items-center justify-center p-8 text-center">
      {/* Hero Section */}
      <section className="max-w-4xl mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-6 leading-tight">
          Kredit Uz — Moliyaviy mustahkamlik sari ishonchli qadam
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl mb-8 leading-relaxed">
          Moliyaviy ehtiyojlaringiz uchun zamonaviy, shaffof va tezkor yechim. 
          Bizning platformamiz orqali kredit olish jarayoni oddiy, tushunarli va xavfsiz bo‘lishini ta’minlaymiz. 
          O‘z kelajagingizni bugunoq rejalashtiring va shaxsiy to‘lov grafigingizni bir necha soniyada bilib oling.
        </p>
       
      </section>

     {/* Afzalliklar Section */}
<section className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mt-12">
  <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-blue-100">
    <div className="absolute -top-6 left-6 bg-blue-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
      ⚡
    </div>
    <h3 className="text-2xl font-bold text-blue-700 mb-4 mt-6">Tezkor hisob-kitob</h3>
    <p className="text-gray-600 text-base leading-relaxed">
      Kredit shartlarini bir zumda ko‘rib chiqing — sizga mos eng qulay
      muddat va to‘lov rejasini bir necha soniyada shakllantiring.
      Zamonaviy texnologiyalar orqali jarayonni iloji boricha
      sodda va tez qildik.
    </p>
  </div>

  <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-blue-100">
    <div className="absolute -top-6 left-6 bg-purple-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
      🛠️
    </div>
    <h3 className="text-2xl font-bold text-blue-700 mb-4 mt-6">Moslashuvchan shartlar</h3>
    <p className="text-gray-600 text-base leading-relaxed">
      Har bir mijozning ehtiyoji o‘ziga xos — biz turli muddatlar, foiz
      stavkalari va hisoblash usullarini taqdim etamiz. Siz esa eng
      qulay variantni tanlab, o‘z rejalaringizni amalga oshirasiz.
    </p>
  </div>

  <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-blue-100">
    <div className="absolute -top-6 left-6 bg-green-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
      🔒
    </div>
    <h3 className="text-2xl font-bold text-blue-700 mb-4 mt-6">Xavfsizlik va ishonch</h3>
    <p className="text-gray-600 text-base leading-relaxed">
      Bizning ustuvor vazifamiz — sizning ishonchingiz. Ma’lumotlaringiz
      to‘liq himoyalangan, jarayon esa shaffof va tushunarli. Kredit Uz
      bilan moliyaviy qadamlaringiz har doim xavfsiz.
    </p>
  </div>
</section>

    </main>
  );
}
