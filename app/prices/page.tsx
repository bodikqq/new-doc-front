import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Prices() {
  const consultationPrices = [
    {
      service: "Первинна консультація терапевта",
      price: "800",
      duration: "45-60 хв",
      includes: ["Детальний огляд", "Збір анамнезу", "Рекомендації", "План лікування"]
    },
    {
      service: "Повторна консультація",
      price: "600",
      duration: "30-45 хв",
      includes: ["Оцінка динаміки", "Корекція лікування", "Відповіді на питання"]
    },
    {
      service: "Консультація кардіолога",
      price: "1200",
      duration: "60 хв",
      includes: ["ЕКГ", "Інтерпретація результатів", "Рекомендації", "План обстеження"]
    },
    {
      service: "Консультація ендокринолога",
      price: "1000",
      duration: "45-60 хв",
      includes: ["Огляд", "Аналіз результатів", "Дієтичні рекомендації", "План лікування"]
    }
  ];

  const diagnosticPrices = [
    {
      service: "ЕКГ (електрокардіографія)",
      price: "200",
      description: "Дослідження серцевого ритму та провідності"
    },
    {
      service: "Ехокардіографія",
      price: "800",
      description: "УЗД серця для оцінки структури та функції"
    },
    {
      service: "Холтер моніторинг (24 год)",
      price: "1200",
      description: "Добове моніторування серцевого ритму"
    },
    {
      service: "Спірометрія",
      price: "400",
      description: "Дослідження функції зовнішнього дихання"
    }
  ];

  const labPrices = [
    {
      service: "Загальний аналіз крові",
      price: "200",
      time: "1 день"
    },
    {
      service: "Біохімічний аналіз крові (розширений)",
      price: "600",
      time: "1-2 дні"
    },
    {
      service: "Аналіз на гормони щитовидної залози",
      price: "800",
      time: "2-3 дні"
    },
    {
      service: "Глікований гемоглобін (HbA1c)",
      price: "300",
      time: "1 день"
    },
    {
      service: "Ліпідограма",
      price: "400",
      time: "1 день"
    },
    {
      service: "Загальний аналіз сечі",
      price: "150",
      time: "1 день"
    }
  ];

  const packagePrices = [
    {
      name: "Базовий чек-ап",
      price: "2500",
      originalPrice: "3200",
      includes: [
        "Консультація терапевта",
        "ЕКГ",
        "Загальний аналіз крові",
        "Загальний аналіз сечі",
        "Біохімічний аналіз крові",
        "Рекомендації"
      ],
      popular: false
    },
    {
      name: "Кардіологічний пакет",
      price: "3800",
      originalPrice: "4600",
      includes: [
        "Консультація кардіолога",
        "ЕКГ",
        "Ехокардіографія",
        "Холтер моніторинг",
        "Ліпідограма",
        "Детальні рекомендації"
      ],
      popular: true
    },
    {
      name: "Ендокринологічний пакет",
      price: "3200",
      originalPrice: "4000",
      includes: [
        "Консультація ендокринолога",
        "Аналіз на гормони щитовидної залози",
        "Глікований гемоглобін",
        "Загальний аналіз крові",
        "Дієтичні рекомендації"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ціни на послуги
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Прозорі та доступні ціни на всі медичні послуги. Якісне лікування за справедливою вартістю
            </p>
          </div>
        </section>

        {/* Package Deals */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Пакетні пропозиції
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Комплексні програми обстеження зі знижкою до 25%
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packagePrices.map((pkg, index) => (
                <div key={index} className={`relative bg-white border-2 rounded-2xl p-8 ${pkg.popular ? 'border-emerald-500 shadow-xl scale-105' : 'border-gray-200 shadow-lg'}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Популярний
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{pkg.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-emerald-600">{pkg.price}</span>
                      <span className="text-gray-600"> грн</span>
                    </div>
                    <div className="text-gray-500">
                      <span className="line-through">{pkg.originalPrice} грн</span>
                      <span className="ml-2 text-emerald-600 font-semibold">
                        Економія {pkg.originalPrice - pkg.price} грн
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700' 
                      : 'border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white'
                  }`}>
                    Обрати пакет
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Prices */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Консультації
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consultationPrices.map((consultation, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 flex-1">{consultation.service}</h3>
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-emerald-600">{consultation.price} грн</div>
                      <div className="text-sm text-gray-600">{consultation.duration}</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Включено:</h4>
                    <ul className="space-y-1">
                      {consultation.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-2">
                          <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diagnostic Prices */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Діагностичні дослідження
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {diagnosticPrices.map((diagnostic, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{diagnostic.service}</h3>
                      <p className="text-gray-600 text-sm">{diagnostic.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-xl font-bold text-emerald-600">{diagnostic.price} грн</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Laboratory Prices */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Лабораторні дослідження
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {labPrices.map((lab, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{lab.service}</h3>
                  <div className="flex justify-between items-center">
                    <div className="text-xl font-bold text-emerald-600">{lab.price} грн</div>
                    <div className="text-sm text-gray-600">Готовність: {lab.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Info */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Умови оплати
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Способи оплати</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Готівка</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Банківська картка</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Безготівковий розрахунок</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Страхові компанії</span>
                  </li>
                </ul>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Додаткова інформація</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Оплата після надання послуги</li>
                  <li>• Можливість розстрочки для дорогих процедур</li>
                  <li>• Знижки для пенсіонерів (10%)</li>
                  <li>• Сімейні знижки при обслуговуванні 3+ осіб</li>
                  <li>• Всі ціни включають ПДВ</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Маєте питання щодо вартості?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Зв'яжіться з нами для детальної консультації та індивідуального розрахунку
            </p>
            <a
              href="/contact"
              className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Зв'язатися з нами
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}