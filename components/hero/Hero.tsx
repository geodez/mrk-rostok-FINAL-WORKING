'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, TrendingUp, Clock, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-orange-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-8"
            >
              <CheckCircle className="w-4 h-4" />
              Сертифицировано по ISO 9001-2015 | ОТТС
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Увеличьте выработку
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-600">
                агродронов на 40%
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Мобильный растворный комплекс «Росток» — современное решение для профессиональной работы с агродронами
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="#calculator">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
                >
                  Собрать свой МРК
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <Link href="#video">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 border-2 border-gray-200"
                >
                  <Play className="w-5 h-5" />
                  Смотреть видео
                </motion.button>
              </Link>
            </div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <div className="text-4xl font-bold text-gray-900">380 га</div>
                </div>
                <div className="text-gray-600">Обработка за смену</div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="w-6 h-6 text-orange-600" />
                  <div className="text-4xl font-bold text-gray-900">&lt;1 мин</div>
                </div>
                <div className="text-gray-600">Заправка агродрона</div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <div className="text-4xl font-bold text-gray-900">до 3.5т</div>
                </div>
                <div className="text-gray-600">Разрешено на дорогах</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
            >
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
