export interface CustomerType {
  id: number;
  name: string;
  company: string;
  initials: string;
  active_since: string;
  email: string;
  phone: string;
  salesperson: string;
  credit_status: string;
  total_spend: number;
  number_of_purchases: number;
  recent_activity: RecentActivity[];
}

export interface RecentActivity {
  action: string;
  time: string;
}
