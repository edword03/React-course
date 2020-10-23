const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
const command = employers.filter(name => name.trim().length)
	.map(name => name.trim().charAt(0).toUpperCase() + name.trim().substring(1).toLowerCase());

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const {cash, react, add} = data;

const calcCash = (...arg) => arg.reduce((prev, curr) => prev + curr);

const lesson = calcCash(...cash);

function makeBusiness(director, allModule, gang, course, teacher = 'Максим') {
	const sumTech = `${add} и другие`;
	console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
  Команда Академии: ${gang}.
  Первое что изучим будет ${react[0]}. Он очень похож на HTML!
  Технологии которые мы изучим: 
  ${sumTech}`);
}

makeBusiness('Артем', lesson, command, nameCourse);
