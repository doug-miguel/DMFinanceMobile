import { useMemo } from 'react';
import currency from 'currency.js';

export function useFormattedReal(value: number): string {
    return useMemo(() => {
        return currency(value, { symbol: 'R$', separator: '.', decimal: ',', precision: 2 }).format();
    }, [value]);
}
