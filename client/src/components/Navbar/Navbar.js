import { NavLink } from "react-router-dom";
import data from "../../data/data.json"
import { HamburgerIcon, NavContainer, NavItem, NavItemsContainer, NavList, NavPlanet, NavTitle, ChevronIcon } from "./Navbar.styled";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setHamburgerOpen(window.innerWidth > 768)
        };
        window.addEventListener("resize", handleResize)
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    },[]);

    const toggleNav = () => setHamburgerOpen(!hamburgerOpen);

    return ( 
        <NavContainer>
            <NavTitle>
                <NavLink to="/planets">The Planets</NavLink>
                <HamburgerIcon src="../assets/icon-hamburger.svg" onClick={toggleNav}/>
            </NavTitle>
            <NavItemsContainer>
                <NavList key={data.id} className={hamburgerOpen ? "nav-links-active" : "nav-links"}>
                    {data.map((data) => {
                        return (
                            <NavItem key={data.id}>
                                <NavPlanet color={data.color}/>
                                <NavLink style={{ borderColor: `${data.color}` }} to={`planets/${data.name.toLowerCase()}`} onClick={toggleNav}>{data.name}</NavLink>
                                <ChevronIcon src="../assets/icon-chevron.svg" />
                            </NavItem>
                        )
                    })}

                </NavList>
            </NavItemsContainer>
        </NavContainer>
     );
}
 
export default Navbar;