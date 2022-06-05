// Set up filters default object

const filterTodo = {
    search: "",
    check: false,
};
const getFilters = () => filterTodo

// setFilters
const setFilters = (updates) => {
    if (typeof updates.search === 'string') {
        filterTodo.search = updates.search
    }

    if (typeof updates.check === 'boolean') {
        filterTodo.check = updates.check
    }
}

// const setFilters = ({ search, check }) => {
//     if (typeof search === 'string') {
//         filterTodo.search = search
//     }

//     if (typeof check === 'boolean') {
//         filterTodo.check = check
//     }
// }

export { getFilters, setFilters }