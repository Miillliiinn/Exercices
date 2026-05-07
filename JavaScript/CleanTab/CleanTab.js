const rawUsers = [" thomas ", "JULIE", " thomas", "  bob  ", "julie "];

function cleanUsers(users)
{
  const cleanLower = users.map(u => {
    
    const withoutSpace = u.trim();
    const allLower = withoutSpace.toLowerCase();
    const firstUpper = allLower.charAt(0).toUpperCase() + allLower.slice(1);
    
    return firstUpper
  });
  
  const sorted = cleanLower.sort();
  const uniqueName = [...new Set(sorted)]
  console.log(uniqueName);
}