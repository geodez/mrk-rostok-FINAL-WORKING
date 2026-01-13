'use client'

import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  Calendar, 
  CheckCircle, 
  Clock, 
  X,
  Search,
  Filter
} from 'lucide-react'

// Mock data - в продакшене это будет из API/БД
const mockQuotes = [
  {
    id: 1,
    date: '2026-01-12',
    name: 'Иван Петров',
    phone: '+7 (916) 123-45-67',
    email: 'ivan@agro.ru',
    company: 'АгроТех ООО',
    version: 'СТАНДАРТ',
    totalPrice: 2520000,
    status: 'new',
  },
  {
    id: 2,
    date: '2026-01-11',
    name: 'Сергей Сидоров',
    phone: '+7 (916) 987-65-43',
    email: 'sergey@farm.ru',
    company: 'Ферма Урожай',
    version: 'СМАРТ',
    totalPrice: 3150000,
    status: 'in_progress',
  },
  {
    id: 3,
    date: '2026-01-10',
    name: 'Анна Иванова',
    phone: '+7 (916) 555-12-34',
    email: 'anna@agro.com',
    company: null,
    version: 'ЛАЙТ',
    totalPrice: 2100000,
    status: 'completed',
  },
]

type QuoteStatus = 'new' | 'in_progress' | 'completed' | 'rejected'

const statusLabels: Record<QuoteStatus, string> = {
  new: 'Новая',
  in_progress: 'В работе',
  completed: 'Завершена',
  rejected: 'Отклонена',
}

const statusColors: Record<QuoteStatus, string> = {
  new: 'bg-blue-100 text-blue-800',
  in_progress: 'bg-yellow-100 text-yellow-800',
  completed: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-800',
}

export default function AdminPage() {
  const [quotes, setQuotes] = useState(mockQuotes)
  const [selectedQuote, setSelectedQuote] = useState<typeof mockQuotes[0] | null>(null)
  const [filterStatus, setFilterStatus] = useState<QuoteStatus | 'all'>('all')

  const filteredQuotes = filterStatus === 'all' 
    ? quotes 
    : quotes.filter(q => q.status === filterStatus)

  const stats = {
    total: quotes.length,
    new: quotes.filter(q => q.status === 'new').length,
    in_progress: quotes.filter(q => q.status === 'in_progress').length,
    completed: quotes.filter(q => q.status === 'completed').length,
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Админ-панель МРК «Росток»</h1>
              <p className="text-sm text-gray-600">Управление заявками</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Админ</span>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                Выход
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Всего заявок</div>
            <div className="text-3xl font-bold text-gray-900">{stats.total}</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Новые</div>
            <div className="text-3xl font-bold text-blue-600">{stats.new}</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">В работе</div>
            <div className="text-3xl font-bold text-yellow-600">{stats.in_progress}</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Завершено</div>
            <div className="text-3xl font-bold text-green-600">{stats.completed}</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-200">
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <div className="flex gap-2">
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filterStatus === 'all'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Все
              </button>
              {Object.entries(statusLabels).map(([status, label]) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status as QuoteStatus)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filterStatus === status
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Quotes Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Дата</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Клиент</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Контакты</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Версия</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Сумма</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Статус</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Действия</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredQuotes.map((quote) => (
                  <tr key={quote.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(quote.date).toLocaleDateString('ru-RU')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{quote.name}</div>
                      {quote.company && (
                        <div className="text-sm text-gray-500">{quote.company}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center gap-1 text-gray-900 mb-1">
                        <Phone className="w-3 h-3" />
                        {quote.phone}
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Mail className="w-3 h-3" />
                        {quote.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {quote.version}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      {new Intl.NumberFormat('ru-RU').format(quote.totalPrice)} ₽
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[quote.status as QuoteStatus]}`}>
                        {statusLabels[quote.status as QuoteStatus]}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => setSelectedQuote(quote)}
                        className="text-green-600 hover:text-green-700 font-medium"
                      >
                        Открыть
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Quote Detail Modal */}
      {selectedQuote && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedQuote(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">Заявка #{selectedQuote.id}</h3>
              <button
                onClick={() => setSelectedQuote(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Информация о клиенте</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Имя:</span>
                    <span className="font-medium text-gray-900">{selectedQuote.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Телефон:</span>
                    <span className="font-medium text-gray-900">{selectedQuote.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium text-gray-900">{selectedQuote.email}</span>
                  </div>
                  {selectedQuote.company && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Компания:</span>
                      <span className="font-medium text-gray-900">{selectedQuote.company}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Конфигурация</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Версия:</span>
                    <span className="font-medium text-gray-900">{selectedQuote.version}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Итого:</span>
                    <span className="text-2xl font-bold text-green-600">
                      {new Intl.NumberFormat('ru-RU').format(selectedQuote.totalPrice)} ₽
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Изменить статус</h4>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(statusLabels).map(([status, label]) => (
                    <button
                      key={status}
                      onClick={() => {
                        setQuotes(quotes.map(q => 
                          q.id === selectedQuote.id ? { ...q, status } : q
                        ))
                        setSelectedQuote({ ...selectedQuote, status })
                      }}
                      className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                        selectedQuote.status === status
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
