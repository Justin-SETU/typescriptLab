interface Friend {
    name: string;
    phone: string;
    age: number;
}

const friend1: Friend = {
    name: "Justin Jose",
    phone: "0890698776",
    age: 25,
  };
  
  const friend2: Friend = {
    name: "Bijo Sabu",
    phone: "086987654",
    age: 27,
  };
  
  const friends: Friend[] = [friend1, friend2];
  console.log(friends[1]);
  
  //   -------------------Colleage objects------

interface colleague{
    name: string;
    department : string;
    contact :{
        email:string;
        extension: number;
    };
}

  const colleague1: colleague = {
    name: "Joseph Ashin",
    department: "Engineering",
    contact: {
      email: "jash@company.com",
      extension: 121,
    },
  };
  
  const colleague2: colleague = {
    name: "Sivadas M",
    department: "Cyber Security",
    contact: {
      email: "sivam50@company.com",
      extension: 888,
    },
  };
  
  const colleague3: colleague = {
    name: "Joel Babice",
    department: "HR",
    contact: {
      email: "jbs@company.com",
      extension: 111,
    },
  };


  interface colleagueHistory {
    current: colleague[],
    former: colleague[]
  }

  export const colleagues: colleagueHistory = {
    current: [colleague1, colleague2, colleague3],
    former: [],
  };
  
  console.log(colleagues.current[0]);
  