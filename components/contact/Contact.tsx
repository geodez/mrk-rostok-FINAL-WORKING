'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ответим на все вопросы и поможем с выбором оптимальной конфигурации
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Адрес</h3>
            <p className="text-gray-400 text-sm">
              249723, Калужская обл.<br />
              г. Козельск<br />
              Заводская пл., 1
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Телефоны</h3>
            <p className="text-gray-400 text-sm space-y-1">
              <a href="tel:+79869556410" className="block hover:text-green-400 transition-colors">
                +7 (986) 955-64-10
              </a>
              <a href="tel:+79869556410" className="block hover:text-green-400 transition-colors">
                +7 (986) 955-64-10
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-400 text-sm">
              <a href="mailto:roman.razdobreev@gmail.com" className="hover:text-green-400 transition-colors">
                komzk@komz.ru
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Режим работы</h3>
            <p className="text-gray-400 text-sm">
              Пн-Пт: 9:00 - 18:00<br />
              Сб-Вс: Выходной
            </p>
          </motion.div>
        </div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-2">
            АО «Козельский механический завод»
          </p>
          <p className="text-sm text-gray-500">
            ИНН 0000000000 | ОГРН 0000000000 | КПП 0000000000
          </p>
        </motion.div>
      </div>
    </section>
  )
}
