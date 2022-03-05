describe('Primitive Values', () => {
  it('should test jest assertions', () => {
    const number = 10;
    // const falsy = true;
    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(true).toBeTruthy();
  });
});

describe('Objects Values', () => {
  it('should test jest assertions with object', () => {
    const person = { name: 'teste', age: 21 };
    const Anotherperson = { ...person };
    expect(person).toEqual(Anotherperson);
    // expect(person).toBe(Anotherperson);
  });
});
