import 'fake-indexeddb/auto';
import { TypedStorage } from '../src/storage';

describe('@uniqs/storage', () => {
  interface Data {
    a: string;
    b: string;
    c: number;
    token: string;
    candidate: Record<string, number>;
  }

  const store = new TypedStorage<Data>();

  it('should pass', async () => {
    store.setSync('a', 'value');
    expect(store.getSync('a')).toBe('value');
    expect(store.length).toBe(1);
    expect(store.key(0)).toBe('a');
    await store.set('candidate', { a: 1, b: 2 });
    await expect(store.get('candidate')).resolves.toMatchObject({ a: 1, b: 2 });

    store.clearSync();
    expect(store.getSync('a')).toBe(null);
    expect(store.length).toBe(0);

    store.setSync('b', 'vvv');
    store.setSync('token', 'PRIVATE TOKEN');
    expect(store.length).toBe(2);

    store.clearAll();
    expect(store.length).toBe(1);
    expect(store.getSync('token')).toBe('PRIVATE TOKEN');
  });

  it('should be able to use sessionStorage', async () => {
    const session = new TypedStorage<Data>(globalThis.sessionStorage);
    session.setSync('a', 'value');
    expect(session.getSync('a')).toBe('value');

    await session.set('candidate', { c: 1, d: 2 });
    await expect(session.get('candidate')).resolves.toMatchObject({ c: 1, d: 2 });
  });
});
