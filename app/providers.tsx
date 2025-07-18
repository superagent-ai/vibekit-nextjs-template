'use client';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { base } from 'wagmi/chains';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <OnchainKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY!}
      projectId={process.env.NEXT_PUBLIC_CDP_PROJECT_ID!}
      chain={base}
    >
      {children}
    </OnchainKitProvider>
  );
}