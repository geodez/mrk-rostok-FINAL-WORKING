export interface ProductVersion {
  id: 'light' | 'standard' | 'smart'
  name: string
  price: number
  priceWithVAT: number
  popular?: boolean
  features: string[]
}

export interface AdditionalOption {
  id: string
  name: string
  price: number
  priceWithVAT: number
  description: string
  icon: string
}

export interface DroneOption {
  id: string
  name: string
  description: string
}

export const productVersions: ProductVersion[] = [
  {
    id: 'light',
    name: 'ЛАЙТ',
    price: 1750000,
    priceWithVAT: 2100000,
    features: [
      'Прицеп двухосный категории О2',
      'Бескаркасный кузов-фургон',
      'Система крепления 2 дронов',
      'Стеллажи для хранения',
      'Комплект для приготовления раствора',
      'Компрессор 25л с аксессуарами',
      'Полноразмерное запасное колесо',
      'Базовая система освещения',
    ],
  },
  {
    id: 'standard',
    name: 'СТАНДАРТ',
    price: 2100000,
    priceWithVAT: 2520000,
    popular: true,
    features: [
      'Всё из комплектации ЛАЙТ',
      'Уличный душ на задней панели',
      'Рабочее место на крыше МРК',
      'Выкатные платформы для генераторов',
      'Дополнительные опоры устойчивости',
      'Усиленная тормозная система',
      'Ограждения на крыше',
      'Антискользящее покрытие',
    ],
  },
  {
    id: 'smart',
    name: 'СМАРТ',
    price: 2500000,
    priceWithVAT: 3000000,
    features: [
      'Всё из комплектации СТАНДАРТ',
      'Автоматическое приготовление раствора',
      'Система подогрева воды',
      'Видеонаблюдение с регистратором',
      'Метеостанция с контролем',
      'Телескопическая мачта с прожекторами',
      'Система заправки топлива',
      'Контроль температуры и pH раствора',
    ],
  },
]

export const additionalOptions: AdditionalOption[] = [
  {
    id: 'fuel-system',
    name: 'Система заправки топлива',
    price: 199167,
    priceWithVAT: 239000,
    description: 'Подвесной бак 50л с насосом и заправочным пистолетом',
    icon: 'fuel',
  },
  {
    id: 'telescopic-mast',
    name: 'Телескопическая мачта',
    price: 80000,
    priceWithVAT: 96000,
    description: 'С креплением метеостанции и поворотными прожекторами',
    icon: 'tower',
  },
  {
    id: 'heating-system',
    name: 'Система подогрева воды',
    price: 165833,
    priceWithVAT: 199000,
    description: 'С контролем температуры и кислотно-щелочной среды',
    icon: 'thermometer',
  },
  {
    id: 'video-surveillance',
    name: 'Видеонаблюдение',
    price: 90833,
    priceWithVAT: 109000,
    description: 'Комплект с видеорегистратором',
    icon: 'video',
  },
  {
    id: 'storage-cases',
    name: 'Внешние кейсы для инвентаря',
    price: 32500,
    priceWithVAT: 39000,
    description: 'Система хранения рабочего инвентаря',
    icon: 'box',
  },
  {
    id: 'pressure-washer',
    name: 'Мойка высокого давления',
    price: 57500,
    priceWithVAT: 69000,
    description: 'Система очистки оборудования',
    icon: 'spray',
  },
  {
    id: 'weather-station',
    name: 'Метеостанция',
    price: 19167,
    priceWithVAT: 23000,
    description: 'Контроль метеоданных',
    icon: 'cloud',
  },
  {
    id: 'eye-wash',
    name: 'Комплект для промывки глаз',
    price: 14167,
    priceWithVAT: 17000,
    description: 'Станция для промывки глаз персонала',
    icon: 'eye',
  },
  {
    id: 'outdoor-shower',
    name: 'Уличный душ',
    price: 12500,
    priceWithVAT: 15000,
    description: 'На задней панели комплекса',
    icon: 'shower',
  },
]

export const droneOptions: DroneOption[] = [
  {
    id: 'no-drones',
    name: 'Без дронов',
    description: 'Только мобильный растворный комплекс',
  },
  {
    id: 'dji-t40',
    name: 'DJI Agras T40 (2 шт.)',
    description: 'Комплект: 2 дрона + 6 АКБ + зарядные станции',
  },
  {
    id: 'dji-t50',
    name: 'DJI Agras T50 (2 шт.)',
    description: 'Комплект: 2 дрона + 6 АКБ + генераторы',
  },
  {
    id: 'hd-540',
    name: 'HD 540 (2 шт.)',
    description: 'Комплект: 2 дрона + 6 АКБ + зарядные станции',
  },
]
