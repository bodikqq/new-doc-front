import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Results() {
  const testimonials = [
    {
      name: "Марія Іванівна К.",
      age: 45,
      condition: "Гіпертонія",
      result: "Тиск нормалізувався з 180/110 до 130/80 за 3 місяці лікування",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Олександр П.",
      age: 52,
      condition: "Цукровий діабет 2 типу",
      result: "Рівень глюкози знизився з 12 до 6.5 ммоль/л, скинув 15 кг",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Тетяна С.",
      age: 38,
      condition: "Хронічна втома",
      result: "Повернулася енергія, покращився сон, нормалізувалися аналізи",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Віктор М.",
      age: 60,
      condition: "Ішемічна хвороба серця",
      result: "Зникли болі в грудях, покращилася переносимість фізичних навантажень",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const caseStudies = [
    {
      title: "Комплексне лікування метаболічного синдрому",
      patient: "Чоловік, 48 років",
      initialCondition: "Ожиріння (ІМТ 32), гіпертонія, преддіабет",
      treatment: "Індивідуальна дієта, медикаментозна терапія, контроль стану",
      results: [
        "Зниження ваги на 22 кг за 6 місяців",
        "Нормалізація артеріального тиску",
        "Глюкоза натще знизилася з 6.8 до 5.2 ммоль/л",
        "Покращення загального самопочуття"
      ],
      duration: "6 місяців"
    },
    {
      title: "Лікування хронічного гастриту",
      patient: "Жінка, 35 років",
      initialCondition: "Хронічний гастрит, печія, болі в епігастрії",
      treatment: "Антихелікобактерна терапія, дієтотерапія, контроль",
      results: [
        "Повне зникнення симптомів",
        "Негативний тест на H. pylori",
        "Нормалізація слизової шлунка за ФГДС",
        "Відсутність рецидивів протягом року"
      ],
      duration: "3 місяці"
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
              Результати лікування
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Реальні історії успіху наших пацієнтів та клінічні випадки з практики доктора Петренка
            </p>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">98%</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Задоволених пацієнтів</h3>
                <p className="text-gray-600">Позитивні відгуки про лікування</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2000+</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Пацієнтів</h3>
                <p className="text-gray-600">Успішно проліковано</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">85%</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ефективність</h3>
                <p className="text-gray-600">Повне одужання або значне покращення</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">15</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Років досвіду</h3>
                <p className="text-gray-600">Професійної медичної практики</p>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Відгуки пацієнтів
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Реальні історії людей, які довірили своє здоров'я доктору Петренку
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.age} років</p>
                      <p className="text-emerald-600 font-medium">{testimonial.condition}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic mb-4">
                    "{testimonial.result}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">Відмінно</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Клінічні випадки
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Детальний аналіз успішного лікування складних випадків
              </p>
            </div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900">Пацієнт:</h4>
                          <p className="text-gray-700">{study.patient}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Початковий стан:</h4>
                          <p className="text-gray-700">{study.initialCondition}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Лікування:</h4>
                          <p className="text-gray-700">{study.treatment}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Тривалість:</h4>
                          <p className="text-emerald-600 font-medium">{study.duration}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Досягнуті результати:</h4>
                      <ul className="space-y-3">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start space-x-3">
                            <svg className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Metrics */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Показники ефективності
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Середні показники покращення стану пацієнтів після лікування
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Артеріальний тиск</h3>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-2xl font-bold text-red-500">165/95</div>
                    <div className="text-sm text-gray-600">До лікування</div>
                  </div>
                  <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div>
                    <div className="text-2xl font-bold text-emerald-500">130/80</div>
                    <div className="text-sm text-gray-600">Після лікування</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">Середній термін: 3-4 місяці</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Рівень глюкози</h3>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-2xl font-bold text-red-500">9.2</div>
                    <div className="text-sm text-gray-600">ммоль/л</div>
                  </div>
                  <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div>
                    <div className="text-2xl font-bold text-emerald-500">6.1</div>
                    <div className="text-sm text-gray-600">ммоль/л</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">Середній термін: 2-3 місяці</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Індекс маси тіла</h3>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-2xl font-bold text-red-500">31.5</div>
                    <div className="text-sm text-gray-600">ІМТ</div>
                  </div>
                  <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div>
                    <div className="text-2xl font-bold text-emerald-500">24.8</div>
                    <div className="text-sm text-gray-600">ІМТ</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">Середній термін: 4-6 місяців</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Станьте наступним успішним випадком
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Запишіться на консультацію та почніть свій шлях до здоров'я
            </p>
            <a
              href="/contact"
              className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Записатися на прийом
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}