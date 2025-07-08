import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Доктор Петренко Олександр Іванович
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Лікар-терапевт вищої категорії з 15-річним досвідом роботи. 
                  Спеціалізується на лікуванні внутрішніх хвороб та профілактичній медицині.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Сертифікований спеціаліст</div>
                    <div className="text-gray-600">Вища категорія, кандидат медичних наук</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Доктор Петренко"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Education & Experience */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Освіта та кваліфікація</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-emerald-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900">Національний медичний університет ім. О.О. Богомольця</h3>
                    <p className="text-gray-600">Лікувальна справа, 2009 рік</p>
                    <p className="text-gray-500">Диплом з відзнакою</p>
                  </div>
                  <div className="border-l-4 border-emerald-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900">Інтернатура з внутрішньої медицини</h3>
                    <p className="text-gray-600">Київська міська клінічна лікарня №1, 2010 рік</p>
                  </div>
                  <div className="border-l-4 border-emerald-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900">Кандидат медичних наук</h3>
                    <p className="text-gray-600">Дисертація з кардіології, 2015 рік</p>
                  </div>
                  <div className="border-l-4 border-emerald-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900">Вища категорія</h3>
                    <p className="text-gray-600">Атестація МОЗ України, 2018 рік</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Досвід роботи</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-teal-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900">Приватна практика</h3>
                    <p className="text-gray-600">2020 - дотепер</p>
                    <p className="text-gray-500">Власна клініка, індивідуальний підхід до пацієнтів</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900">Завідувач відділення терапії</h3>
                    <p className="text-gray-600">Київська міська лікарня №5, 2015-2020</p>
                    <p className="text-gray-500">Керівництво відділенням на 40 ліжок</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900">Лікар-терапевт</h3>
                    <p className="text-gray-600">Поліклініка №3, 2010-2015</p>
                    <p className="text-gray-500">Амбулаторний прийом пацієнтів</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Спеціалізації
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Основні напрямки медичної практики доктора Петренка
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Кардіологія",
                  description: "Діагностика та лікування серцево-судинних захворювань, профілактика інфарктів та інсультів",
                  icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                },
                {
                  title: "Ендокринологія",
                  description: "Лікування цукрового діабету, захворювань щитовидної залози та гормональних порушень",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z"
                },
                {
                  title: "Гастроентерологія",
                  description: "Діагностика та лікування захворювань шлунково-кишкового тракту",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  title: "Пульмонологія",
                  description: "Лікування захворювань дихальної системи, астми та хронічних бронхітів",
                  icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                },
                {
                  title: "Неврологія",
                  description: "Діагностика та лікування захворювань нервової системи, головних болів",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z"
                },
                {
                  title: "Профілактична медицина",
                  description: "Комплексні медичні огляди, раннє виявлення захворювань",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                }
              ].map((specialization, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={specialization.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{specialization.title}</h3>
                  <p className="text-gray-600">{specialization.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Досягнення та нагороди
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">15+ публікацій</h3>
                <p className="text-gray-600">У медичних журналах</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Почесна грамота</h3>
                <p className="text-gray-600">МОЗ України, 2019</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2000+ пацієнтів</h3>
                <p className="text-gray-600">Успішно проліковано</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Член асоціації</h3>
                <p className="text-gray-600">Українських кардіологів</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}