import React from "react";
import { SideNavItem, Button, Icon } from "react-materialize";
import { useSelector, useDispatch } from "react-redux";

const SideNavs = () => {
  const {isLoggedIn, userId, userProfile} = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      {isLoggedIn && userProfile &&
        <SideNavItem
          user={{
            background: "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            email: userProfile.email,
            image: `${process.env.REACT_APP_BACKEND_URL}/${userProfile.image}`,
            name: userProfile.username,
          }}
          userView
        />
      }
      <SideNavItem href="/">Feed</SideNavItem>
      {isLoggedIn && <SideNavItem href={`/${userId}/places`}>My Places</SideNavItem>}
      {isLoggedIn && <SideNavItem href="/places/new">Add a Place</SideNavItem>}
      <SideNavItem divider />
      {!isLoggedIn && <SideNavItem href="/auth">Auth</SideNavItem>}
      {isLoggedIn && (
        <>
          <div className="row center"></div>
          <div className="row center">
            <Button
              node="button"
              style={{
                backgroundColor: "#bf360c",
                color: "#fff"
              }}
              onClick={() => {
                dispatch({ type: "LOGOUT" });
              }}
            >
              Logout
              <Icon right>exit_to_app</Icon>
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default SideNavs;
