'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Check, 
  X, 
  Calculator as CalcIcon, 
  ShoppingCart,
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import { 
  productVersions, 
  additionalOptions, 
  droneOptions,
  type ProductVersion 
} from '@/lib/calculator-data'
import { formatPrice } from '@/lib/utils'
import CalculatorSummary from './CalculatorSummary'
import QuoteForm from './QuoteForm'

export default function Calculator() {
  const [selectedVersion, setSelectedVersion] = useState<ProductVersion>(productVersions[1])
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set())
  const [selectedDrone, setSelectedDrone] = useState<string>('no-drones')
  const [showVAT, setShowVAT] = useState(true)
  const [showQuoteForm, setShowQuoteForm] = useState(false)
  const [expandedOption, setExpandedOption] = useState<string | null>(null)

  // Calculate total price
  const calculateTotal = () => {
    let total = showVAT ? selectedVersion.priceWithVAT : selectedVersion.price
    
    selectedOptions.forEach(optionId => {
      const option = additionalOptions.find(opt => opt.id === optionId)
      if (option) {
        total += showVAT ? option.priceWithVAT : option.price
      }
    })

    return total
  }

  // Calculate completion percentage
  const completionPercentage = Math.min(
    100,
    Math.round(
      ((selectedOptions.size / additionalOptions.length) * 50) + 50
    )
  )

  const toggleOption = (optionId: string) => {
    const newSelected = new Set(selectedOptions)
    if (newSelected.has(optionId)) {
      newSelected.delete(optionId)
    } else {
      newSelected.add(optionId)
    }
    setSelectedOptions(newSelected)
  }

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <CalcIcon className="w-4 h-4" />
            Интерактивный конструктор
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Соберите свой МРК «Росток»
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите базовую комплектацию и добавьте необходимые опции
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Configuration */}
            <div className="lg:col-span-2 space-y-8">
              {/* Step 1: Choose Version */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  Выберите базовую версию
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {productVersions.map((version) => (
                    <button
                      key={version.id}
                      onClick={() => setSelectedVersion(version)}
                      className={`relative p-6 rounded-xl border-2 transition-all text-left ${
                        selectedVersion.id === version.id
                          ? 'border-green-600 bg-green-50'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                    >
                      {selectedVersion.id === version.id && (
                        <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                      
                      <div className="text-xl font-bold text-gray-900 mb-2">
                        {version.name}
                      </div>
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        {formatPrice(showVAT ? version.priceWithVAT : version.price)}
                      </div>
                      <div className="text-xs text-gray-500">
                        {showVAT ? 'с НДС' : 'без НДС'}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Step 2: Additional Options */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  Дополнительные опции
                </h3>

                <div className="space-y-3">
                  {additionalOptions.map((option) => {
                    const isSelected = selectedOptions.has(option.id)
                    const isExpanded = expandedOption === option.id
                    
                    return (
                      <div
                        key={option.id}
                        className={`border-2 rounded-xl transition-all ${
                          isSelected ? 'border-green-600 bg-green-50' : 'border-gray-200'
                        }`}
                      >
                        <button
                          onClick={() => toggleOption(option.id)}
                          className="w-full p-4 flex items-center justify-between text-left"
                        >
                          <div className="flex items-center gap-4 flex-1">
                            <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                              isSelected ? 'border-green-600 bg-green-600' : 'border-gray-300'
                            }`}>
                              {isSelected && <Check className="w-4 h-4 text-white" />}
                            </div>
                            
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900">{option.name}</div>
                              <div className="text-sm text-gray-600">{option.description}</div>
                            </div>

                            <div className="text-right">
                              <div className="text-lg font-bold text-gray-900">
                                +{formatPrice(showVAT ? option.priceWithVAT : option.price)}
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                    )
                  })}
                </div>
              </motion.div>

              {/* Step 3: Drones */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  Комплектация агродронами
                </h3>

                <div className="space-y-3">
                  {droneOptions.map((drone) => (
                    <button
                      key={drone.id}
                      onClick={() => setSelectedDrone(drone.id)}
                      className={`w-full p-4 rounded-xl border-2 transition-all text-left flex items-center gap-4 ${
                        selectedDrone === drone.id
                          ? 'border-green-600 bg-green-50'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedDrone === drone.id ? 'border-green-600' : 'border-gray-300'
                      }`}>
                        {selectedDrone === drone.id && (
                          <div className="w-3 h-3 rounded-full bg-green-600" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{drone.name}</div>
                        <div className="text-sm text-gray-600">{drone.description}</div>
                        {drone.id !== 'no-drones' && (
                          <div className="text-sm text-green-600 font-medium mt-1">
                            Цена по запросу
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Summary (Sticky) */}
            <div className="lg:col-span-1">
              <CalculatorSummary
                version={selectedVersion}
                selectedOptions={Array.from(selectedOptions)}
                selectedDrone={selectedDrone}
                showVAT={showVAT}
                setShowVAT={setShowVAT}
                totalPrice={calculateTotal()}
                completionPercentage={completionPercentage}
                onRequestQuote={() => setShowQuoteForm(true)}
              />
            </div>
          </div>
        </div>

        {/* Quote Form Modal */}
        <AnimatePresence>
          {showQuoteForm && (
            <QuoteForm
              configuration={{
                version: selectedVersion.name,
                options: Array.from(selectedOptions).map(id => 
                  additionalOptions.find(opt => opt.id === id)?.name || ''
                ),
                drone: droneOptions.find(d => d.id === selectedDrone)?.name || '',
                totalPrice: calculateTotal(),
                showVAT,
              }}
              onClose={() => setShowQuoteForm(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
