import useSWR from 'swr';

import { CHAINS } from '~/constants/chain';
import { useCurrentPassword } from '~/Popup/hooks/useCurrent/useCurrentPassword';
import { useExtensionStorage } from '~/Popup/hooks/useExtensionStorage';
import { getAddress, getKeyPair } from '~/Popup/utils/common';
import type { AccountType } from '~/types/extensionStorage';

type AccountList = {
  id: string;
  address: Record<string, string>;
  type: AccountType;
};

export function useAccounts(suspense?: boolean) {
  const { extensionStorage } = useExtensionStorage();
  const { currentPassword } = useCurrentPassword();

  const { accounts, additionalChains } = extensionStorage;

  const fetcher = () =>
    new Promise<AccountList[]>((res) => {
      setTimeout(() => {
        res(
          accounts.map((account) => {
            const addresses: Record<string, string> = {};

            [...CHAINS, ...additionalChains].forEach((chain) => {
              const key = `${account.id}${chain.id}`;
              const storageAddress = localStorage.getItem(key);

              if (storageAddress) {
                addresses[chain.id] = storageAddress;
              } else {
                const keypair = getKeyPair(account, chain, currentPassword);
                const address = getAddress(account, chain, keypair?.publicKey);
                addresses[chain.id] = address;
                localStorage.setItem(key, address);
              }
            });
            return { id: account.id, address: addresses, type: account.type };
          }),
        );
      }, 500);
    });

  const { data, mutate } = useSWR([accounts, additionalChains], fetcher, {
    suspense,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
    isPaused: () => accounts.length < 1 || [...CHAINS, ...additionalChains].length < 1,
  });

  return { data, mutate };
}
