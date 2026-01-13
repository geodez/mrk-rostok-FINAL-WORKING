'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Clock, 
  Shield, 
  Zap, 
  Settings, 
  ThermometerSun,
  Eye,
  Droplets,
  Gauge,
  Award
} from 'lucide-react'

const features = [
  {
    icon: TrendingUp,
    title: 'Производительность до 380 га/смену',
    description: 'Прирост на 40% по сравнению со стандартными решениями',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Clock,
    title: 'Заправка меньше минуты',
    description: 'Быстрое развертывание и приготовление раствора за 30 минут',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Shield,
    title: 'Разрешено до 3,5 тонны',
    description: 'Легальная эксплуатация на дорогах общего пользования',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Zap,
    title: 'Заправка дронов без канистр',
    description: 'Автоматизированная система заправки на расстоянии до 15м',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Settings,
    title: 'Простота обслуживания',
    description: 'Легко ремонтировать, все узлы доступны',
    color: 'from-gray-500 to-gray-600',
  },
  {
    icon: ThermometerSun,
    title: 'Защита от заморозков',
    description: 'Кузов с теплоизоляцией обеспечивает защиту от холода',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Eye,
    title: 'Контроль работ онлайн',
    description: 'Видеонаблюдение и GPS-трекинг в реальном времени',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Droplets,
    title: 'Система циркуляции с подогревом',
    description: 'Возможность прибытия с заправленными ёмкостями',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Gauge,
    title: 'Эффективен на малых полях',
    description: 'Оптимальная маневренность и компактность',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: Award,
    title: 'Сертификация ОТТС и ISO',
    description: 'Полное соответствие стандартам качества',
    color: 'from-pink-500 to-pink-600',
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            10 преимуществ МРК «Росток»
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональное оборудование для максимальной эффективности работы с агродронами
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl" 
                     style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                     style={{ background: `linear-gradient(to bottom right, transparent, transparent)`, 
                              boxShadow: `inset 0 0 0 2px rgba(16, 185, 129, 0.1)` }} />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-4">
            Увеличьте выручку фермера за счет экономии времени и повышения производительности
          </p>
          <div className="inline-flex items-center gap-2 text-green-600 font-semibold text-xl">
            <TrendingUp className="w-6 h-6" />
            <span>+40% к производительности</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
