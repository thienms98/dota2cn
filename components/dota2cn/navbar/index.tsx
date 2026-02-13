import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { useRef } from "react";

function Navbar({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      {...props}
      className={cn("flex items-center drop-shadow-md", className)}
    ></nav>
  );
}

const navItemVariants = cva("", {
  variants: {
    variant: {
      default: "nav-item-default"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

function NavbarItem({
  className,
  children,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof navItemVariants> & { active?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      {...props}
      className={cn("nav-item", navItemVariants({ variant, className }))}
      ref={ref}
    >
      {children}
    </div>
  );
}

export { Navbar, NavbarItem };
