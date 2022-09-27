


const Home = ({ users }) => {
  // useEffect(() => {
  //   console.log(users)
  // }, [users])

  return (
    <div>
      Homepage
      {users && users.map((user, index) => (
        <div key={index}>
          <h2>{user.name}</h2>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <p>{user.address.city}</p>
        </div>
      ))}
    </div>
  )
}

export default Home;