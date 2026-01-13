'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center">
                <span className="text-white font-bold">МРК</span>
              </div>
              <div>
                <div className="font-bold">МРК «Росток»</div>
                <div className="text-xs text-gray-400">АО КоМЗ</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Мобильные растворные комплексы для профессиональной работы с агродронами
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-400 hover:text-green-400 transition-colors">
                  Преимущества
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-400 hover:text-green-400 transition-colors">
                  Версии продукта
                </Link>
              </li>
              <li>
                <Link href="#calculator" className="text-gray-400 hover:text-green-400 transition-colors">
                  Калькулятор
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Продукты</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">МРК Росток ЛАЙТ</li>
              <li className="text-gray-400">МРК Росток СТАНДАРТ</li>
              <li className="text-gray-400">МРК Росток СМАРТ</li>
              <li className="text-gray-400">МРК на базе УАЗ Профи</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="tel:+79161070366" className="hover:text-green-400 transition-colors">
                  +7 (916) 107-03-66
                </a>
              </li>
              <li>
                <a href="tel:+79161229311" className="hover:text-green-400 transition-colors">
                  +7 (916) 122-93-11
                </a>
              </li>
              <li>
                <a href="mailto:komzk@komz.ru" className="hover:text-green-400 transition-colors">
                  komzk@komz.ru
                </a>
              </li>
              <li>
                <a href="https://komz.ru" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                  komz.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © 2025 АО «Козельский механический завод». Все права защищены.
            </div>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-green-400 transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="#" className="hover:text-green-400 transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
