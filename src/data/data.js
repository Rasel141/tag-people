import faker from "faker";

export const listOfPeople = [
  {
    id: 1,
    name: "Muhammad Rasel",
    src: faker.image.people(),
    isDisabled: true,
    message: "Dosen’t want to be tagged",
  },
];

Array.from(Array(12).keys()).forEach((e) =>
  listOfPeople.push({
    id: faker.random.uuid(),
    name: faker.name.findName(),
    src: faker.image.people(),
    isDisabled: false,
    message: "",
  })
);

// console.log("peopleList", peopleList);
