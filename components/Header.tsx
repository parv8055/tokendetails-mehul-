import WalletCard from "./WalletCard";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-10 shadow">
      <nav className="mx-auto flex items-center justify-end max-w-9xl p-2 px-6">
        <div className="border rounded bg-black">
          <WalletCard />
        </div>
      </nav>
    </header>
  );
}
