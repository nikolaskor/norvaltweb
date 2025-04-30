export interface CaseStudy {
  title: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  image: string;
  link: string;
}

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  items?: NavItem[];
}

export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  isLoading?: boolean;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}
