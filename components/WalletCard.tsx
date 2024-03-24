"use client";
import { useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { WalletName } from "@solana/wallet-adapter-base";
import { Wallet } from "@solana/wallet-adapter-react";

export default function WalletCard({}: any) {
  const [walletModalConfig, setWalletModalConfig] = useState<Readonly<{
    onSelectWallet(walletName: WalletName): void;
    wallets: Wallet[];
  }> | null>(null);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [connectionStatus, setConnectionStatus] = useState("Disconnected");

  return (
    <WalletMultiButton />
  );
}
