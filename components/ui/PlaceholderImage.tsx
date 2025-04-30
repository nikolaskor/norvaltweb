interface PlaceholderImageProps {
  text?: string;
  className?: string;
}

export function PlaceholderImage({
  text = "Placeholder",
  className,
}: PlaceholderImageProps) {
  return (
    <div
      className={`w-full h-full min-h-[300px] bg-muted flex items-center justify-center ${className}`}
    >
      <div className="text-muted-foreground text-sm font-medium">{text}</div>
    </div>
  );
}
