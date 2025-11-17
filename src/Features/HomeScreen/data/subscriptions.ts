export type Subscription = {
  id: number;
  type: string;
  serviceType: string;
  provider: string;
  price: string;
  count?: number;
  boardNo?: number;
  lineNo?: number;
};

export type Invoice = {
  id: number;
  type: string;
  status: string;
  statusColor: string;
  iconBg: string;
  iconBorder: string;
  price: string;
  count: number;
  boardNo: number;
  lineNo: number;
  primary: boolean;
};

export const initialSubscriptions: Subscription[] = [
  {
    id: 1,
    type: "المولد",
    serviceType: "ذهبي",
    provider: "محمد عبد الكريم",
    price: "150 د.ع",
  },
  {
    id: 2,
    type: "الإنترنت",
    serviceType: "ذهبي",
    provider: "جبار حسن علي",
    price: "150 د.ع",
  },
];

export const pendingSubscriptionData: Subscription | null = {
  id: 3,
  type: "المولد",
  serviceType: "ذهبي",
  provider: "المولد جبار علي حسين",
  price: "65 د.ع",
  count: 8,
  boardNo: 46,
  lineNo: 421,
};

export const lastInvoices: Invoice[] = [
  {
    id: 1,
    type: "مولدة",
    status: "غير مدفوع",
    statusColor: "bg-red-600",
    iconBg: "bg-yellow-50",
    iconBorder: "border-yellow-300",
    price: "150 د.ع",
    count: 10,
    boardNo: 6,
    lineNo: 421,
    primary: true,
  },
  {
    id: 2,
    type: "مولدة",
    status: "مدفوع",
    statusColor: "bg-green-600",
    iconBg: "bg-green-50",
    iconBorder: "border-green-300",
    price: "150 د.ع",
    count: 10,
    boardNo: 6,
    lineNo: 421,
    primary: false,
  },
];

export function findSubscriptionById(id: number): Subscription | null {
  const subscription = initialSubscriptions.find((sub) => sub.id === id);
  if (subscription) return subscription;
  if (pendingSubscriptionData?.id === id) return pendingSubscriptionData;
  return null;
}
