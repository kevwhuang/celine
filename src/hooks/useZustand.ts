import { create } from 'zustand';

const initialize: ZustandState = {
    openHamburger: false,
};

const useZustand = create<ZustandActions & ZustandState>(set => ({
    ...initialize,
    setOpenHamburger: () => set(s => ({ openHamburger: !(s.openHamburger) })),
}));

export default useZustand;
