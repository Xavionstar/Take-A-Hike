const filter = document.querySelector('#filter')
const loc = document.querySelector('#loc')
const diff = document.querySelector('#diff')
const len = document.querySelector('#len')

const filterHandler = async (event) => {
    event.preventDefault();
    let location;
    let difficulty;
    let length;
    console.log(loc.value)
    console.log(diff.value)
    console.log(len.value)
    if (loc.value) { location = `location=${loc.value}&` } else { location = "" };
    if (diff.value) { difficulty = `difficulty=${diff.value}&` } else { difficulty = "" };
    if (len.value) { length = `length=${len.value}` } else { length = "" };
    const query = `/api/hike/filter?${location}${difficulty}${length}`
    console.log(query)
    await fetch(query, {
        method: 'GET'
    })
    // document.location.replace('api/hike/filter')
};

filter.addEventListener('click', filterHandler)
