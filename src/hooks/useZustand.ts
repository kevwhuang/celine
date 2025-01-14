import { create } from 'zustand';

const init: ZustandState = {
    isHamburger: false,
};

const useZustand = create<ZustandActions & ZustandState>(set => ({
    ...init,
    setIsHamburger: () => set(e => ({ isHamburger: !e.isHamburger })),
}));

export default useZustand;
