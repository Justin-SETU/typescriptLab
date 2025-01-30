import { friends, colleagues } from "./01-basics";
import { Friend, Colleague, SecureFriendContact, FriendPartial,EventPass  } from "./myTypes";

function updateFriend(friend: Friend, updates: FriendPartial ) : Friend {
  return { ...friend, ...updates}
}

console.log(updateFriend(friends[0], {
  phone: '08712345',
  dob: new Date("1998-10-22")
}))


function secureFindFriends(
    friends: Friend[],
    criteria: (f: Friend) => boolean
  ): SecureFriendContact[] {
    const matches = friends.filter(criteria);
    return matches.map((f) => {
      const secure: SecureFriendContact = {
        name: f.name,
        phone: f.phone,
      };
      return secure;
    });
  }
  let result = secureFindFriends(
      friends,
      (f: Friend) => f.age < 30
  )
  console.log(result)
  
 
  
  function generateEventPass(colleague: Colleague): EventPass {
    const passCode = Math.round(Math.random() * (1000 - 1) + 1);  // Generate a random passcode between 1 and 1000
    return {
      name: colleague.name,
      department: colleague.department,
      passCode: passCode,
    };
  }
  
  // Test the generateEventPass function
  console.log(generateEventPass(colleagues.current[0]));

  type FriendAndColleague = Pick<Friend, "name" | "age"> & Pick<Colleague, "contact">;

  function intersection(
    friends: Friend[],
    colleagues: Colleague[]
  ): FriendAndColleague[] {
    let result: FriendAndColleague[] = [];
  
    friends.reduce((res, friend) => {
      const colleague = colleagues.find((col) => col.name === friend.name);
      if (colleague) {
        // Colleague is also a Friend, add combined properties to result
        res.push({
          name: friend.name,
          age: friend.age,
          contact: {
            email: colleague.contact.email,
            extension: colleague.contact.extension,
          },
        });
      }
      return res;
    }, result);
  
    return result;
  }
  
  console.log(intersection(friends, colleagues.current));
  
  