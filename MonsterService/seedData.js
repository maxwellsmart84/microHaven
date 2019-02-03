const banditGuardData = require('./banditGuard');
const Monster = require('./Monster.Model');

export function seedData() {
  const banditGuard = new Monster(banditGuardData);
  return banditGuard.save((err) => {
    if (err) console.error(err);
  });
}

export function getMonster({ id } = {}) {
  if (!id) console.error('Error, no id provided');
  return Monster.get({ id }, (err, data) => {
    if (err) console.error(err);
    return data;
  });
}
