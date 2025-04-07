import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NotificationsPopover } from "@/components/NotificationsPopover";
import Logo from "@/components/Logo";

const Header = () => {
  return (
    <header className="w-full bg-white py-3 px-6 shadow-sm border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center ml-0">
        <Logo />
        <div className="flex items-center gap-4 mr-8">
          <NotificationsPopover />
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700">Trainer User</span>
            <Avatar className="h-8 w-8 bg-blue-600">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>T</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
