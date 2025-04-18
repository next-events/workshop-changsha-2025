import { ReactNode } from 'react';
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { styleConfig } from '@/config/styles';

interface NavbarLinkProps {
  href: string;
  children: ReactNode;
  isActive: boolean;
}

export function NavbarLink({ href, children, isActive }: NavbarLinkProps) {
  const activeColor = styleConfig.colors.primary;
  
  return (
    <NextLink
      className={clsx(
        linkStyles({ color: "foreground" }),
        "transition-all duration-200 border-b-2",
        isActive 
          ? "text-primary font-medium border-primary" 
          : "border-transparent hover:border-gray-300"
      )}
      href={href}
    >
      {children}
    </NextLink>
  );
} 