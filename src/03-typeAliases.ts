import {
    ColleagueV2,
    Friend,
    Buddy,
    BuddyList,
    Administrator,
  } from "./myTypes";

  import { friends } from "./01-basics";

  const colleague1: ColleagueV2 = {
    name: "Joseph Ashin",
    department: "Engineering",
    contact: {
      email: "jash@company.com",
      extension: 121,
    },
  };
  
const colleague2: ColleagueV2 = {
    name: "Sivadas M",
    department: "Finance",
    contact: {
      email: "sivam50@company.com",
      extension: 888,
    },
  };
  
const colleague3: ColleagueV2 = {
    name: "Joel Babice",
    department: "HR",
    contact: {
      email: "jbs@company.com",
      extension: 111,
    },
  };

export const colleaguesV2: ColleagueV2[] = [colleague1, colleague2, colleague3];

function makeBuddyList(
    name: string,
    buddies: Buddy[],
    admin?: Administrator
  ): BuddyList {
    return {
      name,
      members: buddies,
      administrator: admin,
    } as BuddyList;
    // The as operator above casts an object to a specific type.
  }

  // Tests for makeBuddyList
  const myFootballBuddies = makeBuddyList("Football team",[colleague1, friends[0], colleague2],colleague1)
  
  const myBandBuddies = makeBuddyList("Band name",[colleague1, friends[1]]) // No administrator
    
  
  console.log(myFootballBuddies)
  console.log(myBandBuddies)

  //--------------------------------------

  function findBuddyContact(list: BuddyList, name: string): string | undefined {
    for (const buddy of list.members) {
      if (buddy.name === name) {
        if ("phone" in buddy) {
          return buddy.phone;
        }
        else {
          return buddy.contact.email;
        }
      }
      return undefined;
    }
  }

  // Test for findBuddyContact.
  console.log("Contact buddy at: ", findBuddyContact(myFootballBuddies, "Ralph Graham"));
  
  
  function getBuddyListFriends(list: BuddyList): Friend[] {
  return list.members.reduce<Friend[]>((friends, buddy) => {
    if ("phone" in buddy) {
      friends.push(buddy); 
    }
    return friends;
  }, []);
}

// Test for getBuddyListFriends
console.log("Friends in myFootballBuddies:", getBuddyListFriends(myFootballBuddies));
console.log("Friends in myBandBuddies:", getBuddyListFriends(myBandBuddies));




  

  