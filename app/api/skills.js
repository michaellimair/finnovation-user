const getSkills = async () => {
  let response = await fetch("https://lzl.red/skills", {
    method: 'GET',
    mode: 'cors',
  });
  response = await response.json();
  response = response.map(skill => ({
    ...skill,
    id: `${skill.id}`
  }));
  return response;
}

export default getSkills;