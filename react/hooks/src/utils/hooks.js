import { useEffect } from 'react';

export function asyncUseEffect(effect, inputs) {
  useEffect(() => {
    effect();
  }, inputs);
}
