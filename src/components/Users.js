import React, { useEffect, useState } from 'react';
import axios from "axios";

function Users() {

    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [loading, setLoading] =useState(true)

    //fetch kullanımı
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(response => response.json())
    //         .then((data) => setUsers(data))
    //         .finally(() => setLoading(false))
    // }, [])

    //axios kullanımı
    // useEffect(() => {
    //     axios("https://jsonplaceholder.typicode.com/users")
    //         .then((response) => setUsers(response.data))
    //         .finally(() => setLoading(false))
    // }, [])

    // önce kötü kod ile veri çekme işlemi gösterildi daha sonra getData fonksiyonu ile temiz kod yazıldı
    useEffect(() => {
        // axios("https://jsonplaceholder.typicode.com/users")
        //     .then((response) => {
        //         setUsers(response.data);
        //         axios(`https://jsonplaceholder.typicode.com/posts?userId=${response.data[0].id}`)
        //             .then(response => setPosts(response.data))
        //     })
        //     .catch((error) => {
        //         console.log("error", error)
        //     })
        //     .finally(() => setLoading(false))

        getData();
    }, [])

    const getData = async () => {
        try {
            const {data: users} = await axios("https://jsonplaceholder.typicode.com/users");
            const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`);

            setLoading(false)

            setUsers(users)
            setPosts(posts)
        }
        catch (error) {
            console.log("error", error)
        }
    }

    //anonim fonksiyon syntax
    // (() => { console.log("anonim fonksiyon") })();

    //yukarıda yazdığımız fonksiyonun anonim fonksiyon olarak kullanımı
    useEffect(() => {
        (async () => {
            try {
                const {data: users} = await axios("https://jsonplaceholder.typicode.com/users");
                const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`);

                setLoading(false)

                setUsers(users)
                setPosts(posts)
            }
            catch (error) {
                console.log("error", error)
            }
        })();
    }, [])


    return (
        <div>
            <h2>Users</h2>
            {
                loading && <div>Yükleniyor...</div>
            }
            <ul>
                {
                    users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>

            <h2>Posts</h2>
            <ul>
                {
                    posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Users;