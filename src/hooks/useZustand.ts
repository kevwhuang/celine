import { create } from 'zustand';

const init: ZustandState = {
    isHamburger: false,
};

const useZustand = create<ZustandActions & ZustandState>(set => ({
    ...init,
    setIsHamburger: () => set(s => ({ isHamburger: !(s.isHamburger) })),
}));

export default useZustand;
