'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { productVersions } from '@/lib/calculator-data'
import { formatPrice } from '@/lib/utils'
import Link from 'next/link'

export default function ProductComparison() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Выберите свою комплектацию
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Три версии МРК «Росток» для разных задач и бюджетов
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {productVersions.map((version, index) => (
            <motion.div
              key={version.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative rounded-3xl bg-white shadow-xl overflow-hidden ${
                version.popular ? 'ring-4 ring-green-500 md:scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {version.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-bl-2xl font-semibold flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  Популярный
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {version.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {formatPrice(version.price)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {formatPrice(version.priceWithVAT)} с НДС
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {version.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href={`#calculator?version=${version.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
                      version.popular
                        ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Выбрать {version.name}
                  </motion.button>
                </Link>
              </div>

              {/* Bottom Accent */}
              {version.popular && (
                <div className="h-2 bg-gradient-to-r from-green-500 to-green-600" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            Все версии можно дополнительно укомплектовать опциями: системой подогрева, 
            видеонаблюдением, метеостанцией и другим оборудованием в калькуляторе
          </p>
        </motion.div>
      </div>
    </section>
  )
}
