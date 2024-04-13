const stateLookup: Record<string, string> = {
  CA: 'California',
  MA: 'Massachusetts',
  OK: 'Oklahoma',
  PA: 'Pennsylvania',
  VA: 'Virginia',
  AZ: 'Arizona',
  ID: 'Idaho',
  IN: 'Indiana'
};

type StateAbbreviation = keyof typeof stateLookup;

interface Person {
  name: string;
  address: string;
  city: string;
  state: StateAbbreviation
};

export function byState(str: string): string {
  const people: Person[] = str.trimEnd().split('\n').map(personStr => {
    const personParts = personStr.split(', ');
    const [name, address] = personParts.slice(0, 2);
    const cityStateMatch = personParts[2].match(/(?<city>.+)\s(?<state>\w{2})$/) as RegExpMatchArray;
    const { city, state } = cityStateMatch.groups as Record<string, string>;
    return { name, address, city, state };
  });
  const peopleByState = Object.fromEntries(
    Object
      .keys(stateLookup)
      .map(stateAbbr => {
        const statePeople = people
          .filter(person => person.state === stateAbbr)
          .sort((personA, personB) => {
            // sort by name
            if (personA.name < personB.name) return -1;
            if (personA.name > personB.name) return 1;

            // if names are equal, sort by address
            if (personA.address < personB.address) return -1;
            if (personA.address > personB.address) return 1;
            return 0;
          });
        return [stateAbbr, statePeople];
      })
  );
  return Object.entries(peopleByState)
    .filter(([_, statePeople]) => statePeople.length)
    .sort(([stateA, _a], [stateB, _b]) => (
      stateA < stateB ? -1 : (stateB < stateA ? 1 : 0)
    ))
    .map(([state, statePeople], i) => (
      `${i === 0 ? '' : ' '}${stateLookup[state]}\r\n` +
      statePeople.reduce((acc, person) => {
        const { name, address, city } = person;
        return acc + `..... ${name} ${address} ${city} ${stateLookup[state]}\r\n`
      }, '')
    ))
    .join('')
    .trimEnd();
}