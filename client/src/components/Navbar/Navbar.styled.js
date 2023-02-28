import styled from "styled-components";
import { Device } from "../../Devices";

export const NavContainer = styled.nav`
    padding: 16px 24px;

    @media ${Device.tablet} {
        padding: 32px;
    }

    @media ${Device.desktop} {
        padding: 22px 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--light-grey-color);
    }
`

export const NavTitle = styled.div`
    font-family: var(--heading-font);
    padding-bottom: 16px;
    font-size: 1.75rem;
    color: var(--white-color);
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--light-grey-color);
    margin-bottom: 24px;

    @media ${Device.tablet} {
        justify-content: center;
        border: none;
    }

    @media ${Device.desktop} {
        margin: 0;
        padding: 0;
    }

`

export const HamburgerIcon = styled.img`
    display: block;
    cursor: pointer;
    max-width: 24px;
    max-height: 24px;

    @media ${Device.tablet} {
        display: none;
    }
`

export const NavItemsContainer = styled.div`

`

export const NavList = styled.ul`
    &.nav-links {
        display: none;
    }

    &.nav-links-active {
        display: block;
    }

    @media ${Device.tablet} {
        gap: 19px;
        justify-content: center;
        border-bottom: 1px solid var(--light-grey-color);

        &.nav-links-active {
            display: flex;
            flex-direction: row;
        }
    }

    @media ${Device.desktop} {
        border: none;
    }
`

export const NavPlanet = styled.div`
    background-color: ${props => props.color};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 25px;

    @media ${Device.tablet} {
        display: none;
    }
`

export const NavItem = styled.li`
    font-size: 0.938rem;
    font-weight: 700;
    letter-spacing: 0.085rem;
    color: var(--white-color);
    padding: 20px 0;
    border-bottom: 1px solid var(--light-grey-color);
    font-family: var(--body-font);
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;

    a {
        margin-right: auto;
    }

    @media ${Device.tablet} {
        border: none;
        padding: 0 0 27px 0;
        font-size: 0.6875rem;
        color: var(--transparent-white-color);
    }

    @media ${Device.desktop} {
        font-size: 0.688rem;
        font-weight: 700;
        line-height: 1.563rem;
        letter-spacing: 0.063rem;
        padding: 0;

        a {
            &:hover {
            color: var(--white-color);
            transition: 200ms;
            border-top: 4px solid;
            padding-top: 24px;
            margin-top: -28px;
            position: relative;
        }
        }

    }
`

export const ChevronIcon = styled.img`
    float: right;

    @media ${Device.tablet} {
        display: none;
    }
`