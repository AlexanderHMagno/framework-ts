import { User } from './models/Users';

const Alexander = new User({ id: '5188' });

//This should return a promise
Alexander.fetch().finally(() => Alexander.save());

// Alexander.save();

// console.log(Alexander);
// Alexander.on('click', () => {
//   console.log(Alexander.get('age'));
// });
// Alexander.on('click', () => {
//   console.log(Alexander.get('name'));
// });
// Alexander.on('drop', () => {
//   console.log('chiguagua');
// });

// Alexander.trigger('click');
// Alexander.fetch();
// Alexander.set({ age: 32 });
// Alexander.save();
// console.log(Alexander);
