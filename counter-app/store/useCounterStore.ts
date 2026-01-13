import { create } from 'zustand';
import { Alert } from 'react-native';

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useCounterStore = create<CounterState>((set, get) => ({
  count: 0,
  increment: () => {
    const currentCount = get().count;
    if (currentCount < 10) {
      set({ count: currentCount + 1 });
    } else {
      Alert.alert("You can't go above 10");
    }
  },
  decrement: () => {
    const currentCount = get().count;
    if (currentCount > 0) {
      set({ count: currentCount - 1 });
    } else {
      Alert.alert("You can't go below 0");
    }
  },
}));
