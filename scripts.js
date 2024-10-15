/*Search Bar Functionality*/
function handleSearch(event){
    event.preventDefault(); //prevent default form submission
    const searchQuery = document.getElementById('searchInput').value; //get input value
    if(searchQuery){
    //redirect to search results page with query
    window.location.href=`/search?query=${encodeURIComponent(searchQuery)}`;
    }
}