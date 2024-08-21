import React, { useState, useEffect } from 'react';
import Sidebar from '../../shared/Sidebar/sidebar';
import Searchbar from '../../shared/Searchbar/searchbar';
import Post from '../../shared/Post/post';
import { Grid, Box } from '@mui/material';
import axios from 'axios';

interface PostData {
    postId: string;
    userName: string;
    img: string;
}

const Feed: React.FC = () => {
    const [data, setData] = useState<PostData[]>([]); 
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnaXZlbl9uYW1lIjoieW9wbWFpbCIsInVuaXF1ZV9uYW1lIjoiYXJhdmluZGRzcmNAeW9wbWFpbC5jb20iLCJwcmltYXJ5c2lkIjoiNGEyNTc1OTktODAzNS00NTljLTgxNTgtMDhkY2E3YzM3M2U2Iiwicm9sZSI6IiIsIm5iZiI6MTcyNDE1Mzk1MSwiZXhwIjoxNzI0NzU4NzUxLCJpYXQiOjE3MjQxNTM5NTEsImlzcyI6IkNhbXB1cyIsImF1ZCI6IkNhbXB1cyJ9.akQIikyBe8sf9HSiGvPLx9nfWoj25C28zW8nLvqrGTE'; 

                const pageNo = '1';
                const sortBy = 'recent';

                const response = await axios.get(`https://campus-staging.azurewebsites.net/api/GetHomeFeed?page=${pageNo}&sortBy=${sortBy}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                const posts = response.data.result.map((item: any) => ({
                    postId: item.postId,
                    userName: item.userName,
                    img: item.postImageList[0],
                }));
                console.log(response.data);
                setData(posts);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const filteredPosts = data.filter(post =>
        post.userName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Grid container spacing={20}>
            <Grid item xs={12} sm={3} md={3} lg={2} sx={{ order: { xs: 2, sm: 1, md: 1 } }}>
                <Sidebar />
            </Grid>
            <Grid item xs={12} sm={9} md={9} lg={10} sx={{ order: { xs: 1, sm: 2, md: 2 } }}>
                <Box sx={{ padding: { xs: 1, md: 3 }, paddingLeft: {sm: 15, md: 18, lg: 40} }}>
                    <Searchbar onChange={handleSearchChange} />
                    {filteredPosts.map(post => (
                        <Post 
                            key={post.postId}
                            id={post.postId}
                            text={post.userName} 
                            img={post.img} 
                        />
                    ))}
                </Box>
            </Grid>
        </Grid>
    );
}

export default Feed;
