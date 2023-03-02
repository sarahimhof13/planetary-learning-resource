import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        /* Colors */
        --white-color: #ffffff;
        --transparent-white-color: rgba(255, 255, 255, 0.7);
        --dark-blue-color: #070724;
        --dark-grey-color: #38384f;
        --medium-grey-color: #838391;
        --light-grey-color: rgba(255, 255, 255, 0.2);
        --greyish-blue-color: #419ebb;
        --yellow-color: #eda249;
        --purple-color: #6f2ed6;
        --light-red-color: D14C32;
        --red-color: #d83a34;
        --burnt-orange-color: #cd5120;
        --cyan-green-color: #1ec2a4;
        --blue-color: #2d68f0;

          /* Fonts */
        --heading-font: "Antonio", sans-serif;
        --body-font: "League Spartan", sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        background-color: var(--dark-blue-color);
    }

    a, button, span {
        all: unset;
    }

    h1 {
        color: var(--white-color);
        font-family: var(--heading-font);
        font-size: 5rem;
        font-weight: 500;
        line-height: 6.438rem;
        text-transform: uppercase;
    }

    h2 {
        color: var(--white-color);
        font-family: var(--heading-font);
        font-size: 2.5rem;
        font-weight: 500;
        line-height: 3.25rem;
        letter-spacing: -0.094rem;
    }

    h3 {
        color: var(--white-color);
        font-family: var(--body-font);
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 1.563rem;
        letter-spacing: 0.163rem;
    }

    h4 {
        color: var(--transparent-white-color);
        font-family: var(--body-font);
        font-size: 0.688rem;
        font-weight: 700;
        line-height: 1.563rem;
        letter-spacing: 0.063rem;
        text-transform: uppercase;
    }

    p {
        color: var(--white-color);
        font-family: var(--body-font);
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.563rem;
        letter-spacing: 0.016rem;
    }
`