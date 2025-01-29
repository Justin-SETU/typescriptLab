import {Friend, Colleague, ColleagueHistory } from './myTypes'


const friend1: Friend = {
    name: "Justin Jose",
    phone: "0890698776",
    age: 28,
    dob : new Date("11-04-1996")
  };
  
const friend2: Friend = {
    name: "Bijo Sabu",
    phone: "086987654",
    age: 27,
    interests:['study','work']
  };
  
export const friends: Friend[] = [friend1, friend2];
// console.log(friends[1]);
  
  //   -------------------Colleage objects------



const colleague1: Colleague = {
    name: "Joseph Ashin",
    department: "Engineering",
    contact: {
      email: "jash@company.com",
      extension: 121,
    },
  };
  
const colleague2: Colleague = {
    name: "Sivadas M",
    department: "Cyber Security",
    contact: {
      email: "sivam50@company.com",
      extension: 888,
    },
  };
  
const colleague3: Colleague = {
    name: "Joel Babice",
    department: "HR",
    contact: {
      email: "jbs@company.com",
      extension: 111,
    },
  };


   //   -------------------ColleageHistory objects------


export const colleagues: ColleagueHistory = {
    current: [colleague1, colleague2, colleague3],
    former: [],
  };
  
//   console.log(colleagues.current[0]);
  