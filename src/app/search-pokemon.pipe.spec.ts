import { SearchPokemonPipe } from './search-pokemon.pipe';

describe('SearchPokemonPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchPokemonPipe();
    expect(pipe).toBeTruthy();
  });
});
