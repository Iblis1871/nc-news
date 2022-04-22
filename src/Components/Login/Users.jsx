import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUsers } from "../../utils/API";
import { Content, Wrapper, Image } from "./Login.styles";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { username } = useParams();

  useEffect(() => {
    getUsers(username).then((userFromApi) => {
      setUsers(userFromApi.users);
    });
  }, [username]);

  console.log(users);

  return (
    <div>
      {users.map((user) => {
        return (
          <Wrapper>
            <Content>
              {user.username}
              <br></br>
            </Content>
            {/* <Image>{user.avatar_url}</Image> */}
          </Wrapper>
        );
      })}
    </div>
  );
};

export default Users;
