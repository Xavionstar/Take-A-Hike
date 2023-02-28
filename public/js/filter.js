const filter = document.querySelector('#filter')
const loc = document.querySelector('#loc')
const diff = document.querySelector('#diff')
const len = document.querySelector('#len')


const filterHandler = async (event) => {
    event.preventDefault();
    const location = `location=${loc.value}&`
    const difficulty = `difficulty=${diff.value}&`
    const length = `length=${len.value}&`
    await fetch(`/api/hike?${location}${difficulty}${length}`, {
        method: 'GET'
    })
};

filter.addEventListener('click', filterHandler)
