function handleResponse(response) {
    const { data } = response;
    return data.data
}

export {
    handleResponse
}