export interface Notice {
  id: string;
  type: string;
  title: string;
  description?: string;
  url?: string;
  start_at: string;
  end_at: string;
  is_active: boolean;
}
