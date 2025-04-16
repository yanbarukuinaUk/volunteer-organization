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
            <h1 className="text-5xl font-bold mb-4">ボランティア未来の会</h1>
            <p className="text-xl mb-8">共に創る、より良い未来</p>
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
                className={`px-4 py-2 rounded-lg transition duration-300 ${
                  activeTab === tab ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
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
              <h3 className="text-2xl font-semibold mb-4">地域社会への貢献</h3>
              <p className="text-gray-700">地域コミュニティの絆を強め、互いに支え合える社会を目指します。高齢者支援や子育て支援を通じて、誰もが安心して暮らせる環境づくりに取り組みます。</p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl text-center">
              <div className="flex justify-center mb-6">
                <Target className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">次世代育成</h3>
              <p className="text-gray-700">教育支援活動を通じて、子どもたちの可能性を広げ、未来を担う人材の育成に貢献します。学習支援や体験プログラムを提供し、子どもたちの成長をサポートします。</p>
            </div>
            <div className="bg-purple-50 p-8 rounded-xl text-center">
              <div className="flex justify-center mb-6">
                <Globe className="w-16 h-16 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">環境保護活動</h3>
              <p className="text-gray-700">持続可能な社会の実現に向けて、環境保護活動に取り組みます。地域清掃や環境教育を通じて、自然との共生を目指し、次世代に美しい地球を残します。</p>
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
              <p>2020年設立</p>
            </div>
            <h3 className="text-2xl font-semibold mb-4">活動エリア</h3>
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="text-blue-600" />
              <p>東京都渋谷区を中心に関東圏で活動</p>
            </div>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">活動実績</h3>
            <div className="flex items-start gap-3 mb-4">
              <Users className="text-blue-600 mt-1" />
              <p>これまでに1000人以上のボランティアが参加し、地域社会の発展に貢献してきました。教育支援、環境保護、高齢者支援など、様々な分野で活動を展開しています。</p>
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
                name: '山田 太郎',
                role: '代表理事',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
              },
              {
                name: '佐藤 花子',
                role: '副代表理事',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
              },
              {
                name: '鈴木 一郎',
                role: '事務局長',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
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
          <h2 className="text-3xl font-bold text-center mb-16">活動内容</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: '教育支援活動',
                description: '地域の子どもたちへの学習支援、教育イベントの開催',
                image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=2070',
                link: '/activities/education',
              },
              {
                title: '環境保護活動',
                description: '地域清掃、リサイクル推進、環境教育プログラムの実施',
                image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2070',
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
                q: 'ボランティアに参加するには？',
                a: '公式LINEまたはメールにてお問い合わせください。活動説明会を定期的に開催しています。',
              },
              {
                q: '活動頻度はどのくらいですか？',
                a: '月1回以上の活動参加をお願いしています。ご都合に合わせて参加いただけます。',
              },
              {
                q: '未経験でも参加できますか？',
                a: 'はい、経験は問いません。初心者向けの研修も用意しています。',
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
                  <p>info@volunteer-mirai.org</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-blue-600" />
                  <p>03-1234-5678</p>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-blue-600" />
                  <p>東京都渋谷区○○1-2-3</p>
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
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300">
                送信する
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">ボランティア未来の会</h2>
          <p className="text-gray-400">共に創る、より良い未来</p>
          <div className="mt-8">
            <p className="text-sm text-gray-400">&copy; 2024 ボランティア未来の会. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;