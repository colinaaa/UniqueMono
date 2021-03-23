import 'fake-indexeddb/auto';
import { TypedStorage } from '../src/storage';

describe('@uniqs/storage', () => {
  interface Data {
    a: string;
    b: string;
    c: number;
    candidate: Record<string, number>;
  }

  const store = new TypedStorage<Data>();

  it('should pass', async () => {
    store.setSync('a', 'value');
    expect(store.getSync('a')).toBe('value');
    await store.set('candidate', { a: 1, b: 2 });
    await expect(store.get('candidate')).resolves.toMatchObject({ a: 1, b: 2 });
  });
});
