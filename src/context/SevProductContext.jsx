import { createContext, useContext, useState } from 'react';
import { SEV_PRODUCTS, SEV_KEYS, DEFAULT_SEV_KEY } from '../data/sevProducts';

const SevProductContext = createContext(null);

export function SevProductProvider({ children }) {
  const [activeSevKey, setActiveSevKey] = useState(DEFAULT_SEV_KEY);

  const activeProduct = SEV_PRODUCTS[activeSevKey] || SEV_PRODUCTS[DEFAULT_SEV_KEY];

  return (
    <SevProductContext.Provider
      value={{
        activeSevKey,
        setActiveSevKey,
        activeProduct,
        products: SEV_PRODUCTS,
        keys: SEV_KEYS,
      }}
    >
      {children}
    </SevProductContext.Provider>
  );
}

export function useSevProduct() {
  const ctx = useContext(SevProductContext);
  if (!ctx) {
    throw new Error('useSevProduct must be used within SevProductProvider');
  }
  return ctx;
}

