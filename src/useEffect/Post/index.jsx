import React, {useEffect, useState} from 'react';
import queryString from 'query-string';
import PostList from "./PostList";
import Pagination from "./Pagination";
import FilterForm from "./FilterForm";

function Post(props) {
    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({_page: 1, _limit: 10, _totalRows: 1});
    const [filter, setFilter] = useState({_page: 1, _limit: 10});

    useEffect(() => {
        async function fetchPostList() {
            try {
                const paramsString = queryString.stringify(filter);
                const requestURL = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
                const response = await fetch(requestURL);
                const responseJSON = await response.json();

                const {data, pagination} = responseJSON;
                setPagination(pagination);
                setPostList(data);
            } catch (e) {
                console.error('Failed to fetch data: ', e.message);
            }
         }
        fetchPostList();
    }, [filter]);

    function handlePageChange(newPage) {
        setFilter({...filter, _page: newPage});
    }
    
    function handleFilterChange(newFilter) {
        setFilter({...filter, _page: 1, title_like: newFilter.searchTerm})
    }
    return (
        <div>
            <FilterForm onSubmit={handleFilterChange} />
            <PostList posts={postList} />
            <Pagination pagination={pagination} onPageChange={handlePageChange} />
        </div>
    );
}

export default Post;