import { create } from 'zustand';

const init: ZustandState = {
    hamburger: false,
};

const useZustand = create<ZustandActions & ZustandState>(set => ({
    ...init,
    setHamburger: () => set(s => ({ hamburger: !(s.hamburger) })),
}));

export default useZustand;
