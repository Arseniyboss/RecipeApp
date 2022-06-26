import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUser, FaHeart } from "react-icons/fa";
import {
  HeaderContainer,
  NavItem,
  NavMenu,
  UserContainer,
  Avatar,
  Dropdown,
  DropdownLink,
  DropdownText,
  Envelope,
} from "./Styles";
import { logout } from "../../actions/user/logout";
import { deleteUser } from "../../actions/user/delete";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const { userInfo } = useSelector((state) => state.user.userLogin);

  const { success, error } = useSelector((state) => state.user.userDelete);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(userInfo._id));
    }
  };

  useEffect(() => {
    if (success) {
      dispatch(logout());
    }
    if (error) {
      alert(error);
    }
  }, [dispatch, success, error]);

  return (
    <HeaderContainer>
      <NavItem to="/">
        <p>Recipes</p>
      </NavItem>
      <NavMenu>
        <NavItem to="/favorites">
          <FaHeart />
        </NavItem>
        {userInfo ? (
          <UserContainer>
            <Avatar onClick={toggleDropdown}>{userInfo.name[0]}</Avatar>
            {dropdown && (
              <Dropdown onClick={toggleDropdown}>
                <DropdownLink to="/profile">
                  <DropdownText>Profile</DropdownText>
                </DropdownLink>
                <DropdownText onClick={handleLogout}>Logout</DropdownText>
                <DropdownText onClick={handleDelete}>Delete</DropdownText>
              </Dropdown>
            )}
          </UserContainer>
        ) : (
          <NavItem to="/login">
            <FaUser />
          </NavItem>
        )}
        {/* <NavItem to="/favorites">
          <FaHeart />
        </NavItem> */}
        <NavItem to="/contact">
          <Envelope />
        </NavItem>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
