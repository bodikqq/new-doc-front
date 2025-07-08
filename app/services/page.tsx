import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Services() {
  const services = [
    {
      title: "Загальна терапія",
      description: "Комплексне обстеження та лікування загальних захворювань",
      price: "від 800 грн",
      features: [
        "Первинна консультація",
        "Огляд та діагностика",
        "Призначення лікування",
        "Контрольні огляди"
      ]
    },
    {
      title: "Кардіологія",
      description: "Діагностика та лікування серцево-судинних захворювань",
      price: "від 1200 грн",
      features: [
        "ЕКГ дослідження",
        "Ехокардіографія",
        "Холтер моніторинг",
        "Консультація кардіолога"
      ]
    },
    {
      title: "Ендокринологія",
      description: "Лікування захворювань ендокринної системи",
      price: "від 1000 грн",
      features: [
        "Діагностика діабету",
        "Лікування щитовидної залози",
        "Гормональні дослідження",
        "Дієтичні рекомендації"
      ]
    },
    {
      title: "Неврологія",
      description: "Діагностика та лікування нервової системи",
      price: "від 1100 грн",
      features: [
        "Неврологічний огляд",
        "ЕЕГ дослідження",
        "Лікування головного болю",
        "Реабілітація після інсульту"
      ]
    },
    {
      title: "Профілактичні огляди",
      description: "Регулярні медичні огляди для підтримання здоров'я",
      price: "від 600 грн",
      features: [
        "Загальний огляд",
        "Базові аналізи",
        "Рекомендації по здоров'ю",
        "Планування подальших оглядів"
      ]
    },
    {
      title: "Лабораторна діагностика",
      description: "Повний спектр лабораторних досліджень",
      price: "від 200 грн",
      features: [
        "Загальний аналіз крові",
        "Біохімічні дослідження",
        "Гормональні тести",
        "Імунологічні дослідження"
      ]
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
              Наші послуги
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Широкий спектр медичних послуг з використанням сучасного обладнання 
              та індивідуальним підходом до кожного пацієнта
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-emerald-600">{service.price}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-200">
                    Записатися
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Додаткова інформація
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Підготовка до візиту</h3>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Принесіть медичну картку</li>
                  <li>• Список поточних ліків</li>
                  <li>• Результати попередніх аналізів</li>
                  <li>• Документ, що посвідчує особу</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Умови прийому</h3>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Запис за телефоном</li>
                  <li>• Тривалість консультації: 30-60 хв</li>
                  <li>• Можливість онлайн консультації</li>
                  <li>• Гнучкий графік роботи</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}