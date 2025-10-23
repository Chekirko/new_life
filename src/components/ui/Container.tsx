import { cn } from "@/lib/utils";
import React from "react";

// Приймаємо стандартні пропси для div елемента
type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        // Використовуємо cn для об'єднання класів
        // max-w-7xl -> обмежує максимальну ширину (1280px)
        // mx-auto -> центрує контейнер
        // px-4 sm:px-6 lg:px-8 -> адаптивні відступи по боках
        className={cn(
          "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export { Container };
