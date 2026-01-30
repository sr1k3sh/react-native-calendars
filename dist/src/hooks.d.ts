import React from 'react';
/**
 * This hook avoid calling useEffect on the initial value of his dependency array
 */
export declare const useDidUpdate: (callback: () => void, dep: React.DependencyList) => void;
export declare const useCombinedRefs: <T = any>(...refs: React.Ref<T>[]) => React.RefObject<T>;
//# sourceMappingURL=hooks.d.ts.map