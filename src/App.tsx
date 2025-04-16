import React, { useState } from 'react';
import { Instagram, Twitter, MessageCircle, Mail, Phone, MapPin, Calendar, Users, Target, HelpCircle, Heart, Globe, ArrowRight } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=2070")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">ボランティア事業サークル~LocaRevo(ロカレボ)(仮)~</h1>
            <p className="text-xl mb-8">共に創る、地域から生み出す新たな観光と雇用</p>
            <button
              onClick={() => scrollToSection('about')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition duration-300"
            >
              詳しく見る
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            {['about', 'members', 'activities', 'faq', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab)}
                className={`px-4 py-2 rounded-lg transition duration-300 ${activeTab === tab ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}
              >
                {
                  {
                    about: '私たちについて',
                    members: 'メンバー',
                    activities: '活動内容',
                    faq: 'FAQ',
                    contact: 'お問い合わせ',
                  }[tab]
                }
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">私たちのミッション</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="flex justify-center mb-6">
                <Heart className="w-16 h-16 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">観光促進</h3>
              <p className="text-gray-700">過疎地域は観光資源があるものの宿泊施設が不足しているため観光客誘致が難しい現状を，手軽に設置可能な宿泊施設を提供により解決</p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl text-center">
              <div className="flex justify-center mb-6">
                <Target className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">防災対策の強化</h3>
              <p className="text-gray-700">高い耐震性と耐火性を備えたモジュラーハウスを導入することで、地域の安全性を向上。災害時には素早く設置可能なため復興支援を行う</p>
            </div>
            <div className="bg-purple-50 p-8 rounded-xl text-center">
              <div className="flex justify-center mb-6">
                <Globe className="w-16 h-16 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">地域経済の活性化</h3>
              <p className="text-gray-700">過疎化により経済活動が停滞し、地域全体の雇用機会が減少している。観光施設増加により新たな雇用を創出</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">私たちについて</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">設立年 / 歴史</h3>
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="text-blue-600" />
              <p>2025年設立</p>
            </div>
            <h3 className="text-2xl font-semibold mb-4">活動エリア</h3>
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="text-blue-600" />
              <p>宮城県仙台市</p>
            </div>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">事業内容</h3>
            <div className="flex items-start gap-3 mb-4">
              <Users className="text-blue-600 mt-1" />
              <p>桂島と石垣島に未来型コンテナハウスを設置し，運営，全国や世界に展開</p>
            </div>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">代表者・主要メンバー</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: '奥 裕次郎',
                role: '代表',
                image: 'https://github.com/yanbarukuinaUk/volunteer-organization/blob/master/public/images/oku.jpg?raw=true',
              },
              {
                name: '小武 右京',
                role: '副代表',
                image: 'https://github.com/yanbarukuinaUk/volunteer-organization/blob/master/public/images/ukyou.jpg?raw=true',
              },
              {
                name: '高松 雄大',
                role: '事務局長',
                image: 'https://github.com/yanbarukuinaUk/volunteer-organization/blob/master/public/images/pic.png?raw=true',
              },
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">桂島の今と未来</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: '桂島の今',
                description: '使われていない土地を活用し、地域の人々と共に新たな観光地を創出',
                image: 'https://github.com/yanbarukuinaUk/volunteer-organization/blob/master/public/images/ima.jpg?raw=true',
                link: '/activities/education',
              },
              {
                title: '桂島の未来',
                description: '宿泊施設やレジャー施設を設置し、観光資源と地域の雇用を創出',
                image: 'https://github.com/yanbarukuinaUk/volunteer-organization/blob/master/public/images/mirai.jpg?raw=true',
                link: '/activities/environment',
              },
            ].map((activity) => (
              <a
                key={activity.title}
                href={activity.link}
                className="group relative overflow-hidden rounded-lg block"
              >
                <img src={activity.image} alt={activity.title} className="w-full h-64 object-cover transition duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="text-center text-white p-4">
                    <h3 className="text-2xl font-semibold mb-2">{activity.title}</h3>
                    <p className="mb-4">{activity.description}</p>
                    <div className="flex items-center justify-center gap-2 text-blue-400">
                      <span>詳しく見る</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">よくある質問</h2>
          <div className="space-y-6">
            {[
              {
                q: '1年生以外も参加できますか？',
                a: 'はい、2,3年生の方も大歓迎です。学年に関係なく、興味のある方はぜひご参加ください。',
              },
              {
                q: 'ボランティア団体に参加するには？',
                a: 'LINEのオープンチャットまたはメールにてお問い合わせください。',
              },
              {
                q: '活動頻度はどのくらいですか？',
                a: '毎週ミーティングを行っており、月に1回のイベントの開催を予定しています。活動内容によって異なる場合がありますので、詳細はお問い合わせください。',
              },

            ].map((item) => (
              <div key={item.q} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <HelpCircle className="text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                    <p className="text-gray-600">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">お問い合わせ</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8">連絡先</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="text-blue-600" />
                  <p>example@gmail.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-blue-600" />
                  <p>--------------</p>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-blue-600" />
                  <p>宮城県仙台市</p>
                </div>
              </div>
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-8">SNS</h3>
                <div className="flex gap-6">
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    <Instagram size={32} />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    <Twitter size={32} />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    <MessageCircle size={32} />
                  </a>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">お名前</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">メールアドレス</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">お問い合わせ内容</label>
                <textarea rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"></textarea>
              </div>
              {/* <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300">
                送信する
              </button> */}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">ボランティア事業サークル~LocaRevo(ロカレボ)(仮)~</h2>
          <p className="text-gray-400">共に創る、地域から生み出す新たな観光と雇用</p>
          <div className="mt-8">
            <p className="text-sm text-gray-400">&copy; 2025 ボランティア事業サークル~LocaRevo(ロカレボ)(仮)~. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;