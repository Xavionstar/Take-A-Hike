//<====== query selectors for button 'filter' and dropdown filter menus ======>
const filter = document.querySelector('#filter')
const loc = document.querySelector('#loc')
const diff = document.querySelector('#diff')
const len = document.querySelector('#len')

//<====== event handler for
const filterHandler = async (event) => {
    event.preventDefault();
    let location;
    let difficulty;
    let length = len.value;
    let lengthQuery;
    if (loc.value) { location = `location=${loc.value}&` } else { location = "" };
    if (diff.value) { difficulty = `difficulty=${diff.value}&` } else { difficulty = "" };
    if (length === 0) { lengthQuery = `lengthLl=0&lengthUl=3` } else if (length === 3) { lengthQuery = `lengthLl=3&lengthUl=10` } else if (length === 10) { lengthQuery=`lengthLl=10&lengthUl=100` } else { length = "" };
    const query = `/viewhikes?${location}${difficulty}${lengthQuery}`;
    document.location.replace(query);
};

filter.addEventListener('click', filterHandler)
