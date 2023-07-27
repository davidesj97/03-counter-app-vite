import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Prueba en 08-imp-exp', () => {

  test('getHeroeById debe de retornar un héroe por ID', () => {

    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({"id": 1, "name": "Batman", "owner": "DC"})

  });

  test('getHeroeById debe de retornar undefined si no existe', () => {

    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy()

  });

  // Tarea:
  // Debe de retornar un arreglo con los héroes de DC
  // Length === 3
  // toEqual al arreglo filtrado

  test('getHeroes debe retornar los heores de DC', () => {

    const heroesDC = [
      {
        id: 1,
        name: 'Batman',
        owner: 'DC'
      },
      {
        id: 3,
        name: 'Superman',
        owner: 'DC'
      },
      {
        id: 4,
        name: 'Flash',
        owner: 'DC'
      }
    ]
    const owner = "DC";
    const heroesFilter = getHeroesByOwner(owner);

    expect( heroesFilter.length ).toBe(3);
    expect( heroesFilter ).toEqual(heroesDC)

  });

  // Debe de retornar un arreglo con los héroes de Marvel
  // length === 2

  test('getHeroes debe retornar los heores de Marvel', () => {

    const heroesMarvel = [
      {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
      },{
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
      },
    ]
    const owner = "Marvel";
    const heroesFilter = getHeroesByOwner(owner);

    expect( heroesFilter.length ).toBe(2);
    expect( heroesFilter ).toEqual(heroesMarvel)

  });

})