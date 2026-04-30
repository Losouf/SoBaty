import * as migration_20260430_123019 from './20260430_123019';

export const migrations = [
  {
    up: migration_20260430_123019.up,
    down: migration_20260430_123019.down,
    name: '20260430_123019'
  },
];
