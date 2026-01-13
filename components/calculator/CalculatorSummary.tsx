'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Check } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { additionalOptions, droneOptions, type ProductVersion } from '@/lib/calculator-data'

interface CalculatorSummaryProps {
  version: ProductVersion
  selectedOptions: string[]
  selectedDrone: string
  showVAT: boolean
  setShowVAT: (show: boolean) => void
  totalPrice: number
  completionPercentage: number
  onRequestQuote: () => void
}

export default function CalculatorSummary({
  version,
  selectedOptions,
  selectedDrone,
  showVAT,
  setShowVAT,
  totalPrice,
  completionPercentage,
  onRequestQuote,
}: CalculatorSummaryProps) {
  const selectedOptionsData = selectedOptions
    .map(id => additionalOptions.find(opt => opt.id === id))
    .filter(Boolean)

  const selectedDroneData = droneOptions.find(d => d.id === selectedDrone)

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="lg:sticky lg:top-8"
    >
      <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden">
        {/* Progress Bar */}
        <div className="p-6 bg-gradient-to-br from-green-50 to-white border-b border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Конфигурация собрана на
            </span>
            <span className="text-sm font-bold text-green-600">
              {completionPercentage}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 to-green-600"
              initial={{ width: 0 }}
              animate={{ width: `${completionPercentage}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Configuration Summary */}
        <div className="p-6 space-y-4">
          <h4 className="font-bold text-gray-900 text-lg mb-4">Ваша конфигурация</h4>

          {/* Base Version */}
          <div className="pb-4 border-b border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-900">Базовая версия</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{version.name}</span>
              <span className="font-semibold text-gray-900">
                {formatPrice(showVAT ? version.priceWithVAT : version.price)}
              </span>
            </div>
          </div>

          {/* Selected Options */}
          {selectedOptionsData.length > 0 && (
            <div className="pb-4 border-b border-gray-100">
              <div className="font-semibold text-gray-900 mb-3">
                Дополнительные опции ({selectedOptionsData.length})
              </div>
              <div className="space-y-2">
                {selectedOptionsData.map((option) => (
                  <div key={option?.id} className="flex items-start justify-between text-sm">
                    <span className="text-gray-600 flex-1 pr-2">{option?.name}</span>
                    <span className="font-medium text-gray-900 whitespace-nowrap">
                      +{formatPrice(showVAT ? option?.priceWithVAT || 0 : option?.price || 0)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Selected Drone */}
          {selectedDrone !== 'no-drones' && (
            <div className="pb-4 border-b border-gray-100">
              <div className="font-semibold text-gray-900 mb-2">Агродроны</div>
              <div className="text-sm text-gray-600">{selectedDroneData?.name}</div>
              <div className="text-sm text-green-600 font-medium mt-1">
                Цена по запросу
              </div>
            </div>
          )}

          {/* VAT Toggle */}
          <div className="flex items-center justify-between py-3">
            <span className="text-sm text-gray-600">Показывать цены</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowVAT(false)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                  !showVAT
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                без НДС
              </button>
              <button
                onClick={() => setShowVAT(true)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                  showVAT
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                с НДС
              </button>
            </div>
          </div>

          {/* Total Price */}
          <div className="pt-4 border-t-2 border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-bold text-gray-900">Итого:</span>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-600">
                  {formatPrice(totalPrice)}
                </div>
                <div className="text-xs text-gray-500">
                  {showVAT ? 'с НДС' : 'без НДС'}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onRequestQuote}
            className="w-full py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            Получить КП
          </motion.button>

          {/* Additional Info */}
          <div className="text-xs text-gray-500 text-center pt-2">
            <p>Отправим коммерческое предложение на ваш email</p>
          </div>
        </div>
      </div>

      {/* Benefits Below */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 bg-green-50 rounded-xl p-6 border border-green-100"
      >
        <h5 className="font-semibold text-gray-900 mb-3">Что входит в стоимость</h5>
        <ul className="space-y-2">
          {[
            'Производство на сертифицированном заводе',
            'Доставка до вашего региона',
            'Гарантия 24 месяца',
            'Техническая поддержка',
            'Обучение работе с комплексом',
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}
