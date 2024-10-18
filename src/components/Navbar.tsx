import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "./ui/button";
import { Menu, Send } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
//import { Link } from 'react-router-dom';

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#trial-form",
    label: "#Разработчик игр",
  },
  {
    href: "#trial-form",
    label: "#Программист",
  },
  {
    href: "#trial-form",
    label: "#3D-моделлер",
  },
  {
    href: "#trial-form",
    label: "#Дизайнер в IT",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-background border-b border-gray-200 dark:border-gray-700">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between items-center">
          <NavigationMenuItem className="font-bold">
            <a href="/" className="flex items-center">
              <img 
                src="/logo_white_4.jpg"
                alt="PRO_CODE Logo" 
                className="h-8 w-8 mr-2 rounded-full object-cover"
              />
              <span className="text-zinc-800 dark:text-zinc-200 hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300">
                PRO_CODE
              </span>
            </a>
          </NavigationMenuItem>

          {/* Mobile */}
          <div className="flex md:hidden items-center">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="h-5 w-5" onClick={() => setIsOpen(true)} />
              </SheetTrigger>
              <SheetContent side="left" className="transition-transform duration-300">
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">PRO_CODE</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="https://t.me/pro_code_web3_bot"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    Telegram
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop */}
          <nav className="hidden md:flex gap-2 items-center">
            {routeList.map(({ href, label }: RouteProps) => (
              <a
                rel="noreferrer noopener"
                href={href}
                key={label}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2 items-center">
            <a
              rel="noreferrer noopener"
              href="https://t.me/pro_code_web3_bot"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })} flex items-center`}
            >
              <Send className="h-4 w-4 mr-2" />
              Telegram
            </a>
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
